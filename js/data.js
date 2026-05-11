// ================================================
// DATA.JS – Portfolio data + Django API connector
// ================================================
// HOW IT WORKS:
//   1. Page loads with static DATA (so nothing is blank)
//   2. After page is ready, fetches your Django API
//   3. Overwrites DATA with real content from the DB
//   4. Re-renders every section with your actual data
// ================================================

const API_BASE = 'http://127.0.0.1:8000/api';

// ── STATIC DATA (shown instantly, replaced by API data) ──────────────
const DATA = {
  profile: null,  // filled from API
  skills: [
    { name: 'Flutter', icon: '🐦', color: '#54C5F8' },
    { name: 'Django', icon: '🎸', color: '#092E20' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'REST APIs', icon: '🔌', color: '#6D28D9' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'Git/GitHub', icon: '🐙', color: '#f0f6fc' },
    { name: 'UI/UX Design', icon: '🎨', color: '#FF4785' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
  ],
  skillBars: [
    { label: 'Flutter & Dart', pct: 92 },
    { label: 'Python & Django', pct: 88 },
    { label: 'JavaScript / React', pct: 85 },
    { label: 'REST API Design', pct: 90 },
    { label: 'PostgreSQL & Firebase', pct: 80 },
    { label: 'UI/UX Design', pct: 78 },
  ],
  projects: [
    {
      id: 1, filter: 'mobile', icon: '📱', color: '#7c3aed', image: null,
      category: 'Mobile App', title: 'FitTrack Pro',
      desc: 'A premium fitness tracking app built with Flutter.',
      fullDesc: 'FitTrack Pro is a comprehensive fitness app with real-time workout logging, analytics, and AI-powered recommendations.',
      tech: ['Flutter', 'Firebase', 'Dart', 'REST API'],
      github: 'https://github.com', demo: null, store: 'https://play.google.com',
    },
    {
      id: 2, filter: 'web', icon: '🛒', color: '#06b6d4', image: null,
      category: 'Web App', title: 'ShopNest E-Commerce',
      desc: 'Full-featured e-commerce platform with Django backend and React frontend.',
      fullDesc: 'ShopNest features Django REST API, React frontend, Stripe payments, and real-time inventory management.',
      tech: ['Django', 'React', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com', demo: 'https://example.com', store: null,
    },
    {
      id: 3, filter: 'backend', icon: '🔗', color: '#f59e0b', image: null,
      category: 'Backend System', title: 'API Gateway Service',
      desc: 'High-performance API gateway built with Python handling 50k+ daily requests.',
      fullDesc: 'A robust API gateway with JWT auth, rate limiting, logging, and Prometheus metrics.',
      tech: ['Python', 'FastAPI', 'Redis', 'Docker'],
      github: 'https://github.com', demo: null, store: null,
    },
  ],
  mobileApps: [
    {
      name: 'FitTrack Pro', tag: 'Health & Fitness', emoji: '💪',
      color: 'linear-gradient(135deg, #4f46e5, #4f46e5)',
      desc: 'A premium fitness tracking app that helps you log workouts and track progress.',
      features: ['Real-time workout logging', 'AI-powered recommendations', 'Progress analytics', 'Social challenges'],
      appStore: 'https://apps.apple.com', playStore: 'https://play.google.com',
    },
  ],
  services: [
    { icon: '📱', title: 'Mobile App Development', desc: 'Cross-platform iOS & Android apps using Flutter.', features: ['Flutter / Dart', 'iOS & Android', 'Push Notifications', 'Offline Support'] },
    { icon: '🌐', title: 'Web Development', desc: 'Modern web applications using React and Django.', features: ['React / Next.js', 'SEO Optimized', 'Responsive Design', 'PWA Support'] },
    { icon: '🔌', title: 'Backend API Development', desc: 'Scalable REST APIs with Django REST Framework.', features: ['Django REST Framework', 'JWT Authentication', 'Rate Limiting', 'API Documentation'] },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful interface design with Figma.', features: ['Figma Design', 'Design Systems', 'Prototyping', 'User Research'] },
    { icon: '🗄️', title: 'Database Design', desc: 'Efficient PostgreSQL and Firebase architectures.', features: ['PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization'] },
    { icon: '💡', title: 'Software Consultation', desc: 'Expert technical guidance on architecture.', features: ['Architecture Review', 'Code Audit', 'Tech Stack Advice', 'Roadmapping'] },
  ],
  timeline: [
    { period: '2023 – Present', role: 'Senior Full Stack Developer', org: 'TechVision Inc.', type: 'work', desc: 'Leading development of a SaaS platform serving 100k+ users.' },
    { period: '2022 – 2023', role: 'Mobile App Developer', org: 'StartupLaunch Co.', type: 'work', desc: 'Built and shipped 8 Flutter apps to the App Store and Play Store.' },
    { period: '2018 – 2022', role: 'BSc Computer Science', org: 'University of Technology', type: 'education', desc: 'Graduated with First Class Honours. Specialized in Software Engineering.' },
    { period: '2023', role: 'Google Associate Cloud Engineer', org: 'Google Cloud', type: 'cert', desc: 'Certified in cloud infrastructure and Kubernetes.' },
    { period: '2022', role: 'AWS Certified Developer', org: 'Amazon Web Services', type: 'cert', desc: 'Certified in AWS core services and serverless architecture.' },
  ],
  testimonials: [
    { name: 'Sarah Johnson', company: 'CEO, StartupLaunch', emoji: '👩‍💼', text: 'Delivered our Flutter app in record time with stunning attention to detail. Truly a 10x developer.', stars: 5 },
    { name: 'Marcus Chen', company: 'CTO, TechVision Inc.', emoji: '👨‍💻', text: 'The Django backend handles our peak load of 50k concurrent users flawlessly.', stars: 5 },
    { name: 'Emily Rodriguez', company: 'Product Manager, FinApp', emoji: '👩‍🔬', text: 'Working together was a pleasure. A beautiful app our users absolutely love.', stars: 5 },
  ],
  resumeDocs: [
    { icon: '📄', title: 'Curriculum Vitae', subtitle: 'Updated 2025', file: null, preview: true, download: true },
    { icon: '🏆', title: 'Google Cloud Certificate', subtitle: 'Associate Cloud Engineer', file: null, preview: true, download: true },
    { icon: '☁️', title: 'AWS Developer Certificate', subtitle: 'AWS Certified Developer', file: null, preview: true, download: true },
    { icon: '🎓', title: 'University Degree', subtitle: 'BSc Computer Science', file: null, preview: true, download: true },
  ],
};


// ── APPLY PROFILE TO DOM ─────────────────────────────────────────────
function applyProfile(profile) {
  if (!profile) return;

  // Hero name
  const heroName = document.querySelector('.hero-name .gradient-text');
  if (heroName && profile.name) heroName.textContent = profile.name;

  // Hero description
  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc && profile.description) heroDesc.textContent = profile.description;

  // Profile photo in About section
  if (profile.profile_picture) {
    const img = document.getElementById('profile-photo');
    const fallback = document.getElementById('avatar-fallback');
    if (img) {
      img.src = profile.profile_picture;
      img.classList.remove('hidden');
      if (fallback) fallback.classList.add('hidden');
    }
  }

  // Location badge
  const locSpan = document.querySelector('.about-badge-card span');
  if (locSpan && profile.location) locSpan.textContent = profile.location;

  // About section heading
  const aboutH3 = document.querySelector('.about-content h3');
  if (aboutH3 && profile.name) aboutH3.textContent = `Hi, I'm ${profile.name}`;

  // About description paragraph
  const aboutP = document.querySelector('.about-content > p');
  if (aboutP && profile.description) aboutP.textContent = profile.description;

  // Social links (hero)
  const socials = {
    'GitHub':    profile.github,
    'LinkedIn':  profile.linkedin,
    'Twitter':   profile.twitter,
    'Dribbble':  profile.dribbble,
    'Instagram': profile.instagram,
  };
  Object.entries(socials).forEach(([label, url]) => {
    if (url) {
      document.querySelectorAll(`.social-icon[aria-label="${label}"]`)
        .forEach(a => a.href = url);
    }
  });

  // Contact info links
  if (profile.email) {
    document.querySelectorAll('a[href^="mailto:"]')
      .forEach(a => a.href = `mailto:${profile.email}`);
    // also fill any email text spans
    document.querySelectorAll('.contact-email, [data-field="email"]')
      .forEach(el => el.textContent = profile.email);
  }
  if (profile.whatsapp) {
    const cleaned = profile.whatsapp.replace(/\D/g, '');
    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')
      .forEach(a => a.href = `https://wa.me/${cleaned}`);
  }

  // CV download button
  const cvBtn = document.querySelector('a[download][href*="cv"]');
  // (CV comes from resumeDocs, handled in resume section)
}


// ── RE-RENDER HELPERS ────────────────────────────────────────────────
function rerenderSkills() {
  const grid = document.querySelector('.skills-grid');
  if (grid) {
    grid.innerHTML = '';
    DATA.skills.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'skill-card reveal-scale revealed';
      card.style.transitionDelay = (i * 0.05) + 's';
      card.innerHTML = `<div class="skill-icon">${s.icon}</div><div class="skill-name">${s.name}</div>`;
      grid.appendChild(card);
    });
  }
  const barsContainer = document.getElementById('skills-bars');
  if (barsContainer) {
    barsContainer.innerHTML = '';
    DATA.skillBars.forEach(s => {
      const item = document.createElement('div');
      item.className = 'skill-bar-item';
      item.innerHTML = `
        <div class="skill-bar-header">
          <span class="skill-bar-label">${s.label}</span>
          <span class="skill-bar-pct">${s.pct}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-pct="${s.pct}" style="width:${s.pct}%"></div>
        </div>`;
      barsContainer.appendChild(item);
    });
  }
}

