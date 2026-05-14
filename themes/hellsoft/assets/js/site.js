// site.js — small enhancements: live clock, scroll progress, intersection reveal.
(() => {
  // --- Live UTC clock in status bar ---
  const clockEl = document.querySelector("[data-clock]");
  if (clockEl) {
    const fmt = (n) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      clockEl.textContent =
        fmt(d.getUTCHours()) + ":" + fmt(d.getUTCMinutes()) + ":" + fmt(d.getUTCSeconds()) + " UTC";
    };
    tick();
    setInterval(tick, 1000);
  }

  // --- Scroll progress bar ---
  const progress = document.querySelector("[data-scroll-progress]");
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = pct.toFixed(2) + "%";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.setAttribute("data-revealed", "true");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

  // --- Smooth anchor nav ---
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
      }
    });
  });

  // --- Hero rotating tag ---
  const tagEl = document.querySelector("[data-rotating-tag]");
  if (tagEl) {
    const tags = JSON.parse(tagEl.dataset.rotatingTag);
    let i = 0;
    setInterval(() => {
      i = (i + 1) % tags.length;
      tagEl.textContent = tags[i];
    }, 2200);
  }
})();
