import BookAppointmentLink from 'components/seo/BookAppointmentLink';
import ConsultationCtaClient from 'components/app-pages/ConsultationCtaClient';
import { FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

export function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-pill border border-primary/10 bg-primary-lightest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-gray-950 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, description, primaryHref = '/appointment', primaryLabel = 'Book Consultation', secondaryHref, secondaryLabel, highlights = [], children }) {
  const isExternalSecondary = Boolean(secondaryHref?.startsWith('http'));

  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-white via-primary-lightest/45 to-gray-50 px-4 py-16 md:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(81,36,122,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(81,36,122,0.026)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/35" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          {eyebrow ? (
            <span className="mb-5 inline-flex rounded-pill border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary shadow-soft">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookAppointmentLink
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-primary px-7 py-4 text-base font-semibold text-white shadow-button transition-all duration-300 hover:bg-primary-dark hover:shadow-button-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaCalendarCheck className="h-4 w-4" aria-hidden />
              {primaryLabel}
            </BookAppointmentLink>
            {secondaryHref && secondaryLabel ? (
              <a
                href={secondaryHref}
                target={isExternalSecondary ? '_blank' : undefined}
                rel={isExternalSecondary ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center rounded-button border border-primary/20 bg-white px-7 py-4 text-base font-semibold text-primary shadow-soft transition-all duration-300 hover:bg-primary-lightest hover:scale-[1.02] active:scale-[0.98]"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
        <div className="relative">
          {children || (
            <div className="rounded-card border border-white bg-white p-6 shadow-premium">
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 rounded-card border border-primary/10 bg-primary-lightest/50 p-4">
                    <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm font-semibold leading-relaxed text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const ConsultationCta = ConsultationCtaClient;
