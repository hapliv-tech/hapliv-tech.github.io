import { APPOINTMENT_FOR_VALUE, CLINIC_LOCATION_VALUE } from 'lib/tools/constants';

const SAME_DAY = 'Same-day dental visit recommended';
const WITHIN_72 = 'Visit within 24-72 hours';
const ROUTINE = 'Routine evaluation recommended';

export function computeToothPainUrgency(inputs) {
  const {
    painLevel,
    swelling,
    nightOrConstant,
    sensitivityHotCold,
    brokenTooth,
    feverPus,
    duration,
  } = inputs;

  const critical =
    painLevel === 'Severe' ||
    swelling === 'Yes' ||
    brokenTooth === 'Yes' ||
    feverPus === 'Yes';

  let category = ROUTINE;
  let cta_mode = 'evaluative';
  let urgency_level = 'low';

  if (critical) {
    category = SAME_DAY;
    cta_mode = 'urgent';
    urgency_level = 'high';
  } else if (
    painLevel === 'Moderate' ||
    nightOrConstant === 'Yes' ||
    sensitivityHotCold === 'Yes' ||
    duration === '3+ days' ||
    duration === '1-3 days'
  ) {
    category = WITHIN_72;
    cta_mode = 'semi_urgent';
    urgency_level = 'medium';
  }

  const why =
    category === SAME_DAY
      ? 'Based on your answers, an in-person dental check soon is advisable — severe pain, swelling, a broken tooth, or signs of infection usually should not wait.'
      : category === WITHIN_72
        ? 'Your answers suggest symptoms that are worth seeing a dentist within the next few days, even if they may not be an immediate emergency.'
        : 'Your answers fit a routine dental evaluation when it is convenient to book.';

  const avoidHome =
    'Do not place aspirin on the gums, avoid extra heat on swollen areas, and do not ignore spreading swelling or fever — seek care if anything worsens.';

  const mentionWhenCalling =
    category === SAME_DAY
      ? 'Pain level, roughly how long it has lasted, and any swelling, fever, bad taste or pus, or a broken tooth — those details help us triage quickly.'
      : category === WITHIN_72
        ? 'Pain level, duration, night pain or constant pain, and any swelling or sensitivity — so we can fit you in appropriately.'
        : 'When symptoms started and whether anything eases or triggers the pain — useful context for your visit.';

  return {
    category,
    result_category: category,
    why,
    avoidHome,
    mentionWhenCalling,
    disclaimer:
      'This page is not a diagnosis or medical advice — it only helps you think about how quickly to see a dentist.',
    recommended_service: APPOINTMENT_FOR_VALUE.EMERGENCY,
    urgency_level,
    cta_mode,
    preferred_location: CLINIC_LOCATION_VALUE.SECTOR_65,
    user_inputs_summary_keys: Object.keys(inputs),
  };
}
