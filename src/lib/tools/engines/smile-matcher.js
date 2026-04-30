import { APPOINTMENT_FOR_VALUE, CLINIC_LOCATION_VALUE } from 'lib/tools/constants';

export function computeSmileMatcherResult(inputs) {
  const { concern, visibility, eventTimeline, budgetComfort } = inputs;

  let primary = 'Orthodontic consultation (aligners or braces)';
  let secondary = [];
  let consultGoal =
    'Map tooth positions, bite, and whether aligners, braces, or cosmetic options fit your timeline.';
  let shortVsLong =
    'Treatment length depends on how much tooth movement is needed — often months for orthodontics vs faster options for simple cosmetic fixes.';
  let localNote =
    'At Hapliv Sector 65 (Golf Course Extension Road), we confirm suitability in person — this guide is a starting point only.';

  if (concern === 'Crooked teeth') {
    if (visibility === 'Invisible preferred') {
      primary = 'Invisalign / clear aligners (likely)';
      secondary = ['Ceramic braces if complex'];
    } else if (budgetComfort === 'Economical') {
      primary = 'Metal braces (likely)';
      secondary = ['Ceramic braces if you want lower visibility'];
    } else {
      primary = 'Invisalign or ceramic braces';
      secondary = ['Metal braces if bite mechanics favour fixed appliances'];
    }
  } else if (concern === 'Teeth gaps') {
    primary =
      visibility === 'Invisible preferred'
        ? 'Clear aligners (often suitable for spacing)'
        : 'Braces or aligners — consult needed if gaps are wide or multiple';
    secondary = ['Dental bonding or veneers for very small localized gaps — case dependent'];
  } else if (concern === 'Bite issue') {
    primary = 'Orthodontic consultation — fixed braces or aligners depending on severity';
    secondary = ['Complex bites may need longer fixed appliance phases'];
  } else if (concern === 'Yellow teeth') {
    primary =
      eventTimeline === 'Within 3 months'
        ? 'Professional whitening consult (in-clinic or supervised take-home)'
        : 'Whitening or hygiene-heavy smile refresh — confirmed after exam';
    secondary = ['Veneers only if staining/ shape needs more than bleaching'];
    shortVsLong =
      'Whitening can be quick; deeper colour issues may need more than one visit or alternative treatments.';
  } else if (concern === 'Smile design') {
    primary =
      eventTimeline === 'Within 3 months'
        ? 'Cosmetic dentistry consult — whitening, bonding, edge refinements as appropriate'
        : 'Smile design consult — may combine orthodontics + cosmetic work';
    secondary = ['Orthodontics first if alignment is the main concern'];
  }

  let recommended_service = APPOINTMENT_FOR_VALUE.SMILE_DESIGN;
  if (concern === 'Yellow teeth') {
    recommended_service = APPOINTMENT_FOR_VALUE.WHITENING;
  } else if (
    concern === 'Crooked teeth' ||
    concern === 'Teeth gaps' ||
    concern === 'Bite issue'
  ) {
    recommended_service =
      visibility === 'Invisible preferred'
        ? APPOINTMENT_FOR_VALUE.INVISALIGN
        : APPOINTMENT_FOR_VALUE.BRACES;
  }

  return {
    primaryOption: primary,
    secondaryOptions: secondary.slice(0, 2),
    consultGoal,
    shortVsLong,
    localNote,
    result_category: primary,
    recommended_service,
    urgency_level: 'low',
    cta_mode: 'evaluative',
    preferred_location: CLINIC_LOCATION_VALUE.SECTOR_65,
    user_inputs_summary_keys: Object.keys(inputs),
  };
}
