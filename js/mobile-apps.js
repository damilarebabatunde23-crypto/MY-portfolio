// MOBILE APPS SHOWCASE
(function () {
  const container = document.getElementById('app-showcase');
  if (!container) return;
  DATA.mobileApps.forEach((app, i) => {
    const div = document.createElement('div');
    div.className = 'app-feature';
    div.innerHTML = `
      <div class="app-mockup-wrap ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
        <div class="app-mockup">
          <div class="app-mockup-screen" style="background:${app.color}">
            <span>${app.emoji}</span>
            <p>${app.name}</p>
          </div>
        </div>
      </div>
      <div class="app-info ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}">
        <span class="app-info-tag">${app.tag}</span>
        <h3>${app.name}</h3>
        <p>${app.desc}</p>
        <ul class="app-features-list">
          ${app.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="app-download-btns">
          ${app.appStore ? `<a href="${app.appStore}" target="_blank" class="btn btn-ghost"><i class="fab fa-apple"></i> App Store</a>` : ''}
          ${app.playStore ? `<a href="${app.playStore}" target="_blank" class="btn btn-ghost"><i class="fab fa-google-play"></i> Play Store</a>` : ''}
        </div>
      </div>`;
    container.appendChild(div);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.app-mockup-wrap, .app-info').forEach(el => obs.observe(el));
})();
