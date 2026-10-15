import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import profilePhoto from "@/assets/me.png";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="top"
      className="relative min-h-[88vh] w-full flex flex-col justify-center pt-24 pb-14 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
        {/* LEFT COLUMN: MINIMALIST HEADLINE & ACTIONS */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-300">
              {t.statusBadge}
            </span>
          </div>

          {/* Main Headline from User's Screenshot */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 font-sans">
            {t.headlineMain}<br />
            <span className="gradient-text-accent">{t.headlineAccent}</span>
          </h1>

          {/* Subheading text from User's Screenshot */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-sans">
            {t.subtitle}
          </p>

          {/* CTA Buttons from User's Screenshot */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{t.exploreBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              download="Dahmane_Sirine_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white font-medium text-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          {/* Location & Contact Link from User's Screenshot */}
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-400 mb-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.location}</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              <span>{t.letsConnect}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Minimalist Social Profile Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/dahmane-sirine-6a7a612a0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/sirineee22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:dahmane.sirine@esprit.tn"
              aria-label="Email"
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: SCALED BENTO PROFILE CARD WITH DYNAMIC STATUS & TECH TAGS */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.25)"
            className="w-full max-w-[360px] sm:max-w-[380px] p-7 sm:p-8 rounded-3xl border border-white/[0.12] bg-[#0c1222]/95 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center group transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
          >
            {/* Avatar with Rotating Halo */}
            <div className="relative mb-5">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-75 blur-md animate-rotate-halo group-hover:opacity-100 transition-opacity" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-[#030712] border-2 border-white/[0.2] shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Dahmane Sirine"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Role Title */}
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              {t.role}
            </h3>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
