# CreatorlyAI

A simple starter website for AI creator tools.

## What is included
- Responsive homepage
- 8 creator tools
- Working free demo using local templates
- Pricing section
- FAQ
- SEO title/description
- No database required for the starter

## Important before earning money
This demo does NOT call an AI API and does NOT process payments.
Before charging users:
1. Add a backend/server.
2. Connect a real AI API.
3. Keep API keys on the server, never in browser JS.
4. Add login and usage limits.
5. Add a real payment provider.
6. Add Privacy Policy, Terms and Contact pages.
7. Add analytics and error monitoring.
8. Apply for an ad network after the site has useful original content.

## Fastest free deployment
Use GitHub Pages:
1. Create a GitHub account.
2. Create a new public repository named `creatorlyai`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
4. Open Settings → Pages.
5. Select Deploy from a branch → `main` → `/root`.
6. Save. GitHub will give you a live URL.

For a custom domain later, buy a domain from a registrar and connect its DNS to your hosting provider.

## Real AI upgrade
For production, use a small server/API route. The browser should send only the user's prompt to your server. The server calls the AI provider using a secret environment variable such as `AI_API_KEY`.

Do not put a secret API key in `script.js`.
