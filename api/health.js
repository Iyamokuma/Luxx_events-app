import { handleHealth } from './lib/enquiry.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return handleHealth(req, res);
}
