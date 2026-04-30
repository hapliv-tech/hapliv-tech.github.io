'use client';

import { useState, useEffect } from 'react';
import { useToolAnalytics } from 'hooks/useToolAnalytics';
import { TOOL_SLUG, TOOL_NAME_GA } from 'lib/tools/constants';
import { computeCostEstimatorResult } from 'lib/tools/engines/cost-estimator';
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
  ageGroup: 'Adult',
  concern: 'Crowding',
  aesthetic: 'No preference',
  budgetBand: '₹60k–₹1.5L',
  timeline: 'Balanced',
  followUp: 'Gurgaon only',
};

const FIELDS = [
  { field: 'ageGroup', label: 'Age group', options: ['Teen', 'Adult'] },
  {
    field: 'concern',
    label: 'Main concern',
    options: ['Crowding', 'Spacing', 'Overbite/Underbite', 'General smile improvement'],
  },
  {
    field: 'aesthetic',
    label: 'Aesthetic preference',
    options: ['Prefer invisible', 'Open to visible braces', 'No preference'],
  },
  {
    field: 'budgetBand',
    label: 'Budget comfort (indicative band)',
    options: ['<₹60k', '₹60k–₹1.5L', '₹1.5L–₹3L', '₹3L+'],
  },
  {
    field: 'timeline',
    label: 'Timeline priority',
    options: ['Fastest possible', 'Balanced', 'Most economical'],
  },
  {
    field: 'followUp',
    label: 'Follow-up convenience',
    options: ['Gurgaon only', 'West Delhi okay too'],
  },
];

export default function InvisalignBracesCostEstimatorClient() {
  const toolSlug = TOOL_SLUG.COST_ESTIMATOR;
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
    const r = computeCostEstimatorResult(values);
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
          Share your preferences for braces or Invisalign in Gurgaon. This guide helps you choose what to book or
          WhatsApp about next; detailed fee ranges remain on the dedicated cost pages.
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
            <ToolSubmitButton>See consultation plan</ToolSubmitButton>
          </ToolSubmitRow>
        </form>
      </ToolFormCard>

      <ToolResultSurface show={!!result}>
        {result ? (
          <ToolResultPanel
            title="Your indicative result"
            badge={result.likelyFit}
            badgeVariant="neutral"
            footer={
              <ToolResultActions
                toolSlug={toolSlug}
                toolLabel="Braces & Invisalign consultation planner"
                result={result}
              />
            }
          >
            <p>{result.bracesBand}</p>
            <p>{result.ceramicBand}</p>
            <p>{result.invisalignBand}</p>
            <p>
              <strong className="text-gray-900">Complexity:</strong> {result.complexityNote}
            </p>
            <p>
              <strong className="text-gray-900">Timeline:</strong> {result.timelineNote}
            </p>
            <p>{result.quoteExplainer}</p>
            <p className="font-medium text-gray-900">{result.recommendedNext}</p>
            <p className="text-xs text-gray-500 pt-1">
              Trust note: final advice depends on clinical examination.
            </p>
          </ToolResultPanel>
        ) : null}
      </ToolResultSurface>
    </div>
  );
}
