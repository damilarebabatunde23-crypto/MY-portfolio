# Bamigbola Abdulmalik Opeyemi — Developer Portfolio

A modern, high-performance personal portfolio website showcasing mobile apps, full-stack projects, skills, and experience. Powered by vanilla HTML5, modern CSS3, JavaScript (ES6+), and **[Sanity.io](https://www.sanity.io)** Headless CMS.

---

## ✨ Features

- **⚡ Fast & Zero-Build Frontend**: Runs directly in the browser without requiring a heavy build pipeline.
- **🎨 Modern Design**: Sleek dark theme, interactive hero canvas, custom cursor, smooth animations, and responsive layout for all screens.
- **☁️ Headless CMS with Sanity.io**: Edit your portfolio profile, projects, skills, services, testimonials, and resume documents using Sanity Studio.
- **🚀 Edge-Cached Global CDN**: Fast data fetching via Sanity's GROQ API.
- **🛡️ Resilient Fallback**: If CMS credentials are not configured or while offline, the site gracefully renders built-in fallback data.

---

## 📁 Project Structure

```
MY-portfolio/
├── index.html            # Main website markup
├── css/                  # Modular stylesheets
├── js/                   # Frontend scripts & utilities
│   ├── sanity-config.js  # Sanity project configuration (Project ID & Dataset)
│   ├── sanity-client.js  # Lightweight GROQ client & asset URL resolver
│   ├── data.js           # Static data + Sanity live content sync
│   └── ...               # Interaction scripts (hero, modal, filters, etc.)
├── studio/               # Sanity Studio v3 (Content Management Dashboard)
│   ├── schemaTypes/      # Schemas (profile, project, skill, service, etc.)
│   ├── sanity.config.js  # Studio configuration
│   └── package.json      # Studio dependencies
├── SANITY_SETUP.md       # Complete step-by-step CMS setup guide
├── manifest.json         # PWA configuration
└── .gitignore            # Git ignore rules
```

---

## 🚀 Getting Started

### 1. View Portfolio Locally
Simply open `index.html` in your web browser, or use VS Code Live Server (`http://127.0.0.1:5500`).

### 2. Connect Sanity CMS
1. Create a free project at [https://manage.sanity.io](https://manage.sanity.io).
2. Add your **Project ID** to `js/sanity-config.js`:
   ```javascript
   const SANITY_CONFIG = {
     projectId: 'your_actual_project_id',
     dataset: 'production',
     apiVersion: '2024-01-01',
     useCdn: true,
   };
   ```
3. In Sanity Dashboard (**API** → **CORS Origins**), add your domain / `http://localhost:5500`.

### 3. Launch Sanity Studio
To add and edit your projects and content visually:
```bash
cd studio
npm install
npm run dev
```
Open [http://localhost:3333](http://localhost:3333) to log into your studio.

For deployment instructions and cloud hosting, see [SANITY_SETUP.md](SANITY_SETUP.md).

---

## 📬 Contact

- **Email**: [alaoopeyemi740@gmail.com](mailto:alaoopeyemi740@gmail.com)
- **WhatsApp**: [+234 812 130 7658](https://wa.me/2348121307658)
- **GitHub**: [@damilarebabatunde23-crypto](https://github.com/damilarebabatunde23-crypto)
- **LinkedIn**: [Damilare Babatunde](https://www.linkedin.com/in/damilare-babatunde-654345373?utm_source=share_via&utm_content=profile&utm_medium=member_android)
