/**
 * Formation (diplômes, écoles, mobilités) et vie associative.
 * Mettre le plus récent en premier.
 */

export interface Education {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  details?: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    degree: "African Bachelor of Engineering",
    school: "École Centrale Casablanca",
    location: "Casablanca, Maroc",
    start: "2023",
    end: "Aujourd’hui",
    details: "Formation d’ingénieur, actuellement en 4e année.",
  },
  {
    degree: "Mobilité académique, filière Informatique, intelligence artificielle et applications",
    school: "Institut 2iE",
    location: "Ouagadougou, Burkina Faso",
    start: "Janv. 2026",
    end: "Juin 2026",
    details: "Semestre de mobilité de six mois.",
   
  },
  {
    degree: "Licence en sciences et technologie",
    school: "Établissement à compléter", // À COMPLÉTER
    location: "Burkina Faso", // À VÉRIFIER
    start: "2020",
    end: "2023",
  },
  {
    degree: "Baccalauréat, série Mathématiques et Physique-Chimie",
    school: "Lycée scientifique de Bobo-Dioulasso",
    location: "Bobo-Dioulasso, Burkina Faso",
    start: "",
    end: "2020", // À VÉRIFIER : le CV indique « 2020 – 2023 »
  },
];

/** Clubs, associations et engagements bénévoles. */
export interface Involvement {
  role: string;
  organization: string;
  location: string;
  description: string;
  link?: string; // lien interne (ex. "/projets/go-forward") ou externe
}

export const involvements: Involvement[] = [
  {
    role: "Membre",
    organization: "Club Central Tech",
    location: "École Centrale Casablanca",
    description: "Développement web et mise en pratique des technologies numériques au sein du club tech de l’école.",
  },
  {
    role: "Coordinatrice et co-initiatrice",
    organization: "Go Forward",
    location: "Fada N’Gourma, Burkina Faso",
    description: "Formation en saponification et transformation alimentaire pour des femmes déplacées.",
    link: "/projets/go-forward",
  },
];
