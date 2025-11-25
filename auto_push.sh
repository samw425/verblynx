#!/bin/bash
# Auto-push script
git remote remove origin 2>/dev/null
git remote add origin https://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@github.com/samw425/verblynx.git
git branch -M main
git push -u origin main
