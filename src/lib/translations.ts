export interface ProjectTranslation {
  id: string;
  title: string;
  category: "internship" | "academic" | "hobby";
  categoryBadge: string;
  description: string;
  tag: string;
  architecture: string;
  detailedPoints: string[];
  highlight?: string;
}

export interface ExperienceTranslation {
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  organization: string;
  metric: string;
  details: string[];
}

export interface EducationTranslation {
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  institution: string;
  metric: string;
  details?: string[];
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      showcase: "Showcase",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      statusBadge: "Dahmane Sirine · Available for 6-Month PFE Internship",
      headlineMain: "A curious mind.",
      headlineAccent: "An engineering mindset.",
      subtitle:
        "Final-year Software Engineering Student & Full-Stack Developer. From railway operations to developer LLM tooling & microservices — I build software that solves real problems.",
      exploreBtn: "Explore my work",
      downloadCv: "Download CV",
      location: "Ariana, Tunisia",
      letsConnect: "Let's make something great",
      role: "Software Engineer",
      cardStatus: "Open to PFE & Full-Time",
      cardLocation: "Ariana, Tunisia · Remote Ready",
      cardTags: ["Spring Boot", "FastAPI", "React", "Docker", "PostgreSQL"],
    },
    about: {
      title: "About Me",
      body: "I'm a final-year Software Engineering student at ESPRIT, with hands-on experience in full-stack development, API design, and database management. I'm seeking a six-month end-of-studies internship to contribute to real-world software solutions.",
      status: "Available for 6-Month End-of-Studies (PFE) Internship (2026/2027)",
      location: "Tunis / Ariana, Tunisia · Remote & Relocation",
    },
    showcase: {
      sectionTitle: "Portfolio Showcase",
      sectionSubtitle:
        "Explore my journey through projects, certifications, and technical expertise. Click any card to inspect full architecture details, metrics, and live systems.",
      tabProjects: "Projects",
      tabCertificates: "Certificates",
      tabTechStack: "Tech Stack",
      filterAll: "All",
      filterInternships: "Internships",
      filterAcademic: "Academic Projects",
      filterHobby: "Hobby & AI Tools",
      showMore: "Show more",
      showLess: "Show less",
      showMoreCount: (count: number) => `Show more (${count} more)`,
      cardArchitectureLabel: "Architecture & Core",
      liveDemo: "Live Demo",
      viewCode: "Code",
      clickEnlarge: "Click to Enlarge",
      confidentialBanner: "Enterprise System · Confidential Internal Data",
      modalConfidential: "Internal Enterprise System · Confidential Company Data (SNCFT)",
      modalArchitecture: "Architecture & Core Patterns",
      modalHighlights: "Key Highlights & Technical Deliverables",
      modalTech: "Technologies & Tools",
      modalLiveDemo: "Open Live Demo",
      modalGithub: "View GitHub Source",
      modalClose: "Close",
      drawerSelectedTech: "Selected Technology:",
      drawerUsedIn: "Used in:",
      drawerCoursework: "Core engineering competency integrated into distributed software architecture coursework.",
      drawerExploreBtn: "Explore Projects",
    },
    experience: {
      title: "Work Experience",
      subtitle: "Production engineering internships and real-world system deployments",
    },
    education: {
      title: "Education",
      subtitle: "Academic degrees, engineering studies, and foundations",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Open to 6-month PFE internships and software engineering opportunities",
      directChannels: "Direct Channels",
      directDesc: "Fastest response via email",
      emailLabel: "EMAIL",
      locationLabel: "LOCATION",
      locationValue: "Tunis, Tunisia · Remote Ready",
      formTitle: "Send a Message",
      formSubtitle: "Leave a quick note and I'll reply promptly",
      nameLabel: "Your Name",
      namePlaceholder: "Name",
      emailInputLabel: "Your Email",
      emailPlaceholder: "Email",
      subjectLabel: "Subject",
      subjectPlaceholder: "Internship / Engineering Project",
      messageLabel: "Message",
      messagePlaceholder: "Message...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      successToast: "Thank you! Your message has been sent to Dahmane Sirine. I will get back to you shortly.",
      fallbackToast: "Opening your email client to send the message directly...",
    },
    footer: {
      roleSubtitle: "Distributed Systems · Cloud-Native · ESPRIT '27",
      status: "Available for 6-Month PFE Internship",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      showcase: "Projets",
      experience: "Expérience",
      education: "Formation",
      contact: "Contact",
      resume: "Mon CV",
    },
    hero: {
      statusBadge: "Dahmane Sirine · Disponible pour Stage PFE de 6 Mois",
      headlineMain: "Un esprit curieux.",
      headlineAccent: "Une vision d'ingénieur.",
      subtitle:
        "Élève-ingénieure en dernière année Génie Logiciel & Développeuse Full-Stack. De l'exploitation ferroviaire aux outils LLM pour développeurs et microservices — je conçois des logiciels pour des problèmes réels.",
      exploreBtn: "Découvrir mes projets",
      downloadCv: "Télécharger mon CV",
      location: "Ariana, Tunisie",
      letsConnect: "Créons ensemble quelque chose d'unique",
      role: "Élève-Ingénieure Logiciel",
      cardStatus: "Disponible PFE (6 Mois) & CDI",
      cardLocation: "Ariana, Tunisie · Télétravail & Mobilité",
      cardTags: ["Spring Boot", "FastAPI", "React", "Docker", "PostgreSQL"],
    },
    about: {
      title: "À Propos de Moi",
      body: "Élève-ingénieure en dernière année de Génie Logiciel à ESPRIT, passionnée par le développement full-stack, la conception d'APIs et la gestion de bases de données distribuées. Je recherche un stage de fin d'études (PFE) de 6 mois pour contribuer à des solutions logicielles d'envergure.",
      status: "Disponible pour Stage de Fin d'Études (PFE) de 6 mois (2026/2027)",
      location: "Tunis / Ariana, Tunisie · Télétravail & Mobilité",
    },
    showcase: {
      sectionTitle: "Réalisations & Projets",
      sectionSubtitle:
        "Découvrez mon parcours à travers mes projets, certifications et compétences techniques. Cliquez sur chaque carte pour inspecter l'architecture et les détails.",
      tabProjects: "Projets",
      tabCertificates: "Certifications",
      tabTechStack: "Technologies",
      filterAll: "Tous",
      filterInternships: "Stages Entreprise",
      filterAcademic: "Projets Universitaires",
      filterHobby: "Outils IA & Hobby",
      showMore: "Voir plus",
      showLess: "Voir moins",
      showMoreCount: (count: number) => `Voir plus (${count} de plus)`,
      cardArchitectureLabel: "Architecture & Conception",
      liveDemo: "Démo en ligne",
      viewCode: "Code source",
      clickEnlarge: "Cliquer pour Agrandir",
      confidentialBanner: "Système d'entreprise · Données confidentielles",
      modalConfidential: "Système interne d'entreprise · Données confidentielles (SNCFT)",
      modalArchitecture: "Architecture & Principes fondamentaux",
      modalHighlights: "Points clés & Réalisations techniques",
      modalTech: "Technologies & Outils",
      modalLiveDemo: "Ouvrir la Démo Live",
      modalGithub: "Voir le Code Source GitHub",
      modalClose: "Fermer",
      drawerSelectedTech: "Technologie sélectionnée :",
      drawerUsedIn: "Utilisé dans :",
      drawerCoursework: "Compétence technique intégrée dans la formation en génie logiciel et architectures distribuées.",
      drawerExploreBtn: "Explorer les projets",
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Stages d'ingénierie en production et déploiements de systèmes en entreprise",
    },
    education: {
      title: "Formation Académique",
      subtitle: "Diplômes universitaires, cycle ingénieur et bases académiques",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Ouverte aux opportunités de stage PFE de 6 mois et projets en ingénierie logicielle",
      directChannels: "Canaux Directs",
      directDesc: "Réponse rapide garantie par email",
      emailLabel: "EMAIL",
      locationLabel: "LOCALISATION",
      locationValue: "Tunis, Tunisie · Télétravail & Présentiel",
      formTitle: "Envoyer un Message",
      formSubtitle: "Laissez-moi un mot et je vous répondrai dans les plus brefs délais",
      nameLabel: "Votre Nom",
      namePlaceholder: "Votre Nom",
      emailInputLabel: "Votre Adresse Email",
      emailPlaceholder: "votre.email@exemple.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Proposition de Stage PFE / Projet",
      messageLabel: "Message",
      messagePlaceholder: "Votre message...",
      sendBtn: "Envoyer le Message",
      sendingBtn: "Envoi en cours...",
      successToast: "Merci ! Votre message a bien été envoyé à Dahmane Sirine. Je vous répondrai rapidement.",
      fallbackToast: "Ouverture de votre messagerie pour envoyer l'email directement...",
    },
    footer: {
      roleSubtitle: "Systèmes Distribués · Cloud-Native · ESPRIT '27",
      status: "Disponible pour Stage PFE de 6 Mois",
    },
  },
};

