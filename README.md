# CAT 2026 Catch-up Plan

Clean, distraction-free preparation and backlog catch-up plan for CAT 2026 (6th October – 29th November 2026) with monochrome GitHub-style streak heatmap, XP gamification, and cloud synchronization via Vercel Serverless and Upstash Redis.

---

## ✨ Features

- **🎯 Today**: Daily breakdown for backlog clearing, live classes, practice targets, and tests with Done / Partial / Missed tracking.
- **🟩 GitHub-Style Streak Heatmap (Monochrome)**: 8-week monochrome activity calendar grid with interactive day-jumping and streak tracking.
- **⚡ XP & Level Progression**: Earn XP for marking days, solving problem sets, and attempting mocks (Lv. 1 Foundation to Lv. 6 IIM BLACKI Ready).
- **🎖️ Achievement Badges**: Unlockable milestone achievements for key study accomplishments.
- **🎁 Guilt-Free Treats**: Claim real-world rewards as you hit XP and streak milestones.
- **📚 Backlog Tracker**: Dual Watched / Solved tracking across Tier 1, 2, and 3 topics.
- **📊 Mocks Tracker**: Sectional VARC/DILR/QA score tracking with instant total calculation.
- **🏆 Why**: Placement and ROI payback breakdown across top Indian B-schools.

---

## 🚀 Deploy to Vercel with Cloud Saving

1. Put this folder in a GitHub repo (or run `vercel` in this folder), then import it in Vercel and deploy.
2. In the Vercel project: **Storage** tab > **Create Database** > **Upstash for Redis** > connect it to the project.
   Vercel then adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` (or `UPSTASH_REDIS_REST_*`) automatically.
3. **Settings** > **Environment Variables**: add `CAT_KEY` with a long passphrase only you know.
4. **Deployments** > **Redeploy**, so the new variables apply.
5. Open the site on each device and enter the passphrase once. Progress now syncs across devices.

---

## Notes

- Newest save wins. Avoid editing on two devices at the same moment.
- Free Upstash databases may be archived after a long idle period; daily use avoids this.