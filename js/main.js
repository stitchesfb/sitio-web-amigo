document.addEventListener('DOMContentLoaded', function () {
  // Mobile hamburger toggle
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  // Mobile submenu accordions
  document.querySelectorAll('.mobile-nav .has-children > span.top-link').forEach(function (el) {
    el.addEventListener('click', function () {
      el.parentElement.classList.toggle('open');
    });
  });

  // Desktop dropdown via click (also works on touch laptops)
  document.querySelectorAll('.main-nav .has-children > span.top-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var parent = el.parentElement;
      var wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.main-nav .has-children.open').forEach(function (li) {
        li.classList.remove('open');
      });
      if (!wasOpen) parent.classList.add('open');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-nav')) {
      document.querySelectorAll('.main-nav .has-children.open').forEach(function (li) {
        li.classList.remove('open');
      });
    }
  });

  // Cookie banner
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');
  if (cookieBanner) {
    if (!localStorage.getItem('flo_cookies_accepted')) {
      cookieBanner.classList.add('show');
    }
    if (cookieAccept) {
      cookieAccept.addEventListener('click', function () {
        localStorage.setItem('flo_cookies_accepted', '1');
        cookieBanner.classList.remove('show');
      });
    }
  }

  // Subscribe form (static site - no backend, just confirms client-side)
  var subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('subscribe-msg');
      if (msg) msg.textContent = 'Thanks for subscribing!';
      subscribeForm.reset();
    });
  }

  // Contact form (static site - no backend, just confirms client-side)
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('contact-msg');
      if (msg) msg.textContent = 'Thanks for reaching out! We will get back to you soon.';
      contactForm.reset();
    });
  }
});
