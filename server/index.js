import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { Resend } from 'resend';
import { site } from '../src/data/content.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const NOTIFY_EMAILS = site.notifyEmails;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

app.use(cors({ origin: true }));
app.use(express.json({ limit: '32kb' }));

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(payload, sourceLabel) {
  const rows = [
    ['Source', sourceLabel],
    ['Name', payload.name],
    ['Email', payload.email],
    ['Phone', payload.phone || '—'],
    ['Event Type', payload.eventType || '—'],
    ['Preferred Date', payload.eventDate || '—'],
    ['Guest Count', payload.guestCount || '—'],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#555;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(value)}</td></tr>`,
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;color:#1c1a1f;max-width:640px;">
      <h2 style="margin:0 0 16px;font-size:20px;">New ${escapeHtml(sourceLabel)}</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">${tableRows}</table>
      <h3 style="margin:0 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#6b5b6e;">Message</h3>
      <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

app.post('/api/send-enquiry', async (req, res) => {
  if (!resend) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const { name, email, phone, eventType, eventDate, guestCount, message, source = 'booking' } =
    req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const sourceLabel = source === 'contact' ? 'Contact / Support Enquiry' : 'Booking Enquiry';
  const subject = `Luxx Haven Events — ${sourceLabel}: ${eventType || 'General'}`;
  const fromAddress = process.env.RESEND_FROM || `Luxx Haven Events <enquiries@${site.domain}>`;

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: NOTIFY_EMAILS,
      replyTo: email.trim(),
      subject,
      html: buildEmailHtml(
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim(),
          eventType: eventType?.trim(),
          eventDate: eventDate?.trim(),
          guestCount: guestCount?.trim(),
          message: message.trim(),
        },
        sourceLabel,
      ),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: error.message || 'Failed to send email.' });
    }

    return res.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Send enquiry error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, emailConfigured: Boolean(resend) });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
