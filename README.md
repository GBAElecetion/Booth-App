# BJP Booth Command — Polling Station Manager

A fast, minimal web app to assign people to polling booths and send them WhatsApp messages directly.

## Features

- 🗳️ **36 Polling Booths** across 4 zones (Akshayanagar, Kammanahalli, Kalena Agrahara, Gottigere)
- 👥 **Assign 2–3 people** per booth with name + phone number
- 💬 **WhatsApp one-tap** — sends a pre-filled assignment message to each person
- 📢 **Broadcast** — message all assignees of a booth in one click
- 🔍 **Search** booths by name, area or number from home
- 📊 **Progress tracking** — see how many booths are assigned per zone
- 📥 **Export CSV** — download all assignments as a spreadsheet
- 💾 **localStorage** — data persists between sessions, no backend needed

## Tech Stack

- React 18 + Vite
- React Router v6
- CSS Modules
- Lucide React icons
- No backend / no database (localStorage)

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
cd booth-app
npm install
vercel
```

Follow the prompts. Your app will be live in ~60 seconds.

### Option 2: GitHub + Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Framework: **Vite** (auto-detected)
5. Click Deploy

No environment variables needed.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```
