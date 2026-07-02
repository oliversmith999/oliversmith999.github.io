// nav.js — shared navigation for all pages
// Usage: <div id="nav-placeholder"></div><script src="../nav.js"></script>
// For index.html: <div id="nav-placeholder"></div><script src="nav.js"></script>

(function () {
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const root = isIndex ? '' : '../';

  const navHTML = `
<nav id="navbar">
  <a href="${root}index.html" class="nav-logo">
    <span class="nav-logo-main">Smith Real Estate Group</span>
    <span class="nav-logo-sub">Welcome2Utah.com</span>
  </a>
  <ul class="nav-center">
    <li><a href="${root}index.html#listings">Listings</a></li>
    <li><a href="${root}region-guide.html">Region Guide</a></li>
    <li><a href="${root}index.html#about">About Hugh</a></li>
    <li><a href="${root}index.html#contact">Contact</a></li>
  </ul>
  <div class="nav-right">
    <a href="tel:8016999600" class="nav-phone">(801) 699-9600</a>
    <a href="${root}index.html#contact" class="nav-btn">Connect With Hugh</a>
  </div>
  <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="${root}index.html#listings" onclick="closeMobileMenu()">Listings</a>
  <a href="${root}region-guide.html" onclick="closeMobileMenu()">Region Guide</a>
  <a href="${root}index.html#about" onclick="closeMobileMenu()">About Hugh</a>
  <a href="${root}index.html#contact" onclick="closeMobileMenu()">Contact</a>
  <a href="tel:8016999600" class="mobile-phone">📞 (801) 699-9600</a>
  <a href="${root}index.html#contact" class="mobile-cta" onclick="closeMobileMenu()">Connect With Hugh</a>
</div>
`;

  const navStyles = `
<style id="nav-shared-styles">
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --nav-height: 72px;
    --black: #0a0a0a; --off-black: #111110; --dark: #1c1c1b; --mid: #4a4a48;
    --muted: #8a8a87; --border: #e2e0db; --dark-cream: #e8e0cb; --cream: #f5f3ee;
    --white: #fdfcfa; --accent: #efede9; --accent-light: #d4b07a; --accent-ligher: #dabf97;
  }
  html { scroll-behavior: smooth; font-size: 16px; }
  body {
    font-family: 'Outfit', sans-serif;
    background: var(--white);
    color: var(--dark);
    -webkit-font-smoothing: antialiased;
    padding-top: var(--nav-height);
  }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 500;
    height: var(--nav-height);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 3.5rem;
    transition: background 0.3s, border-color 0.3s;
  }
  nav.scrolled {
    background: rgba(253,252,250,0.96);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
  }

  .nav-logo { display: flex; flex-direction: column; gap: 1px; text-decoration: none; flex-shrink: 0; }
  .nav-logo-main { font-family: 'Cormorant Garamond', serif; font-size: 2.75rem; font-weight: 600; color: var(--white); letter-spacing: 0.04em; line-height: 1; transition: color 0.3s; white-space: nowrap; }
  .nav-logo-main { font-family: 'Cormorant Garamond', serif; font-size: 2.75rem; font-weight: 600; color: var(--white); letter-spacing: 0.04em; line-height: 1; transition: color 0.3s; white-space: nowrap; }
  nav.scrolled .nav-logo-main { color: var(--black); }
  .nav-logo-sub { font-size: 0.9rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--white); font-weight: 500; }
  nav.scrolled .nav-logo-sub { color: var(--mid); }

  .nav-center { display: flex; gap: 2.5rem; list-style: none; align-items: center; }
  .nav-center > li { position: relative; }
  .nav-center a { font-size: 0.90rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; text-decoration: none; color: rgba(253,252,250,0.8); transition: color 0.2s; }
  nav.scrolled .nav-center a { color: var(--mid); }
  .nav-center a:hover { color: var(--accent) !important; }

  .nav-right { display: flex; align-items: center; gap: 1.5rem; }
  .nav-phone { font-size: 1rem; font-weight: 500; color: rgba(253,252,250,0.7); text-decoration: none; transition: color 0.3s; letter-spacing: 0.02em; }
  nav.scrolled .nav-phone { color: var(--mid); }
  .nav-phone:hover { color: var(--accent) !important; }
  .nav-btn { background: var(--accent-light); color: var(--white); padding: 0.55rem 1.4rem; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; transition: background 0.2s; }
  .nav-btn:hover { background: var(--accent-ligher); }

  .nav-hamburger { display: none; flex-direction: column; justify-content: space-between; width: 28px; height: 18px; cursor: pointer; background: none; border: none; padding: 0; z-index: 600; }
  .nav-hamburger span { display: block; width: 100%; height: 1.5px; background: var(--white); transition: transform 0.3s ease, opacity 0.3s ease, background 0.3s; transform-origin: center; }
  nav.scrolled .nav-hamburger span { background: var(--black); }
  .nav-hamburger.open span:nth-child(1) { transform: translateY(8.25px) rotate(45deg); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-8.25px) rotate(-45deg); }

  .mobile-menu {
    display: none; position: fixed;
    top: var(--nav-height);
    left: 0; right: 0;
    background: rgba(253,252,250,0.97); backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border); z-index: 490;
    transform: translateY(-8px); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: all; }
  .mobile-menu a { display: block; padding: 1.1rem 1.5rem; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mid); text-decoration: none; border-bottom: 1px solid var(--border); transition: color 0.2s, background 0.2s; }
  .mobile-menu a:hover { color: var(--black); background: var(--cream); }
  .mobile-city-link { padding-left: 2.5rem !important; font-size: 0.72rem !important; background: var(--cream); }
  .mobile-menu .mobile-phone { display: flex; align-items: center; gap: 0.6rem; padding: 1.1rem 1.5rem; font-size: 0.95rem; font-weight: 500; color: var(--mid); text-decoration: none; border-bottom: 1px solid var(--border); }
  .mobile-menu .mobile-cta { display: block; margin: 1.2rem 1.5rem; background: var(--accent-light); color: var(--white) !important; text-align: center; padding: 0.85rem !important; font-size: 0.68rem !important; border-bottom: none !important; letter-spacing: 0.16em; }
  .mobile-menu .mobile-cta:hover { background: var(--accent-ligher) !important; }

  @media (max-width: 768px) {
    .nav-center, .nav-phone, .nav-btn { display: none; }
    .nav-logo-main { font-size: 1.6rem; }
    .nav-logo-sub { font-size: 0.65rem; letter-spacing: 0.14em; }
    nav { padding: 0 1.5rem; }
    .nav-hamburger { display: flex; }
    .mobile-menu { display: block; }
  }
</style>
`;

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navStyles + navHTML;
  }

  document.addEventListener('DOMContentLoaded', initNav);
  if (document.readyState !== 'loading') initNav();

  function initNav() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
          closeMobileMenu();
        }
      });
    }
  }

  window.closeMobileMenu = function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    document.body.style.overflow = '';
  };

})();