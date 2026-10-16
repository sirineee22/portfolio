import React, { useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { isDark } = useTheme();

  const effectiveSpotlight =
    spotlightColor ??
    (isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.10)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "bg-[#0b101e]/80 border border-white/[0.08] hover:border-white/[0.18] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          : "bg-white/85 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-indigo-300/80 hover:shadow-[0_12px_40px_rgba(99,102,241,0.12)]"
      } ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${effectiveSpotlight}, transparent 45%)`,
        }}
      />
      {/* Content wrapper with relative positioning to stay above spotlight */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
