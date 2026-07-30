import { Resend } from 'resend';

const NOTIFY_EMAILS = ['luxehavenevents@yahoo.com', 'luxxhavenevents@gmail.com'];
const SITE_DOMAIN = 'luxx-events.com';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildStaffEmailHtml(payload, sourceLabel) {
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

function buildCustomerConfirmationHtml(payload, sourceLabel) {
  const eventType = payload.eventType || 'your enquiry';
  const isContact = sourceLabel.includes('Contact');
  const requestSummary = isContact
    ? `your ${eventType.toLowerCase() === 'other' || eventType === 'General' ? 'support' : eventType} enquiry`
    : `your ${eventType} booking enquiry`;

  const details = [
    payload.eventType ? `<li><strong>Event type:</strong> ${escapeHtml(payload.eventType)}</li>` : '',
    payload.eventDate ? `<li><strong>Preferred date:</strong> ${escapeHtml(payload.eventDate)}</li>` : '',
    payload.guestCount ? `<li><strong>Guest count:</strong> ${escapeHtml(payload.guestCount)}</li>` : '',
  ]
    .filter(Boolean)
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;color:#1c1a1f;max-width:640px;line-height:1.65;">
      <h2 style="margin:0 0 12px;font-size:20px;color:#2d1b2e;">Thank you, ${escapeHtml(payload.name)}</h2>
      <p style="margin:0 0 14px;color:#4a4048;">
        We have received ${escapeHtml(requestSummary)} and our team at Luxx Haven Events will attend to it shortly.
      </p>
      <p style="margin:0 0 14px;color:#4a4048;">
        Depending on what you requested, we will review the details and get back to you within one business day
        with next steps, availability, and any recommendations for décor hire or styling.
      </p>
      ${
        details
          ? `<div style="margin:0 0 16px;padding:14px 16px;background:#faf7f2;border:1px solid #e8e0d8;border-radius:10px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b5b6e;">Your request summary</p>
              <ul style="margin:0;padding-left:18px;color:#2d1b2e;">${details}</ul>
            </div>`
          : ''
      }
      <p style="margin:0 0 8px;color:#4a4048;"><strong>Your message:</strong></p>
      <p style="margin:0 0 18px;white-space:pre-wrap;color:#4a4048;">${escapeHtml(payload.message)}</p>
      <p style="margin:0;color:#6b5b6e;font-size:14px;">
        Warm regards,<br />
        <strong style="color:#2d1b2e;">Luxx Haven Events</strong><br />
        Decor · Styling · Rentals
      </p>
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

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim(),
    eventType: eventType?.trim(),
    eventDate: eventDate?.trim(),
    guestCount: guestCount?.trim(),
    message: message.trim(),
  };

  const sourceLabel = source === 'contact' ? 'Contact / Support Enquiry' : 'Booking Enquiry';
  const staffSubject = `Luxx Haven Events — ${sourceLabel}: ${payload.eventType || 'General'}`;
  const customerSubject = `We've received your ${payload.eventType || 'enquiry'} — Luxx Haven Events`;
  const fromAddress =
    process.env.RESEND_FROM || `Luxx Haven Events <enquiries@${SITE_DOMAIN}>`;

  try {
    const staffResult = await resend.emails.send({
      from: fromAddress,
      to: NOTIFY_EMAILS,
      replyTo: payload.email,
      subject: staffSubject,
      html: buildStaffEmailHtml(payload, sourceLabel),
    });

    if (staffResult.error) {
      console.error('Resend staff email error:', staffResult.error);
      return res.status(502).json({
        error: staffResult.error.message || 'Failed to send email.',
      });
    }

    const customerResult = await resend.emails.send({
      from: fromAddress,
      to: [payload.email],
      subject: customerSubject,
      html: buildCustomerConfirmationHtml(payload, sourceLabel),
    });

    if (customerResult.error) {
      console.error('Resend customer email error:', customerResult.error);
      // Staff already notified — still treat as success for the user
    }

    return res.status(200).json({
      success: true,
      id: staffResult.data?.id,
      confirmationSent: !customerResult.error,
    });
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
