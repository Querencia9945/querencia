
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import OpenAI from 'https://esm.sh/openai@4.20.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, context } = await req.json()

    if (!message) {
      throw new Error('Message is required')
    }

    const openai = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    })

    const systemPrompt = `You are an AI assistant for Querencia, a platform for event management, professional development, and community building. 
    
    You help users with:
    - Event information and registration
    - Internship opportunities
    - Professional development advice
    - Community engagement
    - Platform navigation and features
    
    Keep responses helpful, professional, and relevant to the Querencia platform. ${context ? `Additional context: ${context}` : ''}`

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const reply = response.choices[0]?.message?.content || 'I apologize, but I could not generate a response.'

    return new Response(
      JSON.stringify({ reply }),
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
