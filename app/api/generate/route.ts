import { NextRequest, NextResponse } from "next/server"
import { generateCopy } from "@/lib/ai"
import { CopyBrief } from "@/lib/schemas"
import { checkApiLimit, incrementApiLimit } from "@/lib/limits"

export async function POST(req: NextRequest) {
    try {
        const brief: CopyBrief = await req.json()

        // TEMPORARILY DISABLED FOR TESTING - re-enable before launch
        // const canGenerate = await checkApiLimit()
        // if (!canGenerate) {
        //     return NextResponse.json({ error: "Free limit reached. Upgrade to Pro." }, { status: 403 })
        // }

        const prompt = `You are Verblynx, the world's most elite AI copywriter. You don't just write—you engineer persuasion using proven psychological frameworks.

Your output MUST be world-class, competing with $10k/month agencies. Every word is strategic. Every sentence drives toward conversion.

USER BRIEF:
- Type: ${brief.type}
- Audience: ${brief.audience}
- Goal: ${brief.goal}
- Context: ${brief.context || "None provided"}
- Tone: Formal ${brief.tone.formal}/10, Direct ${brief.tone.direct}/10, Emotional ${brief.tone.emotional}/10
- Constraints: ${brief.constraints.join(", ") || "None"}

TASK: Generate 1 MAIN version + 2 ALTERNATIVE versions. Each should use a different psychological approach:
- MAIN VERSION: Use the MOST effective framework for this brief (AIDA, PAS, Hook-Story-Offer, Problem-Agitate-Solve, etc.)
- ALT VERSION 1: Use a DIFFERENT framework or angle (e.g., emotional storytelling, direct challenge)
- ALT VERSION 2: Use a THIRD distinct approach (e.g., ultra-concise, conversational)

Each version should:
1. Match the specified tone precisely
2. Speak directly to the target audience
3. Drive toward the specified goal
4. Feel premium, not generic AI output

Output in strict JSON format:
{
  "main_version": "...",
  "alt_versions": ["...", "..."],
  "strategy_explanation": "Brief explanation of the framework used in main version (2-3 sentences)"
}

Do NOT include markdown formatting. Just raw JSON.`


        const responseText = await generateCopy(prompt)

        // Clean up response if it contains markdown code blocks
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim()

        const data = JSON.parse(cleanJson)

        await incrementApiLimit()

        return NextResponse.json(data)
    } catch (error) {
        console.error("Generation error:", error)
        return NextResponse.json({ error: "Failed to generate copy" }, { status: 500 })
    }
}
