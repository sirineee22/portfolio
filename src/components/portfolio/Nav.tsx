import { useState, useEffect } from "react";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Download,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export function Nav() {
  const [active, setActive] = useState("#top");
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].nav;

  const navItems = [
    { href: "#top", label: t.home, icon: Home },
    { href: "#about", label: t.about, icon: User },
    { href: "#projects", label: t.showcase, icon: FolderGit2 },
    { href: "#experience", label: t.experience, icon: Briefcase },
    { href: "#education", label: t.education, icon: GraduationCap },
    { href: "#contact", label: t.contact, icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 220;

      for (const item of navItems) {
        if (item.href === "#top") continue;
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(item.href);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActive("#top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Centered Navigation Bar */}
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
          isDark
            ? scrolled
              ? "bg-[#0b101e]/85 border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "bg-[#0b101e]/60 border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : scrolled
              ? "bg-white/90 border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
              : "bg-white/75 border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-xl"
        }`}
      >
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                onClick={() => setActive(item.href)}
                className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? isDark
                      ? "text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      : "text-slate-900 bg-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.06)] font-semibold"
                    : isDark
                      ? "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{item.label}</span>
                {isActive && (
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                      isDark
                        ? "bg-indigo-400 shadow-[0_0_8px_#818cf8]"
                        : "bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div
          className={`h-4 w-[1px] mx-1 ${
            isDark ? "bg-white/10" : "bg-slate-200"
          }`}
        />

        {/* Language Switcher: EN / FR */}
        <button
          onClick={toggleLang}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-all cursor-pointer shadow-sm active:scale-95 group border ${
            isDark
              ? "bg-white/[0.05] hover:bg-white/[0.12] border-white/[0.1] text-slate-200 hover:text-white"
              : "bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700 hover:text-slate-900"
          }`}
          title={lang === "en" ? "Passer le portfolio en Français" : "Switch portfolio to English"}
          aria-label="Toggle language"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-500 group-hover:rotate-45 transition-transform" />
          <span
            className={
              lang === "en"
                ? isDark
                  ? "text-cyan-300 font-bold"
                  : "text-indigo-600 font-bold"
                : isDark
                  ? "text-slate-400"
                  : "text-slate-500"
            }
          >
            EN
          </span>
          <span className={isDark ? "text-slate-500 text-[10px]" : "text-slate-400 text-[10px]"}>
            /
          </span>
          <span
            className={
              lang === "fr"
                ? isDark
                  ? "text-cyan-300 font-bold"
                  : "text-indigo-600 font-bold"
                : isDark
                  ? "text-slate-400"
                  : "text-slate-500"
            }
          >
            FR
          </span>
        </button>

        {/* Resume Quick Action */}
        <a
          href="/cv.pdf"
          download="Dahmane_Sirine_CV.pdf"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 shadow-[0_0_16px_rgba(99,102,241,0.35)] transition-all hover:scale-105"
        >
          <Download className="w-3 h-3" />
          <span>{t.resume}</span>
        </a>
      </nav>
    </header>
  );
}
