import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer active:scale-95 group shadow-sm backdrop-blur-xl ${
        isDark
          ? "bg-[#0b101e]/80 hover:bg-[#131b31] border border-white/[0.12] text-amber-300 hover:text-amber-200 hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
          : "bg-white/85 hover:bg-white border border-slate-200/90 text-indigo-600 hover:text-indigo-700 hover:border-indigo-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] text-slate-800"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <Sun
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 text-amber-300 group-hover:rotate-45"
              : "rotate-90 scale-0 opacity-0 absolute"
          }`}
        />

        {/* Moon Icon for Dark Mode */}
        <Moon
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? "-rotate-90 scale-0 opacity-0 absolute"
              : "rotate-0 scale-100 text-indigo-600 group-hover:-rotate-12"
          }`}
        />
      </div>

      {showLabel && (
        <span className="font-mono text-[11px] font-semibold hidden sm:inline-block">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