function rerenderProjects() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DATA.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal-up revealed';
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

  // Rebind modal buttons
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = DATA.projects.find(x => x.id === parseInt(btn.dataset.id));
      if (!p || !modalContent) return;
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
      if (overlay) { overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
    });
  });
}

function rerenderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = '';
  const typeMap = { work: 'type-work', education: 'type-education', cert: 'type-cert' };
  const typeLabel = { work: 'Work Experience', education: 'Education', cert: 'Certification' };
  DATA.timeline.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item reveal-left revealed';
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
}

function rerenderResume() {
  const grid = document.getElementById('resume-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DATA.resumeDocs.forEach((doc, i) => {
    const card = document.createElement('div');
    card.className = 'resume-card reveal-scale revealed';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <div class="resume-card-icon">${doc.icon}</div>
      <div class="resume-card-title">${doc.title}</div>
      <div class="resume-card-subtitle">${doc.subtitle}</div>
      <div class="resume-card-actions">
        ${doc.file && doc.preview ? `<a href="${doc.file}" target="_blank" class="btn btn-ghost btn-sm"><i class="fas fa-eye"></i> Preview</a>` : ''}
        ${doc.file && doc.download ? `<a href="${doc.file}" download class="btn btn-primary btn-sm"><i class="fas fa-download"></i> Download</a>` : ''}
        ${!doc.file ? `<span style="font-size:0.8rem;opacity:0.5;">Upload via Django Admin</span>` : ''}
      </div>`;
    grid.appendChild(card);
  });
}

function rerenderTestimonials() {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  if (!track) return;
  track.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';
  let current = 0;
  DATA.testimonials.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-card';
    slide.innerHTML = `
      <div class="testimonial-inner glass">
        <div class="testimonial-avatar">${t.emoji}</div>
        <div class="testimonial-text">"${t.text}"</div>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-company">${t.company}</div>
        <div class="stars">${'★'.repeat(t.stars)}</div>
      </div>`;
    track.appendChild(slide);
    if (dotsContainer) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  });
  function goTo(n) {
    current = (n + DATA.testimonials.length) % DATA.testimonials.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }
  const prev = document.getElementById('prev-testimonial');
  const next = document.getElementById('next-testimonial');
  if (prev) prev.onclick = () => goTo(current - 1);
  if (next) next.onclick = () => goTo(current + 1);
  setInterval(() => goTo(current + 1), 6000);
}

function rerenderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DATA.services.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal-up revealed';
    card.style.transitionDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
      <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
    grid.appendChild(card);
  });
}

function rerenderMobileApps() {
  const container = document.getElementById('app-showcase');
  if (!container) return;
  container.innerHTML = '';
  DATA.mobileApps.forEach((app, i) => {
    const div = document.createElement('div');
    div.className = 'app-feature';
    div.innerHTML = `
      <div class="app-mockup-wrap reveal-left revealed">
        <div class="app-mockup">
          <div class="app-mockup-screen" style="background:${app.color}">
            <span>${app.emoji}</span><p>${app.name}</p>
          </div>
        </div>
      </div>
      <div class="app-info reveal-right revealed">
        <span class="app-info-tag">${app.tag}</span>
        <h3>${app.name}</h3>
        <p>${app.desc}</p>
        <ul class="app-features-list">${app.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="app-download-btns">
          ${app.appStore ? `<a href="${app.appStore}" target="_blank" class="btn btn-ghost"><i class="fab fa-apple"></i> App Store</a>` : ''}
          ${app.playStore ? `<a href="${app.playStore}" target="_blank" class="btn btn-ghost"><i class="fab fa-google-play"></i> Play Store</a>` : ''}
        </div>
      </div>`;
    container.appendChild(div);
  });
}

// ── MAP API SHAPES ───────────────────────────────────────────────────
function mapProject(p) {
  return {
    id: p.id,
    filter: p.filter_tag || 'web',
    icon: p.icon || '💻',
    color: p.color || '#7c3aed',
    image: p.image || null,
    category: p.category,
    title: p.title,
    desc: p.description,
    fullDesc: p.full_description,
    tech: Array.isArray(p.tech) ? p.tech : [],
    github: p.github || null,
    demo: p.demo || null,
    store: p.store || null,
  };
}

// ── FETCH FROM DJANGO AND REFRESH ───────────────────────────────────
async function connectDjango() {
  try {
    const [profileRes, skillsRes, projectsRes, servicesRes, expRes, testiRes, resumeRes] =
      await Promise.all([
        fetch(`${API_BASE}/profiles/`),
        fetch(`${API_BASE}/skills/`),
        fetch(`${API_BASE}/projects/`),
        fetch(`${API_BASE}/services/`),
        fetch(`${API_BASE}/experiences/`),
        fetch(`${API_BASE}/testimonials/`),
        fetch(`${API_BASE}/resumes/`),
      ]);

    const [profiles, skills, projects, services, experiences, testimonials, resumes] =
      await Promise.all([
        profileRes.json(), skillsRes.json(), projectsRes.json(),
        servicesRes.json(), expRes.json(), testiRes.json(), resumeRes.json(),
      ]);

    // ── Profile ──
    if (profiles.length > 0) {
      DATA.profile = profiles[0];
      applyProfile(profiles[0]);
    }

    // ── Skills ──
    if (skills.length > 0) {
      DATA.skills = skills;
      rerenderSkills();
    }

    // ── Projects ──
    if (projects.length > 0) {
      DATA.projects = projects.map(mapProject);
      rerenderProjects();
    }

    // ── Services ──
    if (services.length > 0) {
      DATA.services = services.map(s => ({
        icon: s.icon, title: s.title, desc: s.description,
        features: Array.isArray(s.features) ? s.features : [],
      }));
      rerenderServices();
    }

    // ── Timeline / Experience ──
    if (experiences.length > 0) {
      DATA.timeline = experiences.map(e => ({
        period: e.period, role: e.role, org: e.organization,
        type: e.type, desc: e.description,
      }));
      rerenderTimeline();
    }

    // ── Testimonials ──
    if (testimonials.length > 0) {
      DATA.testimonials = testimonials.map(t => ({
        name: t.name, company: t.company,
        emoji: t.emoji || '👤', text: t.text, stars: t.stars,
      }));
      rerenderTestimonials();
    }

    // ── Resume / Certificates ──
    if (resumes.length > 0) {
      DATA.resumeDocs = resumes.map(r => ({
        icon: r.icon || '📄', title: r.title, subtitle: r.subtitle,
        file: r.file || null, preview: true, download: true,
      }));
      rerenderResume();
    }

    console.log('✅ Connected to Django API — all sections updated with your real data.');

  } catch (err) {
    console.warn('⚠️ Django not reachable. Showing placeholder data.');
    console.warn('   Start Django with: python manage.py runserver');
  }
}

// ── KICK OFF AFTER PAGE FINISHES LOADING ────────────────────────────
// The other JS files (skills.js, portfolio.js etc.) run first with static data,
// then connectDjango() updates everything with real API data.
window.addEventListener('load', connectDjango);