export const projectsTranslations: Record<"en" | "fr", ProjectTranslation[]> = {
  en: [
    {
      id: "sncft",
      title: "Railway Transport Information System (SNCFT)",
      category: "internship",
      categoryBadge: "Enterprise Internship",
      description:
        "Enterprise web management and supervisory platform for the Tunisian National Railway Company (SNCFT). Features real-time fleet telemetry, automated CSV/XML data ingestion, and RBAC security.",
      tag: "Enterprise System",
      architecture: "ASP.NET Core · Blazor · Entity Framework · MySQL · JWT",
      detailedPoints: [
        "Operational fleet management and telemetry monitoring of railway stock in production.",
        "Engineered modular and secure REST APIs with JWT role-based access control (RBAC).",
        "Built automated ingestion and parsing modules for high-volume CSV/XML data streams.",
        "Enterprise production deployment for the Tunisian National Railway Company (SNCFT).",
        "Railway telemetry and proprietary source code governed by corporate non-disclosure agreements.",
      ],
    },
    {
      id: "numviz",
      title: "NUMVIZ — Interactive Numerical Analysis Platform",
      category: "internship",
      categoryBadge: "Company Internship",
      description:
        "Interactive educational platform for numerical analysis featuring step-by-step mathematical algorithm rendering and high-performance dynamic visualizations.",
      tag: "Interactive Platform",
      architecture: "FastAPI Backend · React + TS · Manim Visual Engine · CI/CD",
      detailedPoints: [
        "Interactive educational platform dedicated to exploring and solving numerical analysis methods.",
        "Step-by-step dynamic visualization of complex mathematical algorithms (Manim & HTML5 Canvas).",
        "High-performance asynchronous backend architecture built with FastAPI and Python.",
        "Responsive user interface in React, TypeScript, and Tailwind CSS with real-time graph rendering.",
        "Continuous integration (CI/CD) and automated cloud production deployment on Vercel.",
      ],
    },
    {
      id: "certifypro",
      title: "CertifyPro — Distributed Certification Platform",
      category: "academic",
      categoryBadge: "University Project",
      description:
        "Cloud-native online examination and certification platform engineered across 5 decoupled microservices with dynamic Service Discovery, API Gateway routing, and automated Kubernetes orchestration.",
      tag: "Microservices & Cloud",
      architecture: "5 Microservices · Spring Cloud Gateway · Eureka · PostgreSQL · K8s",
      detailedPoints: [
        "Distributed certification and exam engine decomposed into 5 autonomous Spring Boot microservices.",
        "Dynamic service registration and automated discovery via Spring Cloud Netflix Eureka.",
        "Unified client entry point and secure request routing with Spring Cloud Gateway.",
        "Isolated PostgreSQL database per microservice adhering to the Database-per-Service pattern.",
        "Multi-stage Docker containerization and orchestrated deployment on a Kubernetes cluster.",
      ],
    },
    {
      id: "promptforge",
      title: "PromptForge — Developer Prompt Testing & Orchestration Studio",
      category: "hobby",
      categoryBadge: "Hobby Project · AI Tool",
      description:
        "Developer studio for benchmarking and orchestrating LLM prompts across multiple output formats (Strict JSON, YAML, Markdown) with latency comparison, token cost analytics, and schema validation before code integration.",
      tag: "AI Tooling & LLMs",
      architecture: "FastAPI Backend · React + TS · Groq / Gemini API · Schema Validation",
      highlight: "Engineered for developer productivity · Modern integration with generative AI APIs",
      detailedPoints: [
        "Prompt orchestration studio and comparative benchmarking testbed for software and AI engineers.",
        "Instant latency measurement and response comparison across Groq and Gemini API configurations.",
        "Real-time token estimation with projected cost analytics for prompt inputs and outputs.",
        "Strict schema compliance verification and structured formatting: JSON Strict, YAML, and Markdown.",
        "Developer-tooling product focus with a minimalist, high-productivity React interface.",
      ],
    },
  ],
  fr: [
    {
      id: "sncft",
      title: "Système d'Information du Transport Ferroviaire (SNCFT)",
      category: "internship",
      categoryBadge: "Stage Entreprise",
      description:
        "Plateforme web de gestion opérationnelle et de supervision du parc ferroviaire pour la Société Nationale des Chemins de Fer Tunisiens. Suivi de flotte en temps réel, ingestion automatisée CSV/XML et sécurité RBAC.",
      tag: "Système d'Entreprise",
      architecture: "ASP.NET Core · Blazor · Entity Framework · MySQL · JWT",
      detailedPoints: [
        "Gestion opérationnelle et supervision télémétrique de l'état du parc ferroviaire en production.",
        "Création d'APIs REST modulaires et sécurisées avec contrôle d'accès basé sur les rôles (RBAC) via JWT.",
        "Modules automatisés d'ingestion et de parsing de flux de données CSV/XML volumineux.",
        "Déploiement en entreprise pour la Société Nationale des Chemins de Fer Tunisiens (SNCFT).",
        "Données ferroviaires et code source soumis au secret professionnel d'entreprise.",
      ],
    },
    {
      id: "numviz",
      title: "NUMVIZ — Plateforme d'Analyse Numérique Interactive",
      category: "internship",
      categoryBadge: "Stage Entreprise",
      description:
        "Plateforme pédagogique interactive d'analyse numérique avec moteur de rendu d'algorithmes mathématiques pas-à-pas et visualisations dynamiques haute performance.",
      tag: "Plateforme Interactive",
      architecture: "FastAPI Backend · React + TS · Manim Visual Engine · CI/CD",
      detailedPoints: [
        "Plateforme éducative interactive dédiée à l'apprentissage et à la résolution des méthodes numériques.",
        "Visualisation dynamique pas-à-pas des algorithmes mathématiques complexes (Manim & Canvas).",
        "Architecture backend haute performance développée avec FastAPI et Python.",
        "Interface utilisateur réactive en React, TypeScript et Tailwind CSS avec rendu temps réel.",
        "Intégration continue (CI/CD) et déploiement cloud automatisé en production sur Vercel.",
      ],
    },
    {
      id: "certifypro",
      title: "CertifyPro — Plateforme de Certification Distribuée",
      category: "academic",
      categoryBadge: "Projet Universitaire",
      description:
        "Plateforme cloud-native d'évaluation et de certification en ligne architecturée en 5 microservices indépendants avec Service Discovery, API Gateway et déploiement automatisé Kubernetes.",
      tag: "Microservices & Cloud",
      architecture: "5 Microservices · Spring Cloud Gateway · Eureka · PostgreSQL · K8s",
      detailedPoints: [
        "Système distribué d'examens et certifications découpé en 5 microservices indépendants Spring Boot.",
        "Enregistrement dynamique et découverte de services automatisée via Spring Cloud Netflix Eureka.",
        "Point d'entrée unique et filtrage unifié des requêtes avec Spring Cloud Gateway.",
        "Persistance avec PostgreSQL par microservice suivant le pattern Database-per-Service.",
        "Conteneurisation Docker multi-stages et déploiement orchestré sur cluster Kubernetes.",
      ],
    },
    {
      id: "promptforge",
      title: "PromptForge — Studio de Test & Orchestration de Prompts",
      category: "hobby",
      categoryBadge: "Projet Hobby · Outil IA",
      description:
        "Interface pour développeurs permettant de tester et benchmarker un même prompt sur multiples formats (JSON strict, YAML, Markdown) avec comparaison de latence, estimation du coût en tokens et validation de schéma avant intégration.",
      tag: "Outils IA & LLMs",
      architecture: "FastAPI Backend · React + TS · Groq / Gemini API · Validation de Schéma",
      highlight: "Orienté outillage pour ingénieurs · Intégration moderne d'APIs d'intelligence artificielle",
      detailedPoints: [
        "Studio d'orchestration et banc d'essai comparatif de prompts pour développeurs et ingénieurs IA.",
        "Comparaison instantanée des temps de latence et débits de réponse via APIs Groq et Gemini.",
        "Estimation en temps réel de la consommation et du coût financier en tokens d'entrée et sortie.",
        "Validation de conformité et formatage strict : JSON Strict, YAML et Markdown.",
        "Culture produit orientée outillage pour ingénieurs avec frontend React épuré et moderne.",
      ],
    },
  ],
};

