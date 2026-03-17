// /src/components/DentalServices.jsx
import { FaTeeth, FaTooth, FaChild, FaSmile, FaXRay, FaSyringe } from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaTeeth className="text-2xl" />,
    title: "Braces & Invisalign",
    desc: "Advanced orthodontic care for teens & adults.",
    link: "/treatments/braces",
  },
  {
    icon: <FaChild className="text-2xl" />,
    title: "Kids Dentistry",
    desc: "Gentle care for growing smiles.",
    link: "/treatments/kids-dentistry",
  },
  {
    icon: <FaSmile className="text-2xl" />,
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers & smile makeovers.",
    link: "/services/cosmetic",
  },
  {
    icon: <FaSyringe className="text-2xl" />,
    title: "Root Canal Treatment",
    desc: "Painless precision with modern tech.",
    link: "/services/rct",
  },
  {
    icon: <FaXRay className="text-2xl" />,
    title: "Laser Dentistry",
    desc: "Fast, safe & minimally invasive.",
    link: "/treatments/laser-dentistry",
  },
  {
    icon: <FaTooth className="text-2xl" />,
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacement.",
    link: "/treatments/implant",
  },
];

export default function DentalServices() {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-purple-50/40 py-14">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Dental Services</h2>
          <p className="mt-2 text-neutral-600">
            Complete, modern dentistry across Gurgaon Sector 65 & West Delhi.
          </p>
        </div>

        <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-orange-700 rounded-xl bg-orange-50">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-orange-700 transition opacity-0 group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 transition pointer-events-none rounded-2xl ring-2 ring-transparent group-hover:ring-orange-200" />
            </a>
          ))}
        </div>

        {/* quick stats */}
        <div className="grid gap-4 mt-8 text-center sm:grid-cols-3">
          <Stat k="10+ Years" v="of Excellence" />
          <Stat k="4.9/5" v="Google Rating" />
          <Stat k="2" v="Convenient Clinics" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="px-4 py-6 bg-white border shadow-sm rounded-2xl border-neutral-200">
      <div className="text-2xl font-bold">{k}</div>
      <div className="text-xs text-neutral-600">{v}</div>
    </div>
  );
}
