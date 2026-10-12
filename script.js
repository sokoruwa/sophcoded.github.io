(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('.motion-toggle');
  const progress = document.querySelector('.scroll-progress');
  const layers = [...document.querySelectorAll('[data-parallax]')];
  const stickers = [...document.querySelectorAll('.portrait-sticker')];
  let stored = null;
  try { stored = localStorage.getItem('sophia-motion'); } catch { /* Storage is optional. */ }
  let paused = reducedMotion.matches || stored === 'paused';
  let scheduled = false;
  function render() {
    const total = root.scrollHeight - innerHeight;
    progress.style.width = `${total > 0 ? Math.min(100, scrollY / total * 100) : 0}%`;
    layers.forEach(layer => {
      if (paused) { layer.style.translate = '0 0'; return; }
      const section = layer.closest('section');
      const rect = section.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > innerHeight + 200) return;
      const distance = section.id === 'home' ? -rect.top : innerHeight / 2 - rect.top - rect.height / 2;
      const mobileScale = innerWidth <= 760 ? 0.55 : 1;
      const shift = Math.max(-130, Math.min(130, distance * Number(layer.dataset.parallax) * mobileScale));
      layer.style.translate = `0 ${shift.toFixed(2)}px`;
    });
    scheduled = false;
  }
  function requestRender() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(render); }
  }
  function updateMotion() {
    root.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? 'Enable visual motion' : 'Pause visual motion');
    motionButton.querySelector('span').textContent = paused ? 'off' : 'on';
    stickers.forEach(sticker => { sticker.style.setProperty('--rx', '0deg'); sticker.style.setProperty('--ry', '0deg'); });
    requestRender();
  }
  motionButton.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('sophia-motion', paused ? 'paused' : 'enabled'); } catch { /* Optional preference. */ }
    updateMotion();
  });
  reducedMotion.addEventListener('change', e => { paused = e.matches; updateMotion(); });
  stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
      stickers.forEach(other => {
        const active = other === sticker;
        other.setAttribute('aria-pressed', String(active));
        other.closest('.sticker-layer').classList.toggle('is-front', active);
      });
      document.querySelector('.portrait-caption').textContent = sticker.dataset.caption;
    });
    sticker.addEventListener('pointermove', e => {
      if (paused || e.pointerType !== 'mouse') return;
      const box = sticker.getBoundingClientRect();
      const x = (e.clientX - box.left) / box.width - 0.5;
      const y = (e.clientY - box.top) / box.height - 0.5;
      sticker.style.setProperty('--rx', `${(-y * 9).toFixed(1)}deg`);
      sticker.style.setProperty('--ry', `${(x * 10).toFixed(1)}deg`);
    });
    sticker.addEventListener('pointerleave', () => {
      sticker.style.setProperty('--rx', '0deg'); sticker.style.setProperty('--ry', '0deg');
    });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')); }
  addEventListener('scroll', requestRender, { passive: true });
  addEventListener('resize', requestRender, { passive: true });
  addEventListener('load', requestRender, { once: true });
  updateMotion();
})();
