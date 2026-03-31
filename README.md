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

## Lancer en local

```bash
mkdocs serve
```

Ouvrir **http://localhost:8000** dans le navigateur. Le site se recharge automatiquement à chaque modification de fichier.

## Déploiement

Le déploiement est **automatique** : chaque push sur `main` déclenche un build via GitHub Actions et publie sur GitHub Pages.

Workflow : `.github/workflows/deploy.yml`

## Structure du projet

```
agrid-docs/
├── mkdocs.yml              ← Configuration du site (navigation, thème, plugins, i18n)
├── requirements.txt        ← Dépendances Python
├── docs/
│   ├── en/                 ← Contenu en anglais (langue par défaut)
│   │   ├── index.md        ← Page d'accueil (liste des produits)
│   │   └── fan-coil/agr25-01/
│   │       ├── index.md        ← Vue d'ensemble + spécifications
│   │       ├── installation.md ← Guide d'installation
│   │       ├── wiring.md       ← Schémas de câblage (30 configurations)
│   │       ├── usage.md        ← Utilisation locale/WiFi
│   │       ├── declaration.md  ← Déclaration UE de conformité
│   │       ├── ecodesign.md    ← Données écoconception
│   │       └── assets/         ← PDF, images, icônes
│   ├── fr/                 ← Contenu en français (même structure que en/)
│   ├── assets/             ← Assets partagés
│   └── stylesheets/
│       └── extra.css       ← Styles personnalisés
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
