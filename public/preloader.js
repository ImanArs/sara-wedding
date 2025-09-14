(() => {
  function addOverlay() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'preloader-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      background: '#FAF8F1',
      zIndex: '999999',
      opacity: '1',
      transition: 'opacity 600ms ease',
      pointerEvents: 'all',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    // Optional: small fade-in to avoid harsh pop-in
    overlay.style.opacity = '1';

    // Ensure top
    try {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {}

    // Insert before app mounts
    document.body.prepend(overlay);

    // Inject minimal scoped styles for centered text only
    const style = document.createElement('style');
    style.textContent = `
      #preloader-overlay .preloader-text { position: relative; z-index: 2; text-align: center; font-size: 18px; letter-spacing: 0.08em; color: #2a2a2a; text-transform: none; font-weight: 400; opacity: 0.9; }
    `;
    document.head.appendChild(style);

    // Centered welcome text only
    const text = document.createElement('div');
    text.className = 'preloader-text';
    text.textContent = 'Добро пожаловать';
    overlay.appendChild(text);

    // Prevent background scroll while overlay is shown
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    // Preload critical images to give the page time to render visuals
    const CRITICAL_ASSETS = [
      '/bg/bg_2.png',
      '/bg/leaf-watermark.png',
      '/fl/right_bottom.png',
      '/fl/right_bottom_2.png',
      '/fl/roses.png',
      '/fl/lilia.png',
      '/fl/main_top.png',
      '/fl/main_bottom.png',
      '/fl/top.png'
    ];

    function preload(url) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ url, ok: true });
        img.onerror = () => resolve({ url, ok: false });
        img.src = url;
      });
    }

    const minDelay = 2000; // minimum time to keep overlay
    const maxDelay = 8000; // safety cap to avoid waiting forever

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const allPreloads = Promise.all(CRITICAL_ASSETS.map(preload));

    // Hide when: (minDelay passed) AND (all images loaded OR maxDelay reached)
    Promise.all([wait(minDelay), Promise.race([allPreloads, wait(maxDelay)])]).then(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }

      requestAnimationFrame(() => {
        overlay.style.opacity = '0';
        const cleanup = () => {
          overlay.removeEventListener('transitionend', cleanup);
          // restore scroll
          document.documentElement.style.overflow = prevOverflow;
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        };
        overlay.addEventListener('transitionend', cleanup, { once: true });

        // Fallback remove in case transitionend doesn't fire
        setTimeout(() => {
          document.documentElement.style.overflow = prevOverflow;
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 1200);
      });
    });
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', addOverlay, { once: true });
  } else {
    addOverlay();
  }
})();
