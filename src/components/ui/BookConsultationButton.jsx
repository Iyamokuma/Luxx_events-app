import { useContactModal } from '../../context/ContactModalContext';

/**
 * Opens the shared enquiry modal from any section.
 * Renders as a button so it works even when used inside other interactive elements.
 */
export default function BookConsultationButton({
  children = 'Book a Consultation',
  className = '',
  type = 'button',
  ...props
}) {
  const { openContact } = useContactModal();

  return (
    <button type={type} className={className} onClick={openContact} {...props}>
      {children}
    </button>
  );
}
