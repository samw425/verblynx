#!/bin/bash

# Verblynx Launch Automation
# This script handles configuration, build, and deployment.

echo "========================================"
echo "   🚀 VERBLYNX LAUNCH SEQUENCE   "
echo "========================================"
echo ""

# 1. Environment Configuration
echo "1️⃣  Environment Configuration"
if [ -f .env.local ]; then
    echo "✅ .env.local detected."
else
    echo "⚠️  .env.local not found. Creating it now..."
    touch .env.local
    
    echo "Please enter your API Keys (Press Enter to skip if you want to add manually later):"
    
    read -p "Supabase URL: " SUPABASE_URL
    if [ ! -z "$SUPABASE_URL" ]; then echo "NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL" >> .env.local; fi
    
    read -p "Supabase Anon Key: " SUPABASE_ANON
    if [ ! -z "$SUPABASE_ANON" ]; then echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON" >> .env.local; fi
    
    read -p "Stripe Secret Key: " STRIPE_KEY
    if [ ! -z "$STRIPE_KEY" ]; then echo "STRIPE_SECRET_KEY=$STRIPE_KEY" >> .env.local; fi
    
    read -p "Google Gemini API Key: " GOOGLE_KEY
    if [ ! -z "$GOOGLE_KEY" ]; then echo "GOOGLE_API_KEY=$GOOGLE_KEY" >> .env.local; fi
    
    echo "✅ Configuration saved to .env.local"
fi

echo ""

# 2. Dependency Check
echo "2️⃣  Checking Dependencies"
if ! command -v npm &> /dev/null; then
    echo "❌ npm could not be found. Please install Node.js."
    exit 1
fi
echo "✅ npm found."

echo ""

# 3. Build Process
echo "3️⃣  Building Application"
echo "Installing packages..."
npm install
echo "Building Next.js app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
echo "✅ Build successful."

echo ""

# 4. Deployment
echo "4️⃣  Deploying to Vercel"
echo "Initializing Vercel deployment..."
npx vercel --prod

echo ""
echo "========================================"
echo "   🎉 LAUNCH SEQUENCE COMPLETE   "
echo "========================================"
