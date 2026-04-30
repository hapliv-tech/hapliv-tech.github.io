'use client';

import { motion, AnimatePresence } from 'framer-motion';

export function ToolFormCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-card border border-gray-100/90 bg-white shadow-soft-lg p-5 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function ToolFieldGroup({ title, children }) {
  return (
    <div className="space-y-3">
      {title ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</p>
      ) : null}
      <div className="space-y-2">{children}</div>
    </div>
  );
}

/**
 * Segmented pill choices — keyboard: Tab between buttons, Enter/Space to select (native button).
 */
export function ToolChoiceRow({ label, name, options, value, onChange }) {
  const id = `tool-field-${name}`;
  return (
    <div className="space-y-2">
      <span id={`${id}-label`} className="block text-sm font-medium text-gray-900">
        {label}
      </span>
      <div
        role="group"
        aria-labelledby={`${id}-label`}
        className="flex flex-wrap gap-2"
      >
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={`${id}-${opt}`}
              type="button"
              name={name}
              aria-pressed={selected}
              onClick={() => onChange(opt)}
              className={`min-h-[44px] cursor-pointer touch-manipulation px-3.5 py-2.5 text-left text-sm font-medium rounded-button border transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/55 focus-visible:ring-offset-2 active:scale-[0.99] ${
                selected
                  ? 'z-[1] border-slate-500/55 bg-slate-100 text-gray-900 shadow-sm ring-1 ring-slate-400/25 ring-inset'
                  : 'border-gray-200/95 bg-white text-gray-700 hover:border-slate-300 hover:bg-slate-50/90'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ToolSelectField({ label, name, options, value, onChange }) {
  const id = `tool-select-${name}`;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full min-h-[44px] appearance-none rounded-button border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-gray-900 shadow-sm transition-colors focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 20 20" aria-hidden="true">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 8l4 4 4-4"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function ToolSubmitButton({ children, className = '' }) {
  return (
    <button
      type="submit"
      className={`w-full min-h-[48px] px-8 py-3 font-semibold text-white rounded-button bg-primary shadow-button transition hover:bg-primary-dark hover:shadow-button-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto ${className}`}
    >
      {children}
    </button>
  );
}

export function ToolFormHint({ children }) {
  return <p className="text-xs text-gray-500 leading-relaxed">{children}</p>;
}

export function ToolSubmitRow({ children, hint }) {
  return (
    <div className="space-y-2 pt-2">
      {children}
      {hint ? <ToolFormHint>{hint}</ToolFormHint> : null}
    </div>
  );
}

/** Wraps result block with enter animation */
export function ToolResultSurface({ show, children }) {
  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const BADGE_VARIANT = {
  routine: 'bg-emerald-50 text-emerald-900 border-emerald-200/80',
  soon: 'bg-amber-50 text-amber-950 border-amber-200/90',
  urgent: 'bg-red-50 text-red-950 border-red-200/90',
  neutral: 'bg-slate-100 text-slate-800 border-slate-200/90',
};

export function ToolResultPanel({ title, badge, badgeVariant = 'neutral', children, footer }) {
  const bv = BADGE_VARIANT[badgeVariant] || BADGE_VARIANT.neutral;
  return (
    <div className="overflow-hidden rounded-card border border-gray-100/90 bg-white shadow-soft-lg ring-1 ring-black/[0.03]">
      <div className="border-l-[3px] border-l-primary/35">
        <div className="bg-gradient-to-br from-white via-white to-gray-50/70 p-5 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">{title}</h3>
            {badge ? (
              <span
                className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-xs font-semibold ${bv}`}
              >
                {badge}
              </span>
            ) : null}
          </div>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-[0.9375rem]">
            {children}
          </div>
          {footer ? <div className="mt-6 border-t border-gray-100 pt-5">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}

export function ToolResultSection({ label, children, className = '' }) {
  return (
    <div className={className}>
      {label ? (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      ) : null}
      <div>{children}</div>
    </div>
  );
}
