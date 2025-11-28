import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
    try {
        const { context, audience, goal, product } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

        console.log("📝 Generate API called with:", { context, audience, goal, product });

        // Safety check
        if (!context || !audience || !goal) {
            console.error("❌ Missing required fields");
            return Response.json({
                error: "Missing required fields (context, audience, or goal)"
            }, { status: 400 });
        }

        // 1. Bulletproof Simulation Mode
        if (!apiKey || process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
            console.log("⚠️ Using Simulation Mode (Generation)");
            await new Promise(resolve => setTimeout(resolve, 3000));

            return Response.json({
                copy: `## Stop Drowning in Mediocre Marketing Copy.\n\nYour competition is using the same tired templates. The same boring formulas.\n\nMeanwhile, you're stuck wondering why your emails don't convert, your landing pages don't sell, and your ads get ignored.\n\n**Here's the truth:** Great copy isn't written. It's engineered.\n\n**Introducing ${product || 'Your Solution'}.**\n\nThis isn't another tool. It's a complete system that transforms how you communicate with ${audience || 'your audience'}.\n\n✓ **Strategy First** - We analyze your market before writing a single word\n✓ **Framework-Driven** - Every piece follows proven psychological patterns  \n✓ **Results-Focused** - Designed to ${goal || 'drive action'}, not just look pretty\n\nStop guessing. Start dominating.`,
                explanation: {
                    psychology: "Used 'Loss Aversion' in the opening ('Drowning'). Created contrast between their current state (stuck) and desired state (dominating). The phrase 'engineered' positions this as systematic, not random.",
                    structure: `${context.framework} Framework: Problem (mediocre copy) → Agitation (emails don't convert) → Solution (engineered approach). Each benefit is concrete and actionable.`,
                    power_words: ["Drowning", "Engineered", "Dominating", "Transforms", "System"]
                }
            });
        }

        // 2. Real "Generative Matrix"
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
      ACT AS A WORLD-CLASS COPYWRITER (Gary Halbert / David Ogilvy / Eugene Schwartz).

      Your task is to write a piece of HIGH-CONVERTING copy based on the following strategy.

      STRATEGIC BRIEF:
      - Audience: ${audience}
      - Goal: ${goal}
      - Product: ${product || 'Not specified'}
      - Framework: ${context.framework}
      - Awareness Level: ${context.awareness_level}
      - Sophistication Level: ${context.sophistication_level}
      - Core Desire: ${context.core_desire}
      - Main Objection: ${context.main_objection}
      - Strategic Angle: ${context.strategic_angle}
      - Mechanism: ${context.mechanism}

      INSTRUCTIONS:
      1. **Drafting Phase**: Write the copy using the assigned Framework. Be visceral. Be specific. Use short sentences. Break patterns.
      2. **CRITIQUE PHASE (INTERNAL MONOLOGUE)**:
         - Look at your draft. Is it boring? Is it generic?
         - Does it sound like "AI"? If yes, destroy it.
         - Are there weak words like "unlock", "unleash", "elevate"? Replace them with concrete verbs.
      3. **REFINEMENT PHASE**: 
         - Rewrite the copy based on your critique. 
         - Make it 30% shorter. 
         - Make it 2x more punchy.
      4. **Final Output**: Present ONLY the refined, elite version.

      OUTPUT FORMAT (JSON ONLY):
      {
        "copy": "The full markdown formatted copy (Refined Version).",
        "explanation": {
            "critique": "What you fixed from the first draft (e.g. 'Removed generic fluff, added specific revenue numbers').",
            "psychology": "Explain the psychological triggers used.",
            "structure": "Explain how the copy follows the framework step-by-step."
        }
      }
    `;

        console.log("🤖 Calling Gemini API...");
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        console.log("✅ Gemini responded with:", text.substring(0, 200));

        // Parse JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error("Failed to parse JSON from Gemini response");
        }

        const parsed = JSON.parse(jsonMatch[0]);
        return Response.json(parsed);

    } catch (error: any) {
        console.error("❌ Generate API Error:", error);
        return Response.json({
            error: "Generation failed",
            details: error.message
        }, { status: 500 });
    }
}
