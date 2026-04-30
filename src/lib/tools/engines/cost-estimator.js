import { APPOINTMENT_FOR_VALUE, CLINIC_LOCATION_VALUE } from 'lib/tools/constants';

/**
 * @typedef {Object} CostEstimatorInputs
 * @property {'Teen'|'Adult'} ageGroup
 * @property {'Crowding'|'Spacing'|'Overbite/Underbite'|'General smile improvement'} concern
 * @property {'Prefer invisible'|'Open to visible braces'|'No preference'} aesthetic
 * @property {'<₹60k'|'₹60k–₹1.5L'|'₹1.5L–₹3L'|'₹3L+'} budgetBand
 * @property {'Fastest possible'|'Balanced'|'Most economical'} timeline
 * @property {'Gurgaon only'|'West Delhi okay too'} followUp
 */

export function computeCostEstimatorResult(inputs) {
  const { ageGroup, aesthetic, budgetBand, timeline, concern, followUp } = inputs;

  let likelyFit = 'Consult needed';
  let bracesBand =
    'Indicative range for many metal-braces cases in Gurgaon: often roughly ₹60k–₹1.5L depending on case length and mechanics (non-binding).';
  let ceramicBand =
    'Ceramic braces often sit in a mid band — typically somewhat above basic metal quotes in the same case; exact numbers need a clinical exam.';
  let invisalignBand =
    'Clear aligners (e.g. Invisalign) often fall in a higher band — many comprehensive cases in Gurgaon are roughly ₹1.5L–₹3.5L+ indicative before add-ons; simpler cases may be lower.';
  let complexity =
    'Bite type, crowding degree, need for extractions or auxiliaries, and treatment length all shift your quote. Only a scan and clinical check define your plan.';

  let timelineNote =
    timeline === 'Fastest possible'
      ? 'Fixed braces sometimes complete certain movements faster than removable aligners — your doctor will compare options honestly.'
      : timeline === 'Most economical'
        ? 'More economical routes often mean traditional fixed braces; aligners can cost more for similar complexity.'
        : 'We balance aesthetics, comfort, and duration once we have your records.';

  const lowBudget = budgetBand === '<₹60k';
  const midBudget = budgetBand === '₹60k–₹1.5L';
  const highBudget = budgetBand === '₹1.5L–₹3L' || budgetBand === '₹3L+';
  const wantsInvisible = aesthetic === 'Prefer invisible';
  const okVisible = aesthetic === 'Open to visible braces' || aesthetic === 'No preference';

  if (wantsInvisible && lowBudget) {
    likelyFit = 'Consult needed';
    complexity =
      'You prefer near-invisible treatment with a limited budget band — many comprehensive aligner cases land above this. We should review whether limited aligners, ceramic braces, or phased treatment fits.';
  } else if (wantsInvisible && midBudget) {
    likelyFit = 'Ceramic braces or clear aligners — consult needed';
    complexity =
      'Mid budgets can suit ceramic fixed braces or selective aligner cases; attachment needs and bite complexity decide which is realistic.';
  } else if (wantsInvisible && highBudget) {
    likelyFit = 'Invisalign / clear aligners';
    complexity =
      'With your aesthetic preference and budget band, aligners are often a strong fit — still confirmed only after digital records.';
  } else if (okVisible && lowBudget) {
    likelyFit = 'Metal braces';
    complexity =
      'Metal braces are often the most cost-effective fixed option for crowding, spacing, or bite correction when you are open to visible appliances.';
  } else if (okVisible && midBudget) {
    likelyFit = timeline === 'Most economical' ? 'Metal braces' : 'Ceramic braces';
    complexity =
      concern === 'Overbite/Underbite'
        ? 'Bite corrections can add months and mechanics; your quote reflects that complexity.'
        : 'Your case may suit metal or ceramic — we compare comfort, aesthetics, and fee before you start.';
  } else if (okVisible && highBudget) {
    likelyFit =
      timeline === 'Fastest possible' || aesthetic === 'No preference'
        ? 'Ceramic braces or Invisalign / clear aligners'
        : 'Ceramic braces';
    complexity = 'Higher budgets allow more aesthetic appliance choices; final choice follows records and your goals.';
  }

  if (ageGroup === 'Teen') {
    complexity = `${complexity} Teen cases may include growth considerations — your orthodontist confirms timing.`;
  }

  let recommendedService = APPOINTMENT_FOR_VALUE.BRACES;
  if (likelyFit === 'Consult needed' || likelyFit.includes('consult')) {
    recommendedService = wantsInvisible ? APPOINTMENT_FOR_VALUE.INVISALIGN : APPOINTMENT_FOR_VALUE.BRACES;
  } else if (likelyFit.includes('Invisalign') || likelyFit.includes('clear aligners')) {
    recommendedService = APPOINTMENT_FOR_VALUE.INVISALIGN;
  } else if (likelyFit.includes('Metal') || likelyFit.includes('Ceramic')) {
    recommendedService = APPOINTMENT_FOR_VALUE.BRACES;
  }

  const preferredLocation =
    followUp === 'West Delhi okay too'
      ? CLINIC_LOCATION_VALUE.SECTOR_65
      : CLINIC_LOCATION_VALUE.SECTOR_65;

  return {
    likelyFit,
    bracesBand,
    ceramicBand,
    invisalignBand,
    complexityNote: complexity,
    timelineNote,
    quoteExplainer:
      'What changes your final quote: case difficulty, treatment length, need for auxiliaries/scans/aligner sets, retention, and any refinements.',
    recommendedNext:
      'Book an orthodontic consultation at Sector 65 for a personalized plan — this guide only gives non-binding indicative guidance.',
    result_category: likelyFit,
    recommended_service: recommendedService,
    urgency_level: 'low',
    cta_mode: 'evaluative',
    preferred_location: preferredLocation,
    user_inputs_summary_keys: Object.keys(inputs),
  };
}
