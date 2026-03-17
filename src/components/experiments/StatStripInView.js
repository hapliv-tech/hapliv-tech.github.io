// components/StatsStrip.js (use your existing CountUp/Stat or the one we built)
"use client";
import Reveal from "./Reveal";
import { Stat } from "../StatsStrip"; // if you exported Stat; otherwise inline

export default function StatsStripInView() {
  const items = [
    { to: 2000, suffix: "+", label: "Happy Patients", color: "purple" },
    { to: 10,   suffix: "+", label: "Years Experience", color: "orange" },
    { to: 99,   suffix: "%", label: "Success Rate", color: "purple" },
    { to: 2,               label: "Clinic Locations", color: "orange" },
  ];

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white px-4 py-8 ring-1 ring-black/5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]">
        <div className="grid items-center grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 90}>
              {/* Ensure your <Stat> supports trigger="view" (we added that earlier) */}
              <Stat {...it} trigger="view" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
