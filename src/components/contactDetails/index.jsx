import { MapPin, Building, Navigation, Home, ShieldCheck } from "lucide-react";

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

export default function ContactDetails({ form, errors, update }) {
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi NCR",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Other / Outside India",
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field
            label="Street Address / Residence"
            id="address"
            required
            error={errors.address}
            hint="Flat / Door number, apartment building, street name, and prominent locality landmark"
          >
            <div className="relative">
              <textarea
                id="address"
                name="address"
                rows={3}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                autoComplete="street-address"
                placeholder="e.g. Flat 402, Green Meadows Residency, 14th Main Road, Indiranagar"
                aria-invalid={Boolean(errors.address)}
                aria-describedby={errors.address ? "address-error" : undefined}
                className={`control min-h-24 resize-y ${errors.address ? "control-error" : ""}`}
              />
            </div>
          </Field>
        </div>

        <Field label="City / Town" id="city" required error={errors.city}>
          <div className="relative has-icon">
            <Building className="field-icon" size={17} aria-hidden="true" />
            <TextInput
              id="city"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              autoComplete="address-level2"
              placeholder="e.g. Bengaluru, Mumbai, London"
              error={errors.city}
            />
          </div>
        </Field>

        <Field label="State / Region" id="state" required error={errors.state}>
          <div className="relative has-icon">
            <Navigation className="field-icon" size={17} aria-hidden="true" />
            <select
              id="state"
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
              autoComplete="address-level1"
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "state-error" : undefined}
              className={`control ${errors.state ? "control-error" : ""}`}
            >
              <option value="">Select your state / territory</option>
              {indianStates.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>
        </Field>

        <Field
          label="Postal / PIN Code"
          id="pin"
          required
          error={errors.pin}
          hint="6-digit postal PIN code for dispatch routing"
        >
          <div className="relative has-icon">
            <MapPin className="field-icon" size={17} aria-hidden="true" />
            <TextInput
              id="pin"
              value={form.pin}
              onChange={(e) => update("pin", e.target.value)}
              autoComplete="postal-code"
              inputMode="numeric"
              placeholder="e.g. 560038"
              error={errors.pin}
            />
          </div>
        </Field>
      </div>
    </div>
  );
}
