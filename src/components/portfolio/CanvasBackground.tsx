import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Subtle floating nodes / constellation particles
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let lastTime = 0;
    const render = (time: number) => {
      const dt = Math.min(time - lastTime, 50) / 1000;
      lastTime = time;

      const isLight = themeRef.current === "light";

      ctx.clearRect(0, 0, width, height);

      // 1. Base Background
      ctx.fillStyle = isLight ? "#f8fafc" : "#030712";
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient Radial Glow (Indigo & Purple Spotlight following gentle mouse movement)
      const gradMouse = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(width * 0.4, 450)
      );
      if (isLight) {
        gradMouse.addColorStop(0, "rgba(99, 102, 241, 0.08)");
        gradMouse.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
        gradMouse.addColorStop(1, "rgba(248, 250, 252, 0)");
      } else {
        gradMouse.addColorStop(0, "rgba(99, 102, 241, 0.07)");
        gradMouse.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
        gradMouse.addColorStop(1, "rgba(3, 7, 18, 0)");
      }
      ctx.fillStyle = gradMouse;
      ctx.fillRect(0, 0, width, height);

      // 3. Top-Center Ambient Glow
      const gradTop = ctx.createRadialGradient(
        width * 0.5,
        0,
        10,
        width * 0.5,
        0,
        width * 0.65
      );
      if (isLight) {
        gradTop.addColorStop(0, "rgba(99, 102, 241, 0.10)");
        gradTop.addColorStop(0.5, "rgba(56, 189, 248, 0.04)");
        gradTop.addColorStop(1, "rgba(248, 250, 252, 0)");
      } else {
        gradTop.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        gradTop.addColorStop(0.5, "rgba(56, 189, 248, 0.04)");
        gradTop.addColorStop(1, "rgba(3, 7, 18, 0)");
      }
      ctx.fillStyle = gradTop;
      ctx.fillRect(0, 0, width, height);

      // 4. Subtle particles with gentle interconnected lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(71, 85, 105, ${p.alpha * 0.65})`
          : `rgba(226, 232, 240, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with ultra-soft lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(99, 102, 241, ${0.15 * (1 - dist / 110)})`
              : `rgba(99, 102, 241, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 h-full w-full"
      aria-hidden="true"
    />
  );
}
