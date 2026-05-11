// RESUME DOCS
(function () {
  const grid = document.getElementById('resume-grid');
  if (!grid) return;
  DATA.resumeDocs.forEach((doc, i) => {
    const card = document.createElement('div');
    card.className = 'resume-card reveal-scale';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <div class="resume-card-icon">${doc.icon}</div>
      <div class="resume-card-title">${doc.title}</div>
      <div class="resume-card-subtitle">${doc.subtitle}</div>
      <div class="resume-card-actions">
        ${doc.preview ? `<a href="${doc.file}" target="_blank" class="btn btn-ghost btn-sm"><i class="fas fa-eye"></i> Preview</a>` : ''}
        ${doc.download ? `<a href="${doc.file}" download class="btn btn-primary btn-sm"><i class="fas fa-download"></i> Download</a>` : ''}
      </div>`;
    grid.appendChild(card);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.resume-card').forEach(el => obs.observe(el));
})();
