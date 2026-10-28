/**
 * Compétences regroupées par domaine. Ajouter, retirer ou renommer librement.
 */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programmation",
    items: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    title: "Data et IA",
    items: ["Power BI", "Hadoop", "Traitement de données", "API Groq (LLM)"],
  },
  {
    title: "Développement web",
    items: ["React", "Flask", "Node.js", "MySQL", "WordPress"],
  },
  {
    title: "Outils",
    items: ["Microsoft Office", "Canva", "Git", "Vercel "],
  },
  {
    title: "Méthodes",
    items: ["Scrum", "WBS et matrice RACI", "Documentation technique", "Reporting"],
  },
  {
    title: "Savoir-être",
    items: ["Esprit d’équipe", "Autonomie", "Adaptabilité", "Relation avec les parties prenantes"],
  },
];
