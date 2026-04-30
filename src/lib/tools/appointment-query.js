/**
 * Build /appointment query string for guide → booking handoff (no PII).
 * Params: source, guide, service (appointment_for value), location, urgency, recommendation (result type / category).
 */
export function buildAppointmentQueryString({
  source = 'dental_guide',
  guide,
  service,
  location,
  urgency,
  recommendation,
  result_category,
} = {}) {
  const p = new URLSearchParams();
  if (source) p.set('source', source);
  if (guide) p.set('guide', guide);
  if (service) p.set('service', service);
  if (location) p.set('location', location);
  if (urgency) p.set('urgency', urgency);
  if (recommendation) p.set('recommendation', recommendation);
  if (result_category) p.set('result_category', result_category);
  const s = p.toString();
  return s ? `?${s}` : '';
}

export function buildAppointmentHref(args) {
  return `/appointment${buildAppointmentQueryString(args)}`;
}
