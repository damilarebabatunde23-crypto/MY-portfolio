// ========================================================
// SANITY CONFIGURATION
// ========================================================
// 1. Get your Project ID from https://manage.sanity.io
// 2. Replace 'YOUR_PROJECT_ID' with your actual Project ID below
// 3. In Sanity Dashboard -> API -> CORS Origins:
//    Add your local server (e.g. http://localhost:5500, http://127.0.0.1:5500)
//    and your deployed portfolio domain.
// ========================================================

const SANITY_CONFIG = {
  projectId: 'YOUR_PROJECT_ID', // <-- Put your Sanity project ID here
  dataset: 'production',        // Default dataset
  apiVersion: '2024-01-01',     // Sanity API version
  useCdn: true,                 // true = fast edge CDN cache (recommended for portfolio)
};
