'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const AppointmentModal = dynamic(() => import('components/header/AppointmentModal'), { ssr: false });

const AppointmentModalContext = createContext(null);

export function AppointmentModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openAppointment = useCallback(() => setOpen(true), []);
  const closeAppointment = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openAppointment, closeAppointment, isOpen: open }),
    [open, openAppointment, closeAppointment]
  );

  return (
    <AppointmentModalContext.Provider value={value}>
      {children}
      <AppointmentModal open={open} onClose={closeAppointment} />
    </AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const ctx = useContext(AppointmentModalContext);
  if (!ctx) {
    throw new Error('useAppointmentModal must be used within AppointmentModalProvider');
  }
  return ctx;
}
