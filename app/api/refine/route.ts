import { NextRequest, NextResponse } from "next/server"
import { generateCopy } from "@/lib/ai"

export async function POST(req: NextRequest) {
    try {
        const { currentCopy, instruction } = await req.json()

        const prompt = `You are Verblynx's Refinement Engine. When refining copy, you don't just execute the instruction—you TEACH the user WHY it works.

ORIGINAL COPY:
"${currentCopy}"

REFINEMENT REQUEST:
"${instruction}"

TASK: Refine the copy AND explain the psychological/strategic reasoning behind your changes.

Output in this exact format (plain text, not JSON):
--- REFINED COPY ---
[refined version here]

--- WHY THIS WORKS ---
[2-3 sentence explanation of the strategy/psychology behind the changes. Be specific about what makes this more persuasive.]
`

        const response = await generateCopy(prompt)

        // Parse the response to extract refined copy and explanation
        const refinedSection = response.match(/--- REFINED COPY ---\n([\s\S]*?)\n\n--- WHY THIS WORKS ---/)
        const explanationSection = response.match(/--- WHY THIS WORKS ---\n([\s\S]*)/)

        const refinedCopy = refinedSection ? refinedSection[1].trim() : response.trim()
        const explanation = explanationSection ? explanationSection[1].trim() : ""

        return NextResponse.json({
            refinedCopy,
            explanation: explanation || "Refinement applied successfully."
        })
    } catch (error) {
        console.error("Refinement error:", error)
        return NextResponse.json({ error: "Failed to refine copy" }, { status: 500 })
    }
}
