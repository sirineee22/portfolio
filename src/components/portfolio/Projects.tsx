import { useState } from "react";
import {
  Github,
  Sparkles,
  ArrowRight,
  Layers,
  ExternalLink,
  Lock,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface Project {
  name: string;
  category: "internship" | "academic" | "hobby";
  year: string;
  tag: string;
  description: string;
  architecture: string;
  stack: string[];
  github?: string;
  demo?: string;
  isConfidential?: boolean;
}

const projects: Project[] = [
  {
    name: "Système d'Information du Transport Ferroviaire (SNCFT)",
    category: "internship",
    year: "Stage Entreprise · 2026",
    tag: "Enterprise System",
    description:
      "Plateforme de gestion opérationnelle et de supervision du parc ferroviaire pour la Société Nationale des Chemins de Fer Tunisiens (SNCFT).",
    architecture: "ASP.NET Core & Blazor · EF Core · MySQL · JWT Role-Based Security",
    stack: ["ASP.NET Core", "Blazor", "C#", "MySQL", "Entity Framework", "JWT"],
    isConfidential: true,
  },
  {
    name: "NUMVIZ — Plateforme d'Analyse Numérique Interactive",
    category: "internship",
    year: "Stage Entreprise · 2025",
    tag: "Interactive Platform",
    description:
      "Plateforme pédagogique interactive d'analyse numérique avec moteur de rendu d'algorithmes mathématiques pas-à-pas et visualisations dynamiques.",
    architecture: "FastAPI Backend · React + TS · Manim Visual Engine · CI/CD",
    stack: ["FastAPI", "Python", "React", "TypeScript", "Tailwind CSS", "Manim"],
    github: "https://github.com/sirineee22/numiviz",
    demo: "https://numiviz-fe4c.vercel.app/",
  },
  {
    name: "CertifyPro — Distributed Certification Platform",
    category: "academic",
    year: "Universitaire · 2025",
    tag: "Microservices & Cloud",
    description:
      "Plateforme cloud-native d'évaluation et de certification en ligne orchestrée en 5 microservices indépendants Spring Boot et déploiement Kubernetes.",
    architecture: "Eureka Discovery · API Gateway · PostgreSQL per service · Docker & K8s",
    stack: ["Spring Boot", "Spring Cloud", "Eureka", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/sirineee22/Esprit-PiProject-4SAE8-2026-CertifyPro",
  },
  {
    name: "PromptForge — Test & Orchestration de Prompts",
    category: "hobby",
    year: "Hobby · 2026",
    tag: "AI Tooling & LLMs",
    description:
      "Interface pour développeurs permettant de tester un même prompt sur plusieurs configurations (JSON strict, Markdown, YAML) avec comparaison de latence, coût en tokens et validation de qualité.",
    architecture: "FastAPI Backend · React + TS · Groq / Gemini API · Pydantic Validation",
    stack: ["FastAPI", "Python", "React", "TypeScript", "Groq / Gemini API", "Tailwind CSS"],
    github: "https://github.com/sirineee22",
  },
];

const categories = [
  { id: "all", label: "Tous (4)" },
  { id: "internship", label: "Stages en Entreprise (2)" },
  { id: "academic", label: "Projet Universitaire (1)" },
  { id: "hobby", label: "Hobby & AI Tool (1)" },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  filter === c.id
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* MINIMALIST PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((p) => (
            <SpotlightCard
              key={p.name}
              spotlightColor="rgba(99, 102, 241, 0.18)"
              className="p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {p.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{p.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                  {p.name}
                </h3>

                {/* Concise Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Architecture Summary Line */}
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-4 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{p.architecture}</span>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/[0.06]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 min-h-[32px]">
                  {p.isConfidential ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300/90 w-full justify-center">
                      <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Système d'entreprise · Données confidentielles</span>
                    </div>
                  ) : (
                    <>
                      {p.demo ? (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-white transition group/demo"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3 group-hover/demo:translate-x-0.5 transition-transform" />
                        </a>
                      ) : <div />}

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-indigo-300 transition group/link ml-auto"
                        >
                          <Github className="w-3.5 h-3.5 text-indigo-400" />
                          <span>View on GitHub</span>
                          <ArrowRight className="w-3 h-3 text-slate-500 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
