import { createFileRoute } from "@tanstack/react-router";
import { CanvasBackground } from "@/components/portfolio/CanvasBackground";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { PortfolioShowcase } from "@/components/portfolio/PortfolioShowcase";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/context/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dahmane Sirine — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Dahmane Sirine — Software Engineering student at ESPRIT building scalable backend systems, microservices, and distributed applications.",
      },
      { property: "og:title", content: "Dahmane Sirine — Software Engineer" },
      {
        property: "og:description",
        content:
          "Software Engineering student · Enhancing digital experiences that are smooth, scalable, and made to impress.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <main className="min-h-screen text-foreground relative selection:bg-primary/30 selection:text-white">
        <CanvasBackground />
        <Nav />
        <Hero />
        <About />
        <PortfolioShowcase />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <Toaster />
      </main>
    </LanguageProvider>
  );
}
