import { useState, useEffect } from "react";
import {
  Code2,
  Award,
  Layers,
  ExternalLink,
  Github,
  Maximize2,
  X,
  Server,
  Database,
  Cloud,
  Cpu,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { TechBrandIcon } from "./TechBrandIcon";
import { useLanguage } from "@/context/LanguageContext";
import { translations, projectsTranslations } from "@/lib/translations";

// Certificate images from lescertifs
import neo4jFundamentalsImg from "@/assets/certificates/1bigdata.PNG";
import neo4jModelingImg from "@/assets/certificates/2data.PNG";
import neo4jCypherImg from "@/assets/certificates/3data.PNG";
import mongodbIndexesImg from "@/assets/certificates/mongodb_page-0001.jpg";
import mongodbModelingImg from "@/assets/certificates/Modeling Data RelationshipsCERTIF_page-0001.jpg";
import courseraCImg from "@/assets/certificates/Coursera-MEFADJMQRJVV_page-0001.jpg";
import googleDataStudioImg from "@/assets/certificates/data studio certif.PNG";
import simplilearnDataVizImg from "@/assets/certificates/skillup cerrtiff.PNG";

type TabType = "projects" | "certificates" | "stack";

interface ProjectItem {
  id: string;
  title: string;
  category: "internship" | "academic" | "hobby";
  categoryBadge: string;
  description: string;
  tag: string;
  color: string;
  github?: string;
  demo?: string;
  isConfidential?: boolean;
  stack: string[];
  architecture: string;
  highlight?: string;
  detailedPoints: string[];
}

const staticProjectsMeta: Record<
  string,
  {
    color: string;
    stack: string[];
    isConfidential?: boolean;
    github?: string;
    demo?: string;
  }
> = {
  sncft: {
    color: "#8b5cf6",
    isConfidential: true,
    stack: ["ASP.NET Core", "Blazor", "C#", "MySQL", "Entity Framework", "JWT"],
  },
  numviz: {
    color: "#10b981",
    github: "https://github.com/sirineee22/numiviz",
    demo: "https://numiviz-fe4c.vercel.app/",
    stack: ["FastAPI", "Python", "React", "TypeScript", "Tailwind CSS", "Manim"],
  },
  certifypro: {
    color: "#6366f1",
    github: "https://github.com/sirineee22/Esprit-PiProject-4SAE8-2026-CertifyPro",
    stack: ["Spring Boot", "Spring Cloud", "Eureka", "K8s", "Docker", "PostgreSQL"],
  },
  promptforge: {
    color: "#06b6d4",
    github: "https://github.com/sirineee22",
    stack: ["Python", "FastAPI", "React", "TypeScript", "Groq / Gemini API", "Tailwind CSS"],
  },
};


interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
}

const certificatesList: CertificateItem[] = [
  {
    id: "neo4j-1",
    title: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 2026",
    image: neo4jFundamentalsImg,
    credentialId: "af22f618-c836-448e-b3c6-0cc92a7688da",
  },
  {
    id: "neo4j-2",
    title: "Graph Data Modeling Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 2026",
    image: neo4jModelingImg,
    credentialId: "1f159559-c91d-4e98-81e1-1537eef5111c",
  },
  {
    id: "neo4j-3",
    title: "Cypher Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 2026",
    image: neo4jCypherImg,
    credentialId: "2d563cb6-680c-43ff-8c92-3afb431d6d1d",
  },
  {
    id: "mongodb-1",
    title: "MongoDB Indexes",
    issuer: "MongoDB, Inc.",
    date: "Jan 2026",
    image: mongodbIndexesImg,
    credentialId: "MDB5xxk4s35wy",
  },
  {
    id: "mongodb-2",
    title: "Modeling Data Relationships",
    issuer: "MongoDB, Inc.",
    date: "Jan 2026",
    image: mongodbModelingImg,
    credentialId: "MDBwfzoy5dl0c",
  },
  {
    id: "coursera-c",
    title: "C for Everyone: Programming",
    issuer: "UC Santa Cruz · Coursera",
    date: "May 2022",
    image: courseraCImg,
    credentialId: "MEFADJMQRJVV",
  },
  {
    id: "google-ds",
    title: "Introduction to Data Studio",
    issuer: "Google Analytics Academy",
    date: "Dec 2026",
    image: googleDataStudioImg,
  },
  {
    id: "simplilearn",
    title: "Introduction to Data Visualization",
    issuer: "Simplilearn SkillUp",
    date: "Dec 2023",
    image: simplilearnDataVizImg,
    credentialId: "4750922",
  },
];

