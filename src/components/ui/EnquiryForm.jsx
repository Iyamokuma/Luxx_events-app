import { useState } from 'react';
import { eventTypes, site } from '../../data/content';
import { submitEnquiry } from '../../lib/submitEnquiry';
import './EnquiryForm.css';

export default function EnquiryForm({ id = 'enquiry-form', source = 'booking' }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus('sending');
    setErrorMessage('');

    try {
      await submitEnquiry({
        ...payload,
        source,
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  const isSending = status === 'sending';

  return (
    <form id={id} className="enquiry-form" onSubmit={handleSubmit} noValidate>
      {status === 'success' ? (
        <p className="enquiry-form__notice enquiry-form__notice--success" role="status">
          Thank you — your {source === 'contact' ? 'message' : 'enquiry'} has been sent. A confirmation
          email is on its way to you, and we will reply within one business day.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="enquiry-form__notice enquiry-form__notice--error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="enquiry-form__grid">
        <div className="enquiry-form__field">
          <label htmlFor={`${id}-name`}>Full Name</label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isSending}
          />
        </div>

        <div className="enquiry-form__field">
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isSending}
          />
        </div>

        <div className="enquiry-form__field">
          <label htmlFor={`${id}-phone`}>Phone</label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isSending}
          />
        </div>

        <div className="enquiry-form__field">
          <label htmlFor={`${id}-event-type`}>Event Type</label>
          <select
            id={`${id}-event-type`}
            name="eventType"
            required
            defaultValue=""
            disabled={isSending}
          >
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="enquiry-form__field">
          <label htmlFor={`${id}-event-date`}>Preferred Date</label>
          <input id={`${id}-event-date`} name="eventDate" type="date" disabled={isSending} />
        </div>

        <div className="enquiry-form__field">
          <label htmlFor={`${id}-guest-count`}>Guest Count</label>
          <input
            id={`${id}-guest-count`}
            name="guestCount"
            type="number"
            min="1"
            placeholder="e.g. 120"
            disabled={isSending}
          />
        </div>
      </div>

      <div className="enquiry-form__field enquiry-form__field--full">
        <label htmlFor={`${id}-message`}>Tell us about your event</label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows="5"
          required
          placeholder="Venue, vision, services needed, rental items..."
          disabled={isSending}
        />
      </div>

      <button type="submit" className="btn enquiry-form__submit" disabled={isSending}>
        {isSending ? 'Sending…' : `Send ${source === 'contact' ? 'Message' : 'Enquiry'}`}
      </button>

      <p className="enquiry-form__privacy muted">
        Your details are sent securely to {site.name}. We never share your information.
      </p>
    </form>
  );
}
