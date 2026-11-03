document.addEventListener('DOMContentLoaded', function () {
  // Hero image carousel (auto-rotating, like the original site's header slideshow)
  var heroSlides = document.querySelectorAll('.hero-slide');
  var heroDots = document.querySelectorAll('.hero-dots button');
  if (heroSlides.length > 1) {
    var current = 0;
    var showSlide = function (index) {
      heroSlides[current].classList.remove('active');
      if (heroDots[current]) heroDots[current].classList.remove('active');
      current = index;
      heroSlides[current].classList.add('active');
      if (heroDots[current]) heroDots[current].classList.add('active');
    };
    heroDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { showSlide(i); });
    });
    setInterval(function () {
      showSlide((current + 1) % heroSlides.length);
    }, 5000);
  }

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

  // Subscribe form - NOT yet connected to any backend/email service.
  // This only stops the page from reloading; it does not send or store
  // the email anywhere. See README.md for what's needed to wire this up.
  var subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('subscribe-msg');
      if (msg) msg.textContent = 'This form is not connected yet - your email was not sent or saved.';
    });
  }

  // Contact form - NOT yet connected to any backend/email service.
  // This only stops the page from reloading; it does not send the
  // message anywhere. See README.md for what's needed to wire this up.
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('contact-msg');
      if (msg) msg.textContent = 'This form is not connected yet - your message was not sent. Please call or email us directly (see above).';
    });
  }
});
