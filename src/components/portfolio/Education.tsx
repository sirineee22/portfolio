import { GraduationCap, Calendar } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations, educationTranslations } from "@/lib/translations";

export function Education() {
  const { lang } = useLanguage();
  const t = translations[lang].education;
  const items = educationTranslations[lang];

  return (
    <section id="education" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {t.subtitle}
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative pl-7 sm:pl-10">
          {/* Vertical Timeline Track */}
          <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-600" />

          <div className="space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Node Dot */}
                <div
                  className="absolute -left-[23px] sm:-left-[35px] top-4 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 shadow-sm"
                  style={{ borderColor: item.badgeColor }}
                />

                {/* Milestone Card */}
                <SpotlightCard
                  spotlightColor={`${item.badgeColor}20`}
                  className="p-5 sm:p-6 rounded-2xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded font-mono text-[10px] font-bold"
                      style={{
                        backgroundColor: `${item.badgeColor}18`,
                        color: item.badgeColor,
                        border: `1px solid ${item.badgeColor}35`,
                      }}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.institution}</span>
                  </p>

                  <p className="text-xs font-mono text-emerald-400 mt-2">
                    ▸ {item.metric}
                  </p>

                  {item.details && (
                    <ul className="mt-3 pt-3 border-t border-white/[0.06] space-y-1.5 text-xs text-slate-300">
                      {item.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400">▹</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
