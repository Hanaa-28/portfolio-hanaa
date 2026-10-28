import Image from "next/image";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import Link from "next/link";
import { education, involvements } from "@/data/education";
import { projects, projectCategories } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { certifications } from "@/data/certifications";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import ProjectCard, { StackList } from "@/components/ProjectCard";

function period(start: string, end: string) {
  if (!start) return end;
  if (!end || start === end) return start;
  return `${start} – ${end}`;
}

export default function Home() {
  const socials = profile.socials.filter((s) => s.url);

  return (
    <>
      {/* En-tête de page */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-[minmax(0,1fr)_auto] gap-12 md:gap-16 items-center">
        <div>
          {profile.availability && (
            <p className="rise inline-flex items-center gap-2 text-sm text-muted">
              <span aria-hidden className="w-2 h-2 rounded-full bg-gold" />
              {profile.availability}
            </p>
          )}
          <h1
            className="rise font-display font-semibold tracking-[-0.035em] leading-[0.95] mt-6 text-[clamp(2.6rem,7vw,5.4rem)]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block text-muted font-medium text-[0.5em] tracking-[-0.02em] leading-tight mb-2">
              {profile.firstNames}
            </span>
            {profile.lastName}
          </h1>
          <p className="rise mt-6 text-lg md:text-xl font-medium" style={{ animationDelay: "160ms" }}>
            {profile.role}, {profile.school}
          </p>
          <p className="rise mt-4 text-muted text-lg leading-relaxed max-w-[38rem]" style={{ animationDelay: "220ms" }}>
            {profile.intro}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "280ms" }}>
            <a
              href="#projets"
              className="rounded-full bg-ink text-paper px-6 py-3 font-medium hover:bg-primary transition-colors"
            >
              Voir mes projets
            </a>
            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                download
                className="rounded-full border border-ink/25 px-6 py-3 font-medium hover:border-ink transition-colors"
              >
                Télécharger mon CV
              </a>
            ) : (
              <a
                href="#contact"
                className="rounded-full border border-ink/25 px-6 py-3 font-medium hover:border-ink transition-colors"
              >
                Me contacter
              </a>
            )}
          </div>
        </div>

                <div className="relative justify-self-center md:justify-self-end mr-5 mb-5">
          <div aria-hidden className="frame-in absolute top-5 left-5 -right-5 -bottom-5 rounded-lg border-2 border-primary" />
          <div className="relative w-[13.5rem] sm:w-[16rem] md:w-[18rem] aspect-[3/4] rounded-lg overflow-hidden bg-line shadow-[0_24px_60px_-28px_rgb(0_0_0/0.45)]">
            <Image
              src={profile.photo}
              alt={`Portrait de ${profile.shortName}`}
              fill
              priority
              sizes="(min-width: 768px) 18rem, 16rem"
              className="object-cover"
            />
          </div>
          
        </div>
      </section>

      {/* À propos */}
      <Section id="apropos" title="À propos">
        <div className="grid xl:grid-cols-[minmax(0,1fr)_17rem] gap-10 xl:gap-14">
          <div className="space-y-5 text-lg leading-relaxed max-w-[42rem]">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="space-y-5 xl:border-l xl:border-line xl:pl-8">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Expériences professionnelles : stages uniquement */}
      <Section
        id="experiences"
        title="Expériences"
        intro="Mes stages en entreprise, dans la tech, la banque et la finance."
      >
        <Timeline
          items={experiences.map((e) => ({
            key: e.organization + e.role,
            period: period(e.start, e.end),
            content: (
              <article>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{e.organization}</h3>
                  {e.current && (
                    <span className="text-xs font-medium rounded-full bg-gold/20 text-ink px-2.5 py-0.5">En cours</span>
                  )}
                </div>
                <p className="mt-1 font-medium text-primary">{e.role}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.kind}, {e.sector}, {e.location}
                </p>
                <ul className="mt-4 space-y-1.5 max-w-[40rem]">
                  {e.missions.map((m) => (
                    <li key={m} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-[0.7rem] w-3 h-px bg-muted shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
                {e.skills && (
                  <div className="mt-4">
                    <StackList stack={e.skills} />
                  </div>
                )}
              </article>
            ),
          }))}
        />
      </Section>

      {/* Projets, regroupés par catégorie */}
      <Section
        id="projets"
        title="Projets"
        intro="Projets d’école et projets solidaires. Chaque fiche détaille le contexte, mon rôle et les résultats."
        stacked
      >
        <div className="space-y-20">
          {projectCategories.map((cat) => {
            const list = projects.filter((p) => p.category === cat.id);
            if (list.length === 0) return null;
            const featured = list.filter((p) => p.featured);
            const others = list.filter((p) => !p.featured);
            return (
              <div key={cat.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 mb-7 pb-4 border-b border-line">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{cat.title}</h3>
                  <p className="text-muted max-w-xl">{cat.intro}</p>
                </div>
                <div className="space-y-6">
                  {featured.map((p) => (
                    <ProjectCard key={p.slug} project={p} large />
                  ))}
                  {others.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {others.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Formation et vie associative */}
      <Section id="formation" title="Formation" intro="Mes diplômes, mobilités et engagements associatifs.">
        <Timeline
          items={education.map((ed) => ({
            key: ed.school + ed.degree,
            period: period(ed.start, ed.end),
            content: (
              <article>
                <h3 className="font-display text-xl font-semibold tracking-tight">{ed.degree}</h3>
                <p className="mt-1 text-primary font-medium">
                  {ed.school}
                  <span className="text-muted font-normal">, {ed.location}</span>
                </p>
                {ed.details && <p className="mt-3 text-muted leading-relaxed max-w-[40rem]">{ed.details}</p>}
                {ed.highlights && ed.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 max-w-[40rem]">
                    {ed.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-[0.7rem] w-3 h-px bg-muted shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ),
          }))}
        />

        {involvements.length > 0 && (
          <div className="mt-20">
            <h3 className="font-display text-xl font-semibold mb-6">Vie associative</h3>
            <ul className="grid sm:grid-cols-2 gap-6">
              {involvements.map((inv) => (
                <li key={inv.organization} className="border-t-2 border-primary pt-4">
                  <p className="font-display text-lg font-semibold">{inv.organization}</p>
                  <p className="text-sm text-muted mt-0.5">
                    {inv.role}, {inv.location}
                  </p>
                  <p className="mt-3 leading-relaxed">{inv.description}</p>
                  {inv.link && (
                    <Link
                      href={inv.link}
                      className="inline-block mt-3 text-sm font-medium text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                    >
                      Voir le projet
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Compétences */}
      <Section id="competences" title="Compétences">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-lg font-semibold pb-3 border-b border-line">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-muted">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-xl font-semibold mb-6">Certifications et distinctions</h3>
            <ul className="divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="py-4 flex flex-wrap justify-between gap-x-6 gap-y-1">
                  <span className="font-medium">
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-4 hover:underline">
                        {c.title}
                      </a>
                    ) : (
                      c.title
                    )}
                    <span className="text-muted font-normal">, {c.issuer}</span>
                  </span>
                  <span className="text-sm text-muted tabular-nums">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-titre" className="scroll-mt-20 bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 id="contact-titre" className="font-display font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2.2rem,5.5vw,4.2rem)] max-w-[16ch]">
            Un stage,ou un projet à me proposer&nbsp;?
          </h2>
          <p className="mt-6 text-paper/75 text-lg max-w-[36rem] leading-relaxed">
            Je reste totalement disponible.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block mt-10 font-display text-2xl md:text-3xl font-medium underline underline-offset-[0.25em] decoration-gold decoration-2 hover:text-gold transition-colors break-all"
          >
            {profile.email}
          </a>
          {(socials.length > 0 || profile.phone || profile.cvUrl) && (
            <ul className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-paper/30 px-5 py-2.5 hover:border-paper transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="inline-block rounded-full border border-paper/30 px-5 py-2.5 hover:border-paper transition-colors"
                  >
                    {profile.phone}
                  </a>
                </li>
              )}
              {profile.cvUrl && (
                <li>
                  <a
                    href={profile.cvUrl}
                    download
                    className="inline-block rounded-full bg-gold text-[#12231e] px-5 py-2.5 font-medium hover:brightness-110 transition"
                  >
                    Télécharger mon CV
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
