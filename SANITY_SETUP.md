# Sanity.io CMS Integration Guide

This portfolio has been upgraded from a custom Django backend to **[Sanity.io](https://www.sanity.io)** — a modern, edge-cached Headless CMS with real-time editing and a global CDN.

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Create a Free Sanity Project
1. Go to [https://www.sanity.io](https://www.sanity.io) and create a free account (or log in).
2. Go to your Sanity management dashboard at [https://manage.sanity.io](https://manage.sanity.io).
3. Create a new project (e.g. named `my-portfolio`).
4. Copy your **Project ID** (a short string like `abc123xy`).

---

### Step 2: Configure the Portfolio Frontend
Open `js/sanity-config.js` and paste your `projectId`:

```javascript
const SANITY_CONFIG = {
  projectId: 'YOUR_ACTUAL_PROJECT_ID', // <-- Put your Sanity project ID here
  dataset: 'production',               // Default dataset
  apiVersion: '2024-01-01',
  useCdn: true,                        // Superfast edge caching
};
```

#### Add CORS Origin in Sanity:
1. In your Sanity project dashboard at [https://manage.sanity.io](https://manage.sanity.io):
2. Click **API** tab → **CORS Origins** → **+ Add CORS origin**.
3. Add the URLs where your website runs:
   - For local development: `http://localhost:5500` or `http://127.0.0.1:5500` (or whichever local port you use).
   - For production: Your deployed portfolio URL (e.g. `https://yourdomain.com` or GitHub Pages / Vercel domain).
   - Check **Allow credentials**: `No` (since portfolio reads public published data).

---

### Step 3: Run Sanity Studio & Add Content

Your repository includes a ready-to-run Sanity Studio inside the `studio/` folder.

#### 1. Install Dependencies:
```bash
cd studio
npm install
```

#### 2. Set your Project ID in `studio/sanity.config.js`:
Open `studio/sanity.config.js` and set:
```javascript
projectId: 'YOUR_ACTUAL_PROJECT_ID',
dataset: 'production',
```

#### 3. Start Studio locally:
```bash
npm run dev
```
Open [http://localhost:3333](http://localhost:3333) in your browser. You will see an administrative dashboard where you can add:
- **Profile Information** (bio, profile picture, social links, location)
- **Skills** (tech stack, badges, categories)
- **Skill Bars** (percentages)
- **Projects** (screenshots, tech tags, descriptions, live demo/GitHub links)
- **Services** (services offered with feature lists)
- **Experience & Education** (work history, degrees, certifications)
- **Testimonials** (client reviews, ratings, avatars)
- **Resume & Certificates** (PDF downloads & previews)
- **Mobile Apps** (app showcases, store links)

#### 4. (Optional) Host your Studio on the Web for Free:
Deploy your studio to Sanity Cloud so you can edit your portfolio from any browser, phone, or tablet:
```bash
cd studio
npx sanity deploy
```
Choose a studio hostname (e.g., `malik-portfolio.sanity.studio`). That's it!

---

## ⚡ How the Frontend Works
- **Instant Fallback**: If Sanity is not yet configured or is still empty, the portfolio immediately displays built-in fallback data. Nothing is ever broken or blank.
- **Edge CDN Speed**: When Sanity is configured, all sections update in a single query from Sanity's global CDN in milliseconds.
- **Zero Build Tools Needed**: The frontend runs directly in any browser with vanilla JavaScript.
