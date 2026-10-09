import { Shield, Lock, PhoneCall, Calendar } from "lucide-react";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="mt-12 border-t border-slate-200/80 pt-8 pb-12 text-xs text-slate-500">
      {/* Top footer row: brand and quick links */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 pb-8 border-b border-slate-100">
        <div className="space-y-3 sm:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-xs">
              +
            </div>
            <span className="text-base font-extrabold text-slate-900">
              useful<span className="text-emerald-600">Life</span> Diagnostics
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
            Advanced clinical pathology, biometric screening, and certified
            health diagnostics. Committed to accessible, patient-centered
            healthcare.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-emerald-700 transition"
              >
                Home Portal
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate("booking");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-emerald-700 font-semibold hover:text-emerald-900 transition flex items-center gap-1"
              >
                <span>Book Appointment</span>
              </button>
            </li>
            <li>
              <a
                href="#diagnostics"
                className="hover:text-emerald-700 transition"
              >
                Diagnostic Panels
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-emerald-700 transition">
                Why usefulLife
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
            Assistance &amp; Helpline
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <PhoneCall size={13} className="text-emerald-600" />
              <span>1800-USE-LIFE</span>
            </li>
            <li className="text-slate-500">Hours: 24/7 Diagnostic Dispatch</li>
            <li className="text-slate-500">Email: care@usefullife.health</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-400">
        <p>
          © 2026 usefulLife Inc. Designed for accessibility and patient-centered
          diagnostics.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#main-content" className="hover:text-emerald-600 transition">
            Privacy Policy
          </a>
          <a href="#main-content" className="hover:text-emerald-600 transition">
            Terms of Service
          </a>
          <a href="#main-content" className="hover:text-emerald-600 transition">
            Patient Rights
          </a>
          <a href="#main-content" className="hover:text-emerald-600 transition">
            Accessibility Statement
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
