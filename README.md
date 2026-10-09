# BetterLife — Accessible Multi-Step Form

A responsive React + Tailwind CSS starter demonstrating inclusive UX patterns in a four-step healthcare profile form.

## Features
- Four steps: personal information, contact details, medical information, and review/submit
- Responsive mobile-first layout with desktop progress navigation
- Semantic headings, landmarks, fieldsets/legends, labels, and input autocomplete hints
- Skip-to-content link, keyboard-visible focus, and screen-reader live announcements
- Required-field validation, linked inline errors, and an error summary that focuses fields
- Progress bar with accessible name and numeric value
- Touch-friendly controls and reduced-motion support
- Optional larger text and high-contrast display settings
- Review screen with edit actions and a success state

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Notes
- This is a frontend demo. Form submission is local and does not send data to a backend.
- Before production use, connect submission to a secure API, add server-side validation, define privacy/retention policies, and test with real screen readers and automated accessibility tools.
- If using this in a regulated workflow, review whether sensitive fields (such as date of birth and gender) are necessary.

## Healthcare form fields
- Blood group
- Height (cm)
- Weight (kg)
- SpO₂ level (%)
- Temperature (°C)
- Allergies
- Current medications
- Existing medical conditions
- Emergency contact

Medical fields are presented as a frontend UX demo; connect them to a secure, privacy-compliant backend before using real patient data.
