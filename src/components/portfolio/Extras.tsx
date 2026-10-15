import { Languages as LangIcon, Trophy, Flame, Shield, Zap, Award, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const languages = [
  { flag: "🇹🇳", name: "Arabic", level: "Native / Mother Tongue", pct: 100 },
  { flag: "🇫🇷", name: "French", level: "Fluent / Full Professional", pct: 90 },
  { flag: "🇬🇧", name: "English", level: "Advanced / Technical Proficiency", pct: 85 },
];

export function Extras() {
  return (
    <section id="extras" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Beyond The Code
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            High-Performance <span className="gradient-text-accent">Athletic Mindset</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            The intersection of national-level martial arts conditioning, trilingual fluency, and software engineering rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Taekwondo National Team Showcase */}
          <SpotlightCard
            spotlightColor="rgba(244, 63, 94, 0.2)"
            className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Taekwondo National Athlete
                    </h3>
                    <p className="text-xs font-mono text-rose-400">
                      Former Member of the Tunisian National Team
                    </p>
                  </div>
                </div>
                <span className="text-3xl">🥋</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                Years of rigorous training and competition at the highest national level instilled a mindset
                that directly enhances my engineering execution. Under intense production deadlines or critical incidents,
                calm composure, tactical focus, and continuous grit are second nature.
              </p>

              {/* Core Martial Arts Pillars translated to Engineering */}
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <Shield className="w-4 h-4 text-rose-400 mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-white">Precision</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Strict typing &amp; clean boundaries</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <Zap className="w-4 h-4 text-indigo-400 mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-white">Rapid Agility</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Fast learning &amp; adaptability</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <Flame className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-white">Grit &amp; Focus</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Relentless problem-solving</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <Award className="w-4 h-4 text-rose-400 shrink-0" />
              <span>
                Operating with calm clarity during complex deployments and high-stake engineering deliveries.
              </span>
            </div>
          </SpotlightCard>

          {/* Right Column: Multilingual Communication */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.2)"
            className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
                  <LangIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Trilingual Fluency
                  </h3>
                  <p className="text-xs font-mono text-indigo-400">
                    Cross-border engineering collaboration
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {languages.map((l) => (
                  <div key={l.name} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-medium text-white">
                        <span className="text-base">{l.flag}</span>
                        <span>{l.name}</span>
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">{l.level}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden p-0.5 border border-white/[0.06]">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Ready to collaborate smoothly in multilingual distributed engineering teams.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
