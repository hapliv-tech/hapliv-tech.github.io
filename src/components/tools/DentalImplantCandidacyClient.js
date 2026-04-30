'use client';

import { useState, useEffect } from 'react';
import { useToolAnalytics } from 'hooks/useToolAnalytics';
import { TOOL_SLUG, TOOL_NAME_GA } from 'lib/tools/constants';
import { computeImplantCandidacy } from 'lib/tools/engines/implant-candidacy';
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
  missingCount: '1',
  extractionStatus: 'Already extracted',
  chewingDifficult: 'No',
  smoking: 'No',
  medicalConcern: 'No',
  fixedVsRemovable: 'Fixed',
};

const FIELDS = [
  { field: 'missingCount', label: 'Missing teeth (approx.)', options: ['1', '2-3', 'Full arch/many'] },
  {
    field: 'extractionStatus',
    label: 'Extraction status',
    options: ['Already extracted', 'To be extracted', 'Not sure'],
  },
  { field: 'chewingDifficult', label: 'Chewing difficulty?', options: ['Yes', 'No'] },
  { field: 'smoking', label: 'Smoking?', options: ['Yes', 'No'] },
  { field: 'medicalConcern', label: 'Diabetes / medical concern?', options: ['Yes', 'No'] },
  {
    field: 'fixedVsRemovable',
    label: 'Preference',
    options: ['Fixed', 'Open to either'],
  },
];

export default function DentalImplantCandidacyClient() {
  const toolSlug = TOOL_SLUG.IMPLANT;
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
    const r = computeImplantCandidacy(values);
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
          See whether an <strong>implant consultation</strong> is a sensible next step in Gurgaon. Bone, gums, and
          scans always decide final suitability.
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
            title={result.outcome}
            footer={
              <ToolResultActions
                toolSlug={toolSlug}
                toolLabel="Dental implant consultation planner"
                result={result}
              />
            }
          >
            <p className="text-gray-900">{result.explanation}</p>
            <p className="text-sm">{result.scanNote}</p>
            <p className="text-xs text-gray-500 pt-1">
              Trust note: final advice depends on clinical examination.
            </p>
          </ToolResultPanel>
        ) : null}
      </ToolResultSurface>
    </div>
  );
}
