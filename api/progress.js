const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!process.env.CAT_KEY || req.headers['x-key'] !== process.env.CAT_KEY) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  try {
    if (req.method === 'GET') {
      const v = await redis.get('catplan');
      return res.status(200).json({ s: (v && v.s) || null });
    }
    if (req.method === 'PUT') {
      const s = req.body && req.body.s;
      if (typeof s !== 'string' || s.length > 100000) return res.status(400).json({ error: 'bad request' });
      await redis.set('catplan', { s });
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'storage error' });
  }
};
