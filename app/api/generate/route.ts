import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

// Initialize Gemini only if API key exists
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

export async function POST(req: Request) {
    let body: any = {}
    try {
        body = await req.json()
    } catch (e) {
        // Body parsing failed, use empty object
    }

    const { prompt, context, type, audience, goal, tone } = body

    try {
        // For demo purposes, if no key is present, return a mock response
        if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return NextResponse.json({
                copy: `[Demo Mode] Here's your ${type || 'copy'} for ${audience || 'your audience'}:\n\nThis is a simulated response. Add your GEMINI_API_KEY to generate real copy.`,
                explanation: "Demo mode active. Real copy generation with psychological breakdown requires API key.",
                strategy: context
            })
        }

        if (!genAI) {
            return NextResponse.json({
                copy: `[Demo Mode] Here's your ${type || 'copy'} for ${audience || 'your audience'}:\n\nThis is a simulated response. Add your GEMINI_API_KEY to generate real copy.`,
                explanation: "Demo mode active. Real copy generation with psychological breakdown requires API key.",
                strategy: context
            })
        }

        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" })

        // Generate the actual copy with ELITE constraints
        const copyPrompt = `You are Verblynx, the world's most advanced copywriting engine. You do not write "content". You engineer persuasion.

CONTEXT:
- Target Audience: ${audience || 'General audience'}
- Primary Goal: ${goal || 'Engage and convert'}
- Strategic Context: ${JSON.stringify(context)}
- Tone Profile: ${tone ? `Formal=${tone.formal}/10, Direct=${tone.direct}/10, Emotional=${tone.emotional}/10` : 'Balanced'}

YOUR DIRECTIVE:
Generate ${type || 'marketing copy'} that adheres to the "Deep Work" protocol:
1. **Zero Fluff**: Every word must earn its place. Delete adjectives that don't add value.
2. **Psychological Hook**: Start with a pattern interrupt or a deep insight into the user's pain.
3. **Framework**: Use the PAS (Problem-Agitation-Solution) or AIDA (Attention-Interest-Desire-Action) framework implicitly. Do not label the sections.
4. **Formatting**: Use short paragraphs, punchy sentences, and visual breaks (bullet points) where appropriate.
5. **Call to Action**: End with a single, clear, commanding directive.

${prompt ? `SPECIFIC INSTRUCTION: ${prompt}` : ''}

OUTPUT:
Return ONLY the final copy. No "Here is your copy" preambles. No markdown code blocks unless requested. Just the raw, high-converting text.`

        const copyResult = await model.generateContent(copyPrompt)
        const generatedCopy = copyResult.response.text()

        // Generate explanation of WHY this copy works (The "Teaching" Engine)
        const explanationPrompt = `You are a world-class copywriting mentor. The user has just generated the following copy:
    
    "${generatedCopy}"
    
    Your goal is to TEACH the user why this copy is effective. 
    
    Provide a "Masterclass Breakdown" in 3 bullet points:
    1. **Psychological Trigger**: Identify the core psychological lever used (e.g., Scarcity, Social Proof, Fear of Missing Out).
    2. **Structural Analysis**: Explain why the sentence structure or formatting works (e.g., "Short sentences build momentum").
    3. **The "Why"**: Explain the strategic reasoning behind the tone or specific word choices.
    
    Keep it concise, educational, and empowering. Make the user feel like they are learning the craft.`

        const explanationResult = await model.generateContent(explanationPrompt)
        const explanation = explanationResult.response.text()

        return NextResponse.json({
            copy: generatedCopy,
            explanation: explanation,
            strategy: context,
            metadata: {
                type: type || 'text',
                audience: audience || 'General audience',
                goal: goal || 'Engage and convert',
                tone: tone || { formal: 5, direct: 5, emotional: 5 }
            }
        })
    } catch (error: any) {
        console.error("AI Generation Error:", error)

        // Fallback simulation if API fails (e.g. 404 model not found, invalid key)
        const fallbackCopy = generateFallbackCopy(type, audience, goal)
        const fallbackExplanation = generateFallbackExplanation(type, audience, goal)

        return NextResponse.json({
            copy: fallbackCopy,
            explanation: fallbackExplanation,
            strategy: "Simulated Strategy (API Key/Model Issue)",
            metadata: {
                type: type || 'text',
                audience: audience || 'General audience',
                goal: goal || 'Engage and convert',
                tone: tone || { formal: 5, direct: 5, emotional: 5 },
                isFallback: true
            }
        })
    }
}

function generateFallbackCopy(type: string, audience: string, goal: string): string {
    const templates: Record<string, string> = {
        email: `Subject: Quick question about ${goal}\n\nHi [Name],\n\nI've been following your work with ${audience} and noticed a huge opportunity to improve your results.\n\nWe've helped similar founders achieve ${goal} in record time using a unique strategic approach.\n\nAre you open to a 15-minute chat this week to see how it works?\n\nBest,\n[Your Name]`,
        ad: `🛑 STOP scrolling if you want to ${goal}.\n\nAttention ${audience}:\n\nThe old way of doing things is dead. You need a new strategy.\n\nDiscover the secret method that is helping top performers crush their goals.\n\n👉 Click here to learn more: [Link]`,
        landing_page: `Headline: The #1 Way for ${audience} to ${goal}\n\nSubheadline: Stop wasting time on outdated methods. Start seeing real results today.\n\nCall to Action: Get Started Now`,
        default: `[${type.toUpperCase()} COPY]\n\nTargeting: ${audience}\nGoal: ${goal}\n\nThis is a high-converting piece of copy designed to resonate with your specific audience. It uses psychological triggers like scarcity and social proof to drive action.\n\n(Note: Real AI generation requires a valid Gemini API key with access to the Generative Language API. Currently running in simulation mode.)`
    }

    return templates[type?.toLowerCase()] || templates.default
}

function generateFallbackExplanation(type: string, audience: string, goal: string): string {
    return `This generated ${type} uses the "Pattern Interrupt" technique to immediately grab the attention of ${audience}. By directly addressing the goal of "${goal}", it creates an open loop that compels the reader to take action to close the gap between their current state and desired outcome.`
}
