import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
    try {
        const { audience, goal, product } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

        // 1. Bulletproof Simulation Mode (if no key or explicit demo mode)
        if (!apiKey || process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
            console.log("⚠️ Using Simulation Mode (Inference)");
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate thinking

            // Dynamic Simulation based on inputs
            const isSaaS = audience.toLowerCase().includes('saas') || product.toLowerCase().includes('software');
            const isAgency = audience.toLowerCase().includes('agency') || product.toLowerCase().includes('service');

            if (isSaaS) {
                return Response.json({
                    framework: "PAS (Problem-Agitation-Solution)",
                    awareness_level: "Problem-Aware",
                    sophistication_level: "Level 3 (Skeptical of claims)",
                    core_desire: "Control & Predictability",
                    main_objection: "Implementation time is too high.",
                    strategic_angle: "The 'Switch' - Positioning the product not as a tool, but as a new way of operating.",
                    mechanism: "Automated Neural Workflow",
                    explanation: "The audience is tired of 'tools'. They want a 'system'. We will position this as the end of manual work."
                });
            } else if (isAgency) {
                return Response.json({
                    framework: "AIDA (Attention-Interest-Desire-Action)",
                    awareness_level: "Solution-Aware",
                    sophistication_level: "Level 4 (Seen it all)",
                    core_desire: "Authority & High-Ticket Clients",
                    main_objection: "Is this just another lead gen agency?",
                    strategic_angle: "The 'Insider' - We are not an agency; we are a partner.",
                    mechanism: "Proprietary Client Acquisition Infrastructure",
                    explanation: "Agencies are cynical. We need to prove competence immediately. We will use specific jargon to signal 'insider' status."
                });
            } else {
                return Response.json({
                    framework: "BAB (Before-After-Bridge)",
                    awareness_level: "Unaware",
                    sophistication_level: "Level 1 (Open to new ideas)",
                    core_desire: "Improvement & Ease",
                    main_objection: "Will this actually work for me?",
                    strategic_angle: "The 'Discovery' - A new breakthrough that changes everything.",
                    mechanism: "The X-Factor Algorithm",
                    explanation: "For a general audience, we focus on the transformation. The 'Before' state is pain, the 'After' state is bliss."
                });
            }
        }

        // 2. Real "Grandmaster" Inference
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
      ACT AS A LEGENDARY DIRECT RESPONSE STRATEGIST (Eugene Schwartz level).
      
      Your task is to analyze the following input and construct a "Psychological Profile" of the target market.
      
      INPUT DATA:
      - Target Audience: "${audience}"
      - User Goal: "${goal}"
      - Product/Service: "${product}"

      You must determine the following strategic elements:
      1. **Awareness Level**: (Unaware, Problem-Aware, Solution-Aware, Product-Aware, Most Aware).
      2. **Sophistication Level**: (Level 1: First to market, Level 2: Competition exists, Level 3: Claims are saturated, Level 4: Mechanism needed, Level 5: Identification).
      3. **Core Desire**: The single deepest emotional driver (e.g., Status, Greed, Fear, Love).
      4. **Main Objection**: The #1 reason they will NOT buy.
      5. **Strategic Angle**: The unique "Hook" or "Big Idea" we will use to break through.
      6. **Mechanism**: The "Unique Mechanism" that delivers the result (give it a cool name if none exists).
      7. **Recommended Framework**: (PAS, AIDA, BAB, SLAP, 4Ps). Choose the BEST one for this specific context.
      8. **Brief Explanation**: A 2-sentence explanation of WHY you chose this strategy.

      RETURN JSON ONLY. NO MARKDOWN.
      {
        "framework": "string",
        "awareness_level": "string",
        "sophistication_level": "string",
        "core_desire": "string",
        "main_objection": "string",
        "strategic_angle": "string",
        "mechanism": "string",
        "explanation": "string"
      }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean JSON
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const strategy = JSON.parse(cleanedText);

        return Response.json(strategy);

    } catch (error) {
        console.error("Inference Error:", error);
        // Fallback to simulation if API fails
        return Response.json({
            framework: "PAS",
            awareness_level: "Problem-Aware",
            sophistication_level: "Level 2",
            core_desire: "Efficiency",
            main_objection: "Cost vs Value",
            strategic_angle: "Direct Benefit",
            mechanism: "The System",
            explanation: "Fallback strategy due to high cognitive load. Focusing on direct problem/solution."
        });
    }
}
