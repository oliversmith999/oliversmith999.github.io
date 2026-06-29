// footer.js — shared footer for all pages
// Usage: <div id="footer-placeholder"></div><script src="../footer.js"></script>
// For index.html: <div id="footer-placeholder"></div><script src="footer.js"></script>

(function () {
  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const root = isIndex ? '' : '../';

  const footerHTML = `
<footer>
  <div class="footer-top">
    <div>
      <p class="footer-brand-name">Welcome2Utah</p>
      <span class="footer-brand-tag">Hugh Smith Real Estate · REALTOR®</span>
      <p class="footer-brand-desc">Serving buyers and sellers across Park City, Deer Valley, Promontory, and the greater Wasatch Back for over 30 years.</p>
    </div>
    <div>
      <p class="footer-col-title">Explore</p>
      <ul class="footer-links">
        <li><a href="http://realestate.greaterparkcityrealestate.com/idx/11417/mapSearch.php">Map Search</a></li>
        <li><a href="http://www.greaterparkcityrealestate.idxbroker.com/idx/featured">Featured Listings</a></li>
        <li><a href="http://www.greaterparkcityrealestate.idxbroker.com/idx/search/emailupdatesignup">Email Alerts</a></li>
        <li><a href="http://www.greaterparkcityrealestate.com/park_city_golf.html">Golf Communities</a></li>
        <li><a href="https://www.greaterparkcityrealestate.com/deer_valley_ski.html">Ski Properties</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-col-title">Communities</p>
      <ul class="footer-links">
        <li><a href="${root}communities/park-city.html">Park City</a></li>
        <li><a href="${root}communities/deer-valley.html">Deer Valley</a></li>
        <li><a href="${root}communities/heber-midway.html">Heber & Midway</a></li>
        <li><a href="${root}communities/salt-lake-valley.html">Salt Lake Valley</a></li>
        <li><a href="${root}communities/utah-county.html">Utah County</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-col-title">Contact</p>
      <ul class="footer-links">
        <li><a href="tel:8016999600">(801) 699-9600</a></li>
        <li><a href="${root}index.html#contact">Send a Message</a></li>
        <li><a href="http://www.greaterparkcityrealestate.com/deer_valley_buyers.html">Buyer Resources</a></li>
        <li><a href="http://www.greaterparkcityrealestate.com/heber_sellers.html">Seller Resources</a></li>
        <li><a href="https://www.utahmortgageloan.com/pierre/">Lender Resources</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 Welcome2Utah · Hugh Smith Real Estate · All Rights Reserved</p>
    <div class="footer-legal">
      <a href="http://www.greaterparkcityrealestate.com/privacy-policy.html">Privacy Policy</a>
      <a href="http://www.greaterparkcityrealestate.com/terms-of-use.html">Terms of Use</a>
      <a href="http://www.greaterparkcityrealestate.com/license-disclosure.html">License Disclosure</a>
    </div>
  </div>
</footer>
`;

  const footerStyles = `
<style id="footer-shared-styles">
  footer { background: var(--black); padding: 5rem 3.5rem 2rem; }
  .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 4rem; padding-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .footer-brand-name { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: var(--white); margin-bottom: 0.3rem; }
  .footer-brand-tag { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem; display: block; }
  .footer-brand-desc { font-size: 0.82rem; color: rgba(255,255,255,0.35); line-height: 1.7; max-width: 280px; }
  .footer-col-title { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); font-weight: 500; margin-bottom: 1.5rem; }
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .footer-links a { font-size: 0.82rem; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--accent); }
  .footer-bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 2rem; }
  .footer-copy { font-size: 0.72rem; color: rgba(255,255,255,0.2); }
  .footer-legal { display: flex; gap: 2rem; }
  .footer-legal a { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.2); text-decoration: none; transition: color 0.2s; }
  .footer-legal a:hover { color: rgba(255,255,255,0.5); }
  @media (max-width: 1024px) { .footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; } footer { padding: 4rem 2rem 2rem; } }
  @media (max-width: 768px) { .footer-top { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; } }
</style>
`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = footerStyles + footerHTML;
  }
})();
