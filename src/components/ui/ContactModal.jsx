import { useEffect, useRef } from 'react';
import EnquiryForm from './EnquiryForm';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="contact-modal" role="presentation">
      <button
        type="button"
        className="contact-modal__backdrop"
        aria-label="Close contact form"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="contact-modal__header">
          <div>
            <h2 id="contact-modal-title">Book a Consultation</h2>
            <p>Tell us about your event — we respond within one business day.</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="contact-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="contact-modal__body">
          <EnquiryForm id="modal-enquiry-form" source="contact" />
        </div>
      </div>
    </div>
  );
}