interface TechIconItem {
  name: string;
  category: string;
  color: string;
  symbol: string;
}

const techIcons: TechIconItem[] = [
  { name: "Java", category: "Language", color: "#f87171", symbol: "☕" },
  { name: "Spring Boot", category: "Backend", color: "#4ade80", symbol: "🌱" },
  { name: "Spring Cloud", category: "Microservices", color: "#22d3ee", symbol: "☁️" },
  { name: "Python", category: "Language", color: "#38bdf8", symbol: "🐍" },
  { name: "FastAPI", category: "Backend", color: "#2dd4bf", symbol: "⚡" },
  { name: "C# / .NET", category: "Backend", color: "#c084fc", symbol: "#" },
  { name: "ASP.NET Core", category: "Enterprise", color: "#a855f7", symbol: "🟣" },
  { name: "Docker", category: "DevOps", color: "#38bdf8", symbol: "🐳" },
  { name: "Kubernetes", category: "DevOps", color: "#60a5fa", symbol: "☸️" },
  { name: "Jenkins", category: "CI/CD", color: "#f87171", symbol: "⚙️" },
  { name: "PostgreSQL", category: "Database", color: "#38bdf8", symbol: "🐘" },
  { name: "MongoDB", category: "Database", color: "#10b981", symbol: "🍃" },
  { name: "MySQL", category: "Database", color: "#f97316", symbol: "🐬" },
  { name: "React.js", category: "Frontend", color: "#22d3ee", symbol: "⚛️" },
  { name: "TypeScript", category: "Frontend", color: "#60a5fa", symbol: "TS" },
  { name: "Angular", category: "Frontend", color: "#ef4444", symbol: "🅰️" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06b6d4", symbol: "🎨" },
  { name: "Power BI", category: "BI & Data", color: "#facc15", symbol: "📊" },
  { name: "Git & GitHub", category: "Version Control", color: "#fb923c", symbol: "🐙" },
];

export function PortfolioShowcase() {
  const { lang } = useLanguage();
  const t = translations[lang].showcase;

  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [projectCategory, setProjectCategory] = useState<"all" | "internship" | "academic" | "hobby">("all");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<TechIconItem | null>(null);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState("");

  const projectsList: ProjectItem[] = projectsTranslations[lang].map((p) => ({
    ...p,
    ...staticProjectsMeta[p.id],
  }));

  const selectedProject = selectedProjectId
    ? projectsList.find((p) => p.id === selectedProjectId) || null
    : null;

  const projectFilterTabs: { id: "all" | "internship" | "academic" | "hobby"; label: string; count: number }[] = [
    { id: "all", label: t.filterAll, count: projectsList.length },
    { id: "internship", label: t.filterInternships, count: 2 },
    { id: "academic", label: t.filterAcademic, count: 1 },
    { id: "hobby", label: t.filterHobby, count: 1 },
  ];

  const displayedProjects = projectsList.filter(
    (p) => projectCategory === "all" || p.category === projectCategory
  );

  const visibleProjects = showAllProjects
    ? displayedProjects
    : displayedProjects.slice(0, 3);

  const visibleCertificates = showAllCertificates
    ? certificatesList
    : certificatesList.slice(0, 3);

  const handleProjectCardClick = (project: ProjectItem) => {
    setClickedCardId(project.id);
    setTimeout(() => {
      setClickedCardId(null);
      setSelectedProjectId(project.id);
    }, 140);
  };

  // Sync with URL hashes if visited directly
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#projects") setActiveTab("projects");
      else if (hash === "#certifications" || hash === "#certificates") setActiveTab("certificates");
      else if (hash === "#skills" || hash === "#stack") setActiveTab("stack");
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProjectId(null);
        setPreviewImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            <span className="gradient-text-accent">{t.sectionTitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3-TAB SWITCHER BAR MATCHING SCREENSHOT */}
        <div className="max-w-3xl mx-auto mb-10 p-1.5 rounded-2xl bg-[#0b101e]/90 border border-white/[0.08] backdrop-blur-xl shadow-xl grid grid-cols-3 gap-2">
          <button
            onClick={() => setActiveTab("projects")}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "projects"
                ? "bg-indigo-600/30 text-white border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>{t.tabProjects}</span>
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "certificates"
                ? "bg-indigo-600/30 text-white border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Award className="w-4 h-4 text-violet-400" />
            <span>{t.tabCertificates}</span>
          </button>

          <button
            onClick={() => setActiveTab("stack")}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "stack"
                ? "bg-indigo-600/30 text-white border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{t.tabTechStack}</span>
          </button>
        </div>

        {/* TAB 1: PROJECTS (ANIMATED CLICK-TO-INSPECT) */}
        {activeTab === "projects" && (
          <div className="space-y-6 animate-fade-in">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
              {projectFilterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setProjectCategory(tab.id);
                    setShowAllProjects(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    projectCategory === tab.id
                      ? "bg-indigo-500/20 text-white border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
                      : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/[0.08] text-slate-300">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Project Cards Grid (Interactive Click Animated) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                <SpotlightCard
                  key={project.id}
                  spotlightColor="rgba(99, 102, 241, 0.25)"
                  onClick={() => handleProjectCardClick(project)}
                  className={`rounded-2xl border-white/[0.09] bg-[#0c1222]/90 flex flex-col justify-between overflow-hidden group shadow-lg cursor-pointer select-none transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-[0_20px_45px_rgba(99,102,241,0.22)] active:scale-[0.975] ${
                    clickedCardId === project.id ? "animate-card-click ring-2 ring-indigo-500/60" : ""
                  }`}
                >
                  {/* Visual Banner Header */}
                  <div className="h-36 w-full bg-gradient-to-br from-indigo-950/60 via-[#030712] to-violet-950/40 border-b border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between z-10 gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold">
                        {project.categoryBadge}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-slate-300">
                          {project.tag}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          <Maximize2 className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                    <div className="z-10">
                      <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Architecture &amp; Core</p>
                      <p className="text-xs font-semibold text-white truncate">
                        {project.architecture}
                      </p>
                    </div>
                    {/* Subtle decorative glow */}
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3">
                        {project.description}
                      </p>

                      {project.highlight && (
                        <div className="mb-4 p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-[11px] text-cyan-200 flex items-start gap-2 font-sans">
                          <Sparkles className="w-3.5 h-3.5 shrink-0 text-cyan-400 mt-0.5" />
                          <span className="leading-tight">{project.highlight}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between min-h-[34px]">
                        {project.isConfidential ? (
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300/90 w-full justify-center">
                            <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{t.confidentialBanner}</span>
                          </div>
                        ) : (
                          <>
                            {project.demo ? (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 hover:text-white transition shadow-[0_0_12px_rgba(16,185,129,0.15)] group/demo"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Live Demo</span>
                                <ExternalLink className="w-3 h-3 group-hover/demo:translate-x-0.5 transition-transform" />
                              </a>
                            ) : (
                              <div />
                            )}

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-white transition hover:scale-105 ml-auto"
                              >
                                <Github className="w-3.5 h-3.5 text-slate-300" />
                                <span>Code</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Show More / Show Less Button for Projects */}
            {displayedProjects.length > 3 && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.09] hover:border-indigo-500/40 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] cursor-pointer group active:scale-95"
                >
                  <span>
                    {showAllProjects ? t.showLess : `${t.showMore} (${displayedProjects.length - 3} more)`}
                  </span>
                  {showAllProjects ? (
                    <ChevronUp className="w-4 h-4 text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CERTIFICATES (ANIMATED LIGHTBOX) */}
        {activeTab === "certificates" && (
          <div className="space-y-6 animate-fade-in" id="certifications">
            {/* Certificates Grid (initially 3, expandable with Show More) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCertificates.map((cert) => (
                <SpotlightCard
                  key={cert.id}
                  spotlightColor="rgba(139, 92, 246, 0.25)"
                  className="rounded-2xl border-white/[0.09] bg-[#0c1222]/90 flex flex-col justify-between overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-[0_20px_45px_rgba(139,92,246,0.25)] active:scale-95"
                  onClick={() => {
                    setPreviewImage(cert.image);
                    setPreviewTitle(`${cert.title} · ${cert.issuer}`);
                  }}
                >
                  {/* Certificate Image Frame */}
                  <div className="relative aspect-[4/3] bg-black/60 p-2 flex items-center justify-center border-b border-white/[0.06] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-mono backdrop-blur-[2px]">
                      <Maximize2 className="w-4 h-4" />
                      <span>{t.clickEnlarge}</span>
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white tracking-tight truncate group-hover:text-violet-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-indigo-300 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Show More / Show Less Button for Certificates */}
            {certificatesList.length > 3 && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.09] hover:border-violet-500/40 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] cursor-pointer group active:scale-95"
                >
                  <span>
                    {showAllCertificates ? t.showLess : `${t.showMore} (${certificatesList.length - 3} more)`}
                  </span>
                  {showAllCertificates ? (
                    <ChevronUp className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-violet-400 group-hover:translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: TECH STACK (WITH INTERACTIVE CARD CLICKS & PROJECTS DRAWER) */}
        {activeTab === "stack" && (
          <div className="space-y-6 animate-fade-in" id="skills">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techIcons.map((tech) => {
                const isSelected = selectedTech?.name === tech.name;
                return (
                  <SpotlightCard
                    key={tech.name}
                    spotlightColor={`${tech.color}35`}
                    onClick={() => setSelectedTech(isSelected ? null : tech)}
                    className={`p-5 rounded-2xl border-white/[0.08] bg-[#0c1222]/90 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                      isSelected
                        ? "ring-2 ring-indigo-400 bg-indigo-500/15 border-indigo-400/50 shadow-[0_0_25px_rgba(99,102,241,0.35)] scale-105"
                        : "hover:border-white/[0.2]"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 mb-3 shadow-inner transition-transform duration-300 ${
                        isSelected ? "scale-110 rotate-6" : "group-hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: `${tech.color}18`,
                        border: `1px solid ${tech.color}35`,
                      }}
                    >
                      <TechBrandIcon name={tech.name} className="w-6 h-6 object-contain" />
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {tech.category}
                    </p>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Interactive Matching Projects Drawer when Tech is clicked */}
            {selectedTech && (
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-scale-in shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <TechBrandIcon name={selectedTech.name} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">
                        {t.drawerSelectedTech}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {selectedTech.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      {projectsList.filter((p) =>
                        p.stack.some(
                          (s) =>
                            s.toLowerCase().includes(selectedTech.name.toLowerCase()) ||
                            selectedTech.name.toLowerCase().includes(s.toLowerCase())
                        )
                      ).length > 0 ? (
                        <>
                          {t.drawerUsedIn}{" "}
                          <span className="text-white font-semibold">
                            {projectsList
                              .filter((p) =>
                                p.stack.some(
                                  (s) =>
                                    s.toLowerCase().includes(selectedTech.name.toLowerCase()) ||
                                    selectedTech.name.toLowerCase().includes(s.toLowerCase())
                                )
                              )
                              .map((p) => p.title.split("—")[0].trim())
                              .join(" · ")}
                          </span>
                        </>
                      ) : (
                        t.drawerCoursework
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setActiveTab("projects");
                      setSelectedTech(null);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition shadow-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.drawerExploreBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* FULL INTERACTIVE PROJECT DETAIL MODAL WITH SMOOTH SCALE-IN ANIMATION */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProjectId(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0c1222] border border-white/[0.18] rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-y-auto animate-scale-in"
          >
            {/* Header: Badges & Close */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                  {selectedProject.categoryBadge}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-slate-300">
                  {selectedProject.tag}
                </span>
              </div>
              <button
                onClick={() => setSelectedProjectId(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
              {selectedProject.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            {/* Architecture Banner */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-5">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                <Layers className="w-4 h-4" />
                <span>{t.modalArchitecture}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white font-mono">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Detailed Points & Achievements */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                {t.modalHighlights}
              </h4>
              <ul className="space-y-2">
                {selectedProject.detailedPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            {selectedProject.highlight && (
              <div className="mb-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-200 flex items-start gap-2.5 font-sans">
                <Sparkles className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                <span className="leading-relaxed">{selectedProject.highlight}</span>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                {t.modalTech}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
              {selectedProject.isConfidential ? (
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300/90 w-full justify-center">
                  <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.modalConfidential}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 w-full justify-end">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:text-white transition shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{t.modalLiveDemo}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-xs font-semibold text-white transition hover:scale-105"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>{t.modalGithub}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FULL IMAGE LIGHTBOX MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0c1222] border border-white/[0.15] rounded-2xl p-3 shadow-2xl flex flex-col animate-scale-in"
          >
            <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.08] mb-2">
              <span className="text-xs font-mono text-slate-300">
                {previewTitle}
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img
                src={previewImage}
                alt="Certificate full view"
                className="max-h-[80vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