export const experienceTranslations: Record<"en" | "fr", ExperienceTranslation[]> = {
  en: [
    {
      badge: "PRODUCTION INTERNSHIP",
      badgeColor: "#6366f1",
      date: "Jun 2026 — Sep 2026",
      title: "Software Engineering Intern — Railway Operations System",
      organization: "SNCFT (Tunisian National Railway Company) · Tunis, Tunisia",
      metric: "Production Delivery: Full-Stack ASP.NET Core, Blazor & MySQL",
      details: [
        "Engineered operational railway fleet management web application with real-time views",
        "Created secure REST APIs with JWT role-based access control (RBAC)",
        "Built automated CSV/XML data ingestion and reporting modules",
      ],
    },
    {
      badge: "COMPANY INTERNSHIP",
      badgeColor: "#10b981",
      date: "Jul 2025 — Sep 2025",
      title: "Software Engineering Intern — NUMVIZ Interactive Analysis Platform",
      organization: "NUMVIZ · Software Engineering Internship",
      metric: "Interactive Platform: FastAPI, Python, React & Manim Animations",
      details: [
        "Engineered NUMVIZ, an interactive full-stack educational platform with dynamic mathematical algorithm visualization",
        "Automated CI/CD test suites and continuous deployment pipelines (Production on Vercel)",
      ],
    },
    {
      badge: "BI & DATA INTERNSHIP",
      badgeColor: "#38bdf8",
      date: "Feb. 2023 – Apr. 2023",
      title: "Business Intelligence Intern",
      organization: "VirtuaDev, Tunisia",
      metric: "Logistics Analytics: SQL Server, Python, Power BI & ETL",
      details: [
        "Processed logistics datasets using SQL Server and Python; developed Power BI dashboards and contributed to ETL workflows",
      ],
    },
  ],
  fr: [
    {
      badge: "STAGE EN ENTREPRISE",
      badgeColor: "#6366f1",
      date: "Juin 2026 — Sept 2026",
      title: "Stagiaire Ingénieure Logiciel — Système d'Information Ferroviaire",
      organization: "SNCFT (Société Nationale des Chemins de Fer Tunisiens) · Tunis, Tunisie",
      metric: "Livraison en Production : ASP.NET Core, Blazor & MySQL",
      details: [
        "Développement de l'application web de gestion et supervision opérationnelle du parc ferroviaire en temps réel",
        "Conception d'APIs REST sécurisées avec contrôle d'accès basé sur les rôles (RBAC) via JWT",
        "Mise en place de modules automatisés d'ingestion et de parsing de flux de données CSV/XML volumineux",
      ],
    },
    {
      badge: "STAGE EN ENTREPRISE",
      badgeColor: "#10b981",
      date: "Juil 2025 — Sept 2025",
      title: "Stagiaire Ingénieure Logiciel — Plateforme d'Analyse Numérique NUMVIZ",
      organization: "NUMVIZ · Stage en Ingénierie Logicielle",
      metric: "Plateforme Interactive : FastAPI, Python, React & Animations Manim",
      details: [
        "Conception et développement de NUMVIZ, plateforme éducative interactive dédiée à la visualisation d'algorithmes mathématiques",
        "Automatisation des suites de tests CI/CD et déploiement continu sur Vercel",
      ],
    },
    {
      badge: "STAGE BUSINESS INTELLIGENCE",
      badgeColor: "#38bdf8",
      date: "Févr. 2023 – Avr. 2023",
      title: "Stagiaire Business Intelligence",
      organization: "VirtuaDev, Tunisie",
      metric: "Analytique Logistique : SQL Server, Python, Power BI & ETL",
      details: [
        "Traitement de jeux de données logistiques avec SQL Server et Python ; création de tableaux de bord Power BI et contribution aux workflows ETL",
      ],
    },
  ],
};

