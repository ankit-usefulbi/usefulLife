import {
  Calendar,
  ArrowRight,
  Activity,
  Microscope,
  Award,
  ChevronRight,
  Check,
  CalendarCheck,
} from "lucide-react";

export default function HomeView({ onBookAppointment }) {
  const diagnosticPackages = [
    {
      id: "full-body",
      badge: "",
      badgeColor: "",
      title: "Complete Full-Body Vitality Screening",
      parameters: "82 Diagnostic Parameters",
      description:
        "Comprehensive health audit covering Liver, Kidney, Lipid, Thyroid, CBC, Vitamin D3 & B12, plus HbA1c blood sugar.",
      turnaround: "",
      includes: [
        "Complete Hemogram & Blood Profile",
        "Cardiac Risk & Lipid Biomarkers",
        "Liver & Renal Function Tests",
        "Free Physician Report Consultation",
      ],
    },
    {
      id: "cardiac",
      badge: "",
      badgeColor: "",
      title: "Advanced Cardiac & Vascular Risk Panel",
      parameters: "24 Clinical Tests",
      description:
        "Specialized screening for early cardiovascular assessment, inflammatory markers, and cholesterol metabolism.",
      turnaround: "",
      includes: [
        "High-Sensitivity CRP (hs-CRP)",
        "Lipid Profile with Apo-B & Lipoprotein(a)",
        "Homocysteine & Electrolytes",
        "Cardiologist Triage Recommendation",
      ],
    },
    {
      id: "diabetes",
      badge: "",
      badgeColor: "",
      title: "Diabetes & Metabolic Monitoring Panel",
      parameters: "16 Targeted Tests",
      description:
        "Accurate glycemic index tracking, insulin sensitivity metrics, and kidney filtration micro-assessment.",
      turnaround: "",
      includes: [
        "HbA1c (3-Month Glycated Hemoglobin)",
        "Fasting & Post-Prandial Plasma Glucose",
        "Estimated GFR & Urine Microalbumin",
        "Endocrine Health Guidance Sheet",
      ],
    },
    {
      id: "senior",
      badge: "",
      badgeColor: "",
      title: "Senior Citizen Active Care Package",
      parameters: "76 Vital Tests",
      description:
        "Tailored diagnostic panel for age 50+, emphasizing bone density markers, arthritis indices, and prostate/hormonal balance.",
      turnaround: "",
      includes: [
        "Calcium, Phosphorus & Bone Profile",
        "Uric Acid & Rheumatoid Markers",
        "Thyroid Panel (T3, T4, TSH)",
        "Geriatric Care Support Assistance",
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-12">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-soft sm:p-10 lg:p-12">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Precision Health Diagnostics.{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Accurate Reports.
              </span>{" "}
              Better Living.
            </h1>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Take proactive control of your wellbeing. usefulLife provides
              comprehensive clinical pathology, full-body biometric screenings,
              and same-day certified reports — conducted in accredited labs or
              collected at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookAppointment}
                className="primary-button group text-sm shadow-md shadow-emerald-700/25"
              >
                <Calendar size={18} strokeWidth={2.4} aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a href="#diagnostics" className="secondary-button text-sm">
                <Microscope
                  size={17}
                  className="text-emerald-700"
                  aria-hidden="true"
                />
                <span>View Diagnostic Tests</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-slate-900 shadow-2xl shadow-emerald-950/15">
              <img
                src="/health_diagnostics_banner.jpg"
                alt="usefulLife Health Diagnostics — Modern Clinical Laboratory and Medical Consultation"
                className="h-[340px] sm:h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient overlay for readability of badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Badge 2 (Top Right): Accreditation */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-xl bg-emerald-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-emerald-700/50">
                <Award
                  size={14}
                  className="text-emerald-300"
                  aria-hidden="true"
                />
                <span>NABL Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Popular Health Diagnostic Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Designed by senior pathologists to screen all major body organs
              and metabolic markers.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookAppointment}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition"
          >
            <span>Book Custom Panel</span>
            <ChevronRight size={15} />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diagnosticPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-emerald-300 hover:shadow-card"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <Activity size={14} />
                  <span>{pkg.parameters}</span>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">
                  {pkg.description}
                </p>

                <div className="rounded-xl bg-slate-50 p-2.5 text-[11px] text-slate-500 space-y-1">
                  <span className="block font-bold text-slate-700">
                    Includes:
                  </span>
                  <ul className="space-y-1">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check
                          size={11}
                          className="text-emerald-600 shrink-0"
                        />
                        <span className="truncate">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {pkg.turnaround}
                </span>
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition active:scale-95"
                >
                  <span>Book</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="book-appointment-section"
        className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/25 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 p-6 shadow-card sm:p-10"
        aria-labelledby="booking-cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-3.5 py-1 text-xs font-bold shadow-xs">
            <CalendarCheck size={14} aria-hidden="true" />
            <span>Fast-Track Diagnostic Booking</span>
          </div>

          <h2
            id="booking-cta-heading"
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Schedule Your Health Appointment in Minutes
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Skip the long waiting queues at crowded clinics. Complete our
            accessible 4-step intake form with your personal details, home
            address, and vital medical measurements to confirm your appointment.
          </p>

          <div className="pt-3">
            <button
              type="button"
              onClick={onBookAppointment}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-emerald-700/30 transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              <Calendar size={20} strokeWidth={2.6} aria-hidden="true" />
              <span>Book an Appointment Now</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
