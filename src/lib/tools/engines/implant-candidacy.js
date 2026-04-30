import { APPOINTMENT_FOR_VALUE, CLINIC_LOCATION_VALUE } from 'lib/tools/constants';

const LIKELY = 'Likely suitable for implant consultation';
const EVAL = 'Needs clinical evaluation before suitability';
const MULTI = 'Multiple replacement options should be discussed';

export function computeImplantCandidacy(inputs) {
  const { missingCount, extractionStatus, chewingDifficult, smoking, medicalConcern, fixedVsRemovable } =
    inputs;

  let outcome = EVAL;
  let explanation =
    'Implant suitability depends on bone volume, gum health, bite, and 3D imaging — never on a short checklist alone.';

  if (smoking === 'Yes' || medicalConcern === 'Yes') {
    outcome = EVAL;
    explanation =
      'Medical factors and healing risks mean suitability must be confirmed in clinic with your history and scans.';
  } else if (missingCount === 'Full arch/many' || (missingCount === '2-3' && extractionStatus === 'Not sure')) {
    outcome = MULTI;
    explanation =
      'Multiple missing teeth may be treated with implants, bridges, or removable options — we compare pros, bone needs, and budget after examination.';
  } else if (
    missingCount === '1' ||
    (missingCount === '2-3' && (extractionStatus === 'Already extracted' || extractionStatus === 'To be extracted'))
  ) {
    outcome = LIKELY;
    explanation =
      'Many single-tooth or short-span cases can be evaluated for implants — final planning still requires bone and gum assessment.';
  }

  if (chewingDifficult === 'Yes') {
    outcome = outcome === MULTI ? MULTI : EVAL;
    explanation +=
      ' Chewing difficulty suggests we should prioritise a full functional assessment, not only the gap count.';
  }

  if (fixedVsRemovable === 'Open to either' && outcome === LIKELY) {
    outcome = MULTI;
    explanation =
      'Because you are open to alternatives, we will compare implants versus bridge or removable options after your exam.';
  }

  return {
    outcome,
    result_category: outcome,
    explanation,
    scanNote:
      'Bone quality, gum health, sinus/nerve position, and bite are decided with examination and imaging — not this questionnaire.',
    recommended_service: APPOINTMENT_FOR_VALUE.IMPLANT,
    urgency_level: 'low',
    cta_mode: 'evaluative',
    preferred_location: CLINIC_LOCATION_VALUE.SECTOR_65,
    user_inputs_summary_keys: Object.keys(inputs),
  };
}