export const educationTranslations: Record<"en" | "fr", EducationTranslation[]> = {
  en: [
    {
      badge: "CURRENT DEGREE",
      badgeColor: "#6366f1",
      date: "2024 — Present",
      title: "Engineering Degree in Software Engineering",
      institution: "ESPRIT — Higher School of Engineering & Technology, Ariana",
      metric: "Specialization: Distributed Systems, Cloud-Native Microservices & DevOps",
      details: [
        "Advanced Java / Spring Boot, ASP.NET Core, and FastAPI enterprise architecture",
        "Container orchestration with Kubernetes and Docker multi-stage pipelines",
        "Distributed databases, API Gateway routing, and automated testing suites",
      ],
    },
    {
      badge: "GRADUATION DEGREE",
      badgeColor: "#10b981",
      date: "Completed 2024",
      title: "Bachelor's Degree in Business Intelligence",
      institution: "ESEN — Higher School of Digital Economy, Manouba",
      metric: "Graduation Honor: Advanced Data Analytics & BI Architectures",
      details: [
        "Relational data modeling, SQL Server, MySQL, and ETL pipeline design",
        "Executive reporting with Power BI, DAX formulas, and data warehousing",
      ],
    },
    {
      badge: "FOUNDATION",
      badgeColor: "#64748b",
      date: "Completed 2020",
      title: "High School Diploma in Economics & Management",
      institution: "Lycée Rafeha, Tunisia",
      metric: "Foundation: Quantitative Mathematics & Economics",
    },
  ],
  fr: [
    {
      badge: "DIPLÔME EN COURS",
      badgeColor: "#6366f1",
      date: "2024 — Présent",
      title: "Diplôme National d'Ingénieur en Génie Logiciel",
      institution: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies, Ariana",
      metric: "Spécialisation : Systèmes Distribués, Microservices Cloud-Native & DevOps",
      details: [
        "Architectures logicielles d'entreprise : Java / Spring Boot, ASP.NET Core et FastAPI",
        "Orchestration et conteneurisation avec Kubernetes et pipelines Docker multi-stages",
        "Bases de données distribuées, routage API Gateway et suites de tests automatisées",
      ],
    },
    {
      badge: "DIPLÔME OBTENU",
      badgeColor: "#10b981",
      date: "Diplômée en 2024",
      title: "Licence Nationale en Business Intelligence",
      institution: "ESEN — École Supérieure d'Économie Numérique, Manouba",
      metric: "Mention : Analytique Avancée & Architectures Décisionnelles (BI)",
      details: [
        "Modélisation de données relationnelles, SQL Server, MySQL et conception de pipelines ETL",
        "Tableaux de bord exécutifs avec Power BI, formules DAX et data warehousing",
      ],
    },
    {
      badge: "CYCLE SECONDAIRE",
      badgeColor: "#64748b",
      date: "Obtenu en 2020",
      title: "Baccalauréat Économie & Gestion",
      institution: "Lycée Rafeha, Tunisie",
      metric: "Fondations : Mathématiques Quantitatives & Économie",
    },
  ],
};
