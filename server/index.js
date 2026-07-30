import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { handleHealth, handleSendEnquiry } from '../api/lib/enquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json({ limit: '32kb' }));

app.post('/api/send-enquiry', (req, res) => handleSendEnquiry(req, res));
app.get('/api/health', (req, res) => handleHealth(req, res));

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
