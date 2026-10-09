import { useState } from "react";
import {
  Activity,
  PhoneCall,
  Eye,
  Type,
  Calendar,
  ArrowLeft,
  Menu,
  X,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLinkClick = (hash) => {
    setMobileMenuOpen(false);
    onNavigate();
  };

  return (
    <header className="sticky top-0 z-50 mx-auto mb-6 max-w-7xl">
      <div className="flex items-center justify-between rounded-2xl border border-emerald-950/10 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
        
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 text-left transition-transform active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 rounded-xl"
          aria-label="usefulLife home portal"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-700/20 transition-all group-hover:shadow-emerald-600/30">
            <Activity
              size={22}
              strokeWidth={2.6}
              className="text-white"
              aria-hidden="true"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                useful
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Life
                </span>
              </span>
              <span className="hidden xs:inline rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/80">
                Diagnostics
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-500">
              Health Diagnostics &amp; Medical Care
            </p>
          </div>
        </button>

        
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            type="button"
            onClick={() => handleLinkClick("#diagnostics")}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
          >
            Diagnostic Tests
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick("#packages")}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
          >
            Health Packages
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick("#why-us")}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
          >
            Why usefulLife
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick("#how-it-works")}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
          >
            How It Works
          </button>
        </nav>

        
        <div className="flex items-center gap-2">
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-95"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={2.2} />
            ) : (
              <Menu size={20} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
          <nav className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => handleLinkClick("#diagnostics")}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left text-slate-700 hover:bg-slate-50 transition"
            >
              <span>Diagnostic Tests &amp; Panels</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick("#packages")}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left text-slate-700 hover:bg-slate-50 transition"
            >
              <span>Health Check Packages</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick("#why-us")}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left text-slate-700 hover:bg-slate-50 transition"
            >
              <span>Why usefulLife Diagnostics</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick("#how-it-works")}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left text-slate-700 hover:bg-slate-50 transition"
            >
              <span>How It Works</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
