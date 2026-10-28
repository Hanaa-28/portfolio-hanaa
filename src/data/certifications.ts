/**
 * Certifications, prix et distinctions.
 * La section n’apparaît sur le site que si le tableau contient au moins un élément.
 */

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  // Exemple :
  // { title: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", date: "2025", url: "https://…" },

{ title: "Software Engineering: Modeling Software Systems using UML", issuer: "The Hong Kong University of Science and Technology", date: "2024", url: "https://www.coursera.org/account/accomplishments/certificate/W2FZDMY2TQ4U" },
{ title: "Programming for Everybody (Getting Started with Python)", issuer: " University of Michigan", date: "2024", url: "https://www.coursera.org/account/accomplishments/certificate/473O36FTC14D" },
{ title: "Agile Project Management", issuer: "Google", date: "2025", url: "https://www.coursera.org/account/accomplishments/certificate/9DG7AZ8HP460" },
{ title: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "2026", url: "https://www.coursera.org/account/accomplishments/certificate/6Z8G29IJ80C6" },
];
