/** URL slug segment under /dental-guides/ */
export const TOOL_SLUG = {
  COST_ESTIMATOR: 'braces-invisalign-consultation-planner',
  TOOTH_PAIN: 'tooth-pain-urgency-guide-gurgaon',
  SMILE_MATCHER: 'smile-treatment-guide',
  IMPLANT: 'dental-implant-consultation-planner',
};

export const TOOL_NAME_GA = {
  [TOOL_SLUG.COST_ESTIMATOR]: 'invisalign_braces_cost_estimator',
  [TOOL_SLUG.TOOTH_PAIN]: 'tooth_pain_urgency_checker',
  [TOOL_SLUG.SMILE_MATCHER]: 'smile_treatment_matcher',
  [TOOL_SLUG.IMPLANT]: 'dental_implant_candidacy_checker',
};

/** Must match `<option value>` in AppointmentPageClient exactly where possible. */
export const APPOINTMENT_FOR_VALUE = {
  BRACES: 'Braces Consultation',
  INVISALIGN: 'Invisalign Consultation',
  IMPLANT: 'Dental Implant Consultation/Complete oral check up',
  WHITENING: 'Laser teeth whitening',
  SMILE_DESIGN: 'Smile design consultation/Complete oral checkup',
  COMPLETE_CHECKUP: 'Complete oral checkup',
  EMERGENCY: 'Emergency dental consultation / urgent tooth pain',
  ROOT_CANAL: 'Root Canal Treatment/Crowns/Bridge related',
  OTHER: 'Other dental procedures',
};

/** Every `<option value>` on the public appointment form (keep in sync with AppointmentPageClient). */
export const APPOINTMENT_FORM_OPTION_VALUES = [
  APPOINTMENT_FOR_VALUE.COMPLETE_CHECKUP,
  APPOINTMENT_FOR_VALUE.BRACES,
  APPOINTMENT_FOR_VALUE.INVISALIGN,
  APPOINTMENT_FOR_VALUE.WHITENING,
  'Kid dental treatment',
  APPOINTMENT_FOR_VALUE.SMILE_DESIGN,
  APPOINTMENT_FOR_VALUE.IMPLANT,
  'Instant Tooth Whitening/Complete oral check up',
  'Wisdom tooth pain/extraction',
  APPOINTMENT_FOR_VALUE.ROOT_CANAL,
  APPOINTMENT_FOR_VALUE.OTHER,
  APPOINTMENT_FOR_VALUE.EMERGENCY,
];

export const CLINIC_LOCATION_VALUE = {
  SECTOR_65: 'Sector 65, Gurugram',
  WEST_DELHI: 'Mohan Garden, West Delhi',
};
