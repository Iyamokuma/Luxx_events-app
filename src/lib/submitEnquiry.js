export async function submitEnquiry(payload) {
  const response = await fetch('/api/send-enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send enquiry. Please try again.');
  }

  return data;
}
