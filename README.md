# Flo-Gistics — Static Site Rebuild

A static (plain HTML/CSS/JS, no backend) rebuild of
[savewithflo-gistics.com](https://savewithflo-gistics.com/), a GoDaddy
Website Builder site, so it can be hosted for free on GitHub Pages or any
other static host.

## Structure

- 13 HTML pages at the repo root, each with the same shared header/nav/footer.
- `css/style.css` — single shared stylesheet.
- `js/main.js` — mobile nav, dropdown nav, homepage hero carousel, cookie
  banner. The Subscribe form is **not connected to any backend** — it only
  shows a message confirming nothing was sent (see "Forms" below).
- `images/` — images downloaded from the original site.
- `pdfs/` — real testimonial/product PDFs downloaded from the original site.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

## Forms

The homepage "Subscribe" form has no backend and does not send or store
anything. To make it functional, connect it to a form service such as
[Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/platform/core/forms/)
(both have free tiers) by pointing the form's `action` at that service, or
use [EmailJS](https://www.emailjs.com/) to send the email client-side.

The Contact Us page shows the phone number and email as direct `tel:`/`mailto:`
links instead of a form.

## Hosting

Deployed via GitHub Pages from this branch (`/` root). If a push doesn't
show up at the live URL after a few minutes, check
**Settings → Pages** and the **Actions** tab for the "pages build and
deployment" run — a fresh commit (even a small one) re-triggers it.
