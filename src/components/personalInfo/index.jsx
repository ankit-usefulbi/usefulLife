import {
  Mail,
  Phone,
  UserRound,
  Calendar,
  Sparkles,
  ShieldCheck,
  Check,
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

export default function PersonalInfo({ form, errors, update }) {
  // Calculate approximate age if valid date of birth is selected
  const calculateAge = (dobString) => {
    if (!dobString) return null;
    const dob = new Date(dobString);
    if (isNaN(dob.getTime())) return null;
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    return age >= 0 && age < 130 ? age : null;
  };

  const calculatedAge = calculateAge(form.dob);

  const genderOptions = [
    { id: "Male", label: "Male" },
    { id: "Female", label: "Female" },
    { id: "Other", label: "Other / Non-binary" },
    { id: "Prefer not to say", label: "Prefer not to say" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        
        <Field
          label="Full Legal Name"
          id="fullName"
          required
          error={errors.fullName}
          hint="First and last name as shown on official ID"
        >
          <div className="relative has-icon">
            <UserRound className="field-icon" size={17} aria-hidden="true" />
            <TextInput
              id="fullName"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="e.g. Dr. Eleanor Vance or John Doe"
              autoComplete="name"
              error={errors.fullName}
            />
          </div>
        </Field>

        
        <Field
          label="Email Address"
          id="email"
          required
          error={errors.email}
          hint="We will send appointments and digital records here"
        >
          <div className="relative has-icon">
            <Mail className="field-icon" size={17} aria-hidden="true" />
            <TextInput
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="patient@example.com"
              autoComplete="email"
              error={errors.email}
            />
          </div>
        </Field>

        
        <Field
          label="Date of Birth"
          id="dob"
          required
          error={errors.dob}
          hint={
            calculatedAge !== null
              ? `Calculated age: ${calculatedAge} years`
              : "Select your date of birth"
          }
        >
          <div className="relative has-icon">
            <Calendar className="field-icon" size={17} aria-hidden="true" />
            <TextInput
              id="dob"
              type="date"
              value={form.dob}
              onChange={(e) => update("dob", e.target.value)}
              autoComplete="bday"
              error={errors.dob}
            />
          </div>
        </Field>

        
        <Field
          label="Mobile Phone Number"
          id="phone"
          required
          error={errors.phone}
          hint="Used for SMS verifications and emergency alerts"
        >
          <div className="flex gap-2">
            <div className="relative w-28 shrink-0">
              <label htmlFor="countryCode" className="sr-only">
                Country calling code
              </label>
              <select
                id="countryCode"
                value={form.countryCode}
                onChange={(e) => update("countryCode", e.target.value)}
                className="control font-medium"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
            </div>
            <div className="relative min-w-0 flex-1 has-icon">
              <Phone className="field-icon" size={17} aria-hidden="true" />
              <TextInput
                id="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="98765 43210"
                autoComplete="tel-national"
                inputMode="tel"
                error={errors.phone}
              />
            </div>
          </div>
        </Field>

        
        <div className="sm:col-span-2">
          <fieldset
            className="min-w-0 space-y-2.5"
            aria-describedby={errors.gender ? "gender-error" : undefined}
          >
            <legend className="field-label">
              Gender Identity
              <span className="required" aria-hidden="true">
                {" "}
                *
              </span>
            </legend>
            <p className="hint">
              Required for biological reference ranges in diagnostic reports.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {genderOptions.map((option) => {
                const isSelected = form.gender === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/70 font-semibold text-emerald-950 shadow-xs ring-1 ring-emerald-500"
                        : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value={option.id}
                        checked={isSelected}
                        onChange={(e) => update("gender", e.target.value)}
                        className="sr-only"
                        aria-invalid={Boolean(errors.gender)}
                      />
                      <span className="text-xs sm:text-sm">{option.label}</span>
                    </div>
                    {isSelected && (
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
            {errors.gender && (
              <p className="error-text" id="gender-error" role="alert">
                • {errors.gender}
              </p>
            )}
          </fieldset>
        </div>
      </div>
    </div>
  );
}
