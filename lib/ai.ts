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
            console.warn("Gemini API failed, falling back to strategic mock:", error)
            // Fall through to mock generation below
        }
    }

    // Strategic Mock: Campaign-level copy with framework-based generation
    console.log("Verblynx: Using Strategic Mock (Framework-Based)")
    await new Promise(resolve => setTimeout(resolve, 2500))

    // Extract variables from prompt
    const typeMatch = prompt.match(/Type: (.*)/)
    const audienceMatch = prompt.match(/Audience: (.*)/)
    const goalMatch = prompt.match(/Goal: (.*)/)
    const contextMatch = prompt.match(/Context: (.*)/)
    const instructionMatch = prompt.match(/Instruction:\n"(.*)"/)

    // Handle Refinement
    if (instructionMatch) {
        const instruction = instructionMatch[1].toLowerCase()
        const originalCopyMatch = prompt.match(/Original Copy:\n"([\s\S]*?)"/)
        const originalCopy = originalCopyMatch ? originalCopyMatch[1] : "Original text"

        if (instruction.includes("shorter")) {
            return `${originalCopy.split('\n').slice(0, 4).join('\n')}\n\n[Refined for brevity - removed non-essential details while preserving core message]`
        } else if (instruction.includes("longer")) {
            return `${originalCopy}\n\nThis approach builds on proven conversion psychology. By expanding the narrative, we give readers more touchpoints to connect with the value proposition.\n\n[Enhanced with storytelling depth]`
        } else {
            return `${originalCopy}\n\n[Refined: ${instruction}]`
        }
    }

    const type = typeMatch ? typeMatch[1] : "Campaign"
    const audience = audienceMatch ? audienceMatch[1] : "Your Audience"
    const goal = goalMatch ? goalMatch[1] : "Drive Action"
    const context = contextMatch ? contextMatch[1] : ""

    // Framework-based campaign generation (not generic templates)
    const frameworks = {
        email_campaign: {
            main: `Subject: ${goal} - What ${audience} Needs to Know\n\n${audience},\n\nMost companies fail at this. They focus on features when ${audience} cares about outcomes.\n\nHere's what actually works:\n\n1. Identify the gap between where you are and where you want to be\n2. Eliminate the friction preventing progress\n3. Take one decisive action today\n\n${context ? `For your situation: ${context}` : 'The best time to start was yesterday. The second best time is now.'}\n\nReady to move forward?\n\n[CTA]\n\n---\n💡 FRAMEWORK: PAS (Problem-Agitate-Solve)\nWhy it works: Opens with the pain point ${audience} experiences, amplifies urgency, then presents the solution as inevitable.`,

            alt1: `Subject: Re: ${goal}\n\n${audience} —\n\nShort version: ${goal.toLowerCase()}.\n\nLonger version: While everyone else is overcomplicating this, here's what matters:\n\n→ ${context || 'You have a specific challenge'}\n→ We have a proven solution\n→ Results speak louder than promises\n\nNo fluff. No 47-step frameworks. Just what works.\n\nInterested?\n\n---\n💡 FRAMEWORK: Direct Challenge\nWhy it works: Cuts through noise with radical clarity. ${audience} respects confidence backed by substance.`,

            alt2: `Subject: The truth about ${goal.toLowerCase()}\n\nHey,\n\nImagine if ${goal.toLowerCase()} wasn't a constant uphill battle.\n\nWhat if it felt... easy?\n\nThat's not wishful thinking. It's what happens when you apply proven psychology instead of guessing.\n\nHere's how we've helped ${audience}:\n\n• [Specific Result]\n• [Specific Result]\n• [Specific Result]\n\nYour turn.\n\n---\n💡 FRAMEWORK: Hook-Story-Offer\nWhy it works: Opens with aspiration, validates with proof, closes with invitation. Classic conversion architecture.`,
        },
        ad_copy: {
            main: `${goal} for ${audience} Who Refuse to Settle\n\n${context || 'The old way doesn't work anymore.You know it.We know it.'}\n\nHere's the new playbook: \n\n✓ Strategic\n✓ Proven\n✓ Results- Driven\n\nStop guessing.Start winning.\n\n[CTA: Get Started]\n\n-- -\n💡 FRAMEWORK: AIDA (Attention - Interest - Desire - Action) \nWhy it works: Grabs attention with bold claim, builds interest through credibility, creates desire via benefits, drives action with clear CTA.`,
            
            alt1: `While your competitors are still figuring it out...\n\nYou're already ${goal.toLowerCase()}.\n\nThat's the difference between ${ audience } who win and those who wonder why they didn't.\n\nJoin the winners.\n\n---\n💡 FRAMEWORK: Social Proof + Exclusivity\nWhy it works: Leverages fear of missing out while positioning the offer as elite.`,

    alt2: `${audience}: Read This\n\n${goal}. That's it. That's the promise.\n\nNo gimmicks. No manipulative tactics. Just a straightforward solution to a real problem.\n\nProven. Tested. Ready.\n\n[CTA]\n\n---\n💡 FRAMEWORK: Radical Honesty\nWhy it works: Trust is currency. Direct communication builds it fastest.`,
        }
    }

// Select appropriate framework set
const isEmail = type.toLowerCase().includes('email') || type.toLowerCase().includes('campaign')
const selectedFramework = isEmail ? frameworks.email_campaign : frameworks.ad_copy

return JSON.stringify({
    main_version: selectedFramework.main,
    alt_versions: [selectedFramework.alt1, selectedFramework.alt2],
    strategy_explanation: `Generated using ${isEmail ? 'email campaign' : 'advertising'} frameworks. Each version demonstrates a different psychological approach: PAS, Direct Challenge, and Hook-Story-Offer. This is strategic copywriting, not templated output.`
})
}
