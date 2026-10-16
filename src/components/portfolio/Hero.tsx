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
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export function Hero() {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
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
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border transition-all ${
              isDark
                ? "bg-white/[0.04] border-white/[0.08] text-slate-300"
                : "bg-white/80 border-slate-200/90 text-slate-700 shadow-sm"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono">{t.statusBadge}</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5 font-sans transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.headlineMain}
            <br />
            <span className="gradient-text-accent">{t.headlineAccent}</span>
          </h1>

          {/* Subheading text */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-sans transition-colors ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${
                isDark
                  ? "bg-white text-slate-950 hover:bg-slate-200"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <span>{t.exploreBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              download="Dahmane_Sirine_CV.pdf"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all hover:scale-105 cursor-pointer border ${
                isDark
                  ? "bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-white"
                  : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
              }`}
            >
              <Download
                className={`w-4 h-4 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          {/* Location & Contact Link */}
          <div
            className={`flex flex-wrap items-center gap-5 text-xs sm:text-sm mb-6 transition-colors ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.location}</span>
            </div>
            <a
              href="#contact"
              className={`inline-flex items-center gap-1 underline underline-offset-4 transition-colors ${
                isDark
                  ? "text-slate-300 hover:text-white decoration-white/40 hover:decoration-white"
                  : "text-slate-700 hover:text-indigo-600 decoration-slate-300 hover:decoration-indigo-600"
              }`}
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
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.1] border-white/[0.08] text-slate-400 hover:text-white"
                  : "bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
              }`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/sirineee22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.1] border-white/[0.08] text-slate-400 hover:text-white"
                  : "bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
              }`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:dahmane.sirine@esprit.tn"
              aria-label="Email"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition border ${
                isDark
                  ? "bg-white/[0.04] hover:bg-white/[0.1] border-white/[0.08] text-slate-400 hover:text-white"
                  : "bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: CIRCULAR PROFILE PHOTO IN MINIMALIST CARD */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <SpotlightCard
            spotlightColor={
              isDark ? "rgba(99, 102, 241, 0.25)" : "rgba(99, 102, 241, 0.15)"
            }
            className={`w-full max-w-[340px] sm:max-w-[380px] p-7 sm:p-8 rounded-3xl flex flex-col items-center text-center group transition-all duration-300 hover:scale-[1.02] shadow-2xl ${
              isDark
                ? "border-white/[0.12] bg-[#0c1222]/90"
                : "border-slate-200/90 bg-white/90 shadow-indigo-500/5"
            }`}
          >
            {/* Avatar with Rotating Halo */}
            <div className="relative mb-5">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-75 blur-md animate-rotate-halo group-hover:opacity-100 transition-opacity" />
              <div
                className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 shadow-inner ${
                  isDark
                    ? "bg-[#030712] border-white/[0.2]"
                    : "bg-slate-100 border-white/80"
                }`}
              >
                <img
                  src={profilePhoto}
                  alt="Dahmane Sirine"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <h3
              className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                isDark
                  ? "text-white group-hover:text-indigo-300"
                  : "text-slate-900 group-hover:text-indigo-600"
              }`}
            >
              Dahmane Sirine
            </h3>
            <p
              className={`text-xs sm:text-sm font-mono mt-1 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Software Engineer
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
