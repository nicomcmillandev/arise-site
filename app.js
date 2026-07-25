/* Arise marketing site — minimal interactivity: mobile nav + FAQ single-open. */
(() => {
  'use strict';

  // Mobile hamburger nav
  const header = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close the menu after tapping a link
    header.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => {
        header.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // FAQ: keep only one item open at a time
  const faqs = document.querySelectorAll('.faq__item');
  faqs.forEach((d) =>
    d.addEventListener('toggle', () => {
      if (d.open) faqs.forEach((o) => { if (o !== d) o.open = false; });
    })
  );
})();
