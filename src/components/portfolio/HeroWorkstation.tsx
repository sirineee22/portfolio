import { useState, useRef, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  User,
  Network,
  Sparkles,
  Award,
  Check,
  Copy,
  Send,
  Zap,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight,
  Database,
  ExternalLink,
} from "lucide-react";
import profilePhoto from "@/assets/me.png";

type TabMode = "profile" | "terminal" | "architecture";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function HeroWorkstation() {
  const [activeTab, setActiveTab] = useState<TabMode>("profile");
  const [copied, setCopied] = useState(false);

  // Terminal state
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <p className="text-primary font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to Sirine's Cloud Node [v2.4.0-release]
          </p>
          <p>
            Software Engineer specializing in <span className="text-foreground font-medium">Spring Boot, ASP.NET Core, FastAPI & Kubernetes</span>.
          </p>
          <p className="text-xs text-foreground/70">
            Click the quick command chips below or type commands to explore.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Tilt effect for profile card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dahmane.sirine@esprit.tn");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (cleanCmd === "help") {
      res = (
        <div className="space-y-1 text-xs">
          <p className="text-primary font-mono font-semibold">Available commands:</p>
          <div className="grid grid-cols-2 gap-1 text-muted-foreground font-mono">
            <span>• whoami</span><span>About Sirine Dahmane</span>
            <span>• skills</span><span>Tech stack & tools</span>
            <span>• architecture</span><span>View microservices setup</span>
            <span>• taekwondo</span><span>Martial arts background</span>
            <span>• internship</span><span>End-of-studies availability</span>
            <span>• contact</span><span>Direct reachout info</span>
            <span>• clear</span><span>Clear terminal screen</span>
          </div>
        </div>
      );
    } else if (cleanCmd === "whoami" || cleanCmd === "bio") {
      res = (
        <div className="text-xs space-y-1 text-foreground/90 font-mono">
          <p className="text-primary font-bold">Dahmane Sirine</p>
          <p>• Final-Year Software Engineering Student at ESPRIT</p>
          <p>• Full-Stack & Cloud-Native Developer</p>
          <p>• Former Member of the Tunisian National Taekwondo Team 🥋</p>
          <p>• Focused on resilient architectures, microservices & automated CI/CD</p>
        </div>
      );
    } else if (cleanCmd === "skills" || cleanCmd === "stack") {
      res = (
        <div className="text-xs space-y-1.5 font-mono">
          <p className="text-primary font-semibold">⚡ Technical Stack:</p>
          <p><span className="text-foreground font-medium">Backend:</span> Spring Boot, ASP.NET Core, FastAPI, Spring Cloud, REST APIs</p>
          <p><span className="text-foreground font-medium">DevOps:</span> Docker, Kubernetes, Jenkins, Git, CI/CD, Linux</p>
          <p><span className="text-foreground font-medium">Frontend:</span> React, Angular, Blazor, TypeScript, Tailwind CSS</p>
          <p><span className="text-foreground font-medium">Databases:</span> PostgreSQL, MySQL, SQL Server, Power BI</p>
        </div>
      );
    } else if (cleanCmd === "architecture" || cleanCmd === "arch") {
      setActiveTab("architecture");
      res = (
        <p className="text-xs text-primary font-mono">
          ⚡ Switched to interactive Microservices Architecture view tab!
        </p>
      );
    } else if (cleanCmd === "taekwondo" || cleanCmd === "athlete") {
      res = (
        <div className="text-xs space-y-1 font-mono text-foreground/90">
          <p className="text-primary font-semibold">🥋 Taekwondo National Team Athlete</p>
          <p>Trained and competed at the national level. The extreme physical and mental conditioning taught me:</p>
          <p className="text-muted-foreground">1. Relentless grit & discipline under high pressure</p>
          <p className="text-muted-foreground">2. Precision and attention to minute detail</p>
          <p className="text-muted-foreground">3. Rapid strategic decision-making</p>
        </div>
      );
    } else if (cleanCmd === "internship" || cleanCmd === "hire" || cleanCmd === "sudo hire") {
      res = (
        <div className="text-xs space-y-1.5 font-mono p-2 rounded bg-primary/10 border border-primary/30">
          <p className="text-primary font-bold">🎉 STATUS: SEEKING 6-MONTH END-OF-STUDIES INTERNSHIP</p>
          <p className="text-foreground/90">Ready for full-time immersion starting 2026/2027.</p>
          <p className="text-muted-foreground">Location: Tunisia / Remote / Relocation</p>
          <a
            href="mailto:dahmane.sirine@esprit.tn"
            className="inline-flex items-center gap-1 text-primary underline font-semibold mt-1"
          >
            Email: dahmane.sirine@esprit.tn <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      );
    } else if (cleanCmd === "contact") {
      res = (
        <div className="text-xs space-y-1 font-mono text-muted-foreground">
          <p>📧 Email: <a href="mailto:dahmane.sirine@esprit.tn" className="text-primary hover:underline">dahmane.sirine@esprit.tn</a></p>
          <p>📍 Location: Ariana, Tunisia</p>
          <p>🐙 GitHub: github.com/sirineee22</p>
          <p>💼 LinkedIn: linkedin.com/in/dahmane-sirine-6a7a612a0</p>
        </div>
      );
    } else {
      res = (
        <p className="text-xs font-mono text-destructive">
          Command not recognized: "{cmd}". Type <span className="text-primary underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see valid commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: res }]);
    setInputVal("");
  };

  useEffect(() => {
    if (activeTab === "terminal" && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, activeTab]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient Pulsing Aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/20 to-glow/30 rounded-3xl blur-2xl -z-10 opacity-70 animate-pulse-ring" />

      {/* Main Container */}
      <div className="cyber-card p-4 sm:p-5 overflow-hidden">
        {/* Header Tabs */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "profile"
                  ? "bg-gradient-primary text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "terminal"
                  ? "bg-gradient-primary text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Terminal</span>
            </button>

            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "architecture"
                  ? "bg-gradient-primary text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </button>
          </div>

          {/* Quick Copy / Status Badge */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-primary" />
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* TAB 1: 3D Profile Card */}
        {activeTab === "profile" && (
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Photo Container */}
            <div className="relative aspect-[4/4.2] sm:aspect-[4/4] rounded-2xl overflow-hidden bg-gradient-to-b from-primary/10 via-background/40 to-background/90 border border-white/10 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Dahmane Sirine"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 hover:scale-105"
              />

              {/* Hologram Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

              {/* Status Beacon Top Left */}
              <div className="absolute top-3 left-3 glass px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono text-foreground font-medium">
                  Ready for 6-Month Internship
                </span>
              </div>

              {/* Floating Badge: Taekwondo */}
              <div className="absolute top-3 right-3 glass px-3 py-1.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-2 animate-float">
                <span className="text-sm">🥋</span>
                <div>
                  <p className="text-[9px] font-mono text-muted-foreground uppercase leading-none">Athlete</p>
                  <p className="text-[11px] font-bold text-foreground leading-tight">National Team</p>
                </div>
              </div>

              {/* Floating Badge: ESPRIT Software Engineer */}
              <div className="absolute bottom-16 left-3 glass px-3 py-1.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-2 animate-float-slow">
                <div className="w-6 h-6 rounded-md bg-gradient-primary grid place-items-center">
                  <Award className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-muted-foreground uppercase leading-none">ESPRIT</p>
                  <p className="text-[11px] font-bold text-foreground leading-tight">Software Eng.</p>
                </div>
              </div>

              {/* Bottom Card Identity Strip */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      Dahmane Sirine
                      <span className="px-2 py-0.5 rounded-md bg-primary/20 border border-primary/40 text-[10px] font-mono text-primary font-normal">
                        Full-Stack / Cloud
                      </span>
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      Spring Boot · ASP.NET Core · FastAPI · K8s
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-foreground transition border border-white/10"
                    title="Open terminal mode"
                  >
                    <TerminalIcon className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Interactive Tags Below Card */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Focus</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Microservices</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Discipline</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Black Belt 🥋</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">DevOps</p>
                <p className="text-xs font-semibold text-foreground mt-0.5">Docker & K8s</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Live Interactive Terminal */}
        {activeTab === "terminal" && (
          <div className="flex flex-col h-[380px] bg-black/60 rounded-xl border border-white/10 p-3 sm:p-4 font-mono text-xs overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-foreground/80">sirine@cloud-infra:~</span>
              </div>
              <button
                onClick={() => executeCommand("clear")}
                className="text-[10px] hover:text-foreground text-muted-foreground transition"
              >
                clear
              </button>
            </div>

            {/* Terminal History Output */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 terminal-scroll">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-muted-foreground">~</span>
                    <span className="font-semibold text-foreground">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Command Chips */}
            <div className="pt-2 border-t border-white/10 mt-2">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {[
                  { label: "whoami", cmd: "whoami" },
                  { label: "skills", cmd: "skills" },
                  { label: "architecture", cmd: "architecture" },
                  { label: "taekwondo", cmd: "taekwondo" },
                  { label: "internship", cmd: "internship" },
                  { label: "contact", cmd: "contact" },
                ].map((c) => (
                  <button
                    key={c.cmd}
                    onClick={() => executeCommand(c.cmd)}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-[10px] text-muted-foreground hover:text-primary transition"
                  >
                    ${c.label}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputVal.trim()) executeCommand(inputVal);
                }}
                className="flex items-center gap-2 bg-black/40 rounded-lg px-2.5 py-1.5 border border-white/10 focus-within:border-primary/50"
              >
                <span className="text-emerald-400">➜</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (e.g. 'skills', 'hire')..."
                  className="w-full bg-transparent text-xs text-foreground focus:outline-none font-mono"
                />
                <button
                  type="submit"
                  aria-label="Submit command"
                  className="p-1 rounded text-primary hover:bg-primary/10 transition"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: Interactive Architecture Topology */}
        {activeTab === "architecture" && (
          <div className="flex flex-col h-[380px] bg-black/50 rounded-xl border border-white/10 p-4 font-mono text-xs overflow-y-auto terminal-scroll">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <p className="font-semibold text-primary text-sm flex items-center gap-1.5">
                  <Network className="w-4 h-4" /> CertifyPro Cloud Topology
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Distributed Microservices & Container Orchestration
                </p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Schema
              </span>
            </div>

            {/* Architecture Flow Nodes */}
            <div className="space-y-3.5 my-auto">
              {/* Layer 1: Clients */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 grid place-items-center shrink-0">
                  <Layers className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-foreground">Client Layer (React / Angular / Blazor)</p>
                  <p className="text-[10px] text-muted-foreground">HTTP/HTTPS REST calls · JWT Auth Headers</p>
                </div>
              </div>

              {/* Pipeline Arrow */}
              <div className="flex justify-center -my-1 text-primary animate-pulse">
                <span className="text-[10px]">▼ API Gateway (:8080) & Routing</span>
              </div>

              {/* Layer 2: API Gateway & Discovery */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <div className="flex items-center gap-1.5 text-purple-300 font-semibold text-[11px] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Spring Cloud Gateway
                  </div>
                  <p className="text-[10px] text-muted-foreground">Rate limiting, CORS, JWT verification</p>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px] mb-1">
                    <Server className="w-3.5 h-3.5" /> Eureka Registry
                  </div>
                  <p className="text-[10px] text-muted-foreground">Dynamic service discovery & heartbeat</p>
                </div>
              </div>

              {/* Pipeline Arrow */}
              <div className="flex justify-center -my-1 text-primary animate-pulse">
                <span className="text-[10px]">▼ Distributed Cluster</span>
              </div>

              {/* Layer 3: Microservices & Persistence */}
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center justify-between text-emerald-300 font-semibold text-[11px] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> 5x Spring Boot Microservices
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Kubernetes Pods</span>
                </div>
                <p className="text-[10px] text-muted-foreground mb-2">
                  Isolated domains: Auth · User · Course · Certification · Notification
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-emerald-500/20 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-black/40 text-muted-foreground flex items-center gap-1">
                    <Database className="w-2.5 h-2.5 text-primary" /> PostgreSQL (Service-per-DB)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-muted-foreground">
                    Docker Multi-Stage
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-muted-foreground">
                    Jenkins CI/CD
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">Designed & Built in 2025</span>
              <a
                href="#projects"
                className="text-primary hover:underline flex items-center gap-1 font-semibold"
              >
                View Project Details <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
