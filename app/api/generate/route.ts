import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "")

export async function POST(req: Request) {
    try {
        const { prompt, context } = await req.json()

        // For demo purposes, if no key is present, return a mock response
        if (!process.env.GOOGLE_API_KEY) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return NextResponse.json({
                text: "This is a simulated response from Verblynx. To get real AI generation, please add your GOOGLE_API_KEY to the environment variables.\n\nHowever, the strategy engine is ready to deploy."
            })
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" })

        const fullPrompt = `
        Context: ${JSON.stringify(context)}
        
        Task: ${prompt}
        
        You are Verblynx, an elite copywriting AI. Write in a punchy, direct, and high-converting style.
        `

        const result = await model.generateContent(fullPrompt)
        const response = await result.response
        const text = response.text()

        return NextResponse.json({ text })
    } catch (error) {
        console.error("AI Generation Error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
