// TIMELINE
(function () {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  const typeMap = { work: 'type-work', education: 'type-education', cert: 'type-cert' };
  const typeLabel = { work: 'Work Experience', education: 'Education', cert: 'Certification' };
  DATA.timeline.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item reveal-left';
    el.style.transitionDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-type ${typeMap[item.type]}">${typeLabel[item.type]}</span>
        <div class="timeline-period">${item.period}</div>
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-org">${item.org}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>`;
    container.appendChild(el);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
})();
