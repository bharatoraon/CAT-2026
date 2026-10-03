CAT 2026 plan: Vercel deploy with cloud saving

1. Put this folder in a GitHub repo (or run "vercel" in this folder), then import it in Vercel and deploy.
2. In the Vercel project: Storage tab > Create Database > Upstash for Redis > connect it to the project.
   Vercel then adds KV_REST_API_URL and KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_*) automatically.
3. Settings > Environment Variables: add CAT_KEY with a long passphrase only you know.
4. Deployments > Redeploy, so the new variables apply.
5. Open the site on each device and enter the passphrase once. Progress now syncs across devices.

Notes
- Newest save wins. Avoid editing on two devices at the same moment.
- Free Upstash databases may be archived after a long idle period; daily use avoids this.
