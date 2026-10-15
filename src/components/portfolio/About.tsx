import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            {t.title}
          </h2>
        </div>

        {/* 1 SIMPLE CARD */}
        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.18)"
          className="p-8 sm:p-10 rounded-3xl border-white/[0.1] bg-[#0c1222]/90 shadow-2xl"
        >
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-sans">
            {t.body}
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-indigo-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.status}
            </span>
            <span className="text-slate-400">{t.location}</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
