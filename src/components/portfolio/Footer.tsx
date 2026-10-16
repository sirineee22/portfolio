import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t py-12 px-6 mt-16 relative z-10 backdrop-blur-md transition-colors ${
        isDark
          ? "border-white/[0.08] bg-[#030712]/60 text-slate-400"
          : "border-slate-200 bg-white/70 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
            DS
          </span>
          <div>
            <p
              className={`font-semibold transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Dahmane Sirine
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[11px] border transition-colors ${
            isDark
              ? "bg-white/[0.03] border-white/[0.06] text-slate-300"
              : "bg-slate-100 border-slate-200 text-slate-700"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t.status}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/sirineee22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/dahmane-sirine-6a7a612a0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:dahmane.sirine@esprit.tn"
              aria-label="Email"
              className={`transition-colors ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div
            className={`h-4 w-[1px] ${
              isDark ? "bg-white/10" : "bg-slate-200"
            }`}
          />

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`p-2 rounded-lg transition-colors cursor-pointer border ${
              isDark
                ? "bg-white/[0.04] hover:bg-white/[0.1] border-white/[0.08] text-slate-400 hover:text-white"
                : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
            }`}
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
