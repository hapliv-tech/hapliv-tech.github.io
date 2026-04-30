'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useToolAnalytics } from 'hooks/useToolAnalytics';
import { TOOL_SLUG, TOOL_NAME_GA } from 'lib/tools/constants';
import { computeToothPainUrgency } from 'lib/tools/engines/tooth-pain-urgency';
import ToolResultActions from 'components/tools/ToolResultActions';
import { locations } from 'data/locations';
import {
  ToolFormCard,
  ToolChoiceRow,
  ToolSubmitButton,
  ToolSubmitRow,
  ToolResultSurface,
  ToolResultPanel,
} from 'components/tools/tool-ui';

const initial = {
  painLevel: 'Moderate',
  swelling: 'No',
  nightOrConstant: 'No',
  sensitivityHotCold: 'No',
  brokenTooth: 'No',
  feverPus: 'No',
  duration: '<24 hours',
};

const FIELDS = [
  { field: 'painLevel', label: 'Pain level', options: ['Mild', 'Moderate', 'Severe'] },
  { field: 'swelling', label: 'Swelling present?', options: ['Yes', 'No'] },
  { field: 'nightOrConstant', label: 'Pain at night or constant?', options: ['Yes', 'No'] },
  { field: 'sensitivityHotCold', label: 'Sensitivity to hot/cold?', options: ['Yes', 'No'] },
  { field: 'brokenTooth', label: 'Broken or cracked tooth?', options: ['Yes', 'No'] },
  { field: 'feverPus', label: 'Fever, bad taste, or pus?', options: ['Yes', 'No'] },
  { field: 'duration', label: 'How long?', options: ['<24 hours', '1-3 days', '3+ days'] },
];

function severityBadge(ctaMode) {
  if (ctaMode === 'urgent') return { label: 'Urgent — seek care promptly', variant: 'urgent' };
  if (ctaMode === 'semi_urgent') return { label: 'Book soon', variant: 'soon' };
  return { label: 'Routine booking', variant: 'routine' };
}

export default function ToothPainUrgencyClient() {
  const toolSlug = TOOL_SLUG.TOOTH_PAIN;
  const toolGa = TOOL_NAME_GA[toolSlug];
  const { markStart, fireComplete, fireResultShown } = useToolAnalytics(toolGa);
  const [values, setValues] = useState(initial);
  const [result, setResult] = useState(null);
  const g = locations.gurgaon;

  useEffect(() => {
    if (!result) return;
    fireResultShown({
      result_category: result.result_category,
      recommended_service: result.recommended_service,
      location_default: result.preferred_location,
    });
  }, [result, fireResultShown]);

  const run = (e) => {
    e.preventDefault();
    const r = computeToothPainUrgency(values);
    setResult(r);
    fireComplete({
      result_category: r.result_category,
      recommended_service: r.recommended_service,
      location_default: r.preferred_location,
    });
  };

  const clearResult = () => setResult(null);

  const sev = result ? severityBadge(result.cta_mode) : null;

  return (
    <div>
      <ToolFormCard>
        <p className="mb-6 text-gray-600">
          This guide helps you decide how quickly to see a dentist in Gurgaon. It is{' '}
          <strong>not a diagnosis</strong>.
        </p>
        <form onSubmit={run} className="space-y-5">
          {FIELDS.map((row) => (
            <ToolChoiceRow
              key={row.field}
              name={row.field}
              label={row.label}
              options={row.options}
              value={values[row.field]}
              onChange={(v) => {
                markStart();
                setValues((prev) => ({ ...prev, [row.field]: v }));
                if (result) clearResult();
              }}
            />
          ))}
          <ToolSubmitRow>
            <ToolSubmitButton>See recommendation</ToolSubmitButton>
          </ToolSubmitRow>
        </form>
      </ToolFormCard>

      <ToolResultSurface show={!!result}>
        {result && sev ? (
          <ToolResultPanel
            title={result.category}
            badge={sev.label}
            badgeVariant={sev.variant}
            footer={
              <ToolResultActions
                toolSlug={toolSlug}
                toolLabel="Tooth pain — when to see a dentist"
                result={result}
              />
            }
          >
            <p className="text-gray-900">{result.why}</p>
            <p className="text-sm">
              <strong className="text-gray-900">What not to do at home:</strong> {result.avoidHome}
            </p>
            <p className="text-sm">
              <strong className="text-gray-900">If you call or WhatsApp, say:</strong>{' '}
              {result.mentionWhenCalling}
            </p>
            <p className="text-xs text-gray-500">{result.disclaimer}</p>
            {(result.cta_mode === 'urgent' || result.cta_mode === 'semi_urgent') && (
              <div className="rounded-button border border-amber-200/90 bg-amber-50 p-4 text-sm text-gray-800">
                <strong className="text-gray-900">Clinic hours (Gurgaon Sector 65):</strong>{' '}
                {g.openingHours.weekdays}.{' '}
                <Link href="/emergency-dentist-gurgaon" className="font-semibold text-primary underline">
                  Emergency dentist page
                </Link>{' '}
                — same-day visits when capacity allows; call first for triage.
              </div>
            )}
            <p className="text-xs text-gray-500 pt-1">
              Trust note: final advice depends on clinical examination.
            </p>
          </ToolResultPanel>
        ) : null}
      </ToolResultSurface>
    </div>
  );
}
