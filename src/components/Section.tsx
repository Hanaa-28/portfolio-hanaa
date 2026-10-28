import type { ReactNode } from "react";

/** Section de page avec titre aligné à gauche et contenu à droite sur grand écran. */
export default function Section({
  id,
  title,
  intro,
  children,
  stacked = false,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  stacked?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titre`} className="scroll-mt-20 border-t border-line">
      <div
        className={`max-w-6xl mx-auto px-6 py-20 md:py-24 grid gap-10 ${
          stacked ? "" : "lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16"
        }`}
      >
        <div>
          <h2 id={`${id}-titre`} className="font-display text-3xl md:text-[2.4rem] font-semibold tracking-tight leading-[1.05]">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted max-w-md leading-relaxed">{intro}</p>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
