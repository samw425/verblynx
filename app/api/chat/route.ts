import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { messages, context, currentCopy } = await req.json()
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey) {
            return NextResponse.json({
                role: "assistant",
                content: "[Demo Mode] I can't analyze live data without an API key. But normally, I would help you refine this copy based on the strategy."
            })
        }

        const genAI = new GoogleGenerativeAI(apiKey)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        const systemPrompt = `You are the Verblynx Editor Assistant. You are a world-class copy editor working with a user to refine their copy.

STRATEGY CONTEXT:
- Audience: ${context?.audience || 'Unknown'}
- Goal: ${context?.goal || 'Unknown'}
- Framework: ${context?.framework || 'Unknown'}
- Core Desire: ${context?.core_desire || 'Unknown'}
- Main Objection: ${context?.main_objection || 'Unknown'}

CURRENT COPY:
"""
${currentCopy}
"""

YOUR ROLE:
1. Answer questions about the strategy.
2. Suggest specific improvements to the copy.
3. If the user asks to rewrite something, provide the rewritten text clearly.
4. Be concise, professional, and "Elite" (no fluff).

Refuse to do anything unrelated to copywriting or strategy.`

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }]
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to assist with the copy and strategy." }]
                },
                // Map previous messages (excluding the last one which is the new user prompt)
                ...messages.slice(0, -1).map((m: any) => ({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }]
                }))
            ]
        })

        const lastMessage = messages[messages.length - 1].content
        const result = await chat.sendMessage(lastMessage)
        const response = result.response.text()

        return NextResponse.json({
            role: "assistant",
            content: response
        })

    } catch (error) {
        console.error("Chat Error:", error)
        return NextResponse.json({
            role: "assistant",
            content: "I encountered an error processing your request. Please try again."
        })
    }
}
