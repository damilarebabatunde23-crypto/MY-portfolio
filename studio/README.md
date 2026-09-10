# Portfolio Sanity Studio

This directory contains the [Sanity.io](https://www.sanity.io) Studio configuration and content schemas for your portfolio.

## Getting Started

1. Install dependencies (Node.js required):
   ```bash
   cd studio
   npm install
   ```

2. Configure your Sanity Project ID:
   Open `sanity.config.js` and `sanity.cli.js`, or create a `.env` file inside `studio/`:
   ```env
   SANITY_STUDIO_PROJECT_ID=your_actual_project_id
   SANITY_STUDIO_DATASET=production
   ```

3. Run the studio locally:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3333](http://localhost:3333) in your browser.

4. (Optional) Deploy your Studio to Sanity Cloud for free:
   ```bash
   npx sanity deploy
   ```
   This gives you a hosted URL (e.g., `https://your-portfolio.sanity.studio`) where you can log in from any device to edit your portfolio content!
