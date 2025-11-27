import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { getSimulation } from "@/lib/simulation"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const prompt: string = body.prompt

    try {
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey || apiKey === 'mock_key_for_demo') {
            throw new Error("No API Key")
        }

        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                temperature: 0.7,
                responseMimeType: "application/json"
            }
        })

        const systemPrompt = `You are Verblynx's Strategic Inference Engine. You are the combined consciousness of Eugene Schwartz, David Ogilvy, and Gary Halbert.

Your job is to analyze the user's request and architect a WORLD-CLASS persuasion strategy.

ANALYZE THIS REQUEST:
"${prompt}"

RETURN A JSON OBJECT WITH THESE FIELDS:
- type: The format (email, ad, landing_page, script, etc.)
- audience: The specific avatar (be precise: "Exhausted SaaS Founders", not "Business owners")
- goal: The hard conversion goal (e.g., "Book a demo", "Buy now")
- framework: Select the ONE best framework. Options:
    - "PAS" (Problem-Agitation-Solution) -> Pain-aware.
    - "AIDA" (Attention-Interest-Desire-Action) -> General awareness.
    - "BAB" (Before-After-Bridge) -> Transformation-focused.
    - "FAB" (Features-Advantages-Benefits) -> Product-heavy.
    - "4Ps" (Picture-Promise-Prove-Push) -> Emotional/Story.
    - "SLAP" (Stop-Look-Act-Purchase) -> High impulse.
- core_desire: The deepest psychological desire (e.g., "Status", "Revenge", "Freedom").
- main_objection: The "Silent Killer" objection.
- awareness_level: "Unaware", "Problem Aware", "Solution Aware", "Product Aware", or "Most Aware".
- sophistication_level: "Level 1" (First to market) to "Level 5" (Dead market, needs identification).
- mechanism: The "Unique Mechanism" or "Vehicle" that delivers the result (invent a name if needed, e.g., "The 3-Step Protocol").
- strategic_angle: A 1-sentence "Big Idea" or Hook.
- tone: object with scores 1-10 for {formal, direct, emotional}
- explanation: A "Strategic Brief" (2-3 sentences) explaining WHY you chose this angle, referencing the awareness/sophistication levels.

DO NOT output markdown. Just the JSON.`

        const result = await model.generateContent(systemPrompt)
        const response = await result.response
        const text = response.text()

        const inference = JSON.parse(text.replace(/```json\n?/g, '').replace(/```\n?/g, ''))
        return NextResponse.json(inference)

    } catch (error) {
        console.error("Inference error (Switching to Simulation):", error)

        // Intelligent Simulation Fallback
        const sim = getSimulation(prompt, prompt)

        return NextResponse.json({
            type: "email", // Default to email for sim
            audience: "Target Audience",
            goal: "Conversion",
            framework: sim.framework,
            core_desire: sim.core_desire,
            main_objection: sim.main_objection,
            strategic_angle: sim.strategic_angle,
            awareness_level: "Problem Aware",
            sophistication_level: "Level 2",
            mechanism: "The System",
            context: prompt,
            tone: { formal: 6, direct: 8, emotional: 4 },
            explanation: "Simulation Mode: Strategy inferred based on best practices for this niche."
        })
    }
}
