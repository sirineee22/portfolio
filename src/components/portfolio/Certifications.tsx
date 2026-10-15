import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  X,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { toast } from "sonner";

// Import real certificate images
import neo4jFundamentalsImg from "@/assets/certificates/1bigdata.PNG";
import neo4jModelingImg from "@/assets/certificates/2data.PNG";
import neo4jCypherImg from "@/assets/certificates/3data.PNG";
import mongodbIndexesImg from "@/assets/certificates/mongodb_page-0001.jpg";
import mongodbModelingImg from "@/assets/certificates/Modeling Data RelationshipsCERTIF_page-0001.jpg";
import courseraCImg from "@/assets/certificates/Coursera-MEFADJMQRJVV_page-0001.jpg";
import googleDataStudioImg from "@/assets/certificates/data studio certif.PNG";
import simplilearnDataVizImg from "@/assets/certificates/skillup cerrtiff.PNG";

interface CertificateItem {
  id: string;
  badge: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  description: string;
  image: string;
  color: string;
}

const certificates: CertificateItem[] = [
  {
    id: "neo4j-fundamentals",
    badge: "NEO4J",
    title: "Neo4j Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 15, 2026",
    credentialId: "af22f618-c836-448e-b3c6-0cc92a7688da",
    description: "Graph theory, graph structures, graph database architecture, reading & writing data, and Cypher patterns.",
    image: neo4jFundamentalsImg,
    color: "#00f0ff",
  },
  {
    id: "neo4j-modeling",
    badge: "NEO4J",
    title: "Graph Data Modeling Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 15, 2026",
    credentialId: "1f159559-c91d-4e98-81e1-1537eef5111c",
    description: "Graph data modeling design principles, creating graphs, and graph refactoring strategies.",
    image: neo4jModelingImg,
    color: "#38bdf8",
  },
  {
    id: "neo4j-cypher",
    badge: "NEO4J",
    title: "Cypher Fundamentals",
    issuer: "Neo4j GraphAcademy",
    date: "Jan 15, 2026",
    credentialId: "2d563cb6-680c-43ff-8c92-3afb431d6d1d",
    description: "Cypher query language patterns, reading data from graph databases, and writing optimized graph transactions.",
    image: neo4jCypherImg,
    color: "#06b6d4",
  },
  {
    id: "mongodb-indexes",
    badge: "MONGODB",
    title: "MongoDB Indexes",
    issuer: "MongoDB, Inc.",
    date: "Jan 15, 2026",
    credentialId: "MDB5xxk4s35wy",
    description: "Indexing architectures, single-field, compound, multikey indexes, and query execution performance optimization.",
    image: mongodbIndexesImg,
    color: "#10b981",
  },
  {
    id: "mongodb-modeling",
    badge: "MONGODB",
    title: "Modeling Data Relationships",
    issuer: "MongoDB, Inc.",
    date: "Jan 15, 2026",
    credentialId: "MDBwfzoy5dl0c",
    description: "Document data modeling patterns, embedding vs referencing, 1-to-1, 1-to-many, and many-to-many relationships in NoSQL.",
    image: mongodbModelingImg,
    color: "#059669",
  },
  {
    id: "coursera-c",
    badge: "UC SANTA CRUZ",
    title: "C for Everyone: Programming Fundamentals",
    issuer: "University of California, Santa Cruz (Coursera)",
    date: "May 2, 2022",
    credentialId: "MEFADJMQRJVV",
    verifyUrl: "https://coursera.org/verify/MEFADJMQRJVV",
    description: "C programming language, memory management, pointers, structured algorithms, and foundational computer science principles.",
    image: courseraCImg,
    color: "#6366f1",
  },
  {
    id: "google-datastudio",
    badge: "GOOGLE",
    title: "Introduction to Data Studio",
    issuer: "Google Analytics Academy",
    date: "Valid through Dec 29, 2026",
    description: "Data Studio dashboard design, reporting pipelines, data source connections, and visual metric analytics.",
    image: googleDataStudioImg,
    color: "#f59e0b",
  },
  {
    id: "simplilearn-dataviz",
    badge: "SIMPLILEARN",
    title: "Introduction to Data Visualization",
    issuer: "Simplilearn SkillUp",
    date: "Dec 31, 2023",
    credentialId: "4750922",
    description: "Data visualization concepts, chart design selection, storytelling with business data, and analytics reporting.",
    image: simplilearnDataVizImg,
    color: "#ec4899",
  },
];

export function Certifications() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const current = certificates[currentIdx];

  const copyCredential = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    toast.success(`Copied: ${id}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="certifications" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER (WITHOUT PILL BADGE) */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Verified Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Official accredited diplomas &amp; certifications in databases, algorithms, and analytics
          </p>
        </div>

        {/* CAROUSEL CARD */}
        <div className="relative">
          <SpotlightCard
            spotlightColor={`${current.color}20`}
            className="p-6 sm:p-8 rounded-2xl border-white/[0.1]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Certificate Details */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded font-mono text-[11px] font-bold"
                      style={{
                        backgroundColor: `${current.color}18`,
                        color: current.color,
                        border: `1px solid ${current.color}35`,
                      }}
                    >
                      {current.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {current.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {current.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mb-3">
                    {current.issuer}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {current.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                  {current.credentialId && (
                    <button
                      onClick={() => copyCredential(current.credentialId!)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] font-mono text-[11px] text-slate-300 transition"
                      title="Click to copy credential ID"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>ID: {current.credentialId}</span>
                        </>
                      )}
                    </button>
                  )}

                  {current.verifyUrl && (
                    <a
                      href={current.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/25 font-mono text-[11px] text-indigo-300 transition"
                    >
                      <span>Verify on Coursera</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Actual Certificate Image Preview */}
              <div className="md:col-span-5">
                <div
                  onClick={() => setPreviewOpen(true)}
                  className="relative group/cert rounded-xl overflow-hidden border border-white/[0.1] bg-[#030712] cursor-pointer shadow-lg aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/cert:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Navigation Controls: Left and Right Chevrons */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prev}
              aria-label="Previous Certificate"
              className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-white flex items-center justify-center transition hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIdx === idx
                      ? "w-6 bg-indigo-400"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next Certificate"
              className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-white flex items-center justify-center transition hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Image Modal Lightbox */}
      {previewOpen && (
        <div
          onClick={() => setPreviewOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0c1222] border border-white/[0.15] rounded-2xl p-3 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.08] mb-2">
              <span className="text-xs font-mono text-slate-300">
                {current.title} · {current.issuer}
              </span>
              <button
                onClick={() => setPreviewOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
