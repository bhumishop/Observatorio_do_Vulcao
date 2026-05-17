#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the project with the correct base URL

# Set your repository name here
REPO_NAME="${REPO_NAME:-observatorio-do-vulcao}"

echo "Building for GitHub Pages with base URL: /${REPO_NAME}/"

# Build with the correct base URL
NUXT_PUBLIC_BASE_URL="/${REPO_NAME}/" npm run generate

echo ""
echo "Build complete! Files are in .output/public/"
echo ""
echo "To deploy to GitHub Pages, run:"
echo "  npx gh-pages -d .output/public"
echo ""
echo "Or push to main branch to trigger GitHub Actions deployment."
