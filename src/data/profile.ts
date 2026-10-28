/**
 * Informations personnelles affichées sur tout le site.
 * C'est le premier fichier à modifier : nom, e-mail, réseaux, CV, textes de présentation.
 * Un lien laissé vide ("") est automatiquement masqué sur le site.
 */

export interface SocialLink {
  label: string;
  url: string;
}

export interface Fact {
  label: string;
  value: string;
}

export const profile = {
  firstNames: "Ardjata Hanaa Estelle",
  lastName: "Traoré",
  shortName: "Hanaa Traoré",

  role: "Étudiante en 4e année de l’African Bachelor of Engineering",
  school: "École Centrale Casablanca",

  // Phrase d'accroche sous le nom (1 à 2 lignes maximum).
  intro:
    "Passionnée par la data, l’intelligence artificielle et la transformation digitale, je conçois des applications qui répondent à des besoins concrets, de la gestion industrielle aux projets à impact social.",

  // Petite ligne de statut au-dessus du nom. Laisser "" pour la masquer.
  availability: "Ouverte aux opportunités de stage en data et transformation digitale",

  // Paragraphes de la section « À propos ».
  about: [
    "Étudiante en 4e année de l’African Bachelor of Engineering à l’École Centrale Casablanca, j’ai effectué en 2026 une mobilité de six mois à l’Institut 2iE de Ouagadougou, dans la filière Informatique, intelligence artificielle et applications. J’y ai mené mon projet de fin de cycle : la digitalisation de la gestion des non-conformités pour l’entreprise Innofaso.",
    "Mes stages m’ont fait passer par la finance chez Fidelis Finance, les systèmes d’information chez Coris Bank International et la communication tech chez RodiumAi. Rigoureuse, analytique et adaptable, je cherche à contribuer à des projets à forte valeur ajoutée dans des environnements dynamiques.",
  ],

  // Faits clés affichés à côté du texte « À propos ».
  facts: [
    { label: "Basée au", value: "Maroc" },
    { label: "Langues", value: "Français (courant), anglais (intermédiaire)" },
    { label: "Atouts", value: "Esprit d’équipe, autonomie, adaptabilité" },
    { label: "Centres d’intérêt", value: "Lecture, handball, tennis, cuisine" },
  ] as Fact[],

  email: "hanaatraore898@gmail.com",
  phone: "+212 6 57 21 49 64", // format international conseillé pour l’étranger, ex. "+212 6 57 21 49 64" ; "" pour masquer

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hanaa-traore/" }, // À COMPLÉTER : ex. "https://www.linkedin.com/in/ton-profil"
    { label: "GitHub", url: "https://github.com/Hanaa-28/" }, // ex. "https://github.com/ton-pseudo"
  ] as SocialLink[],

  // Chemin du CV placé dans public/cv/. Laisser "" tant que le fichier n’existe pas.
  cvUrl: "/cv/CV.pdf", // ex. "/cv/CV-Hanaa-Traore.pdf"

  photo: "/images/profil.jpg",

  // Adresse publique du site une fois déployé (sert au référencement et au partage).
  siteUrl: "https://portfolio-hanaa.vercel.app",
};

export const fullName = `${profile.firstNames} ${profile.lastName}`;
