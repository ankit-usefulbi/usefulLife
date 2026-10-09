import {
  Heart,
  Activity,
  Thermometer,
  Wind,
  Scale,
  Ruler,
  AlertCircle,
  Pill,
  FileHeart,
  PhoneCall,
  Check,
  Info,
  Sparkles,
} from "lucide-react";

function Field({ label, id, error, required = false, hint, children }) {
  return (
    <div className="min-w-0 space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="field-label" htmlFor={id}>
          {label}
          {required && (
            <span className="required" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
      </div>
      {children}
      {hint && !error && (
        <p className="hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p
          className="error-text flex items-center gap-1"
          id={`${id}-error`}
          role="alert"
        >
          <span aria-hidden="true">•</span>
          {error}
        </p>
      )}
    </div>
  );
}

function TextInput({
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  autoComplete,
  inputMode,
}) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`control ${error ? "control-error" : ""}`}
    />
  );
}

export default function MedicalInformation({ form, errors, update }) {
  // BMI calculation
  const heightM = form.height ? Number(form.height) / 100 : null;
  const weightKg = form.weight ? Number(form.weight) : null;
  let bmi = null;
  let bmiCategory = null;
  let bmiColor = "text-slate-600 bg-slate-100 border-slate-200";

  if (heightM && weightKg && heightM > 0.5 && weightKg > 10) {
    const calc = weightKg / (heightM * heightM);
    bmi = calc.toFixed(1);
    if (calc < 18.5) {
      bmiCategory = "Underweight";
      bmiColor = "text-blue-700 bg-blue-50 border-blue-200";
    } else if (calc >= 18.5 && calc < 25) {
      bmiCategory = "Healthy / Optimal";
      bmiColor = "text-emerald-800 bg-emerald-50 border-emerald-300";
    } else if (calc >= 25 && calc < 30) {
      bmiCategory = "Overweight";
      bmiColor = "text-amber-800 bg-amber-50 border-amber-300";
    } else {
      bmiCategory = "Obesity Range";
      bmiColor = "text-rose-800 bg-rose-50 border-rose-300";
    }
  }

  // Quick Chips helper for textarea fields
  const toggleChipInText = (fieldKey, chipText) => {
    const current = form[fieldKey] || "";
    const items = current
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    let nextItems;
    if (items.includes(chipText)) {
      nextItems = items.filter((item) => item !== chipText);
    } else {
      // If choosing "None Known", clear other items or replace
      if (chipText.toLowerCase().includes("none")) {
        nextItems = [chipText];
      } else {
        nextItems = items
          .filter((item) => !item.toLowerCase().includes("none"))
          .concat(chipText);
      }
    }
    update(fieldKey, nextItems.join(", "));
  };

  const isChipSelected = (fieldKey, chipText) => {
    const current = form[fieldKey] || "";
    return current
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .includes(chipText.toLowerCase());
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const allergyPresets = [
    "None known",
    "Penicillin",
    "Sulfa drugs",
    "Latex",
    "Peanuts",
    "Dust / Pollen",
  ];
  const conditionPresets = [
    "None known",
    "Hypertension (BP)",
    "Type 2 Diabetes",
    "Asthma",
    "Thyroid",
    "Heart Disease",
  ];

  return (
    <div className="space-y-7">
      
      <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              1. Basic Health Measurements &amp; Vitals
            </h3>
            <p className="text-xs text-slate-500">
              Key indicators recorded for your usefulLife patient file
            </p>
          </div>

          
          {bmi ? (
            <div
              className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold ${bmiColor}`}
            >
              <Activity size={14} aria-hidden="true" />
              <span>
                BMI: <strong>{bmi}</strong> ({bmiCategory})
              </span>
            </div>
          ) : (
            <div className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
              Enter height &amp; weight to calculate BMI
            </div>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          
          <div className="sm:col-span-2">
            <Field
              label="Blood Group"
              id="bloodGroup"
              error={errors.bloodGroup}
              required
              hint="Required for emergency transfusions and compatibility matching"
            >
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                {bloodGroups.map((group) => {
                  const isSelected = form.bloodGroup === group;
                  return (
                    <button
                      type="button"
                      key={group}
                      onClick={() => update("bloodGroup", group)}
                      className={`flex h-11 items-center justify-center rounded-xl border text-sm font-bold transition-all ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-200"
                          : "border-slate-200 bg-slate-50/60 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/40"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>
              
              <div className="sr-only">
                <select
                  id="bloodGroup"
                  value={form.bloodGroup}
                  onChange={(e) => update("bloodGroup", e.target.value)}
                  aria-invalid={Boolean(errors.bloodGroup)}
                >
                  <option value="">Select blood group</option>
                  {bloodGroups.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </Field>
          </div>

          
          <Field
            label="Height (cm)"
            id="height"
            error={errors.height}
            required
            hint="For example, 175 cm"
          >
            <div className="relative has-icon">
              <Ruler className="field-icon" size={17} aria-hidden="true" />
              <TextInput
                id="height"
                value={form.height}
                onChange={(e) => update("height", e.target.value)}
                type="number"
                placeholder="175"
                error={errors.height}
                inputMode="decimal"
              />
            </div>
          </Field>

          
          <Field
            label="Weight (kg)"
            id="weight"
            error={errors.weight}
            required
            hint="For example, 72.5 kg"
          >
            <div className="relative has-icon">
              <Scale className="field-icon" size={17} aria-hidden="true" />
              <TextInput
                id="weight"
                value={form.weight}
                onChange={(e) => update("weight", e.target.value)}
                type="number"
                placeholder="72.5"
                error={errors.weight}
                inputMode="decimal"
              />
            </div>
          </Field>

          
          <Field
            label="Blood Oxygen SpO₂ (%)"
            id="spo2"
            error={errors.spo2}
            required
            hint="Normal pulse oximeter range is 95% - 100%"
          >
            <div className="relative has-icon">
              <Wind className="field-icon" size={17} aria-hidden="true" />
              <TextInput
                id="spo2"
                value={form.spo2}
                onChange={(e) => update("spo2", e.target.value)}
                type="number"
                placeholder="98"
                error={errors.spo2}
                inputMode="numeric"
              />
            </div>
          </Field>

          
          <Field
            label="Body Temperature (°C)"
            id="temperature"
            hint="Optional — normal oral resting is 36.5°C - 37.2°C"
          >
            <div className="relative has-icon">
              <Thermometer
                className="field-icon"
                size={17}
                aria-hidden="true"
              />
              <TextInput
                id="temperature"
                value={form.temperature}
                onChange={(e) => update("temperature", e.target.value)}
                type="number"
                placeholder="36.8"
                inputMode="decimal"
              />
            </div>
          </Field>
        </div>
      </div>

      
      <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <div className="mb-4 border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-900">
            2. Clinical History &amp; Current Treatments
          </h3>
          <p className="text-xs text-slate-500">
            Click quick tags to add, or type specific details below. All fields
            optional if not applicable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          
          <div className="sm:col-span-2">
            <Field
              label="Known Allergies"
              id="allergies"
              hint="Tap quick suggestions or type below"
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {allergyPresets.map((preset) => {
                  const active = isChipSelected("allergies", preset);
                  return (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => toggleChipInText("allergies", preset)}
                      className={`chip ${active ? "chip-active" : ""}`}
                    >
                      {active && <Check size={12} strokeWidth={3} />}
                      {preset}
                    </button>
                  );
                })}
              </div>
              <textarea
                id="allergies"
                value={form.allergies}
                onChange={(e) => update("allergies", e.target.value)}
                placeholder="e.g. Penicillin, peanuts, shellfish, or describe reaction"
                className="control min-h-20 resize-y"
                rows={2}
              />
            </Field>
          </div>

          
          <div className="sm:col-span-2">
            <Field
              label="Current Medications &amp; Supplements"
              id="medications"
              hint="Include prescription drugs, daily vitamins, or insulin dosages"
            >
              <textarea
                id="medications"
                value={form.medications}
                onChange={(e) => update("medications", e.target.value)}
                placeholder="e.g. Metformin 500mg (1x daily), Vitamin D3 (weekly)"
                className="control min-h-20 resize-y"
                rows={2}
              />
            </Field>
          </div>

          
          <div className="sm:col-span-2">
            <Field
              label="Chronic or Existing Medical Conditions"
              id="conditions"
              hint="Select known diagnoses or write notes for your consulting doctor"
            >
              <div className="mb-2 flex flex-wrap gap-1.5">
                {conditionPresets.map((preset) => {
                  const active = isChipSelected("conditions", preset);
                  return (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => toggleChipInText("conditions", preset)}
                      className={`chip ${active ? "chip-active" : ""}`}
                    >
                      {active && <Check size={12} strokeWidth={3} />}
                      {preset}
                    </button>
                  );
                })}
              </div>
              <textarea
                id="conditions"
                value={form.conditions}
                onChange={(e) => update("conditions", e.target.value)}
                placeholder="e.g. Controlled Asthma, Type 2 Diabetes, Mild Hypertension"
                className="control min-h-20 resize-y"
                rows={2}
              />
            </Field>
          </div>

          
          <div className="sm:col-span-2 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
            <Field
              label="Designated Emergency Contact Person"
              id="emergencyContact"
              hint="Full name, relation, and contact phone number"
            >
              <div className="relative has-icon">
                <PhoneCall
                  className="field-icon text-emerald-700"
                  size={17}
                  aria-hidden="true"
                />
                <input
                  id="emergencyContact"
                  value={form.emergencyContact}
                  onChange={(e) => update("emergencyContact", e.target.value)}
                  placeholder="e.g. Sarah Jenkins (Spouse) — +91 98765 43210"
                  className="control bg-white"
                  autoComplete="tel"
                />
              </div>
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}
