
(function(){
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light') root.classList.add('light');
  } catch(e){}

  btn && btn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    try { localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark'); } catch(e){}
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    });
  });
})();
