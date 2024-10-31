# Nina Carducci Photography Website - SEO Optimized Version

## Introduction
Ce projet consiste en l'optimisation du site web de **Nina Carducci**, une photographe basée en Île-de-France. L'objectif principal était d'améliorer la visibilité, la performance, et l'accessibilité du site grâce à des techniques modernes de SEO et d'optimisation des performances.

## Objectifs du Projet
- **Améliorer la visibilité SEO** : Optimiser les balises meta, les Rich Snippets, et utiliser des mots-clés locaux pour se positionner sur les requêtes pertinentes.
- **Améliorer la performance** : Optimiser les images, réduire la taille du CSS et JavaScript, supprimer les dépendances inutiles.
- **Améliorer l'accessibilité** : Utiliser des balises sémantiques HTML5, ajouter des balises ALT aux images, et améliorer la navigation pour les utilisateurs de technologies d'assistance.

## Technologies Utilisées
- **HTML5** : Pour structurer le contenu de manière sémantique.
- **CSS3 (avec PurgeCSS)** : Pour styliser le contenu tout en éliminant les CSS inutiles afin d'optimiser la taille des fichiers.
- **JavaScript (natif)** : Pour remplacer les scripts en jQuery, simplifier le code, et améliorer la performance.
- **PurgeCSS** : Pour supprimer les classes CSS inutilisées et réduire la taille des fichiers CSS.
- **Schema.org (Rich Snippets)** : Pour structurer les informations importantes telles que l'adresse et les horaires afin d'améliorer le référencement local.
- **OpenGraph** : Pour optimiser l'apparence du site lorsqu'il est partagé sur les réseaux sociaux.

## Fonctionnalités
- **SEO Général** : Optimisation des balises meta, ajout de mots-clés pertinents, amélioration des scores Lighthouse.
- **SEO Local** : Utilisation des **Rich Snippets** pour structurer les données locales et améliorer la visibilité de Nina Carducci dans les recherches géolocalisées.
- **Optimisation des Images** : Conversion en **format WebP**, utilisation de la balise `<picture>` pour fournir des images optimisées selon les dispositifs (ordinateurs, mobiles).
- **Suppression des Dépendances Inutiles** : Suppression de **jQuery** au profit du JavaScript natif pour alléger le code.
- **Optimisation du CSS** : Utilisation de **PurgeCSS** pour supprimer le CSS inutilisé.
- **Accessibilité** : Ajout de **balises ALT** et de **labels** pour les images et les formulaires, et réorganisation de la structure HTML avec des balises sémantiques (`<header>`, `<main>`, `<section>`, `<footer>`).

## Structure du Projet
- `index.html` : La page d'accueil du site, optimisée avec des balises HTML5 sémantiques, les Rich Snippets, et les balises OpenGraph.
- `style.css` : Feuille de style principale, allégée avec PurgeCSS pour améliorer la vitesse de chargement.
- `gallery.js` & `modal.js` : Scripts JavaScript utilisés pour gérer la galerie d'images et les modales, écrits en JavaScript natif après la suppression de jQuery.

## Instructions d'Utilisation
1. **Téléchargement** : Clonez ce dépôt sur votre machine locale :
   ```sh
   git clone [url-du-repository]
   ```
2. **Ouvrir le Projet** : Ouvrez le fichier `index.html` dans votre navigateur pour voir la version optimisée du site.

## Améliorations Techniques
- **Vitesse de Chargement** : Les images optimisées et le CSS réduit ont permis de faire passer le score de **Performance Lighthouse** de 65 à 100.
- **Accessibilité** : Les scores d’accessibilité ont été augmentés grâce aux balises ALT, aux labels, et à une meilleure hiérarchisation des titres (`<h1>`, `<h2>`, etc.).
- **SEO** : L'ajout de balises meta et de **Rich Snippets** a permis d'améliorer les scores SEO et de cibler des recherches locales (Île-de-France).

## Contributeurs
- **[Votre Nom]** : Développeur freelance spécialisé en SEO et optimisation web.

## Contact
Pour toute question ou suggestion, veuillez contacter [votre-email@example.com].

## License
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer sous les mêmes termes.