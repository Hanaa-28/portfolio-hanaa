import type { ReactNode } from "react";

export interface TimelineItem {
  key: string;
  period: string;
  content: ReactNode;
}

/** Liste chronologique : période à gauche, fil vertical, contenu à droite. */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol>
      {items.map((item, i) => (
        <li key={item.key} className="grid sm:grid-cols-[8.5rem_1fr] sm:gap-x-6">
          <p className="hidden sm:block text-sm text-muted tabular-nums pt-[0.15rem]">{item.period}</p>
          <div className={`relative pl-8 ${i < items.length - 1 ? "pb-12" : ""}`}>
            <span
              aria-hidden
              className={`absolute left-0 top-[0.4rem] w-[11px] h-[11px] rounded-full border-2 ${
                i === 0 ? "bg-gold border-gold" : "bg-paper border-primary"
              }`}
            />
            {i < items.length - 1 && (
              <span aria-hidden className="absolute left-[5px] top-[1.4rem] bottom-0 w-px bg-line" />
            )}
            <p className="sm:hidden text-sm text-muted tabular-nums mb-1">{item.period}</p>
            {item.content}
          </div>
        </li>
      ))}
    </ol>
  );
}
