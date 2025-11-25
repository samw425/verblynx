import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const prompt: string = body.prompt

    try {
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey || apiKey === 'mock_key_for_demo') {
            // Fallback to basic inference if no API key
            return NextResponse.json({
                type: "text",
                audience: "General Audience",
                goal: "Communicate effectively",
                context: prompt,
                tone: { formal: 5, direct: 5, emotional: 5 },
                constraints: []
            })
        }

        // Elite Gemini-powered strategic inference
        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
            generationConfig: {
                temperature: 0.3, // Lower temperature for more consistent strategic analysis
                responseMimeType: "application/json"
            }
        })

        const systemPrompt = `You are Verblynx's Strategic Inference Engine. Your job is to analyze a user's raw copywriting request and extract the core strategy.

Analyze the following request and return ONLY a valid JSON object with these fields:
- type: the format (email, ad, website, social, landing_page, letter, script, product_description, etc.)
- audience: specific target audience (be precise, not generic)
- goal: the primary conversion goal (what action should the reader take?)
- context: any key context, constraints, or special requirements
- tone: object with scores 1-10 for {formal, direct, emotional}
- constraints: array of any identified constraints (length, platform, etc.)

Be insightful. Look for subtext. If the user says "Write a launch email," infer WHO they're launching to and WHY.

USER REQUEST:
${prompt}

Respond with ONLY the JSON object, no markdown formatting.`

        const result = await model.generateContent(systemPrompt)
        const response = await result.response
        const text = response.text()

        // Parse the JSON response
        const inference = JSON.parse(text.replace(/```json\n?/g, '').replace(/```\n?/g, ''))

        return NextResponse.json(inference)

    } catch (error) {
        console.error("Inference error:", error)
        console.error("Error details:", {
            message: error instanceof Error ? error.message : "Unknown error",
            apiKey: process.env.GEMINI_API_KEY ? "Present (length: " + process.env.GEMINI_API_KEY.length + ")" : "Missing"
        })

        // TEMPORARY: Use sophisticated mock inference as fallback so site works
        const lowerPrompt = prompt.toLowerCase()

        let type = "text"
        if (lowerPrompt.includes("email")) type = "email"
        else if (lowerPrompt.includes("ad")) type = "ad"
        else if (lowerPrompt.includes("landing") || lowerPrompt.includes("page")) type = "landing_page"
        else if (lowerPrompt.includes("pitch")) type = "email"
        else if (lowerPrompt.includes("post")) type = "social"

        let audience = "Target Audience"
        if (lowerPrompt.includes("investor")) audience = "Investors"
        else if (lowerPrompt.includes("client")) audience = "Potential Clients"
        else if (lowerPrompt.includes("customer")) audience = "Customers"
        else if (lowerPrompt.includes("startup") || lowerPrompt.includes("founder")) audience = "Startup Founders"

        let goal = "Persuade and convert"
        if (lowerPrompt.includes("pitch")) goal = "Secure investment"
        else if (lowerPrompt.includes("sell")) goal = "Drive sales"
        else if (lowerPrompt.includes("launch")) goal = "Generate buzz"

        return NextResponse.json({
            type,
            audience,
            goal,
            context: prompt,
            tone: { formal: 7, direct: 6, emotional: 4 },
            constraints: [],
            _fallback: "Using temporary inference - Gemini integration pending"
        })
    }
}
