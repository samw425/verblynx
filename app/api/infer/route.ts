import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const prompt: string = body.prompt

    try {
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey || apiKey === 'mock_key_for_demo') {
            return NextResponse.json({
                type: "text",
                audience: "General Audience",
                goal: "Communicate effectively",
                framework: "AIDA",
                core_desire: "Improvement",
                main_objection: "Cost or Time",
                strategic_angle: "Direct Benefit",
                context: prompt,
                tone: { formal: 5, direct: 5, emotional: 5 },
                explanation: "This is a basic inference. Add your API key for deep strategic analysis."
            })
        }

        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash", // Upgraded to 1.5 Flash for better reasoning
            generationConfig: {
                temperature: 0.4,
                responseMimeType: "application/json"
            }
        })

        const systemPrompt = `You are Verblynx's Strategic Inference Engine. You are not an AI; you are a legendary Direct Response Strategist (think Ogilvy, Hopkins, Schwartz).

Your job is to analyze the user's request and architect the PERFECT persuasion strategy before a single word of copy is written.

ANALYZE THIS REQUEST:
"${prompt}"

RETURN A JSON OBJECT WITH THESE FIELDS:
- type: The format (email, ad, landing_page, script, etc.)
- audience: The specific avatar (be precise: "Exhausted SaaS Founders", not "Business owners")
- goal: The hard conversion goal (e.g., "Book a demo", "Buy now")
- framework: Select the ONE best framework for this specific goal/audience. Options:
    - "PAS" (Problem-Agitation-Solution) -> Best for pain-aware audiences.
    - "AIDA" (Attention-Interest-Desire-Action) -> Best for cold traffic/general awareness.
    - "BAB" (Before-After-Bridge) -> Best for transformation/results-focused offers.
    - "FAB" (Features-Advantages-Benefits) -> Best for product-heavy copy.
    - "4Ps" (Picture-Promise-Prove-Push) -> Best for emotional/story-driven copy.
- core_desire: What does the audience DEEPLY want? (e.g., "Status", "Freedom from chaos", "Revenge")
- main_objection: The #1 thing stopping them (e.g., "It's too expensive", "I don't have time", "It won't work for me")
- strategic_angle: A 1-sentence summary of the "Hook" or "Big Idea".
- tone: object with scores 1-10 for {formal, direct, emotional}
- explanation: A short, punchy paragraph teaching the user WHY you chose this strategy. (e.g., "I chose the PAS framework because your audience is currently in pain. We need to validate that pain before offering the cure...")

DO NOT output markdown. Just the JSON.`

        const result = await model.generateContent(systemPrompt)
        const response = await result.response
        const text = response.text()

        const inference = JSON.parse(text.replace(/```json\n?/g, '').replace(/```\n?/g, ''))
        return NextResponse.json(inference)

    } catch (error) {
        console.error("Inference error:", error)
        // Fallback logic remains similar but simplified for brevity in this edit
        return NextResponse.json({
            type: "text",
            audience: "Target Audience",
            goal: "Convert",
            framework: "PAS",
            core_desire: "Success",
            main_objection: "Uncertainty",
            strategic_angle: "Benefit-driven",
            context: prompt,
            tone: { formal: 5, direct: 5, emotional: 5 },
            explanation: "Fallback strategy generated due to connection issue."
        })
    }
}
