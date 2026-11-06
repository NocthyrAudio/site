/* ============================================
   NOCTHYR AUDIO - Background particles + floating notes
   Single unified version (replaces the two duplicated/
   broken particle scripts found in the original page).
   Styling lives in css/style.css (#bg-fx, .music-note)
   ============================================ */

(function () {
  'use strict';

  const NOTE_PATH = 'M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z';
  const notesConfig = [
    { left: '8%', width: 28, duration: 18, delay: 0, color: '#a78bfa' },
    { left: '22%', width: 36, duration: 22, delay: 3, color: '#c4b5fd' },
    { left: '45%', width: 24, duration: 16, delay: 7, color: '#8b5cf6' },
    { left: '68%', width: 32, duration: 20, delay: 1.5, color: '#a78bfa' },
    { left: '85%', width: 26, duration: 19, delay: 5, color: '#c4b5fd' }
  ];

  const wrapper = document.createElement('div');
  wrapper.id = 'bg-fx';

  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  wrapper.appendChild(canvas);

  notesConfig.forEach(function (note) {
    const noteEl = document.createElement('div');
    noteEl.className = 'music-note';
    noteEl.style.left = note.left;
    noteEl.style.width = note.width + 'px';
    noteEl.style.animationDuration = note.duration + 's';
    noteEl.style.animationDelay = note.delay + 's';
    noteEl.innerHTML = '<svg viewBox="0 0 24 24" fill="' + note.color + '"><path d="' + NOTE_PATH + '"/></svg>';
    wrapper.appendChild(noteEl);
  });

  document.body.insertBefore(wrapper, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function Particle() { this.reset(true); }
  Particle.prototype.reset = function (initial) {
    this.x = Math.random() * w;
    this.y = initial ? Math.random() * h : h + 10;
    this.r = Math.random() * 1.8 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(Math.random() * 0.45 + 0.15);
    this.alpha = Math.random() * 0.35 + 0.08;
  };
  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10 || this.x < -20 || this.x > w + 20) this.reset(false);
  };
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(139, 92, 246, ' + this.alpha + ')';
    ctx.fill();
  };

  for (let i = 0; i < 60; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(function (p) { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();
