/**
 * Stages et expériences professionnelles uniquement.
 * Les projets (académiques, solidaires, personnels) vont dans projects.ts.
 * Ordre d’affichage = ordre du tableau : mettre le plus récent en premier.
 */

export interface Experience {
  role: string;
  organization: string;
  sector: string; // ex. "Banque", "Finance", "Intelligence artificielle"
  location: string;
  kind: string; // ex. "Stage", "Stage en télétravail", "CDD"
  start: string;
  end: string; // "Aujourd’hui" pour un poste en cours
  current?: boolean;
  missions: string[];
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Stagiaire community manager",
    organization: "RodiumAi",
    sector: "Intelligence artificielle et technologies",
    location: "Ghana(Télétravail)",
    kind: "Stage",
    start: "2026",
    end: "Aujourd’hui",
    current: true,
    missions: [
      "Création et gestion de contenus pour X, LinkedIn et les canaux communautaires autour de l’IA et des technologies",
      "Soutien aux campagnes de communication, événements, bootcamps et partenariats à travers l’Afrique",
    ],
    skills: ["Création de contenu", "Réseaux sociaux", "Canva", "Événementiel"],
  },
  {
    role: "Stagiaire IT, Direction des systèmes d’information",
    organization: "Coris Bank International",
    sector: "Banque",
    location: "Ouagadougou, Burkina Faso",
    kind: "Stage",
    start: "Juil. 2026",
    end: "Sept. 2026",
    missions: [
      "Assistance à l’unité Solutions et Applications",
      "Maintenance logicielle et matérielle",
      "Utilisation de SQL et Python pour des tâches applicatives et de traitement de données",
    ],
    skills: ["SQL", "Python", "Support applicatif"],
  },
  {
    role: "Stagiaire en finance",
    organization: "Fidelis Finance",
    sector: "Finance",
    location: "Abidjan, Côte d’Ivoire",
    kind: "Stage",
    start: "Juil. 2025",
    end: "Sept. 2025",
    missions: [
      "Contribution à l’analyse financière et à la planification stratégique",
      "Participation aux processus de comptabilité et de reporting financier",
    ],
    skills: ["Analyse financière", "Reporting", "Microsoft Office"],
  },
];
