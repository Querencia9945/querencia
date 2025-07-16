
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

    const systemPrompt = `You are an AI assistant for Querencia, a platform for event management, professional development, and community building founded in 2025. 

    About Querencia:
    - Founded in 2025
    - Mission: Equipping youth with 21st century life skills, one city at a time
    - Has trained 10,000+ students across 17+ cities
    - 100+ success stories
    - Hosts skill development summits and events
    - Led by a team of 150+ interns
    - Has hosted 5+ offline and 20+ online events

    Querencia's Skill Development Framework includes 6 core courses:
    1. Entrepreneurship & Startup Simulation - Business strategy, marketing psychology, pitching, and Shark Tank simulation
    2. Public Speaking - Persuasive speaking, debate strategy, spontaneous speaking, mock tournaments
    3. Design Thinking - Logical thinking, identifying fallacies, decision making, critical thinking applications
    4. Financial and Media Literacy - Media bias awareness, digital branding, financial planning, investment basics
    5. Acing Speaking Competitions - Winning MUNs/debates, case studies, business pitching, mock competitions
    6. Leadership & Soft Skills - Leadership psychology, negotiation, team management, leadership simulations

    Recognition & Achievements:
    - Recognized by Aman Gupta (boAt co-founder) for building skilled youth
    - Financial literacy curriculum approved by Department of Finance, Govt. of Assam
    - Awarded by IIT Guwahati as top 0.9% teen-led startup in India
    - Recognized by University of Delaware, USA as top 100 emerging innovation

    You help users with:
    - Event information and registration
    - Internship opportunities
    - Professional development advice
    - Community engagement
    - Platform navigation and features
    - Information about our skill development framework
    
    Keep responses helpful, professional, and relevant to the Querencia platform. ${context ? `Additional context: ${context}` : ''}`

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
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
