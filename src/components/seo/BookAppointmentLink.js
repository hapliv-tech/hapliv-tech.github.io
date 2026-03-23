'use client';

import Link from 'next/link';
import { useAppointmentModal } from 'contexts/AppointmentModalContext';

/**
 * Opens the same appointment modal as the header "Appointment" button.
 * Keeps href="/appointment" for crawlers and no-JS fallback.
 */
export default function BookAppointmentLink({
  children,
  className,
  href = '/appointment',
  onClick,
  'data-cta': dataCtaProp,
  'data-cta-location': dataCtaLocationProp,
  ...rest
}) {
  const { openAppointment } = useAppointmentModal();
  return (
    <Link
      href={href}
      data-cta={dataCtaProp ?? 'appointment'}
      data-cta-location={dataCtaLocationProp ?? 'book_link'}
      onClick={(e) => {
        onClick?.(e);
        e.preventDefault();
        openAppointment();
      }}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
