
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Database {
  public: {
    Tables: {
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: string
          read: boolean
          created_at: string
        }
        Insert: {
          user_id: string
          title: string
          message: string
          type?: string
          read?: boolean
        }
      }
    }
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { user_ids, title, message, type = 'info' } = await req.json()

    if (!user_ids || !Array.isArray(user_ids) || !title || !message) {
      throw new Error('user_ids (array), title, and message are required')
    }

    // Create notifications for multiple users
    const notifications = user_ids.map(user_id => ({
      user_id,
      title,
      message,
      type
    }))

    const { data, error } = await supabaseClient
      .from('notifications')
      .insert(notifications)

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true, notifications_sent: user_ids.length }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})
