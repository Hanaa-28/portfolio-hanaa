import Link from "next/link";
import { profile, fullName } from "@/data/profile";

export default function Footer() {
  const socials = profile.socials.filter((s) => s.url);

  return (
    <footer>
      <div aria-hidden className="h-1 bg-primary" />
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {fullName}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="/#projets" className="hover:text-ink">
              Projets
            </Link>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              E-mail
            </a>
          </li>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
