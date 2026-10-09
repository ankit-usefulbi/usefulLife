import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Info,
  Printer,
  RotateCcw,
  Home,
  UserRound,
  MapPin,
  HeartPulse,
  FileCheck2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../../components/personalInfo";
import ContactDetails from "../../components/contactDetails";
import MedicalInformation from "../../components/medicalInformation";
import ReviewAndSubmit from "../../components/reviewAndSubmit";
import Sidebar from "../../components/sidebar";

const steps = [
  {
    title: "Personal Information",
    hint: "Legal name & identification",
    short: "Personal",
    icon: UserRound,
  },
  {
    title: "Address & Contact",
    hint: "Residential dispatch info",
    short: "Address",
    icon: MapPin,
  },
  {
    title: "Medical & Vitals",
    hint: "Clinical metrics & history",
    short: "Medical",
    icon: HeartPulse,
  },
  {
    title: "Review & Submit",
    hint: "Verification & confirmation",
    short: "Review",
    icon: FileCheck2,
  },
];

const initial = {
  fullName: "",
  email: "",
  dob: "",
  gender: "",
  phone: "",
  countryCode: "+91",
  address: "",
  city: "",
  state: "",
  pin: "",
  bloodGroup: "",
  height: "",
  weight: "",
  spo2: "",
  temperature: "",
  allergies: "",
  medications: "",
  conditions: "",
  emergencyContact: "",
};

