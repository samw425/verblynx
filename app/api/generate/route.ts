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

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" })

        // Generate the actual copy
        const copyPrompt = `You are Verblynx, an elite copywriting system. Generate high-quality ${type || 'marketing copy'} based on these parameters:

TARGET AUDIENCE: ${audience || 'General audience'}
PRIMARY GOAL: ${goal || 'Engage and convert'}
CONTEXT: ${JSON.stringify(context)}
${tone ? `TONE: Formal=${tone.formal}/10, Direct=${tone.direct}/10, Emotional=${tone.emotional}/10` : ''}

REQUIREMENTS:
1. Write compelling, conversion-focused copy
2. Use psychological triggers appropriate for the audience
3. ${tone ? 'Match the specified tone profile' : 'Use an authoritative, direct tone'}
4. Include a clear call-to-action
5. Keep it concise and impactful

${prompt ? `SPECIFIC REQUEST: ${prompt}` : ''}

Return ONLY the copy itself, no meta-commentary.`

        const copyResult = await model.generateContent(copyPrompt)
        const generatedCopy = copyResult.response.text()

        // Generate explanation of WHY this copy works
        const explanationPrompt = `Analyze this ${type || 'marketing copy'} and explain in 2-3 sentences WHY it works from a psychological perspective. What persuasion principles are being used?

COPY:
${generatedCopy}

AUDIENCE: ${audience || 'General audience'}
GOAL: ${goal || 'Engage and convert'}`

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
