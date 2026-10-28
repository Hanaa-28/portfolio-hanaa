# Guide de configuration et de personnalisation

Ce guide explique comment lancer ton portfolio sur ton ordinateur, remplacer les informations à compléter, ajouter tes projets et mettre le site en ligne. Aucune modification des composants n’est nécessaire : tout le contenu se trouve dans le dossier `src/data/`.

---

## 1. Ce qui a changé dans le projet

Le projet reste en **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4**, comme ta version d’origine.

**Organisation de la page d’accueil** (dans l’ordre) : À propos, Expériences, Projets, Formation, Compétences, Contact.

**Nouvelles rubriques**
- **Expériences** : uniquement tes stages (RodiumAi, Coris Bank International, Fidelis Finance), avec une pastille « En cours » pour le stage actuel.
- **Projets**, séparés en deux groupes : *Projets académiques* (Innofaso, PeaceGuard AI, Challenge Innovation) et *Projets solidaires et personnels* (Djigui, Go Forward, Fondation Rama). Innofaso est un projet de fin de cycle, il n’apparaît donc plus parmi les stages.
- **Formation** : École Centrale Casablanca, mobilité à l’Institut 2iE, licence et baccalauréat, suivis d’un bloc *Vie associative* (Club Central Tech, Go Forward).
- **Compétences**, regroupées par domaine.
- **Certifications et distinctions**, qui n’apparaît que si tu en ajoutes.
- **Contact** refait : e-mail cliquable, LinkedIn, GitHub, téléphone et CV (chaque élément s’affiche seulement s’il est renseigné).
- **Page 404** personnalisée, **« Projet suivant »** en bas de chaque fiche projet.

**Design**
- Palette vert profond, or et rouge brique (les couleurs du Burkina Faso), avec une bande tissée inspirée du Faso Dan Fani à côté de ta photo.
- Polices *Bricolage Grotesque* (titres) et *IBM Plex Sans* (texte).
- Mode sombre automatique selon le réglage de l’appareil.
- Site responsive (mobile, tablette, ordinateur) et accessible au clavier.

**Technique**
- Toutes les données séparées du code dans `src/data/` (un fichier par rubrique).
- Images optimisées automatiquement avec `next/image` (tes photos de 600 Ko se chargent beaucoup plus vite).
- Référencement : titre et description par page, aperçu lors du partage sur LinkedIn ou WhatsApp, `sitemap.xml` et `robots.txt` générés.

**Corrections**
- L’image `go5.jpegs` (faute de frappe) ne s’affichait pas : corrigé.
- L’image de la Fondation Rama n’existait pas : une couverture tissée s’affiche en attendant une capture.
- Les doubles extensions (`profil.jpg.jpeg`, `innofaso.jpg.jpeg`…) ont été renommées en `.jpeg`.
- Les miniatures de la galerie étaient écrasées : corrigé.
- Les logos carrés (PeaceGuard, Djigui) ne sont plus rognés.
- Les fichiers d’exemple de Next.js (`next.svg`, `vercel.svg`…) ont été supprimés.

---

## 2. Installation sur ton ordinateur

