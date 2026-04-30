'use client';

import { useState, useEffect } from 'react';
import { useToolAnalytics } from 'hooks/useToolAnalytics';
import { TOOL_SLUG, TOOL_NAME_GA } from 'lib/tools/constants';
import { computeSmileMatcherResult } from 'lib/tools/engines/smile-matcher';
import ToolResultActions from 'components/tools/ToolResultActions';
import {
  ToolFormCard,
  ToolChoiceRow,
  ToolSubmitButton,
  ToolSubmitRow,
  ToolResultSurface,
  ToolResultPanel,
} from 'components/tools/tool-ui';

const initial = {
  concern: 'Crooked teeth',
  visibility: 'No preference',
  eventTimeline: '3-12 months',
  ageGroup: 'Adult',
  budgetComfort: 'Mid-range',
};

const FIELDS = [
  {
    field: 'concern',
    label: 'Main concern',
    options: ['Crooked teeth', 'Teeth gaps', 'Bite issue', 'Yellow teeth', 'Smile design'],
  },
  {
    field: 'visibility',
    label: 'Visibility preference',
    options: ['Invisible preferred', 'Okay with visible', 'No preference'],
  },
  {
    field: 'eventTimeline',
    label: 'Event / timeline',
    options: ['Within 3 months', '3-12 months', 'No strict timeline'],
  },
  { field: 'ageGroup', label: 'Age group', options: ['Teen', 'Adult'] },
  {
    field: 'budgetComfort',
    label: 'Budget comfort',
    options: ['Economical', 'Mid-range', 'Premium'],
  },
];

export default function SmileTreatmentMatcherClient() {
  const toolSlug = TOOL_SLUG.SMILE_MATCHER;
  const toolGa = TOOL_NAME_GA[toolSlug];
  const { markStart, fireComplete, fireResultShown } = useToolAnalytics(toolGa);
  const [values, setValues] = useState(initial);
  const [result, setResult] = useState(null);

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
    const r = computeSmileMatcherResult(values);
    setResult(r);
    fireComplete({
      result_category: r.result_category,
      recommended_service: r.recommended_service,
      location_default: r.preferred_location,
    });
  };

  const clearResult = () => setResult(null);

  return (
    <div>
      <ToolFormCard>
        <p className="mb-6 text-gray-600">
          Tell us about your smile goal — we suggest a <strong>likely</strong> direction for your Gurgaon consult. Not
          a treatment prescription.
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
            <ToolSubmitButton>See smile guide result</ToolSubmitButton>
          </ToolSubmitRow>
        </form>
      </ToolFormCard>

      <ToolResultSurface show={!!result}>
        {result ? (
          <ToolResultPanel
            title="Likely options"
            badge={result.primaryOption}
            badgeVariant="neutral"
            footer={
              <ToolResultActions toolSlug={toolSlug} toolLabel="Smile options guide" result={result} />
            }
          >
            {result.secondaryOptions.length > 0 ? (
              <p className="text-sm">
                <strong className="text-gray-900">Also discuss:</strong>{' '}
                {result.secondaryOptions.join(' · ')}
              </p>
            ) : null}
            <p className="text-sm">
              <strong className="text-gray-900">Consult goal:</strong> {result.consultGoal}
            </p>
            <p className="text-sm">{result.shortVsLong}</p>
            <p className="text-sm">{result.localNote}</p>
            <p className="text-xs text-gray-500 pt-1">
              Trust note: final advice depends on clinical examination.
            </p>
          </ToolResultPanel>
        ) : null}
      </ToolResultSurface>
    </div>
  );
}
