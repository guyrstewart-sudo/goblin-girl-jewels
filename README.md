# Goblin Girl Jewels ✦ Soldered Magick

The brand system + website for **Goblin Girl Jewels** — sustainably harvested earth materials, hand-soldered into wearable crystal magick by flow artist & fire dancer **Larissa Alboucrek**.

## What's here

| File | What it is |
|------|------------|
| `brand-book.html` | The full **Brand Portfolio Book** — story, voice, palette, type, art direction |
| `index.html` | Home — trippy hero, essence, featured pieces, email capture |
| `shop.html` | Shop — full catalog with checkout buttons + commissions |
| `live.html` | Live-selling page with a stream-embed slot |
| `about.html` | Maker story, materials, crystal care, shipping |
| `assets/css/styles.css` | The design system (colors, type, components, motion) |
| `assets/js/products.js` | Product catalog — edit pieces, prices, and checkout links here |
| `assets/js/main.js` | Nav, scroll reveals, email-form handling |
| `assets/img/` | Drop real product photos here (see below) |

## 1 · Put it online (free) with GitHub Pages

1. Create a GitHub repo (e.g. `goblingirl-jewels`).
2. Upload everything in this folder to the repo root.
3. Repo → **Settings → Pages** → Source: `main` branch, `/root` → **Save**.
4. Your site goes live at `https://<username>.github.io/goblingirl-jewels/` in ~1 minute.
5. **Custom domain later:** buy a domain, add a `CNAME` file with the domain, and point DNS to GitHub Pages.

> A `.nojekyll` file is included so GitHub serves the `assets/` folder correctly.

## 2 · Use real photos

The shop currently shows on-brand **crystal motif placeholders**. To use her real photos:

1. Save photos into `assets/img/` (e.g. `sodalite.jpg`, square crops look best).
2. In `assets/js/products.js`, set the matching product's `img:` field, e.g. `img:"sodalite.jpg"`.
3. The photo automatically replaces the motif. Done.

## 3 · Sell with Stripe (real checkout)

The fastest path — no code:

1. Make a free **Stripe** account → Dashboard → **Payment Links** → **+ New**.
2. Create one Payment Link per piece (name, price, photo). Copy the link.
3. In `assets/js/products.js`, paste it into that product's `stripe:` field, e.g.
   `stripe:"https://buy.stripe.com/xxxxxxxx"`.
4. The button switches from **"Buy"** (Depop fallback) to **"Add to Cart"** → Stripe checkout.

> Stripe handles payment, tax, and the receipt. Until a `stripe` link is set, the button falls back to the **Depop** listing — so nothing is ever broken.

## 4 · Capture emails for real

The signup forms currently confirm on-screen only. To collect addresses, point them at a provider:

- **Mailchimp / Klaviyo / Buttondown / ConvertKit** — paste their embed form action URL into the `<form>` tags (replace `data-capture`), or
- **Formspree / Google Forms** — set the form `action` to your endpoint.

See the comments in `assets/js/main.js`.

## 5 · Wire up the live stream

Open `live.html` and replace the placeholder block with your embed:

- **YouTube:** `<iframe src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID" allowfullscreen></iframe>`
- **Twitch:** `<iframe src="https://player.twitch.tv/?channel=YOURCHANNEL&parent=YOURDOMAIN"></iframe>`
- **Instagram / TikTok Live:** no public embed — the "Watch on Instagram Live" button links out.

## Brand quick-reference

- **Tagline:** ✦ Soldered Magick ✦
- **Aura gradient:** Violet `#7B2FF7` → Magenta `#FF3DCD` → Teal `#2DE2C6` → Gold `#FFC857`
- **Base:** Cosmic Void `#0B0614` · **Text:** Moonstone `#EDE7FF` · **Earth accent:** Copper `#C77B45`
- **Fonts:** Syne (display) · Space Grotesk (body) · Cormorant Garamond (boho accent)

---
Made with love & intention. ✦
