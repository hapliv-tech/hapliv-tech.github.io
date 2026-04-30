import { WHATSAPP_E164 } from 'lib/seo';

/**
 * Contextual WhatsApp deep link (tool name + category only; not a diagnosis).
 */
export function buildToolWhatsAppUrl({ introLine, toolLabel, resultCategory } = {}) {
  const parts = [
    introLine || 'Hello — I used one of the free planning guides on Hapliv’s website.',
    toolLabel && `Guide: ${toolLabel}`,
    resultCategory && `Result: ${resultCategory}`,
    'I’d like to discuss the next step at your Sector 65 clinic.',
  ].filter(Boolean);
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(parts.join(' '))}`;
}
