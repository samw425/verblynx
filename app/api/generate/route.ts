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

    const { prompt, context, type, audience, goal, tone } = body

    try {
        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                copy: `[Demo Mode] Please add your API Key to experience the Verblynx Engine.`,
                explanation: {
                    psychology: "Demo Mode",
                    structure: "Demo Mode",
                    word_choice: "Demo Mode"
                },
                strategy: context
            })
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        // 1. GENERATE & REFINE (CHAIN OF THOUGHT)
        const copyPrompt = `You are Verblynx, the world's most advanced copywriting engine.

CONTEXT:
- Format: ${type}
- Audience: ${audience}
- Awareness Level: ${context.awareness_level || 'Problem Aware'}
- Market Sophistication: ${context.sophistication_level || 'Level 2'}
- Core Desire: ${context.core_desire}
- Main Objection: ${context.main_objection}
- Mechanism: ${context.mechanism || 'The Solution'}
- Framework: ${context.framework || 'PAS'}
- Tone: Formal=${tone?.formal}/10, Direct=${tone?.direct}/10, Emotional=${tone?.emotional}/10

DIRECTIVE:
Write the ${type} using the **${context.framework || 'PAS'}** framework.

CRITICAL INSTRUCTIONS FOR ELITE COPY:
1. **Rhythm**: Use a mix of short, punchy sentences and longer, flowing ones. Fragment sentences are allowed.
2. **Specificity**: Don't say "save time". Say "save 12 hours a week".
3. **The "You" Focus**: Talk about the user, not the product.
4. **Visceral Language**: Use sensory words. Make them FEEL the pain and the relief.
5. **No Jargon**: Avoid "synergy", "paradigm shift", "revolutionary".

STEP 1: Draft the copy.
STEP 2: Critique it. Is it boring? Is it generic? Does it sound like AI?
STEP 3: REWRITE it to be 10x better.

OUTPUT:
Return ONLY the final, polished rewrite. No "Here is the copy" preamble.`

        const copyResult = await model.generateContent(copyPrompt)
        const generatedCopy = copyResult.response.text()

        // 2. GENERATE THE "MASTERCLASS" BREAKDOWN
        const explanationPrompt = `You are a legendary copywriting professor (Eugene Schwartz). You just wrote this piece of copy:

"${generatedCopy}"

Teach the user WHY it works.

RETURN A JSON OBJECT (no markdown):
{
    "psychology": "Explain the deep psychological trigger used (e.g. 'Future Pacing', 'Identity Shifting'). Why does this specific audience respond to it?",
    "structure": "Break down the structure. How did you apply the ${context.framework} framework? Be specific about the flow.",
    "word_choice": "Pick 3 'Power Words' or phrases you used. Explain why they are persuasive (e.g. 'evokes scarcity', 'implies authority')."
}`

        const explanationResult = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: explanationPrompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        })

        const explanationJson = JSON.parse(explanationResult.response.text())

        return NextResponse.json({
            copy: generatedCopy,
            explanation: explanationJson, // Return raw JSON object
            strategy: context,
            metadata: { type, audience, goal, tone }
        })
    } catch (error: any) {
        console.error("AI Generation Error:", error)
        return NextResponse.json({
            copy: "Error generating copy. Please try again.",
            explanation: {
                psychology: "Error",
                structure: "Error",
                word_choice: "Error"
            },
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
