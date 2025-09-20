# 🌐 Fernanda Montalván — Portfolio

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%204.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Privacy](https://img.shields.io/badge/Privacy-AEPD%20%26%20LSSI%20ready-4CAF50)](#-privacy--compliance)

Personal portfolio built with **React, TypeScript, Vite, and Tailwind 4.1**, featuring **multilingual support (EN/ES/CA)**.  
Showcasing my **full-stack projects, certifications, and professional experience** with background in **technical support & fintech (KYC/Risk)**.

🔗 **Live Demo** → https://fermon98.github.io/fernanda-montalvan/#/

---

## ✨ Features
- 🎨 Dual dark themes (Electric Purple & Cyber Blue)
- 🌍 Multilingual (English, Spanish, Catalan) via custom i18n provider
- 🧠 i18n keys for legal pages, cookie banner, and third-party gating
- 🖼 Featured projects: **Huellas**, **Music Library**, **Fernanda’s Academy**
- 🎧 Spotify “Listening now” + playlists (gated by consent)
- 📩 Contact form (FormSubmit) + social links in footer

---

## 🛠 Tech Stack
- **Frontend:** React 19, TypeScript, Vite  
- **Styling:** Tailwind CSS 4.1, shadcn/ui, Framer Motion  
- **Routing:** React Router (**HashRouter** for GitHub Pages)  
- **i18n:** Custom `LanguageProvider` + `dictionary.ts`

---

## ⚖️ Privacy & Compliance

This site is set up to follow **AEPD / LSSI-CE** guidance for a personal portfolio:

### Cookies & Third-Party Embeds
- **No analytics** or advertising cookies by default.
- Third-party embeds (**Spotify**) are **blocked until consent** is given.
- A banner offers **Accept** and **Reject** with equal prominence.
- “**Cookie preferences**” in the footer lets you **change or withdraw** consent.

### Legal Pages
- **Legal Notice** → `/#/legal`  
- **Privacy Policy** (includes **FormSubmit** and **Spotify** as third parties) → `/#/privacy`  
- **Cookies Policy** → `/#/cookies`

### Contact Form
- Uses **FormSubmit** to work on GitHub Pages (no backend).  
- Honeypot + `_captcha=false` + redirect to `/#/contact?sent=1`.

> Controller: **Fernanda Montalván** · Country: **Spain** · Email: **fernandaramo@outlook.es**  
> Purpose: **Personal portfolio** (non-commercial)

---

## 🧩 Architecture Highlights

- `src/components/legal/useConsent.tsx` — consent context with localStorage
- `src/components/legal/CookieConsent.tsx` — AEPD-style banner (Accept/Reject)
- **Gating**: Spotify on HomePage only renders when `consent === 'accepted'`
- `src/legal/*` — Legal Notice, Privacy, Cookies pages (i18n-ready)
- Footer: legal links + **Cookie preferences** button (resets to “unset”)

---

## 🧪 Local Dev

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to /dist
npm run preview   # preview built app
npm run lint      # eslint
