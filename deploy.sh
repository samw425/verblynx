#!/bin/bash

# Verblynx Deployment Helper

echo "🚀 Preparing Verblynx for Launch..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to continue."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "To start the production server, run: npm start"
    echo "To deploy to Vercel, run: npx vercel"
else
    echo "❌ Build failed. Please check the logs."
    exit 1
fi
