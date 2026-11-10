# WEARCOLLECTIVE

A full-stack fashion e-commerce store built with **Next.js**, **Redux Toolkit** and **Supabase**. Shoppers can browse men's, women's and kids' collections, sign up for an account, add items to a cart, go through a mock checkout, subscribe to a newsletter and find a store near them.

**Live demo:** [wear-collective.vercel.app](https://wear-collective.vercel.app/) · **Case study:** [brianjcaldera.com/projects/wearcollective](https://brianjcaldera.com/projects/wearcollective/)

![WEARCOLLECTIVE landing page](https://brianjcalderaportfolio.wordpress.com/wp-content/uploads/2025/12/landing-page.png?w=1024)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth_%26_Postgres-3FCF8E?logo=supabase&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [How it works](#how-it-works)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Scripts](#scripts)
- [Roadmap](#roadmap)
- [License](#license)

## Features

**Shopping**
- Men's, women's and kids' categories, each with new arrivals and seasonal collections
- Product detail pages with colour and size options
- Product search
- Shopping cart that keeps a separate line for each product, colour and size, with live totals
- Mock checkout step (no real payments are taken)

**Accounts**
- Sign up and sign in with Supabase Auth
- Account area with profile, settings, saved addresses, payment methods, orders and returns

**Engagement**
- Newsletter sign-up that sends a personalised welcome email through Resend
- Store locator with an embedded Google Map and directions to each store
- Promotions, brands, about, contact, support and FAQ pages
- Sizing guide, privacy policy, terms and conditions, and refund policy

**SEO**
- Page titles, descriptions and Open Graph tags for link previews
- Generated `sitemap.xml` and `robots.txt`, with private pages (account, cart, checkout) kept out of search results
- Vercel Analytics

## Tech stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| State management | Redux Toolkit, React Redux |
| Styling | Tailwind CSS 4, Headless UI, Heroicons, Lucide icons |
| Backend | Supabase (authentication and PostgreSQL database) |
| Email | Resend (templated welcome email) |
| Maps | Google Maps Embed API |
| Notifications | react-hot-toast |
| Hosting | Vercel, with Vercel Analytics |

## How it works

- **State:** Redux Toolkit holds three slices: `user` (session, with async thunks for sign-up and sign-in), `items` (the product catalogue, loaded from Supabase) and `cart` (lines, quantities and totals).
- **Data:** Products are read from Supabase with its JavaScript client. Authentication uses Supabase Auth, and the user's first and last names are stored as sign-up metadata.
- **Email:** `src/app/api/send/route.js` is a Next.js API route. It checks the subscriber's name and email, then sends a Resend template personalised with their name. The API key stays on the server.
- **Store locator:** `src/app/store-locator/page.js` lists the stores, lets shoppers search them, shows the selected store on a Google Maps embed and links to Google Maps directions.
- **SEO:** The site URL lives in `src/lib/site.js` and is used by the page metadata, `sitemap.js` and `robots.js`.

## Project structure

```
src/
├── app/
│   ├── api/send/          # Resend welcome-email API route
│   ├── account/           # Profile, settings, addresses, payment, orders, returns
│   ├── products/          # Category, new-arrival and seasonal pages, plus [id] product pages
│   ├── cart/, checkout/   # Cart and mock checkout
│   ├── store-locator/     # Google Maps store locator
│   ├── features/          # Redux slices: user, items, cart
│   ├── store/             # Redux store and provider
│   ├── layout.js          # Root layout and SEO metadata
│   ├── sitemap.js, robots.js
│   └── ...                # About, brands, contact, promotions, policies and more
├── components/            # Navbar, footer, breadcrumbs, newsletter form and UI components
├── lib/                   # Site URL and helpers
└── utils/supabase/        # Supabase client
```

## Getting started

### Prerequisites

- Node.js 20.9 or later
- A [Supabase](https://supabase.com/) project
- Optional: a [Resend](https://resend.com/) account (newsletter emails) and a Google Maps API key (store locator)

### Installation

```bash
git clone https://github.com/BrianJCal99/WearCollective.git
cd WearCollective
npm install
```

Create a `.env.local` file in the project root (see [Environment variables](#environment-variables)), then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Yes | Your Supabase publishable key |
| `RESEND_API_KEY` | For newsletter | Resend API key used by the welcome-email route |
| `RESEND_FROM_EMAIL` | No | Sender address, on a domain verified in Resend |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | For store locator | Google Maps Embed API key |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL for SEO metadata. Defaults to `https://wear-collective.vercel.app` |
| `GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification code |

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your-publishable-key
RESEND_API_KEY=re_...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Roadmap

- [ ] Connect checkout to Stripe in test (sandbox) mode, so the purchase flow works end to end with test cards

## License

Released under the [MIT License](LICENSE). © 2026 Brian Caldera.

Built by [Brian Caldera](https://brianjcaldera.com) · [GitHub](https://github.com/BrianJCal99) · [LinkedIn](https://www.linkedin.com/in/brianjcal/)
