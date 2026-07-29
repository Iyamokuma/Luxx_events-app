import { Resend } from 'resend';

const NOTIFY_EMAILS = ['luxxhavenevents@gmail.com', 'luxehavenevents@yahoo.com'];
const SITE_DOMAIN = 'luxx-events.com';

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

export async function handleSendEnquiry(req, res) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);
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
  const fromAddress =
    process.env.RESEND_FROM || `Luxx Haven Events <enquiries@${SITE_DOMAIN}>`;

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

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Send enquiry error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' });
  }
}

export function handleHealth(_req, res) {
  return res.status(200).json({
    ok: true,
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
  });
}
