import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Gallery from "@/components/Gallery";
import ProjectCover from "@/components/ProjectCover";
import ProjectCard, { StackList } from "@/components/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: project.image ? { images: [{ url: project.image }] } : undefined,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const images = [project.image, ...(project.gallery ?? [])].filter((src): src is string => Boolean(src));

  return (
    <>
      <article className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        <Link href="/#projets" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M10 3L5 8l5 5" />
          </svg>
          Tous les projets
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="text-sm">
            <span className="font-medium text-brick">{project.tag}</span>
            {project.context && <span className="text-muted">, {project.context}</span>}
          </p>
          <h1 className="font-display font-semibold tracking-[-0.03em] leading-[1.02] mt-2 text-[clamp(2.2rem,5vw,3.6rem)]">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">{project.summary}</p>
        </header>

        <div className="mt-10">
          {images.length > 0 ? (
            <Gallery images={images} alt={project.title} />
          ) : (
            <ProjectCover alt="" sizes="100vw" className="aspect-[16/6] rounded-2xl" />
          )}
        </div>

        <div className="mt-14 grid md:grid-cols-[minmax(0,1fr)_16rem] gap-12">
          <div className="max-w-[42rem]">
            <h2 className="font-display text-2xl font-semibold">Le projet</h2>
            <p className="mt-4 leading-relaxed text-lg">{project.description}</p>

            {project.highlights.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-semibold mt-12">Ce que j’ai fait</h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-[0.55rem] w-2 h-2 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="md:border-l md:border-line md:pl-8 space-y-7 text-[0.95rem]">
            {project.role && (
              <div>
                <h2 className="text-sm text-muted">Mon rôle</h2>
                <p className="mt-1 font-medium">{project.role}</p>
              </div>
            )}
            {project.year && (
              <div>
                <h2 className="text-sm text-muted">Période</h2>
                <p className="mt-1 font-medium">{project.year}</p>
              </div>
            )}
            {project.stack.length > 0 && (
              <div>
                <h2 className="text-sm text-muted mb-2">Technologies et compétences</h2>
                <StackList stack={project.stack} />
              </div>
            )}
            {project.links.length > 0 && (
              <div className="flex flex-col gap-2.5">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-ink text-paper px-5 py-2.5 font-medium hover:bg-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </article>

      {projects.length > 1 && (
        <section aria-labelledby="suivant-titre" className="border-t border-line">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 id="suivant-titre" className="font-display text-2xl font-semibold mb-6">
              Projet suivant
            </h2>
            <ProjectCard project={nextProject} large />
          </div>
        </section>
      )}
    </>
  );
}
