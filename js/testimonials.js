// TESTIMONIALS SLIDER
(function () {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  if (!track) return;
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

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    current = (n + DATA.testimonials.length) % DATA.testimonials.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.getElementById('prev-testimonial').addEventListener('click', () => goTo(current - 1));
  document.getElementById('next-testimonial').addEventListener('click', () => goTo(current + 1));

  // Auto-advance
  setInterval(() => goTo(current + 1), 6000);
})();
