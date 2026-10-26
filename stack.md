
## STACK TECHNIQUE OBLIGATOIRE

Le portfolio doit être développé avec les technologies suivantes :

- **React** pour construire l'interface en composants réutilisables.
- **Vite** comme outil de développement et de build.
- **TypeScript (TSX)** pour tous les composants React.
- **Tailwind CSS** pour le design, le responsive et les styles de l'interface.
- **Motion for React** (`motion/react`) pour les animations modernes et fluides.
- **Lucide React** pour les icônes.
- **React Router** uniquement si une navigation entre plusieurs pages est nécessaire.

### Règles de développement

1. Utiliser exclusivement des composants React en `.tsx` pour les composants contenant du JSX.
2. Organiser le projet en composants réutilisables : `Navbar`, `Hero`, `About`, `Education`, `Skills`, `Projects`, `Experience`, `Gallery`, `Contact` et `Footer`.
3. Utiliser Tailwind CSS pour la majorité des styles : couleurs, espacements, grilles, typographie, bordures, ombres, transitions, états interactifs et responsive.
4. Ne pas créer un fichier CSS géant pour remplacer Tailwind.
5. Réserver les fichiers CSS personnalisés aux styles réellement nécessaires : animations spécifiques, effets complexes, variables globales et personnalisations impossibles ou peu pratiques avec les classes utilitaires.
6. Ne pas mélanger plusieurs frameworks CSS. Tailwind CSS doit être le système de design principal.
7. Utiliser des composants typés, des interfaces TypeScript et des données séparées dans des fichiers tels que `src/data/projects.ts` et `src/data/education.ts`.
8. Ne pas utiliser `any` sans justification.
9. Ne pas modifier les versions des dépendances existantes sans vérifier leur compatibilité.
10. Respecter la version de Tailwind CSS déjà installée. Si le projet est neuf, utiliser une version stable et une configuration compatible avec Vite.

### Configuration et installation

Si le projet existe déjà, inspecter `package.json`, les fichiers de configuration et les dépendances avant toute installation.

Si le projet est neuf, créer une application React + TypeScript avec Vite et configurer Tailwind CSS correctement selon la version choisie.

Pour un projet neuf utilisant Tailwind CSS v4 :

```bash
npm create vite@latest mon-portfolio -- --template react-ts
cd mon-portfolio
npm install
npm install tailwindcss @tailwindcss/vite
npm install motion lucide-react
```

Configurer ensuite le plugin Tailwind dans `vite.config.ts` :

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Dans `src/index.css`, importer Tailwind :

```css
@import "tailwindcss";
```

Vérifier que `src/main.tsx` importe bien `src/index.css`.

Utiliser les imports suivants pour les animations :

```tsx
import { motion, AnimatePresence } from 'motion/react'
```

Et pour les icônes :

```tsx
import { ArrowUpRight, Menu, X, Github, Linkedin } from 'lucide-react'
```

### Direction artistique avec Tailwind

Construire une interface premium avec :

- Fond bleu nuit : `bg-[#0B1020]`.
- Surfaces sombres : `bg-[#121A2B]`.
- Accent cyan : `text-[#16CBD1]` et `bg-[#16CBD1]`.
- Bordures discrètes : `border-white/10`.
- Texte principal : `text-slate-100`.
- Texte secondaire : `text-slate-400`.
- Effets de verre utilisés avec modération : `backdrop-blur-xl`.
- Grilles responsives : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Conteneurs centrés : `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`.
- Transitions : `transition-all duration-300 ease-out`.
- États de survol : `hover:-translate-y-1 hover:border-[#16CBD1]/40`.

Adapter les classes à chaque section au lieu de répéter exactement le même design partout.

### Qualité et validation

À la fin du développement :

```bash
npm run dev
npm run build
```

Corriger toutes les erreurs TypeScript et de compilation avant de considérer le travail terminé.

Vérifier aussi que les classes Tailwind sont effectivement compilées, que le menu mobile fonctionne, que les animations sont fluides et que toutes les sections sont responsives.

Ne pas livrer uniquement une page d'accueil : développer l'ensemble du portfolio, notamment le parcours FTS Toamasina en Maintenance Industrielle, les compétences électriques et électroniques, les projets IoT et les réalisations logicielles.
