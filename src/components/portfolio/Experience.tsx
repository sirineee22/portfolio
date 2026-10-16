import { Calendar, Building2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations, experienceTranslations } from "@/lib/translations";

export function Experience() {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].experience;
  const items = experienceTranslations[lang];

  return (
    <section id="experience" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`text-xs sm:text-sm font-mono transition-colors ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative pl-7 sm:pl-10">
          {/* Vertical Timeline Track */}
          <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-indigo-500 to-violet-500" />

          <div className="space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[23px] sm:-left-[35px] top-4 w-3.5 h-3.5 rounded-full border-2 shadow-sm transition-colors ${
                    isDark ? "bg-[#030712]" : "bg-white"
                  }`}
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
                    <span
                      className={`text-xs font-mono flex items-center gap-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <Calendar className="w-3 h-3 opacity-60" />
                      {item.date}
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs font-mono mt-0.5 flex items-center gap-1.5 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    <Building2
                      className={`w-3.5 h-3.5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                    <span>{item.organization}</span>
                  </p>

                  <p
                    className={`text-xs font-mono mt-2 ${
                      isDark ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    ▸ {item.metric}
                  </p>

                  <ul
                    className={`mt-3 pt-3 border-t space-y-1.5 text-xs transition-colors ${
                      isDark
                        ? "border-white/[0.06] text-slate-300"
                        : "border-slate-200 text-slate-700"
                    }`}
                  >
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={
                            isDark ? "text-indigo-400" : "text-indigo-600"
                          }
                        >
                          ▹
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
