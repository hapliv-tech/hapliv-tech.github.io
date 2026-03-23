/**
 * Google Analytics 4 (gtag) helpers.
 * Measurement ID is loaded in layout.js; events appear in GA4 → Reports → Engagement → Events.
 * Mark `appointment_booked` as a key event (conversion) in Admin → Data display → Key events.
 * Optional: track `appointment_api_failure` volume by `error_type` / `http_status` (no API error body — may contain PII).
 *
 * Identity / lead stitching:
 * - Device id: `localStorage` key `hapliv_ga_user_id` (see `GA4_USER_ID_STORAGE_KEY`). Set on first
 *   `gtag('config')` in `layout.js` so **page_view** and default GA hits use the same User-ID as
 *   `cta_click` / `appointment_booked` (via `trackGa4Event` → `syncGa4UserId`).
 * - GA4 **User-ID** is this random UUID — **not** PII if it does not identify a person by itself.
 * - Do **not** send name, email, phone, or free-text form fields to GA4 — violates policy and privacy law risk.
 * - To match leads to your CRM, store the same UUID server-side when the form is submitted (optional API change)
 *   or use offline/Measurement Protocol imports with hashed identifiers.
 */

export const GA4_MEASUREMENT_ID = 'G-SK797L2YVG';

/** Keep in sync with the inline gtag snippet in `app/layout.js`. */
export const GA4_USER_ID_STORAGE_KEY = 'hapliv_ga_user_id';

/** Anonymous browser-bound ID for GA4 User-ID (not PII). */
export function getOrCreateAnalyticsUserId() {
  if (typeof window === 'undefined') return null;
  try {
    let id = window.localStorage.getItem(GA4_USER_ID_STORAGE_KEY);
    if (!id || id.length < 8) {
      id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `h_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
      window.localStorage.setItem(GA4_USER_ID_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

/**
 * Ensures GA4 User-ID is set (matches `layout.js` first config). Idempotent per id.
 */
export function syncGa4UserId() {
  if (typeof window === 'undefined') return null;
  const userId = getOrCreateAnalyticsUserId();
  if (!userId || typeof window.gtag !== 'function') return userId;
  if (window.__haplivGaUserIdSynced === userId) return userId;

  window.gtag('config', GA4_MEASUREMENT_ID, {
    user_id: userId,
    send_page_view: false,
  });
  window.__haplivGaUserIdSynced = userId;

  return userId;
}

function cleanParams(params) {
  return Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== '')
  );
}

/** Safe GA4 event + dataLayer push (for GTM if you add a container later). */
export function trackGa4Event(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  syncGa4UserId();
  const payload = cleanParams(params);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }
}

/**
 * Fires when an appointment request is accepted by the API (full page or modal callback).
 * Register `appointment_booked` as a key event in GA4 for conversion reporting.
 */
export function trackAppointmentBooked({
  formType,
  source,
  ctaLabel,
  location,
  value = 500,
  currency = 'INR',
} = {}) {
  trackGa4Event('appointment_booked', {
    form_type: formType,
    source,
    cta_label: ctaLabel,
    location,
    value,
    currency,
  });
}

/**
 * Appointment POST failed (non-2xx, non-JSON body, or fetch threw). No message body or stack in GA.
 * errorType: `http_error` | `network` | `parse_error`
 */
export function trackAppointmentApiFailure({
  formType,
  source,
  ctaLabel,
  httpStatus,
  errorType,
} = {}) {
  const params = {
    form_type: formType,
    source,
    cta_label: ctaLabel,
    error_type: errorType,
  };
  if (Number.isFinite(httpStatus)) {
    params.http_status = httpStatus;
  }
  trackGa4Event('appointment_api_failure', params);
}
