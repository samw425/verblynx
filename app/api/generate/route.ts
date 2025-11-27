import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
    try {
        const { context, audience, goal, product } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

        // 1. Bulletproof Simulation Mode
        if (!apiKey || process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
            console.log("⚠️ Using Simulation Mode (Generation)");
            await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate "Writing..."

            // Dynamic Simulation
            const isSaaS = audience.toLowerCase().includes('saas');

            if (isSaaS) {
                return Response.json({
                    copy: "## Stop Burning Cash on Ads That Don't Convert.\n\nYou built a great product. But nobody cares.\n\nWhy? Because you're talking about *features*. Your customers only care about *themselves*.\n\n**Introducing The Growth Engine.**\n\nThe first automated marketing system that doesn't just 'manage' leads—it closes them.\n\n*   **Automated Outreach:** Reach 1,000 prospects a day.\n*   **Neural Persuasion:** AI that writes better than your agency.\n*   **Instant ROI:** See results in 24 hours, not 24 days.\n\nStop playing small. Dominate your niche.",
                    explanation: {
                        psychology: "Used 'Loss Aversion' in the headline ('Burning Cash'). People fight harder to keep money than to make it.",
                        structure: "Classic PAS (Problem-Agitation-Solution). We identified the pain (nobody cares), agitated it (features vs self), and solved it (The Growth Engine).",
                        power_words: ["Burning", "Dominate", "Neural", "Instant"]
                    }
                });
            } else {
                return Response.json({
                    copy: "## The Secret to 10x Productivity? It's Not Coffee.\n\nYou're working 12 hours a day. You're tired. You're overwhelmed.\n\nAnd yet, your to-do list keeps growing.\n\nIt's not your fault. The modern workflow is broken. It was designed for factories, not creatives.\n\n**Enter FlowState.**\n\nThe only productivity system designed for the biological reality of your brain.\n\n*   **Deep Work Blocks:** Scientifically timed focus sessions.\n*   **Distraction Shield:** Blocks noise before it hits you.\n\nReclaim your time. Reclaim your life.",
                    explanation: {
                        psychology: "We validated their struggle ('It's not your fault'). This builds instant trust and lowers defenses.",
                        structure: "AIDA. Attention (Secret), Interest (Workflow is broken), Desire (Biological reality), Action (Reclaim).",
                        power_words: ["Secret", "Broken", "Biological", "Reclaim"]
                    }
                });
            }
        }

        // 2. Real "Generative Matrix"
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
      ACT AS A WORLD-CLASS COPYWRITER (Gary Halbert / David Ogilvy).

      Your task is to write a piece of HIGH-CONVERTING copy based on the following strategy.

      STRATEGIC BRIEF:
      - Audience: ${audience}
      - Goal: ${goal}
      - Product: ${product}
      - Framework: ${context.framework}
      - Awareness Level: ${context.awareness_level}
      - Sophistication Level: ${context.sophistication_level}
      - Core Desire: ${context.core_desire}
      - Main Objection: ${context.main_objection}
      - Strategic Angle: ${context.strategic_angle}
      - Mechanism: ${context.mechanism}

      INSTRUCTIONS:
      1. **Drafting Phase**: Write the copy using the assigned Framework. Be visceral. Be specific. Use short sentences. Break patterns.
      2. **Critique Phase (Internal)**: Review your draft. Remove jargon. Remove passive voice. Ensure the "Mechanism" is highlighted.
      3. **Final Polish**: Present the final, optimized copy.

      OUTPUT FORMAT (JSON ONLY):
      {
        "copy": "The full markdown formatted copy.",
        "explanation": {
          "psychology": "Explain the psychological triggers used (e.g., Scarcity, Social Proof, Authority).",
          "structure": "Explain how the copy follows the framework step-by-step.",
          "power_words": ["List", "of", "strong", "words", "used"]
        }
      }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const output = JSON.parse(cleanedText);

        return Response.json(output);

    } catch (error) {
        console.error("Generation Error:", error);
        // Fallback
        return Response.json({
            copy: "## Error in Neural Link.\n\nWe encountered a glitch in the matrix. Please try again.",
            explanation: {
                psychology: "N/A",
                structure: "N/A",
                power_words: []
            }
        });
    }
}
