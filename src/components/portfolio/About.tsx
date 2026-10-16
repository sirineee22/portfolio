import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export function About() {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.title}
          </h2>
        </div>

        {/* 1 SIMPLE CARD */}
        <SpotlightCard
          spotlightColor={
            isDark ? "rgba(99, 102, 241, 0.18)" : "rgba(99, 102, 241, 0.12)"
          }
          className={`p-8 sm:p-10 rounded-3xl shadow-2xl transition-all duration-300 ${
            isDark
              ? "border-white/[0.1] bg-[#0c1222]/90"
              : "border-slate-200/90 bg-white/90 shadow-indigo-500/5"
          }`}
        >
          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 font-sans transition-colors ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {t.body}
          </p>

          <div
            className={`pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-t transition-colors ${
              isDark ? "border-white/[0.08]" : "border-slate-200"
            }`}
          >
            <span
              className={`font-medium flex items-center gap-2 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.status}
            </span>
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              {t.location}
            </span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
