# LARS Legal Associates — Next.js Version 2

## Local preview
1. Install Node.js 20 or later.
2. Run: npm install
3. Run: npm run dev
4. Open http://localhost:3000

## Cloudflare Pages deployment
Create a new Pages project from this repository.
- Framework preset: Next.js (Static HTML Export)
- Build command: npm run build
- Build output directory: out

The project uses static export, so it remains suitable for free Cloudflare Pages hosting.

## Replace the old website
Upload the CONTENTS of this folder to the root of your existing GitHub repository and commit.
Cloudflare will redeploy automatically after its build settings are changed as above.

## Consultation form
The form prepares a message to contact@larslegal.in or sends it through WhatsApp.
To send email silently without opening the visitor's email app, add a backend/form service later.
