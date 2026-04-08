# AGRID Documentation

Documentation produit officielle AGRID, publiée sur **https://docs.a-grid.com**.

Built with [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Prérequis

- Python 3.11+
- pip

## Installation locale

```bash
git clone https://github.com/Agrid-Dev/agrid-docs.git
cd agrid-docs
pip install -r requirements.txt
```

## Tester en local

```bash
mkdocs serve
```

Ouvrir **http://localhost:8000** dans le navigateur. Le site se recharge automatiquement à chaque modification de fichier.

**Workflow recommandé pour tester sans impacter la production :**

1. Créer une branche de travail :
   ```bash
   git checkout -b ma-branche main
   ```
2. Faire les modifications (markdown, assets, CSS...)
3. Tester en local avec `mkdocs serve`
4. Commiter et pusher la branche :
   ```bash
   git add -A
   git commit -m "Description des changements"
   git push -u origin ma-branche
   ```
5. Créer une Pull Request sur GitHub pour review
6. Merger dans `main` quand c'est validé — le déploiement se fait automatiquement

## Déploiement

Le déploiement est **automatique** : chaque push sur `main` déclenche un build via GitHub Actions et publie sur GitHub Pages.

Workflow : `.github/workflows/deploy.yml`

## Mettre à jour les PDFs téléchargeables

Les PDFs (notice complète et schémas de câblage) sont proposés en téléchargement sur les pages du produit. Pour les mettre à jour :

1. **Remplacer les fichiers PDF** dans les dossiers assets de chaque langue, en gardant les mêmes noms de fichiers :
   - EN : `docs/en/fan-coil/agr25-01/assets/`
     - `Complete_Manual_AGRID_AGR25-01_EN.pdf`
     - `Wiring_Diagrams_AGRID_EN.pdf`
   - FR : `docs/fr/fan-coil/agr25-01/assets/`
     - `Complete_Manual_AGRID_AGR25-01_FR.pdf`
     - `Wiring_Diagrams_AGRID_FR.pdf`
2. **Commiter et pusher** (sur une branche ou directement sur `main`) :
   ```bash
   git add docs/en/fan-coil/agr25-01/assets/*.pdf docs/fr/fan-coil/agr25-01/assets/*.pdf
   git commit -m "Update downloadable PDFs"
   git push
   ```
3. Si pushé sur `main`, le déploiement se déclenche automatiquement et les nouveaux PDFs seront disponibles en ligne.

> **Note :** si les noms de fichiers changent, il faut aussi mettre à jour les liens dans les fichiers markdown (`index.md` et `wiring.md` de chaque langue).

## Structure du projet

```
agrid-docs/
├── mkdocs.yml              ← Configuration du site (navigation, thème, plugins, i18n)
├── requirements.txt        ← Dépendances Python
├── docs/
│   ├── CNAME               ← Domaine custom GitHub Pages
│   ├── assets/             ← Assets partagés (toutes langues / tous produits)
│   │   ├── Logo_Agrid_White.png  ← Logo header
│   │   ├── ce.png, class2.png,   ← Icônes certification (CE, Classe II,
│   │   │   rohs.png, weee.png       WEEE, RoHS)
│   │   ├── fan_logo.png,         ← Pictogrammes schémas de câblage
│   │   │   valve_logo.png,         (ventilateur, vanne, résistance)
│   │   │   electric_heater.png
│   │   └── agr25-01/             ← Images schémas AGR25-01 (partagées EN/FR)
│   │       ├── config-01..19.png     ← 19 schémas de configurations
│   │       └── sensor-*.png         ← 3 schémas capteurs externes
│   ├── en/                 ← Contenu en anglais (langue par défaut)
│   │   ├── index.md        ← Page d'accueil
│   │   └── fan-coil/agr25-01/
│   │       ├── index.md        ← Vue d'ensemble + spécifications
│   │       ├── installation.md ← Guide d'installation
│   │       ├── wiring.md       ← Schémas de câblage (20 configurations)
│   │       ├── usage.md        ← Utilisation locale/WiFi
│   │       ├── ecodesign.md    ← Données écoconception
│   │       └── assets/         ← PDFs EN uniquement
│   ├── fr/                 ← Contenu en français (même structure que en/)
│   │   └── fan-coil/agr25-01/
│   │       └── assets/         ← PDFs FR uniquement
│   ├── stylesheets/
│   │   └── extra.css       ← Styles personnalisés (header, nav, TOC, headings)
│   └── javascripts/
│       └── toc-default-open.js ← Ouvre la TOC par défaut dans la nav
└── .github/workflows/
    └── deploy.yml          ← CI/CD GitHub Actions
```

## Bilingue (EN/FR)

Le site est bilingue grâce au plugin [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n). Chaque langue a son propre dossier (`docs/en/` et `docs/fr/`) avec la même arborescence de fichiers.

### Ajouter/modifier du contenu

Toute modification doit être faite dans **les deux langues** :
- `docs/en/...` pour l'anglais
- `docs/fr/...` pour le français

### Traduire les labels de navigation

Les labels de navigation sont définis en anglais dans la section `nav` de `mkdocs.yml`. Les traductions françaises sont dans `nav_translations` :

```yaml
# mkdocs.yml
plugins:
  - i18n:
      languages:
        - locale: fr
          nav_translations:
            Home: Accueil
            Fan Coil: Ventilo-convecteurs
            Overview: Vue d'ensemble
            # ... ajouter les traductions ici
```

## Ajouter un nouveau produit

1. **Créer les fichiers** dans `docs/en/<categorie>/<reference>/` et `docs/fr/<categorie>/<reference>/`
2. **Ajouter la navigation** dans `mkdocs.yml` section `nav`
3. **Traduire les labels** dans `nav_translations` pour le français
4. **Mettre à jour la page d'accueil** (`docs/en/index.md` et `docs/fr/index.md`) pour ajouter le lien vers le nouveau produit

Exemple pour un nouveau produit "AGR25-02" :

```yaml
# mkdocs.yml → nav
nav:
  - Home: index.md
  - Fan Coil:
    - AGR25-01:
      - Overview: fan-coil/agr25-01/index.md
      # ...
    - AGR25-02:
      - Overview: fan-coil/agr25-02/index.md
      # ...
```

## Syntaxe utile

Le thème Material for MkDocs supporte plusieurs extensions Markdown :

- **Admonitions** (encadrés d'avertissement) : `!!! warning "Titre"` — [doc](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)
- **Onglets** : `=== "Tab 1"` — [doc](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/)
- **Tableaux** : syntaxe Markdown standard
- **Attributs HTML** : `{ .class #id }` sur les éléments

Référence complète : https://squidfunk.github.io/mkdocs-material/reference/
