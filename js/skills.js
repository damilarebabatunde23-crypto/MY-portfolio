// SKILLS SECTION
(function () {
  // Skill icon cards
  const grid = document.querySelector('.skills-grid');
  if (grid) {
    DATA.skills.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'skill-card reveal-scale';
      card.style.transitionDelay = (i * 0.05) + 's';
      card.innerHTML = `<div class="skill-icon">${s.icon}</div><div class="skill-name">${s.name}</div>`;
      grid.appendChild(card);
    });
  }

  // Skill progress bars
  const barsContainer = document.getElementById('skills-bars');
  if (barsContainer) {
    DATA.skillBars.forEach(s => {
      const item = document.createElement('div');
      item.className = 'skill-bar-item';
      item.innerHTML = `
        <div class="skill-bar-header">
          <span class="skill-bar-label">${s.label}</span>
          <span class="skill-bar-pct">${s.pct}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-pct="${s.pct}"></div>
        </div>`;
      barsContainer.appendChild(item);
    });

    // Animate bars on scroll
    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
            setTimeout(() => { fill.style.width = fill.dataset.pct + '%'; }, 200);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    barObserver.observe(barsContainer);
  }

  // Re-run reveal for dynamically added cards
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.skill-card').forEach(el => revealObserver.observe(el));
})();