### Prérequis
- **Node.js 20.9 ou plus récent** : vérifie avec `node -v` dans un terminal. Sinon, installe la version LTS depuis [nodejs.org](https://nodejs.org).
- Un éditeur de code, par exemple **VS Code**.

### Étapes
1. Décompresse l’archive et ouvre le dossier `portfolio-hanaa` dans VS Code.
2. Ouvre un terminal dans ce dossier (dans VS Code : menu *Terminal* puis *Nouveau terminal*).
3. Installe les dépendances (à faire une seule fois) :
   ```bash
   npm install
   ```
4. Lance le site en mode développement :
   ```bash
   npm run dev
   ```
5. Ouvre [http://localhost:3000](http://localhost:3000). Chaque fois que tu enregistres un fichier, la page se met à jour toute seule.

Pour arrêter le serveur : `Ctrl + C` dans le terminal.

> L’archive ne contient pas le dossier `node_modules` (plus de 500 Mo) : c’est normal, `npm install` le recrée.

---

## 3. Où se trouve quoi

```
portfolio-hanaa/
├── public/
│   ├── images/
│   │   ├── profil.jpeg          ← ta photo
│   │   └── projects/            ← images des projets
│   └── cv/                      ← dépose ton CV ici (PDF)
├── src/
│   ├── data/                    ← TOUT LE CONTENU DU SITE
│   │   ├── profile.ts           ← nom, e-mail, réseaux, CV, « À propos »
│   │   ├── experience.ts        ← stages uniquement
│   │   ├── education.ts         ← diplômes, écoles et vie associative
│   │   ├── skills.ts            ← compétences
│   │   ├── certifications.ts    ← certifications (facultatif)
│   │   └── projects.ts          ← projets
│   ├── components/              ← blocs d’interface (en-tête, cartes, galerie…)
│   └── app/
│       ├── page.tsx             ← page d’accueil
│       ├── projets/[slug]/      ← page détaillée d’un projet
│       ├── layout.tsx           ← polices et référencement
│       └── globals.css          ← couleurs du site
├── GUIDE.md                     ← ce guide
└── package.json
```

---

## 4. Personnaliser le contenu

> **Règle importante pour les textes** : ils sont écrits entre guillemets doubles `"…"`. Tu peux y mettre des apostrophes librement. N’utilise jamais de guillemet double `"` à l’intérieur d’un texte : écris plutôt « ».

### 4.1 Ton profil — `src/data/profile.ts` (à faire en premier)

| Champ | À quoi il sert | Exemple |
|---|---|---|
| `firstNames`, `lastName` | Nom affiché en grand sur l’accueil | `"Traoré"` |
| `shortName` | Nom court (menu, onglet du navigateur) | `"Hanaa Traoré"` |
| `role`, `school` | Ligne sous ton nom | `"Étudiante ingénieure logicielle"` |
| `intro` | Phrase d’accroche (1 à 2 lignes) | |
| `availability` | Statut avec la pastille dorée. `""` pour le masquer | `"Disponible pour un stage dès juillet 2026"` |
| `about` | Paragraphes de « À propos » (un texte par paragraphe) | |
| `facts` | Infos clés à droite de « À propos » | `{ label: "Langues", value: "Français, Anglais (B2)" }` |
| `email` | **À remplacer** : apparaît dans Contact et dans le pied de page | `"hanaa.traore@gmail.com"` |
| `phone` | Facultatif, `""` pour le masquer | `"+226 70 00 00 00"` |
| `socials` | Liens LinkedIn et GitHub. Un lien vide est masqué | `{ label: "LinkedIn", url: "https://www.linkedin.com/in/…" }` |
| `cvUrl` | Chemin de ton CV (voir 4.7) | `"/cv/CV-Hanaa-Traore.pdf"` |
| `photo` | Chemin de ta photo | `"/images/profil.jpeg"` |
| `siteUrl` | Adresse du site une fois en ligne (voir étape 6) | `"https://hanaa-traore.vercel.app"` |

Tu peux ajouter d’autres réseaux dans `socials` (Behance, Malt, X…) : ils s’affichent automatiquement.

### 4.2 Stages — `src/data/experience.ts`

Ce fichier ne contient **que des stages et des emplois**. Un projet d’école, même réalisé pour une entreprise (comme Innofaso), va dans `projects.ts`.

Chaque stage est un bloc `{ … }`. Mets le plus récent **en premier**. Les champs :

- `organization` : entreprise, affichée en titre
- `role` : ton poste (« Stagiaire IT, Direction des systèmes d’information »)
- `sector` : secteur d’activité (« Banque », « Finance »…)
- `location` : ville et pays, ou « Télétravail »
- `kind` : type de contrat (« Stage », « Alternance », « CDD »…)
- `start`, `end` : dates libres (« Juil. 2026 », « Aujourd’hui »)
- `current: true` : affiche la pastille « En cours » ; retire la ligne quand le stage est terminé
- `missions` : tes réalisations, une ligne chacune, en commençant par un nom ou un verbe d’action
- `skills` (facultatif) : compétences ou outils utilisés

**Pour ajouter un stage** : copie un bloc existant, colle-le en tête du tableau et modifie-le. N’oublie pas la virgule entre deux blocs `},` `{`.

**Quand ton stage chez RodiumAi se termine** : remplace `end: "Aujourd’hui"` par la date de fin et supprime la ligne `current: true,`. Si tu connais le mois de début, précise aussi `start` (par exemple `"Oct. 2026"`).

### 4.3 Formation et vie associative — `src/data/education.ts`

**Formation** (tableau `education`) : `degree` (diplôme), `school`, `location`, `start`, `end`, `details` (spécialité, année en cours) et `highlights` (projets, cours, mentions). Mets le plus récent en premier.

À compléter ou vérifier :
- l’établissement de ta **licence en sciences et technologie** (cherche `À COMPLÉTER`) ;
- l’année du **baccalauréat** : ton CV indique « 2020 – 2023 », j’ai mis 2020 (année d’obtention). Corrige si besoin, et pense aussi à corriger le CV.

**Vie associative** (tableau `involvements`, plus bas dans le fichier) : `role`, `organization`, `location`, `description` et `link` (facultatif, par exemple `"/projets/go-forward"` pour renvoyer vers la fiche projet). Si tu as un rôle précis au Club Central Tech (responsable, trésorière…), remplace `"Membre"`.

### 4.4 Compétences — `src/data/skills.ts`

Chaque groupe a un `title` et une liste `items`. Ajoute, retire ou renomme librement. Conseil : n’indique que des outils dont tu peux parler en entretien.

### 4.5 Certifications — `src/data/certifications.ts`

Le tableau est vide, donc la rubrique est cachée. Ajoute une ligne pour la faire apparaître :
```ts
{ title: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", date: "2025", url: "https://…" },
```

### 4.6 Projets — `src/data/projects.ts`

**Ajouter un projet**
1. Dépose les images dans `public/images/projects/` (par exemple `monprojet.jpeg`, `monprojet1.jpeg`…).
2. Copie un bloc projet existant et modifie-le :
   - `slug` : identifiant unique dans l’adresse, en minuscules avec des tirets et sans accents (`gestion-stock`). La page sera `/projets/gestion-stock`.
   - `category` : `"academique"` (projet d’école, projet de fin de cycle, challenge) ou `"solidaire"` (projet bénévole, associatif ou personnel). Le projet est rangé automatiquement dans le bon groupe.
   - `title`, `tag` (type de projet, affiché en rouge), `summary` (une phrase pour la carte), `description` (texte complet).
   - `context` (facultatif) : établissement ou cadre, affiché à côté du type (« Institut 2iE, Ouagadougou »).
   - `role` (facultatif) : ton rôle, affiché sur la fiche.
   - `year` (facultatif) : période du projet (« Mars – juin 2026 »).
   - `stack` : liste de technologies, par exemple `["React", "Node.js"]`.
   - `image` : couverture, chemin commençant par `/images/projects/`.
   - `coverFit: "contain"` si la couverture est un logo, pour qu’il ne soit pas rogné.
   - `gallery` : images supplémentaires de la galerie.
   - `highlights` : ce que tu as fait, une ligne par réalisation.
   - `links` : `[{ label: "Voir le site", url: "https://…" }]`, ou `[]` si aucun lien.
   - `featured: true` : met le projet en grand en tête de son groupe.
3. L’ordre du tableau est l’ordre d’affichage.

Les titres et les phrases d’introduction des deux groupes se modifient dans `projectCategories`, en haut du fichier.

**Challenge Innovation** : ajoute une photo du prototype dans `public/images/projects/challenge-innovation.jpg` puis retire les `//` devant la ligne `image` du projet. Précise aussi les technologies dans `stack` (capteur, carte Arduino ou Raspberry Pi, langage…).

**Fondation Rama** : quand le site sera terminé, fais une capture d’écran, enregistre-la sous `public/images/projects/fondation-rama.jpg`, puis retire les `//` devant la ligne `image` dans le bloc du projet. Pense aussi à préciser `stack`.

**Djigui** : le champ `stack` contient des compétences génériques ; remplace-les par les technologies réelles si tu les connais.

### 4.7 Photo et CV

- **Photo** : remplace `public/images/profil.jpeg` par une nouvelle photo portant le même nom. Format portrait conseillé (proportion 3:4, au moins 800 px de large).
- **CV** : dépose ton PDF dans `public/cv/`, par exemple `CV-Hanaa-Traore.pdf`, puis indique dans `profile.ts` : `cvUrl: "/cv/CV-Hanaa-Traore.pdf"`. Les boutons « Télécharger mon CV » apparaissent dans le menu, sur l’accueil et dans Contact.

> Les noms de fichiers sont sensibles à la casse une fois en ligne : `Photo.JPG` et `photo.jpg` sont deux fichiers différents. Utilise des minuscules, sans espaces ni accents.

---

## 5. Personnaliser l’apparence

### Couleurs — `src/app/globals.css`
Les couleurs sont définies une seule fois en haut du fichier :

| Variable | Rôle | Valeur |
|---|---|---|
| `--paper` | Fond de page | `#f3f6f4` |
| `--surface` | Fond des cartes | `#ffffff` |
| `--ink` | Texte principal, boutons, fond de Contact | `#12231e` |
| `--muted` | Texte secondaire | `#4f625b` |
| `--line` | Bordures | `#d3ded9` |
| `--primary` | Couleur principale : postes, liens, survols | `#11654f` |
| `--gold` | Accents (pastilles, puces) | `#d39b16` |
| `--brick` | Types de projets | `#b5392b` |

**Exemples de palettes de remplacement** pour `--primary` (garde les autres valeurs) : bleu nuit `#1f4e8c`, prune `#6b2d5c`, pétrole `#0e5a6b`. Pour une ambiance complètement différente, change aussi `--paper` et `--ink`.

Le second bloc `@media (prefers-color-scheme: dark)` contient les couleurs du mode sombre. Pour **désactiver le mode sombre**, supprime ce bloc en entier.

La bande tissée (classe `.woven`) a ses propres couleurs fixes, dans le même fichier.

### Polices — `src/app/layout.tsx`
Les polices viennent de Google Fonts via `next/font/google`. Pour en changer, remplace `Bricolage_Grotesque` ou `IBM_Plex_Sans` par une autre police de [fonts.google.com](https://fonts.google.com) (les espaces deviennent `_`, par exemple `Playfair_Display`), en gardant les mêmes noms de variables `--font-bricolage` et `--font-plex`.

### Menu — `src/components/Header.tsx`
Le tableau `navLinks` en haut du fichier liste les liens du menu. Chaque lien pointe vers l’`id` d’une section de la page d’accueil (`apropos`, `experiences`, `projets`, `formation`, `competences`, `contact`).

### Textes de la rubrique Contact — `src/app/page.tsx`
La phrase « Un stage, un poste ou un projet à me proposer ? » se trouve vers la fin du fichier, dans la section `contact`.

---

## 6. Vérifier puis mettre en ligne

### 6.1 Liste de vérification
Avant de publier, cherche les textes à compléter dans VS Code (`Ctrl + Maj + F`) :
- `À COMPLÉTER` et `À VÉRIFIER` (établissement de la licence, année du bac, lien LinkedIn)
- `à compléter`
- les champs `url: ""` des réseaux dans `profile.ts` : ajoute au minimum l’adresse de ton profil LinkedIn
- `cvUrl` : dépose ton CV dans `public/cv/` pour activer les boutons de téléchargement

Puis vérifie que le site compile sans erreur :
```bash
npm run build
```

### 6.2 Mettre le code sur GitHub
Ton dossier est déjà un dépôt Git. Si ce n’est pas encore fait :
1. Crée un dépôt vide sur [github.com/new](https://github.com/new) (sans README).
2. Dans le terminal :
   ```bash
   git add .
   git commit -m "Refonte du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio-hanaa.git
   git push -u origin main
   ```

### 6.3 Déployer sur Vercel (gratuit)
1. Connecte-toi sur [vercel.com](https://vercel.com) avec ton compte GitHub.
2. *Add New* puis *Project*, choisis le dépôt `portfolio-hanaa`, puis *Deploy*. Vercel détecte Next.js tout seul.
3. Une fois en ligne, copie l’adresse obtenue (par exemple `https://portfolio-hanaa.vercel.app`) dans `siteUrl` de `profile.ts`, puis renvoie le changement :
   ```bash
   git add . && git commit -m "Adresse du site" && git push
   ```
   Chaque `git push` met le site à jour automatiquement.
4. Facultatif : dans *Settings* puis *Domains*, change le sous-domaine (par exemple `hanaa-traore.vercel.app`) ou relie un nom de domaine acheté.

---

## 7. En cas de problème

| Symptôme | Solution |
|---|---|
| `npm` ou `node` introuvable | Installe Node.js (étape 2) puis ferme et rouvre le terminal. |
| `Failed to fetch … from Google Fonts` | Ton ordinateur n’a pas accès à Internet ou passe par un proxy. Reconnecte-toi puis relance. Sur Vercel, cette erreur n’arrive pas. |
| Une image ne s’affiche pas | Vérifie que le chemin commence par `/images/…` (sans `public`) et que le nom correspond exactement, extension et majuscules comprises. |
| Page blanche ou erreur rouge après une modification | Il manque souvent une virgule, un guillemet ou une accolade dans un fichier de `src/data/`. Le message d’erreur indique le fichier et la ligne. |
| `Port 3000 is in use` | Un autre serveur tourne déjà : ferme-le, ou lance `npm run dev -- -p 3001`. |
| La page d’un projet affiche « Page introuvable » | Le `slug` contient un accent, une majuscule ou un espace, ou deux projets ont le même `slug`. |
| Le mode sombre ne te plaît pas | Supprime le bloc `@media (prefers-color-scheme: dark)` dans `globals.css`. |

---

## 8. Conseils pour un portfolio qui convainc

- **Des résultats concrets** : dans `highlights` et `missions`, quand c’est possible, chiffre l’impact (« 10 sprints », « temps de traitement des NC divisé par deux », « 30 femmes formées »).
- **Des captures réelles** de tes applications plutôt que des logos seuls, au moins pour les fiches détaillées.
- **Un e-mail professionnel** (prénom.nom@…) et un profil LinkedIn à jour avec le même titre que sur le site.
- **Relis l’orthographe** de chaque texte : c’est la première chose qu’un recruteur remarque.
