'use client';

import Ga4ClickTracker from 'components/analytics/Ga4ClickTracker';
import Ga4UserIdentity from 'components/analytics/Ga4UserIdentity';
import { AppointmentModalProvider } from 'contexts/AppointmentModalContext';

export default function AppointmentModalRoot({ children }) {
  return (
    <AppointmentModalProvider>
      <Ga4UserIdentity />
      <Ga4ClickTracker />
      {children}
    </AppointmentModalProvider>
  );
}
