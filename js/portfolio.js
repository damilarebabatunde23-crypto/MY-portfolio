// PORTFOLIO – Project grid with filter and modal
(function () {
  const grid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  function renderProjects(filter) {
    grid.innerHTML = '';
    DATA.projects.forEach((p, i) => {
      const hidden = filter !== 'all' && p.filter !== filter;
      const card = document.createElement('div');
      card.className = 'project-card reveal-up' + (hidden ? ' hidden' : '');
      card.style.transitionDelay = (i * 0.07) + 's';
      card.innerHTML = `
        <div class="project-preview">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title}" class="project-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="project-preview-fallback" style="display:none"><div class="project-preview-bg" style="background:linear-gradient(135deg,${p.color}55,${p.color}22)"></div><div class="project-preview-icon">${p.icon}</div></div>`
            : `<div class="project-preview-bg" style="background:linear-gradient(135deg,${p.color}55,${p.color}22)"></div><div class="project-preview-icon">${p.icon}</div>`
          }
          <div class="project-overlay">
            <button class="btn btn-primary btn-sm open-modal-btn" data-id="${p.id}">
              <i class="fas fa-eye"></i> Details
            </button>
          </div>
        </div>
        <div class="project-body">
          <div class="project-category">${p.category}</div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank" class="btn btn-ghost"><i class="fab fa-github"></i> GitHub</a>` : ''}
            ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
            ${p.store ? `<a href="${p.store}" target="_blank" class="btn btn-outline"><i class="fas fa-mobile-alt"></i> Store</a>` : ''}
          </div>
        </div>`;
      grid.appendChild(card);
    });
    // re-observe reveals
    document.querySelectorAll('.project-card:not(.hidden)').forEach(el => {
      revealObs.observe(el);
    });
    // bind modal buttons
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.id));
    });
  }

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1 });

  renderProjects('all');

  // Filter
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Modal
  function openModal(id) {
    const p = DATA.projects.find(x => String(x.id) === String(id));
    if (!p) return;
    modalContent.innerHTML = `
      <div class="modal-proj-header">
        <div class="modal-proj-icon">${p.icon}</div>
        <div class="modal-proj-title">${p.title}</div>
        <div class="project-tags" style="margin-bottom:16px">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="modal-proj-desc">${p.fullDesc}</div>
        <div class="modal-proj-links">
          ${p.github ? `<a href="${p.github}" target="_blank" class="btn btn-ghost"><i class="fab fa-github"></i> View Code</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
          ${p.store ? `<a href="${p.store}" target="_blank" class="btn btn-primary"><i class="fas fa-mobile-alt"></i> App Store</a>` : ''}
        </div>
      </div>`;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();
