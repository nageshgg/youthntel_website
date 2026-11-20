// Enhance the navigation only when the controls and anchor targets are present.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (menu && nav) {
  const header = menu.closest('.site-header');
  const mobileViewport = matchMedia('(max-width: 760px)');
  const items = Array.from(nav.querySelectorAll('a[href^="#"]'), link => ({
    link,
    section: document.getElementById(link.hash.slice(1)),
  })).filter(item => item.section);

  function setMenu(open) {
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  function menuIsOpen() {
    return menu.getAttribute('aria-expanded') === 'true';
  }

  menu.hidden = false;
  header.classList.add('menu-enabled');
  menu.addEventListener('click', () => setMenu(!menuIsOpen()));
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuIsOpen()) {
      setMenu(false);
      menu.focus();
    }
  });
  header.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setMenu(false);
  });
  mobileViewport.addEventListener('change', () => {
    if (mobileViewport.matches && nav.contains(document.activeElement)) menu.focus();
    setMenu(false);
  });

  for (const { link, section } of items) {
    link.addEventListener('click', event => {
      if (!menuIsOpen() || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      setMenu(false);
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    });
  }

  function setActiveSection() {
    let active = items[0];
    const boundary = header.getBoundingClientRect().bottom + 48;
    for (const item of items) {
      if (item.section.getBoundingClientRect().top <= boundary) active = item;
    }
    const page = document.documentElement;
    if (page.scrollHeight - page.clientHeight - scrollY < 2) active = items.at(-1);
    for (const item of items) {
      if (item === active) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  }

  let pendingFrame = 0;
  function updateNavigation() {
    if (pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => {
      pendingFrame = 0;
      setActiveSection();
    });
  }

  addEventListener('scroll', updateNavigation, { passive: true });
  addEventListener('resize', updateNavigation);
  addEventListener('pageshow', updateNavigation);
  setActiveSection();
}
