import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-28">
      <div aria-hidden className="h-1 w-16 rounded-full bg-primary" />      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-8">Page introuvable</h1>
      <p className="mt-4 text-lg text-muted leading-relaxed">
        L’adresse est peut-être erronée, ou le projet a été renommé.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 rounded-full bg-ink text-paper px-6 py-3 font-medium hover:bg-primary transition-colors"
      >
        Revenir à l’accueil
      </Link>
    </section>
  );
}
