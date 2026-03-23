'use client';

import { AppointmentModalProvider } from 'contexts/AppointmentModalContext';

export default function AppointmentModalRoot({ children }) {
  return <AppointmentModalProvider>{children}</AppointmentModalProvider>;
}
