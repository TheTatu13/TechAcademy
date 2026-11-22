/**
 * Camp de particule pentru fundalul paginii de start. Particulele plutesc usor,
 * se feresc de cursor si revin la locul lor. Zona din centru ramane goala, ca
 * textul si cautarea sa nu concureze cu fundalul.
 */
const canvas = document.getElementById('particle-field') as HTMLCanvasElement | null;
const ctx = canvas?.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface Particle {
  hx: number; // pozitia "de acasa"
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  violet: boolean;
}

if (canvas && ctx) {
  const particles: Particle[] = [];
  const pointer = { x: -9999, y: -9999 };
  let width = 0;
  let height = 0;
  let raf = 0;
  const RADIUS = 130; // raza de influenta a cursorului

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(Math.round((width * height) / 7000), 170);
    particles.length = 0;
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        hx: x, hy: y, x, y, vx: 0, vy: 0,
        r: 0.8 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        violet: Math.random() < 0.35,
      });
    }
  };

  /** 0 in centrul paginii (zona de text), 1 spre margini. */
  const edgeFactor = (x: number, y: number) => {
    const dx = (x - width / 2) / (width * 0.3);
    const dy = (y - 380) / 330;
    const d = Math.sqrt(dx * dx + dy * dy);
    return Math.min(1, Math.max(0, (d - 0.85) / 0.6));
  };

  const draw = (time: number) => {
    const dark = document.documentElement.classList.contains('dark');
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      // plutire lenta in jurul pozitiei de acasa
      const tx = p.hx + Math.cos(time / 2600 + p.phase) * 6;
      const ty = p.hy + Math.sin(time / 3100 + p.phase) * 6;

      // forta de revenire
      p.vx += (tx - p.x) * 0.02;
      p.vy += (ty - p.y) * 0.02;

      // cursorul impinge particulele
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < RADIUS && dist > 0.1) {
        const force = (1 - dist / RADIUS) * 2.2;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.vx *= 0.86;
      p.vy *= 0.86;
      p.x += p.vx;
      p.y += p.vy;

      const alpha = edgeFactor(p.x, p.y) * (dark ? 0.75 : 0.6);
      if (alpha < 0.02) continue;
      ctx.fillStyle = p.violet
        ? dark ? `rgba(167,139,250,${alpha})` : `rgba(124,58,237,${alpha})`
        : dark ? `rgba(103,232,249,${alpha})` : `rgba(8,145,178,${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  const start = () => {
    if (!raf) raf = requestAnimationFrame(draw);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  });
  document.addEventListener('pointerleave', () => {
    pointer.x = pointer.y = -9999;
  });
  // Nu consumam CPU cat timp tab-ul e ascuns.
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  if (reduceMotion) {
    // Fara animatie: un singur cadru static.
    draw(0);
    stop();
  } else {
    start();
  }
}
