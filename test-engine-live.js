const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function testEngine() {
    console.log("🚀 INITIALIZING ENGINE DIAGNOSTIC...\n");

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
        console.error("❌ CRITICAL: No API Key found in environment.");
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const scenarios = [
        {
            name: "LUXURY WATCH",
            product: "Chronos Elite Mechanical Watch",
            audience: "High-net-worth individuals, collectors",
            goal: "Sell the prestige and legacy, not just the time."
        },
        {
            name: "B2B SAAS",
            product: "FlowState Project Manager",
            audience: "Overworked software engineering managers",
            goal: "Convince them this tool reduces meetings by 50%."
        }
    ];

    for (const scenario of scenarios) {
        console.log(`\n--------------------------------------------------`);
        console.log(`🧪 TESTING SCENARIO: ${scenario.name}`);
        console.log(`--------------------------------------------------`);

        // 1. INFERENCE STEP (Strategy)
        console.log("... Generating Strategy Profile ...");
        const strategyPrompt = `
            You are a master strategist. Analyze this:
            Product: ${scenario.product}
            Audience: ${scenario.audience}
            Goal: ${scenario.goal}
            
            Output a JSON object with: { "painPoints": [], "desires": [], "objections": [], "angle": "" }
        `;

        try {
            const strategyResult = await model.generateContent(strategyPrompt);
            const strategyText = strategyResult.response.text();
            console.log("✅ STRATEGY GENERATED.");
            // console.log(strategyText.substring(0, 100) + "...");

            // 2. GENERATION STEP (Copy)
            console.log("... Generating Sales Copy ...");
            const copyPrompt = `
                Write a high-converting email based on this strategy:
                ${strategyText}
                
                Rules:
                - No fluff.
                - Direct response style.
                - Focus on the 'angle'.
            `;

            const copyResult = await model.generateContent(copyPrompt);
            const copyText = copyResult.response.text();

            console.log("\n📄 GENERATED COPY PREVIEW:");
            console.log(copyText.substring(0, 300) + "...\n[TRUNCATED]");

        } catch (error) {
            console.error(`❌ FAILED: ${error.message}`);
        }
    }

    console.log("\n--------------------------------------------------");
    console.log("✅ DIAGNOSTIC COMPLETE.");
}

testEngine();
