/**
 * Projets affichés sur la page d’accueil et sur leur page détaillée (/projets/slug).
 * - slug : identifiant unique utilisé dans l’URL (minuscules, tirets, sans accents)
 * - image : image de couverture placée dans public/images/projects/ (facultative :
 *   sans image, une couverture tissée aux couleurs du site est générée)
 * - coverFit : "contain" si l’image est un logo (affiché en entier sur fond blanc)
 * - category : "academique" (projets d’école, de fin de cycle, challenges) ou
 *   "solidaire" (projets à impact social, bénévoles ou personnels)
 * - featured : true pour mettre le projet en avant (grande carte en tête de sa catégorie)
 */

export type ProjectCategory = "academique" | "solidaire";

export const projectCategories: { id: ProjectCategory; title: string; intro: string }[] = [
  {
    id: "academique",
    title: "Projets académiques",
    intro: "Réalisés dans le cadre de ma formation à l’École Centrale Casablanca et à l’Institut 2iE.",
  },
  {
    id: "solidaire",
    title: "Projets solidaires et personnels",
    intro: "Menés en équipe ou en bénévolat, au service d’associations et de communautés.",
  },
];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: string;
  context?: string; // établissement ou cadre, ex. "Institut 2iE, Ouagadougou"
  year?: string; // période, ex. "Mars – juin 2026"
  role?: string;
  stack: string[];
  summary: string;
  image?: string;
  coverFit?: "cover" | "contain"; // "contain" pour un logo carré qui ne doit pas être rogné
  gallery?: string[];
  description: string;
  highlights: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "innofaso-nc-management",
    title: "Innofaso : gestion des non-conformités",
    category: "academique",
    tag: "Projet de fin de cycle",
    context: "Institut 2iE, Ouagadougou",
    year: "Mars – juin 2026",
    role: "Développeuse full-stack",
    stack: ["React", "Node.js", "MySQL", "Scrum"],
    summary:
      "Application web et mobile qui digitalise la gestion des non-conformités chez Innofaso, menée sur 10 sprints en Agile Scrum.",
    image: "/images/projects/innofaso.jpeg",
    gallery: [
      "/images/projects/innofaso1.jpeg",
      "/images/projects/innofaso2.jpeg",
      "/images/projects/innofaso3.jpeg",
    ],
    description:
      "Projet de fin de cycle réalisé pendant ma mobilité à l’Institut 2iE, pour Innofaso, entreprise agroalimentaire au Burkina Faso. La gestion des non-conformités (NC) se faisait jusqu’ici sur papier : l’application web et mobile permet désormais de les déclarer, de les suivre et d’en produire des rapports. Le projet a été mené sur 10 sprints selon la méthode Agile Scrum.",
    highlights: [
      "Conception et développement d’une application web et mobile full-stack (React, Node.js, MySQL)",
      "Système d’export automatisé PDF et Excel, déclenché par des tâches planifiées (cron)",
      "Documentation technique complète : WBS, matrice RACI, comptes rendus, documentation API",
      "Personas utilisateurs et grille d’évaluation des compétences",
    ],
    links: [{ label: "Voir l’application", url: "https://innofasonc.netlify.app/" }],
    featured: true,
  },
  {
    slug: "peaceguard-ai",
    title: "PeaceGuard AI",
    category: "academique",
    tag: "Projet académique",
    context: "Institut 2iE, Ouagadougou",
    year: "2026",
    stack: ["Flask", "API Groq", "React", "Vite", "WordPress"],
    summary:
      "Détection de discours haineux par IA pour la presse ouest-africaine, avec un plugin WordPress de modération.",
    image: "/images/projects/peaceguard.jpeg",
    coverFit: "contain",
    gallery: [
      "/images/projects/peaceguard1.jpg",
      "/images/projects/peaceguard2.jpg",
      "/images/projects/peaceguard3.jpg",
    ],
    description:
      "Système complet de détection de discours haineux par intelligence artificielle, pensé pour la presse ouest-africaine. L’application repère les commentaires sources de tensions et propose des alternatives. Elle comprend un site d’actualité (BurkinaInfo) en React et Vite, un back-end Flask qui expose l’API de détection via Groq, et un plugin WordPress qui modère automatiquement les commentaires.",
    highlights: [
      "Back-end Flask consommant l’API Groq pour analyser les textes en temps réel",
      "Analyse des commentaires sources de tensions et proposition de reformulations apaisées",
      "Front-end React et Vite pour le site d’actualité BurkinaInfo",
      "Plugin WordPress de modération automatique des commentaires",
      "Déploiement complet : Render pour l’API, Vercel pour le front-end",
    ],
    links: [{ label: "Voir le site", url: "https://peaceguard-ai.vercel.app/" }],
  },
  {
    slug: "challenge-innovation-biometrie-iot",
    title: "Prototype de sécurité biométrique et IoT",
    category: "academique",
    tag: "Challenge Innovation",
    context: "École Centrale Casablanca",
    stack: ["Biométrie", "IoT", "Prototypage"],
    summary:
      "Prototype de sécurité scolaire combinant biométrie et objets connectés pour détecter les tentatives de fraude.",
    // image: "/images/projects/challenge-innovation.jpg", // ajouter une photo du prototype
    image: "/images/projects/gate.jpeg",
    coverFit: "contain",
    gallery: [
      "/images/projects/gate.jpg",
      "/images/projects/gate1.jpg",
      "/images/projects/gate2.jpg",
    ],
    description:
      "Projet réalisé dans le cadre du Challenge Innovation de l’École Centrale Casablanca : la conception d’un prototype de sécurité basé sur la biométrie et l’Internet des objets, pour renforcer la sécurité dans les établissements scolaires et détecter les tentatives de fraude.",
    highlights: [
      "Conception d’un prototype de sécurité basé sur la biométrie et l’IoT",
      "Amélioration de la sécurité scolaire et détection des tentatives de fraude",
    ],
    links: [],
  },
  {
    slug: "djigui",
    title: "Djigui",
    category: "solidaire",
    tag: "Projet de give back",
    role: "Relation partenaires, tests et validation",
    stack: ["Travail en équipe", "Tests utilisateurs"],
    summary: "Plateforme qui met en relation donneurs et receveurs pour faciliter le don de sang.",
    image: "/images/projects/djigui.jpeg",
    coverFit: "contain",
    description:
      "Plateforme de don de sang qui permet aux donneurs et aux receveurs de se connecter et simplifie le processus de don. Projet réalisé en groupe dans le cadre d’une initiative de give back.",
    highlights: [
      "Communication avec les parties prenantes, notamment le Centre national de transfusion sanguine (CNTS)",
      "Tests et validation de l’application avant sa mise en ligne",
    ],
    links: [{ label: "Voir le site", url: "https://djigui.vercel.app/" }],
  },
  {
    slug: "go-forward",
    title: "Go Forward",
    category: "solidaire",
    tag: "Impact social",
    role: "Coordinatrice, co-initiatrice",
    stack: ["Coordination de projet", "Organisation d’événement"],
    summary:
      "Formation en saponification et transformation alimentaire pour des femmes déplacées à Fada N’Gourma.",
    image: "/images/projects/go.jpeg",
    gallery: [
      "/images/projects/go1.jpeg",
      "/images/projects/go2.jpeg",
      "/images/projects/go3.jpeg",
      "/images/projects/go4.jpeg",
      "/images/projects/go5.jpeg",
    ],
    description:
      "Projet porté avec deux autres initiatrices : une formation en saponification et en transformation alimentaire offerte à des femmes déplacées à Fada N’Gourma, suivie d’une kermesse pour valoriser leur travail et soutenir leur autonomie économique.",
    highlights: [
      "Coordination du projet, en tant que l’une des trois initiatrices",
      "Organisation de la formation en saponification et transformation alimentaire",
      "Organisation d’une kermesse de valorisation des productions",
    ],
    links: [],
  },
  {
    slug: "fondation-rama",
    title: "Fondation Rama",
    category: "solidaire",
    tag: "Site web, en cours",
    stack: ["Site vitrine"],
    summary: "Site web de la Fondation Rama, en cours de finalisation.",
    // image: "/images/projects/fondation-rama.jpg", // ajouter une capture d’écran ici
        image: "/images/projects/rama.png",
        coverFit: "contain",
    description:
      "Développement du site web de la Fondation Rama(fondation oeuvrant dans la lutte contre les fistules obstétricales), actuellement en cours de finalisation.",
    highlights: [],
    links: [{ label: "Voir le site", url: "https://rama-chi.vercel.app/" }],
  },
];
