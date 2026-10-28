import Image from "next/image";

/** Image de couverture d’un projet, ou motif tissé si aucune image n’est fournie. */
export default function ProjectCover({
  src,
  fit = "cover",
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src?: string;
  fit?: "cover" | "contain";
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${fit === "contain" ? "bg-white" : "bg-line/50"} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${
            fit === "contain" ? "object-contain p-6 md:p-8" : "object-cover"
          }`}
        />
      ) : (
        <div aria-hidden className="cover-placeholder absolute inset-0" />      )}
    </div>
  );
}
