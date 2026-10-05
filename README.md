# 🚀 CAT 2026 Master Planner & Strategy Hub

An advanced, responsive, and data-driven preparation tracker and strategy command center tailored for **CAT 2026** aspirants. Built for lightning-fast execution, offline-first reliability, and seamless cross-device synchronization with Vercel Serverless and Upstash Redis.

---

## ✨ Features

- **🎯 Today's Command Center**:
  - Daily actionable breakdown (Backlog recordings, Live classes, Practice quotas, and Scheduled Mocks).
  - Interactive task checklists with sound synthesis and micro-celebrations.
  - Daily completion status tracking (`Marked Done`, `Partial`, `Missed`) with active streak counter.
  - Integrated 40-minute Sectional Focus Timer (CAT Slot Mode, 25m Pomodoro, and 15m review presets).
  - Auto-saving Daily Reflection & Scratchpad.

- **📅 57-Day Sprint Roadmap**:
  - Complete day-by-day plan leading up to CAT 2026 Exam Day (Nov 29, 2026).
  - Phase filter (Phase A: Backlog Sprint, Phase B: Learn & Sectionals, Phase C: Mock Phase, Phase D: Taper).
  - Full-text instant topic search.

- **📚 Backlog Sprint Tracker**:
  - Track subject-wise progress (Quant, LRDI, VARC) across Tier 1 (Critical), Tier 2, and Tier 3 (Optional) topics.
  - Dual completion markers: 🎬 *Watched Recording* + ✍️ *Solved Practice*.

- **📊 Mock Test Analytics & Percentile Engine**:
  - Full tracker for all 13 mocks (VARC, DILR, QA sectionals + Total Score).
  - Real-time estimated CAT percentile predictor and cut-off benchmark analysis.
  - Dynamic score progression trend chart.

- **🎯 Error Log Vault**:
  - Log, categorize, and review mistakes across mocks and practice sets.
  - Tag mistake types: *Calculation/Silly*, *Concept Gap*, *Question Misread*, *Option Trap*, *Time Panic*, *Set Selection*.
  - Capture the "Key Rule to Remember" to avoid repeated mistakes.

- **⚡ Formula & Strategy Vault**:
  - Quant arithmetic, algebra, and geometry core formulas and theorems.
  - DILR 4-step selection framework and Venn diagram rules.
  - VARC 5-filter elimination heuristics.

- **💰 Interactive B-School ROI & Wealth Calculator**:
  - Top Indian B-School placement matrix (IIM A/B/C/L/K/I, FMS, SJMSOM, IIFT, New IIMs).
  - Real-time salary jump, payback period, and 5-year post-MBA net wealth calculator.

- **☁️ Seamless Cross-Device Sync**:
  - End-to-end cloud sync with Vercel Serverless API + Upstash Redis.
  - Passphrase-based access control (`CAT_KEY`).
  - Offline-first caching with instant localStorage persistence.
  - JSON backup export and restore.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Glassmorphism, Custom HSL Tokens, Dark/Light mode), Modern JavaScript.
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
- **Backend API**: Vercel Serverless Node.js (`/api/progress.js`).
- **Database**: Upstash Redis (KV REST API).

---

## 🚀 Deployment Guide (Vercel + Upstash Redis)

1. **Deploy to Vercel**:
   - Push this repository to GitHub or run `vercel` in the project directory.
   - Import the project into your [Vercel Dashboard](https://vercel.com).

2. **Connect Upstash Redis**:
   - In your Vercel Project dashboard, go to the **Storage** tab.
   - Click **Create Database** > Select **Upstash (Redis)**.
   - Connect it to your project (Vercel automatically provisions `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`).

3. **Set Security Passphrase**:
   - In Vercel Project > **Settings** > **Environment Variables**:
   - Add variable: `CAT_KEY` with your secret passphrase (e.g. `my-cat-passphrase-2026`).

4. **Redeploy**:
   - Trigger a redeployment so the environment variables take effect.

5. **Sync in App**:
   - Open your deployed URL on your phone or laptop.
   - Click the **⚙️** icon or **Sync Status** pill in the top header.
   - Enter your `CAT_KEY` passphrase. All your progress will now sync live across all devices!

---

## 💻 Local Development / Preview

You can open `index.html` directly in any web browser to use all tracker features locally with localStorage persistence.