const BookingPage = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [announcement, setAnnouncement] = useState(
    "Step 1 of 4: Personal Information for usefulLife Healthcare",
  );
  const [submitted, setSubmitted] = useState(false);
  const [patientId, setPatientId] = useState("");

  const headingRef = useRef(null);
  const navigate = useNavigate();

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  // Generate patient ID when submitted
  useEffect(() => {
    if (submitted && !patientId) {
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      setPatientId(`UL-2026-${randomNum}`);
    }
  }, [submitted, patientId]);

  const handleBookAppointment = () => {
    navigate("/booking");
    setStep(0);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const validate = () => {
    const next = {};
    if (step === 0) {
      if (!form.fullName.trim())
        next.fullName = "Please enter your full legal name.";
      if (!form.email.trim()) next.email = "Please enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email =
          "Please enter a valid email address (e.g., patient@example.com).";
      if (!form.dob) next.dob = "Please specify your date of birth.";
      if (!form.gender) next.gender = "Please select a gender identity.";
      if (!form.phone.trim())
        next.phone = "Please enter your contact phone number.";
      else if (!/^[0-9 ()-]{7,15}$/.test(form.phone))
        next.phone = "Please enter a valid 7 to 15 digit telephone number.";
    }
    if (step === 1) {
      if (!form.address.trim())
        next.address = "Please provide your residential street address.";
      if (!form.city.trim()) next.city = "Please enter your city or town.";
      if (!form.state) next.state = "Please choose your state or region.";
      if (!/^\d{6}$/.test(form.pin))
        next.pin = "Please enter a valid 6-digit postal PIN code.";
    }
    if (step === 2) {
      if (!form.bloodGroup) next.bloodGroup = "Please select your blood group.";
      if (
        !form.height ||
        Number(form.height) <= 30 ||
        Number(form.height) > 280
      )
        next.height = "Please enter a valid height in centimeters (e.g. 175).";
      if (
        !form.weight ||
        Number(form.weight) <= 10 ||
        Number(form.weight) > 350
      )
        next.weight = "Please enter a valid weight in kilograms (e.g. 70).";
      if (!form.spo2 || Number(form.spo2) < 50 || Number(form.spo2) > 100)
        next.spo2 =
          "Please enter a valid SpO₂ percentage between 50% and 100%.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      setAnnouncement(
        `There ${Object.keys(next).length === 1 ? "is" : "are"} ${Object.keys(next).length} validation notice${Object.keys(next).length === 1 ? "" : "s"} on this step. Please correct them to proceed.`,
      );
      requestAnimationFrame(() => document.getElementById(first)?.focus());
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (!validate()) return;
    if (step < 3) {
      const next = step + 1;
      setStep(next);
      setErrors({});
      setAnnouncement(`Step ${next + 1} of 4: ${steps[next].title}`);
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    } else {
      setSubmitted(true);
      setAnnouncement(
        "Your usefulLife healthcare intake has been submitted successfully.",
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    if (step > 0) {
      const next = step - 1;
      setStep(next);
      setErrors({});
      setAnnouncement(`Step ${next + 1} of 4: ${steps[next].title}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEditStep = (nextStep, message) => {
    setStep(nextStep);
    setAnnouncement(message || `Navigated to ${steps[nextStep].title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const percent = submitted
    ? 100
    : Math.round(((step + 1) / steps.length) * 100);

  const activeStepComponent =
    step === 0 ? (
      <PersonalInfo form={form} errors={errors} update={update} />
    ) : step === 1 ? (
      <ContactDetails form={form} errors={errors} update={update} />
    ) : step === 2 ? (
      <MedicalInformation form={form} errors={errors} update={update} />
    ) : (
      <ReviewAndSubmit form={form} onEditStep={handleEditStep} />
    );

  return (
    <>
      <div className="space-y-6 mx-auto max-w-7xl">
        {/* Back to Home Breadcrumb button */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-xs hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-800 transition"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            <span>Return to Diagnostics Home</span>
          </button>
        </div>

        {/* Form Intro Banner */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Complete Your Patient Health Registration
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Welcome to <strong>usefulLife</strong>. Please provide your personal
            identification, address, and essential medical vitals below. Your
            information is strictly protected under healthcare privacy
            standards.
          </p>
        </div>

        {/* Mobile step progress tracker (visible only on small screens) */}
        <div className="block rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm lg:hidden">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Step {submitted ? 4 : step + 1} of 4: {steps[step].short}
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
              {percent}% Done
            </span>
          </div>
          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          {/* Step icons row */}
          <div className="mt-3 flex justify-between">
            {steps.map((st, i) => {
              const complete = submitted || i < step;
              const current = !submitted && i === step;
              return (
                <button
                  key={st.title}
                  type="button"
                  disabled={!complete}
                  onClick={() => complete && handleEditStep(i)}
                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                    current
                      ? "text-emerald-700 font-bold"
                      : complete
                        ? "text-slate-800"
                        : "text-slate-400"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                      complete
                        ? "bg-emerald-600 text-white"
                        : current
                          ? "bg-emerald-700 text-white ring-2 ring-emerald-200"
                          : "border border-slate-300 bg-slate-100 text-slate-500"
                    }`}
                  >
                    {complete ? <Check size={12} strokeWidth={3} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{st.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[290px_minmax(0,1fr)] xl:gap-8">
          <Sidebar
            steps={steps}
            step={step}
            submitted={submitted}
            percent={percent}
            onStepClick={handleEditStep}
          />

          <section
            className="min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft"
            aria-labelledby="step-heading"
          >
            <div className="border-b border-slate-100 bg-gradient-to-r from-emerald-50/30 via-white to-transparent px-6 py-5 sm:px-8 sm:py-6">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Step {submitted ? 4 : step + 1} of 4
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {submitted ? "Completed" : `${percent}% completed`}
                </span>
              </div>

              <h2
                id="step-heading"
                ref={headingRef}
                tabIndex={-1}
                className="text-xl font-bold tracking-tight text-slate-900 outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-emerald-600 sm:text-2xl"
              >
                {submitted ? "Registration Completed" : steps[step].title}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {submitted
                  ? "Your usefulLife medical file is now active in our healthcare database."
                  : step === 0
                    ? "Enter your primary identity, contact email, and phone number."
                    : step === 1
                      ? "Provide your residential address for emergency dispatch and medical deliveries."
                      : step === 2
                        ? "Share your vital measurements, blood group, and health history."
                        : "Inspect all sections to verify accuracy before finalizing your registration."}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div
                className="sr-only"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {announcement}
              </div>

              {Object.keys(errors).length > 0 && (
                <div
                  className="mb-6 rounded-xl border border-red-200 bg-red-50/80 p-4"
                  role="alert"
                  aria-labelledby="error-summary-title"
                >
                  <div className="flex items-start gap-3">
                    <Info
                      size={18}
                      className="mt-0.5 shrink-0 text-red-600"
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        id="error-summary-title"
                        className="text-sm font-bold text-red-900"
                      >
                        Please review the required fields below
                      </h3>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-red-800 sm:text-sm">
                        {Object.entries(errors).map(([key, message]) => (
                          <li key={key}>
                            <button
                              type="button"
                              className="text-left font-medium underline decoration-red-300 underline-offset-2 hover:decoration-red-600 transition"
                              onClick={() =>
                                document.getElementById(key)?.focus()
                              }
                            >
                              {message}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Step content or submitted confirmation */}
              {submitted ? (
                <div className="mx-auto max-w-xl py-6 text-center sm:py-10">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-glow">
                    <CheckCircle2
                      size={46}
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                    <span>usefulLife Patient ID: {patientId}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Welcome to usefulLife Healthcare!
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                    Thank you, <strong>{form.fullName}</strong>. Your medical
                    intake registration has been securely processed and saved. A
                    confirmation packet has been sent to{" "}
                    <strong>{form.email}</strong>.
                  </p>

                  {/* Digital Patient Health Card Summary */}
                  <div className="mt-6 text-left rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Activity size={18} className="text-emerald-600" />
                        <span className="font-bold text-sm text-slate-900">
                          useful
                          <span className="text-emerald-600">Life</span> Digital
                          Care Pass
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                        Verified Patient
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 text-xs sm:grid-cols-4">
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Patient Name
                        </span>
                        <span className="font-bold text-slate-800">
                          {form.fullName}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Blood Group
                        </span>
                        <span className="font-bold text-emerald-700">
                          {form.bloodGroup}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Oxygen (SpO₂)
                        </span>
                        <span className="font-bold text-slate-800">
                          {form.spo2}%
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Primary Contact
                        </span>
                        <span className="font-bold text-slate-800">
                          {form.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="secondary-button w-full sm:w-auto"
                    >
                      <Printer size={16} aria-hidden="true" />
                      Print Patient Card
                    </button>

                    <button
                      type="button"
                      className="primary-button w-full sm:w-auto"
                      onClick={() => {
                        setForm(initial);
                        setErrors({});
                        setStep(0);
                        setSubmitted(false);
                        setPatientId("");
                        setAnnouncement(
                          "Form reset. Step 1 of 4: Personal Information.",
                        );
                      }}
                    >
                      <RotateCcw size={16} aria-hidden="true" />
                      Start New Intake
                    </button>

                    <button
                      type="button"
                      onClick={handleGoHome}
                      className="secondary-button w-full sm:w-auto"
                    >
                      <Home size={16} aria-hidden="true" />
                      Return to Home
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Active Step Content */}
                  {activeStepComponent}

                  {/* Navigation Buttons Row */}
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={
                        step === 0
                          ? () => {
                              if (
                                confirm(
                                  "Are you sure you want to clear all entered details?",
                                )
                              ) {
                                setForm(initial);
                                setErrors({});
                                setAnnouncement("Form fields cleared.");
                              }
                            }
                          : goBack
                      }
                      className="secondary-button"
                    >
                      {step === 0 ? (
                        "Clear Form"
                      ) : (
                        <>
                          <ArrowLeft size={16} aria-hidden="true" /> Back
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goNext}
                        className="primary-button w-full sm:w-auto"
                      >
                        {step === 3 ? (
                          <>
                            Submit Registration{" "}
                            <Check
                              size={18}
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <>
                            Continue to {steps[step + 1]?.short}{" "}
                            <ArrowRight size={17} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default BookingPage;
