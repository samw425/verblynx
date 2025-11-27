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
        // Body parsing failed
    }

    // "context" now contains the full inference object (framework, desire, objection, etc.)
    const { prompt, context, type, audience, goal, tone } = body

    try {
        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                copy: `[Demo Mode] Please add your API Key to experience the Verblynx Engine.`,
                explanation: "Demo mode active.",
                strategy: context
            })
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        // 1. GENERATE ELITE COPY
        const copyPrompt = `You are Verblynx, the world's most advanced copywriting engine.
        
CONTEXT:
- Format: ${type}
- Audience: ${audience} (Desire: ${context.core_desire || 'Success'}, Objection: ${context.main_objection || 'Risk'})
- Goal: ${goal}
- Framework: ${context.framework || 'PAS'}
- Strategic Angle: ${context.strategic_angle || 'Direct Benefit'}
- Tone: Formal=${tone?.formal}/10, Direct=${tone?.direct}/10, Emotional=${tone?.emotional}/10

YOUR DIRECTIVE:
Write the ${type} using the **${context.framework || 'PAS'}** framework.
1. **Hook**: Grab attention immediately. Address the "${context.core_desire}" or the "${context.main_objection}".
2. **Body**: Build tension/desire. Prove the value.
3. **Close**: Clear, commanding CTA.

CONSTRAINTS (The "Elite" Standard):
- No fluff. No "In today's fast-paced world".
- No generic adjectives ("game-changing", "revolutionary").
- Use short, punchy sentences.
- Write like a human speaking to a human, not a marketing bot.

OUTPUT:
Return ONLY the final copy.`

        const copyResult = await model.generateContent(copyPrompt)
        const generatedCopy = copyResult.response.text()

        // 2. GENERATE THE "TEACHING" BREAKDOWN
        const explanationPrompt = `You are a world-class copywriting professor. You just wrote this piece of copy:

"${generatedCopy}"

Teach the user WHY it works. Don't just describe it; explain the MECHANICS of persuasion used.

Return a JSON object with this structure (no markdown):
{
    "psychology": "Explain the core psychological trigger used (e.g. Loss Aversion, Status Seeking).",
    "structure": "Explain how the ${context.framework} framework was applied line-by-line.",
    "word_choice": "Highlight 1-2 specific power words used and why."
}`

        const explanationResult = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: explanationPrompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })

        const explanationJson = JSON.parse(explanationResult.response.text())

        // Format explanation for frontend (converting JSON to string if needed or keeping as object)
        // For now, we'll format it as a string to match existing frontend expectation, 
        // or we can update frontend to handle object. Let's keep it compatible but richer.
        const formattedExplanation = `**Psychology:** ${explanationJson.psychology}\n\n**Structure:** ${explanationJson.structure}\n\n**Power Words:** ${explanationJson.word_choice}`

        return NextResponse.json({
            copy: generatedCopy,
            explanation: formattedExplanation,
            strategy: context,
            metadata: { type, audience, goal, tone }
        })
    } catch (error: any) {
        console.error("AI Generation Error:", error)
        return NextResponse.json({
            copy: "Error generating copy. Please try again.",
            explanation: "System error.",
            strategy: context
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
