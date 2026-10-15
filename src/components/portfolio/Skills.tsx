import { Server, Cloud, Database, Code2, Layers, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { TechBrandIcon } from "./TechBrandIcon";

interface SkillGroup {
  title: string;
  icon: typeof Server;
  color: string;
  skills: { name: string; tag: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Microservices",
    icon: Server,
    color: "#4ade80",
    skills: [
      { name: "Spring Boot", tag: "Production" },
      { name: "Spring Cloud", tag: "Discovery & Gateway" },
      { name: "Java", tag: "Advanced" },
      { name: "ASP.NET Core", tag: "Production" },
      { name: "FastAPI", tag: "Advanced" },
      { name: "Python", tag: "Advanced" },
      { name: "C# / .NET", tag: "Production" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "#38bdf8",
    skills: [
      { name: "Docker", tag: "Multi-stage" },
      { name: "Kubernetes", tag: "Clusters & Pods" },
      { name: "Jenkins", tag: "Automated CI/CD" },
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Linux", tag: "Administration" },
    ],
  },
  {
    title: "Data & Persistence",
    icon: Database,
    color: "#f59e0b",
    skills: [
      { name: "PostgreSQL", tag: "Service DB Isolation" },
      { name: "MySQL", tag: "Relational Modeling" },
      { name: "Entity Framework", tag: "ORM" },
      { name: "Power BI", tag: "Business Intelligence" },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Code2,
    color: "#22d3ee",
    skills: [
      { name: "React.js", tag: "Advanced" },
      { name: "TypeScript", tag: "Strict Types" },
      { name: "Angular", tag: "Dashboards" },
      { name: "Tailwind CSS", tag: "Design Systems" },
      { name: "Blazor", tag: "C# Web UI" },
    ],
  },
  {
    title: "Architecture & Practices",
    icon: Layers,
    color: "#818cf8",
    skills: [
      { name: "Microservices", tag: "Eureka & Gateway" },
      { name: "RESTful APIs", tag: "Clean Contracts" },
      { name: "CI / CD Pipelines", tag: "Automated QA" },
      { name: "Agile / Scrum", tag: "Sprint Delivery" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Core technologies organized across backend, cloud infrastructure, and databases
          </p>
        </div>

        {/* MINIMALIST SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            const isWide = idx === 0;

            return (
              <SpotlightCard
                key={group.title}
                spotlightColor={`${group.color}20`}
                className={`p-6 rounded-2xl flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${group.color}18`,
                        color: group.color,
                        border: `1px solid ${group.color}35`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs hover:border-white/[0.2] transition-colors"
                      >
                        <TechBrandIcon name={skill.name} className="w-3.5 h-3.5 object-contain shrink-0" />
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
