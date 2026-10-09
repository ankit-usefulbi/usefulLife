import {
  ShieldCheck,
  Edit3,
  UserRound,
  MapPin,
  HeartPulse,
  PhoneCall,
} from "lucide-react";

export default function ReviewAndSubmit({ form, onEditStep }) {
  // BMI calculation for the summary
  const heightM = form.height ? Number(form.height) / 100 : null;
  const weightKg = form.weight ? Number(form.weight) : null;
  let bmi = null;
  let bmiCategory = null;
  if (heightM && weightKg && heightM > 0.5 && weightKg > 10) {
    const calc = weightKg / (heightM * heightM);
    bmi = calc.toFixed(1);
    if (calc < 18.5) bmiCategory = "Underweight";
    else if (calc < 25) bmiCategory = "Normal / Optimal";
    else if (calc < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obesity";
  }

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <UserRound
              size={17}
              className="text-emerald-600"
              aria-hidden="true"
            />
            <span>Personal Information</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition"
            onClick={() => onEditStep(0, "Edit personal information")}
            aria-label="Edit personal information"
          >
            <Edit3 size={13} aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>
        <dl className="grid gap-4 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Full Legal Name
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.fullName || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Email Address
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900 break-words">
              {form.email || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Date of Birth
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.dob || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Gender Identity
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.gender || "—"}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium text-slate-400">
              Primary Phone Number
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.countryCode} {form.phone || "—"}
            </dd>
          </div>
        </dl>
      </div>

      
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <MapPin size={17} className="text-emerald-600" aria-hidden="true" />
            <span>Residential Address</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition"
            onClick={() => onEditStep(1, "Edit contact details")}
            aria-label="Edit contact details"
          >
            <Edit3 size={13} aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>
        <dl className="grid gap-4 p-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium text-slate-400">
              Street Address
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.address || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">City / Town</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.city || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              State / Region
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.state || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              PIN / Postal Code
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.pin || "—"}
            </dd>
          </div>
        </dl>
      </div>

      
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <HeartPulse
              size={17}
              className="text-emerald-600"
              aria-hidden="true"
            />
            <span>Medical Information &amp; Clinical Vitals</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition"
            onClick={() => onEditStep(2, "Edit medical information")}
            aria-label="Edit medical information"
          >
            <Edit3 size={13} aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>

        
        <div className="grid grid-cols-2 gap-3 border-b border-slate-100 bg-emerald-50/20 p-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200/70 bg-white p-3">
            <span className="text-[11px] font-medium text-slate-400">
              Blood Group
            </span>
            <p className="mt-1 text-base font-bold text-emerald-800">
              {form.bloodGroup || "—"}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/70 bg-white p-3">
            <span className="text-[11px] font-medium text-slate-400">
              Height / Weight
            </span>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {form.height ? `${form.height} cm` : "—"} /{" "}
              {form.weight ? `${form.weight} kg` : "—"}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/70 bg-white p-3">
            <span className="text-[11px] font-medium text-slate-400">
              Calculated BMI
            </span>
            <p className="mt-1 text-sm font-bold text-slate-800">
              {bmi ? `${bmi} (${bmiCategory})` : "—"}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/70 bg-white p-3">
            <span className="text-[11px] font-medium text-slate-400">
              Oxygen SpO₂
            </span>
            <p className="mt-1 text-sm font-bold text-emerald-700">
              {form.spo2 ? `${form.spo2}%` : "—"}
            </p>
          </div>
        </div>

        <dl className="grid gap-4 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Body Temperature
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {form.temperature ? `${form.temperature} °C` : "Not recorded"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-slate-400">
              Emergency Contact
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900 flex items-center gap-1.5">
              <PhoneCall
                size={14}
                className="text-emerald-600"
                aria-hidden="true"
              />
              {form.emergencyContact || "Not designated"}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium text-slate-400">
              Known Allergies
            </dt>
            <dd className="mt-1 text-sm font-medium">
              {form.allergies ? (
                <span className="inline-block rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 border border-amber-200">
                  ⚠️ {form.allergies}
                </span>
              ) : (
                <span className="text-slate-500">None declared</span>
              )}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium text-slate-400">
              Current Medications
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900">
              {form.medications || "None declared"}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-medium text-slate-400">
              Existing Medical Conditions
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900">
              {form.conditions || "None declared"}
            </dd>
          </div>
        </dl>
      </div>

      
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-teal-50/50 p-4 text-xs text-slate-700">
        <ShieldCheck
          className="mt-0.5 shrink-0 text-emerald-700"
          size={22}
          aria-hidden="true"
        />
        <div className="space-y-1">
          <h4 className="font-bold text-slate-900">
            usefulLife Patient Intake Declaration
          </h4>
          <p className="text-[12px] leading-relaxed text-slate-600">
            By clicking <strong>Submit Registration</strong>, you attest that
            the information provided is truthful and complete to the best of
            your knowledge. This digital record will be securely transferred to
            your assigned clinical care team.
          </p>
        </div>
      </div>
    </div>
  );
}
