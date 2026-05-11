// LOADER
(function () {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 15;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    progress.style.width = pct + '%';
    if (pct === 100) {
      setTimeout(() => { loader.classList.add('hidden'); document.body.classList.remove('loading'); }, 300);
    }
  }, 80);
})();
