#!/bin/bash

# Verblynx GitHub Push Automation
# Uses the provided PAT to authenticate and push.

TOKEN=""

echo "========================================"
echo "   🚀 GITHUB LAUNCH SEQUENCE   "
echo "========================================"
echo ""

# 1. Initialize Git if needed
if [ ! -d .git ]; then
    echo "Initializing Git repository..."
    git init
    git branch -M main
fi

# 2. Configure User (Generic if not set)
if [ -z "$(git config user.email)" ]; then
    git config user.email "deploy@verblynx.com"
    git config user.name "Verblynx Deployer"
fi

# 3. Get Repository URL
echo "I have your Access Token."
echo "I need to know where to send the code."
read -p "Enter your GitHub Repository URL (e.g., https://github.com/yourname/verblynx.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Repository URL is required."
    exit 1
fi

# 4. Inject Token into URL
# Convert https://github.com/user/repo.git -> https://TOKEN@github.com/user/repo.git
AUTH_URL=${REPO_URL/https:\/\//https:\/\/$TOKEN@}

# 5. Add/Update Remote
if git remote | grep -q "origin"; then
    git remote set-url origin "$AUTH_URL"
else
    git remote add origin "$AUTH_URL"
fi

# 6. Commit and Push
echo "📦 Committing code..."
git add .
git commit -m "feat: Verblynx Launch - Full Automation"

echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed successfully!"
echo "Go to Vercel -> Add New Project -> Import from GitHub to finish."
