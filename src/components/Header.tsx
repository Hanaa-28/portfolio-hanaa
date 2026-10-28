"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/#apropos", label: "À propos" },
  { href: "/#experiences", label: "Expériences" },
  { href: "/#projets", label: "Projets" },
  { href: "/#formation", label: "Formation" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-[border-color] border-b ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2.5">
                    <span aria-hidden className="grid place-items-center w-8 h-8 rounded-md bg-primary text-paper text-sm font-semibold tracking-normal">
            {profile.firstNames.split(" ")[1]?.[0] ?? profile.firstNames[0]}
            {profile.lastName[0]}
          </span>
          {profile.shortName}
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7 text-[0.94rem] text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </Link>
          ))}
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="ml-1 rounded-full bg-ink text-paper px-4 py-1.5 font-medium hover:bg-primary transition-colors"
            >
              Télécharger le CV
            </a>
          )}
        </nav>

        <button
          className="md:hidden -mr-2 p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="md:hidden flex flex-col px-6 pb-5 pt-1 gap-1 text-base">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-ink">
              {link.label}
            </Link>
          ))}
          {profile.cvUrl && (
            <a href={profile.cvUrl} download className="py-2 font-medium text-primary">
              Télécharger le CV
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
