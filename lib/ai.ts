import { GoogleGenerativeAI } from "@google/generative-ai"

export async function generateCopy(prompt: string) {
    const apiKey = process.env.GEMINI_API_KEY

    // Try Gemini first if we have a key, fall back to mock if it fails
    if (apiKey && apiKey !== 'your-gemini-key' && apiKey !== 'mock_key') {
        try {
            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

            const result = await model.generateContent(prompt)
            const response = await result.response
            return response.text()
        } catch (error) {
            console.warn("Gemini API failed, falling back to mock:", error)
            // Fall through to mock generation below
        }
    }

    // Mock Mode: Return dynamic mock copy based on input
    console.log("Verblynx: Using Mock AI generation")
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate "thinking" time

    //Extract variables from prompt for dynamic generation
    const typeMatch = prompt.match(/Type: (.*)/)
    const audienceMatch = prompt.match(/Audience: (.*)/)
    const goalMatch = prompt.match(/Goal: (.*)/)
    const instructionMatch = prompt.match(/Instruction:\n"(.*)"/)

    // Handle Refinement
    if (instructionMatch) {
        const instruction = instructionMatch[1].toLowerCase()
        const originalCopyMatch = prompt.match(/Original Copy:\n"([\s\S]*?)"/)
        const originalCopy = originalCopyMatch ? originalCopyMatch[1] : "Original text"

        if (instruction.includes("shorter")) {
            return `[Refined: Shorter]\n\n${originalCopy.split('\n').slice(0, 3).join('\n')}\n\n(Shortened for impact)`
        } else if (instruction.includes("longer")) {
            return `[Refined: Expanded]\n\n${originalCopy}\n\nAdditionally, we believe that...\n\n(Expanded with more detail)`
        } else {
            return `[Refined: ${instruction}]\n\n${originalCopy}\n\n(Polished according to: ${instruction})`
        }
    }

    const type = typeMatch ? typeMatch[1] : "Copy"
    const audience = audienceMatch ? audienceMatch[1] : "Reader"
    const goal = goalMatch ? goalMatch[1] : "Action"

    return JSON.stringify({
        main_version: `[Subject: ${goal} for ${audience}]\n\nHi there,\n\nI'm writing this ${type} specifically for ${audience}. My primary goal is to ${goal}.\n\nHere is the value proposition tailored to your needs. We understand that ${audience} cares about efficiency and results.\n\nLet's make this happen.\n\nBest,\n[Your Name]`,
        alt_versions: [
            `[Variation: Direct]\n\nHey ${audience},\n\nDo you want to ${goal}? That's exactly what this ${type} is about.\n\nNo fluff, just results.\n\nCheers,\n[Your Name]`,
            `[Variation: Storytelling]\n\nImagine a world where ${goal} was easy. For ${audience}, that reality is closer than you think.\n\nThis ${type} explores how we can get there together.\n\nWarmly,\n[Your Name]`
        ]
    })
}
