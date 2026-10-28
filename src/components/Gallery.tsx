"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (total === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label={`Images du projet ${alt}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      className="rounded-2xl"
    >
      <div className="relative aspect-[16/9] bg-surface border border-line rounded-2xl overflow-hidden">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${alt}, image ${index + 1} sur ${total}`}
          fill
          sizes="(min-width: 1024px) 64rem, 100vw"
          priority={index === 0}
          className="object-contain"
        />

        {total > 1 && (
          <>
            <GalleryButton side="left" label="Image précédente" onClick={prev} />
            <GalleryButton side="right" label="Image suivante" onClick={next} />
            <span className="absolute bottom-3 right-3 text-xs tabular-nums bg-ink/75 text-paper px-2.5 py-1 rounded-full">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              aria-label={`Afficher l’image ${i + 1}`}
              aria-current={i === index}
              className={`relative shrink-0 w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition ${
                i === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GalleryButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`absolute ${side === "left" ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/90 hover:bg-surface border border-line shadow-sm flex items-center justify-center text-ink`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={side === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} />
      </svg>
    </button>
  );
}
