const { GoogleGenerativeAI } = require("@google/generative-ai");

async function main() {
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
        console.error("No API key found");
        return;
    }
    console.log("Using API Key starting with:", apiKey.substring(0, 5));

    const genAI = new GoogleGenerativeAI(apiKey);
    try {
        // There isn't a direct listModels method on genAI instance in some versions, 
        // but let's try to just generate content with a few known models to see which one works.

        const models = ["gemini-1.5-flash-001", "gemini-1.5-pro-001", "gemini-1.5-flash", "gemini-pro"];

        for (const modelName of models) {
            console.log(`Testing model: ${modelName}...`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                console.log(`✅ SUCCESS: ${modelName}`);
                console.log("Response:", result.response.text());
                return; // Found a working one!
            } catch (e) {
                console.log(`❌ FAILED: ${modelName}`);
                console.log("Error:", e.message);
            }
        }
    } catch (error) {
        console.error("Fatal error:", error);
    }
}

main();
