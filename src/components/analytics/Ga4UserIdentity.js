'use client';

import { useEffect } from 'react';
import { syncGa4UserId } from 'lib/analytics';

/** Assigns GA4 User-ID from a first-party anonymous UUID (see lib/analytics.js). */
export default function Ga4UserIdentity() {
  useEffect(() => {
    syncGa4UserId();
  }, []);

  return null;
}
