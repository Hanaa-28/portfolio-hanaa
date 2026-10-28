import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";

export function StackList({ stack }: { stack: string[] }) {
  if (stack.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies et compétences">
      {stack.map((s) => (
        <li key={s} className="text-xs text-muted border border-line rounded-full px-2.5 py-0.5">
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className={`group block bg-surface rounded-2xl overflow-hidden border border-line hover:border-primary/50 transition-colors ${
        large ? "md:grid md:grid-cols-[1.35fr_1fr]" : ""
      }`}
    >
      <ProjectCover
        src={project.image}
        fit={project.coverFit}
        alt=""
        sizes={large ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
        className={large ? "aspect-[16/10] md:aspect-auto md:min-h-[22rem]" : "aspect-[16/10]"}
        priority={large}
      />
      <div className={large ? "p-7 md:p-9 flex flex-col justify-center" : "p-6"}>
        <p className="text-sm">
          <span className="font-medium text-brick">{project.tag}</span>
          {project.context && <span className="text-muted">, {project.context}</span>}
        </p>
        <h3
          className={`font-display font-semibold tracking-tight mt-1.5 group-hover:text-primary transition-colors ${
            large ? "text-2xl md:text-[1.9rem] leading-tight" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className={`text-muted mt-3 leading-relaxed ${large ? "" : "text-[0.95rem]"}`}>{project.summary}</p>
        <div className="mt-5">
          <StackList stack={project.stack} />
        </div>
        <span className="sr-only">Voir le détail du projet {project.title}</span>
      </div>
    </Link>
  );
}
