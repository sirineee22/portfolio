import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 px-6 mt-16 relative z-10 bg-[#030712]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
            DS
          </span>
          <div>
            <p className="font-semibold text-white">Dahmane Sirine</p>
            <p className="font-mono text-[11px] text-slate-500">
              {t.roleSubtitle}
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.status}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/sirineee22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/dahmane-sirine-6a7a612a0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:dahmane.sirine@esprit.tn"
              aria-label="Email"
              className="text-slate-400 hover:text-white transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
