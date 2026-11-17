(() => {
  if (customElements.get('eg-logo-hero')) return;
    const PARTS = [
    { fill: 'url(#egN)', z: 0, from: [-90, 30, -8], d: 'M 380 13.65 Q 372.75 51.25 363.8 75.45 349.9 110.85 327.75 144.1 311.75 168.15 287.4 196.15 265.2 160.3 232.5 127.7 189.15 83.65 132.35 51.75 77.8 21.25 15.1 4 L 15.45 344.4 Q 26.45 309.7 38.05 282.6 51.5 250.9 67.8 224.1 L 67.8 95.5 Q 114.7 109.6 156.25 133.8 L 156.35 133.9 156.35 133.8 Q 170.95 142.2 179.6 147.55 192.2 155.55 201.6 163.15 L 201.6 163.25 Q 233.3 184.05 264.4 217.75 204.05 273.95 125.45 308.2 94.55 320.75 68.85 328.95 L 68.5 288.15 Q 44.1 320.15 29.2 343.85 13.2 392.55 15.35 440.8 92.95 422.45 166.95 373.75 214.05 342.75 252.65 303.25 291.75 263.15 320.7 215.7 349.7 168.25 364.65 118.5 380.3 66.3 380 13.65' },
    { fill: 'url(#egG1)', z: 1.2, from: [110, 70, 10], d: 'M 379.25 122.45 Q 368.1 155.05 356.55 180.05 343.1 209.35 326.6 233.75 L 326.5 349.95 Q 291.35 339.8 255.5 322.1 L 233.95 342.65 213.05 360.7 Q 291.05 417.6 379.6 440.4 L 379.25 122.45 Z' },
    { fill: 'url(#egG2)', z: 1.6, from: [-120, 60, -12], d: 'M 201.6 163.25 L 201.6 163.15 Q 192.2 155.55 179.6 147.55 170.95 142.2 156.35 133.8 L 156.35 133.9 Q 113.45 176.35 80.45 231.55 48.65 284.6 29.2 343.85 44.1 320.15 68.5 288.15 85.9 263 115.85 232.3 149.1 197.8 195.85 167.95 200.1 165.2 201.6 163.25 Z' },
    { fill: 'url(#egG3)', z: 1.9, from: [80, -120, 12], d: 'M 380 13.65 Q 380.5 10.75 380.5 9.3 380.5 6.75 379.25 4.75 333.8 16.75 290.85 37.95 250.05 58.1 209.65 87.4 233.6 103.8 258.85 136 295.9 120.3 326.3 111.7 L 327.75 144.1 Q 349.9 110.85 363.8 75.45 372.75 51.25 380 13.65 Z' }
  ];
  const ease = x => 1 - Math.pow(1 - x, 4);
  class LogoHero extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
      const paths = PARTS.map((p, i) => `<g data-i="${i}"><g><path d="${p.d}" fill="${p.fill}"></path>${i === 0 ? `<path d="${p.d}" fill="none" stroke="rgba(170,200,255,.55)" stroke-width="2"></path>` : ''}<path d="${p.d}" fill="url(#egShine)" style="mix-blend-mode:screen"></path><path d="${p.d}" fill="url(#egSpot)" style="mix-blend-mode:screen"></path></g></g>`).join('');
      root.innerHTML = `<style>
        :host{display:block;position:relative;width:100%;height:100%;cursor:pointer;perspective:1100px}
        .stage{position:absolute;inset:0;transform-style:preserve-3d;will-change:transform}
        .glow{position:absolute;left:50%;top:50%;width:70%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(225,183,132,.28),rgba(80,130,255,.12) 45%,transparent 70%);filter:blur(20px);pointer-events:none}
        svg{position:absolute;left:8%;top:10%;width:84%;height:80%;overflow:visible;filter:drop-shadow(0 24px 40px rgba(0,0,0,.45)) drop-shadow(0 0 18px rgba(225,183,132,.25))}
        g[data-i]{transform-box:view-box;transform-origin:197px 222px}
      </style>
      <div class="glow"></div>
      <div class="stage"><svg viewBox="0 0 395 444" aria-label="EVERYGATE">
        <defs>
          <linearGradient id="egG1" gradientUnits="userSpaceOnUse" x1="213.075" y1="281.3" x2="379.525" y2="281.3"><stop offset="0" stop-color="#916445"/><stop offset="1" stop-color="#E1B784"/></linearGradient>
          <linearGradient id="egG2" gradientUnits="userSpaceOnUse" x1="29.19" y1="238.75" x2="201.91" y2="238.75"><stop offset="0" stop-color="#916445"/><stop offset="1" stop-color="#E1B784"/></linearGradient>
          <linearGradient id="egG3" gradientUnits="userSpaceOnUse" x1="209.64" y1="74.35" x2="380.46" y2="74.35"><stop offset="0" stop-color="#916445"/><stop offset="1" stop-color="#E1B784"/></linearGradient>
          <linearGradient id="egN" gradientUnits="userSpaceOnUse" x1="15.09" y1="222.35" x2="379.91" y2="222.35"><stop offset="0" stop-color="#2a4a80"/><stop offset=".55" stop-color="#3a6098"/><stop offset="1" stop-color="#4a74ad"/></linearGradient>
          <linearGradient id="egShine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="300" y2="300"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
          <radialGradient id="egSpot" gradientUnits="userSpaceOnUse" cx="-999" cy="-999" r="170"><stop offset="0" stop-color="#fff3d6" stop-opacity=".85"/><stop offset=".4" stop-color="#E1B784" stop-opacity=".35"/><stop offset="1" stop-color="#E1B784" stop-opacity="0"/></radialGradient>
        </defs>${paths}</svg></div>`;
      this.stage = root.querySelector('.stage'); this.svg = root.querySelector('svg'); this.glow = root.querySelector('.glow');
      this.groups = [...root.querySelectorAll('g[data-i]')];
      this.shine = root.getElementById('egShine'); this.spot = root.getElementById('egSpot');
      this.m = { x: 0, y: 0, tx: 0, ty: 0, a: 0, ta: 0 };
      this.t0 = performance.now(); this.burst = -1e9;
      this.addEventListener('pointermove', e => { const r = this.getBoundingClientRect(); this.m.tx = (e.clientX - r.left) / r.width - .5; this.m.ty = (e.clientY - r.top) / r.height - .5; this.m.ta = 1; this._ce = e; });
      this.addEventListener('pointerleave', () => { this.m.ta = 0; this._ce = null; });
      this.addEventListener('click', () => { this.burst = performance.now(); });
      const loop = now => { this.raf = requestAnimationFrame(loop); if (!document.hidden) this.frame(now); };
      this.raf = requestAnimationFrame(loop);
    }
    disconnectedCallback() { cancelAnimationFrame(this.raf); this._init = false; }
    frame(now) {
      const t = (now - this.t0) / 1000, m = this.m;
      m.x += (m.tx * m.ta - m.x) * .08; m.y += (m.ty * m.ta - m.y) * .08; m.a += (m.ta - m.a) * .08;
      const fy = Math.sin(t * 1.1) * 8;
      this.stage.style.transform = `translateY(${fy}px) rotateY(${m.x * 26 + Math.sin(t * .5) * 6}deg) rotateX(${-m.y * 20}deg)`;
      const bt = Math.min(1, (now - this.burst) / 1400), bk = bt < 1 ? Math.sin(Math.PI * bt) : 0;
      this.groups.forEach((g, i) => {
        const p = PARTS[i], it = Math.min(1, Math.max(0, (t - i * .18) / 1.3)), k = 1 - ease(it);
        const dx = p.from[0] * k + m.x * p.z * 22 + (p.from[0] * .25) * bk, dy = p.from[1] * k + m.y * p.z * 22 + (p.from[1] * .25) * bk, rot = p.from[2] * k;
        g.setAttribute('transform', `translate(${dx.toFixed(2)} ${dy.toFixed(2)}) rotate(${rot.toFixed(2)} 197 222)`);
        g.style.opacity = Math.min(1, it * 1.6);
      });
      const sp = ((t % 4.5) / 4.5) * 1500 - 500;
      this.shine.setAttribute('gradientTransform', `translate(${sp} ${sp * .2})`);
      if (this._ce) {
        const r = this.svg.getBoundingClientRect(), vb = 395 / r.width;
        this.spot.setAttribute('cx', ((this._ce.clientX - r.left) * vb).toFixed(1)); this.spot.setAttribute('cy', ((this._ce.clientY - r.top) * (444 / r.height)).toFixed(1));
      } else { this.spot.setAttribute('cx', -999); this.spot.setAttribute('cy', -999); }
      const pulse = .85 + Math.sin(t * 1.6) * .15 + m.a * .25 + bk * .4;
      this.glow.style.opacity = pulse.toFixed(3);
      this.glow.style.transform = `translate(calc(-50% + ${m.x * 30}px), calc(-50% + ${m.y * 30}px)) scale(${1 + bk * .15})`;
    }
  }
  customElements.define('eg-logo-hero', LogoHero);
})();
