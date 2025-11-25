import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

// Initialize Gemini (use GEMINI_API_KEY to match .env.local)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "")

export async function POST(req: Request) {
    try {
        const { prompt, context, type, audience, goal, tone } = await req.json()

        // For demo purposes, if no key is present, return a mock response
        if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return NextResponse.json({
                copy: `[Demo Mode] Here's your ${type || 'copy'} for ${audience || 'your audience'}:\n\nThis is a simulated response. Add your GEMINI_API_KEY to generate real copy.`,
                explanation: "Demo mode active. Real copy generation with psychological breakdown requires API key.",
                strategy: context
            })
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

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
    } catch (error) {
        console.error("AI Generation Error:", error)
        return NextResponse.json(
            {
                error: "Failed to generate copy",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        )
    }
}
