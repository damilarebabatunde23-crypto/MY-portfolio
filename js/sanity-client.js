// ========================================================
// SANITY CLIENT UTILITY
// ========================================================
// Lightweight, zero-dependency Sanity GROQ fetch client
// ========================================================

const SanityClient = (function () {
  function isConfigured() {
    return (
      typeof SANITY_CONFIG !== 'undefined' &&
      SANITY_CONFIG.projectId &&
      SANITY_CONFIG.projectId !== 'YOUR_PROJECT_ID' &&
      SANITY_CONFIG.projectId.trim() !== ''
    );
  }

  async function fetch(query, params = {}) {
    if (!isConfigured()) {
      return null;
    }

    const base = SANITY_CONFIG.useCdn
      ? `https://${SANITY_CONFIG.projectId}.apicdn.sanity.io`
      : `https://${SANITY_CONFIG.projectId}.api.sanity.io`;

    const url = new URL(
      `${base}/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}`
    );

    url.searchParams.set('query', query);

    Object.entries(params).forEach(([key, val]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(val));
    });

    const response = await window.fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Sanity query failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
  }

  /**
   * Helper to resolve an image asset URL from Sanity image document or reference
   */
  function urlForImage(source, options = {}) {
    if (!source) return null;
    if (typeof source === 'string') return source;
    if (source.asset && source.asset.url) {
      let url = source.asset.url;
      if (options.width) url += `?w=${options.width}&auto=format`;
      return url;
    }
    const ref = source.asset && source.asset._ref ? source.asset._ref : (typeof source === 'object' && source._ref ? source._ref : null);
    if (!ref || !isConfigured()) return null;

    // Sanity ref format: image-5b868e...-1920x1080-png
    const parts = ref.split('-');
    if (parts.length < 4 || parts[0] !== 'image') return null;
    const id = parts[1];
    const dimensions = parts[2];
    const format = parts[3];
    let url = `https://cdn.sanity.io/images/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${id}-${dimensions}.${format}`;
    const params = [];
    if (options.width) params.push(`w=${options.width}`);
    params.push('auto=format');
    if (params.length) url += `?${params.join('&')}`;
    return url;
  }

  /**
   * Helper to resolve a file / document download URL from Sanity file asset
   */
  function urlForFile(source) {
    if (!source) return null;
    if (typeof source === 'string') return source;
    if (source.asset && source.asset.url) return source.asset.url;
    const ref = source.asset && source.asset._ref ? source.asset._ref : (typeof source === 'object' && source._ref ? source._ref : null);
    if (!ref || !isConfigured()) return null;

    // Sanity file ref format: file-xxx-pdf
    const parts = ref.split('-');
    if (parts.length < 3 || parts[0] !== 'file') return null;
    const id = parts[1];
    const format = parts[2];
    return `https://cdn.sanity.io/files/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${id}.${format}`;
  }

  return {
    isConfigured,
    fetch,
    urlForImage,
    urlForFile,
  };
})();
