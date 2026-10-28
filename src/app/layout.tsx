import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile, fullName } from "@/data/profile";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description = `${profile.role} à l’${profile.school}. ${profile.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${fullName} | Portfolio`,
    template: `%s | ${profile.shortName}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${fullName} | Portfolio`,
    description,
    images: [{ url: profile.photo }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bricolage.variable} ${plex.variable} antialiased bg-paper text-ink`}>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-surface focus:px-4 focus:py-2 focus:rounded-md"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
