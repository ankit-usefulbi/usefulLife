import {
  Check,
  UserRound,
  MapPin,
  HeartPulse,
  FileCheck2,
  ShieldCheck,
  Lock,
  Clock,
} from "lucide-react";

const stepIcons = [UserRound, MapPin, HeartPulse, FileCheck2];

const Sidebar = ({ steps, step, submitted, percent, onStepClick }) => {
  return (
    <aside
      className="hidden lg:flex flex-col gap-5 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm"
      aria-label="Form progress"
    >
      
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Form Progress
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
            {percent}% completed
          </span>
        </div>

        
        <div
          className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label="Form completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-emerald-600" aria-hidden="true" />
            Estimated time: ~2 mins
          </span>
          <span>
            {submitted ? "Completed" : `Step ${step + 1} of ${steps.length}`}
          </span>
        </div>
      </div>

      <hr className="border-slate-100" />

      
      <nav aria-label="Steps">
        <ol className="space-y-2">
          {steps.map((item, index) => {
            const complete = submitted || index < step;
            const current = !submitted && index === step;
            const IconComponent = stepIcons[index] || UserRound;
            const isClickable = complete && onStepClick;

            return (
              <li key={item.title}>
                <div
                  role={isClickable ? "button" : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onClick={() => isClickable && onStepClick(index)}
                  onKeyDown={(e) => {
                    if (isClickable && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      onStepClick(index);
                    }
                  }}
                  className={`group relative flex items-center gap-3.5 rounded-xl p-3 transition-all ${
                    current
                      ? "bg-gradient-to-r from-emerald-50/90 to-teal-50/40 border border-emerald-200/80 shadow-xs"
                      : complete
                        ? "hover:bg-slate-50 cursor-pointer"
                        : "opacity-75"
                  }`}
                >
                  
                  <div
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold transition-all ${
                      complete
                        ? "bg-emerald-600 text-white shadow-xs shadow-emerald-600/30"
                        : current
                          ? "bg-emerald-700 text-white ring-4 ring-emerald-100"
                          : "border border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {complete ? (
                      <Check size={16} strokeWidth={3} aria-hidden="true" />
                    ) : (
                      <IconComponent size={16} aria-hidden="true" />
                    )}
                  </div>

                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-xs font-semibold ${
                          current
                            ? "text-emerald-900 font-bold"
                            : complete
                              ? "text-slate-800"
                              : "text-slate-600"
                        }`}
                      >
                        {item.title}
                      </p>
                      {complete && (
                        <span className="text-[10px] font-semibold text-emerald-700">
                          Done
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1">
                      {item.hint}
                    </p>
                  </div>

                  <span className="sr-only">
                    {item.title}:{" "}
                    {complete
                      ? "completed"
                      : current
                        ? "current step"
                        : "upcoming step"}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
};

export default Sidebar;
