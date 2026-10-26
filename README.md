# Portfolio — Ngeva Jean Mickael

Portfolio personnel : React 19 + Vite + TypeScript + Tailwind CSS v4 + Motion + Lucide.

Direction artistique éditoriale : fond ivoire `#F7F5F0`, texte anthracite `#242620`, vert forêt `#285747`, terracotta `#C7775A`, typographies Manrope (texte) et DM Serif Display (titres). Les couleurs sont déclarées dans `src/index.css` (`@theme`).

## Démarrer

```bash
npm install
npm run dev      # développement
npm run build    # vérification TypeScript + build de production dans dist/
npm run preview  # prévisualisation du build
```

## Où modifier le contenu

Tout le contenu est dans `src/data/` ; les composants ne contiennent aucun texte personnel.

| Fichier | Contenu |
|---|---|
| `src/data/profile.ts` | nom, titre (orienté clients, sans mention d'employeur), photo, e-mail, LinkedIn, CV, **endpoint du formulaire** |
| `src/data/about.ts` | section « À propos » |
| `src/data/services.ts` | section « Ce que je fais » (trois offres) |
| `src/data/education.ts` | parcours FTS Toamasina (années, diplôme, matières confirmées / à valider) |
| `src/data/expertise.ts` | six domaines d'expertise |
| `src/data/projects.ts` | fiches projets (contexte, rôle, matériel, difficultés, résultats, liens, `toConfirm`) |
| `src/data/method.ts` | méthode de travail |
| `src/data/experience.ts` | timeline formation / expérience / projets |
| `src/data/i18n.ts` | libellés de l'interface en FR et EN |

### Informations à compléter

- `profile.email` : renseigné depuis le CV (ngevajeanmickael@gmail.com).
- `profile.linkedin` : renseigné (profil LinkedIn fourni).
- `profile.cvUrl` : pointe vers `public/cv/CV-Ngeva-Jean-Mickael.pdf` (copie du CV fourni). Remplacer ce fichier pour mettre le CV à jour.
- `profile.contactEndpoint` : URL d'un service d'envoi (Formspree, Web3Forms, API maison). Tant qu'il est vide, le formulaire affiche une alternative de contact au lieu d'un faux succès.
- `education.years` : « Depuis 2024 » d'après le CV ; à préciser à l'obtention du diplôme.
- Les projets contiennent des listes `toConfirm` : points à vérifier avant publication (rôles exacts dans les projets d'équipe, tests restants, etc.).

## Images

Par choix, le portfolio ne contient ni logo de technologie, ni inventaire d'outils techniques, ni image de projet : seules la photo de profil (`public/images/profil.webp`, version détourée `profil-cutout.webp` dans le Hero, recadrage `portrait-about.webp` dans À propos) et l'image Open Graph (`public/images/og.jpg`) sont utilisées. `scripts/prepare-images.mjs` régénère la photo depuis `assets-src/`, `scripts/og-image.mjs` régénère l'image Open Graph.

## Vérifications

`scripts/e2e/check.mjs` et `scripts/e2e/lang.mjs` pilotent Google Chrome (puppeteer-core) sur le build servi en local pour tester la modale projet, les filtres, le menu mobile, la bascule FR/EN et l'absence d'erreurs console.
# My-PortFolio
# My-PortFolio
