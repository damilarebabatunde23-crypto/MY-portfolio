// SERVICES
(function () {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  DATA.services.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal-up';
    card.style.transitionDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
      <ul class="service-features">
        ${s.features.map(f => `<li>${f}</li>`).join('')}
      </ul>`;
    grid.appendChild(card);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.service-card').forEach(el => obs.observe(el));
})();
