# POC/Kitstarter Application Web Next Gen - Archi Universelle - sans API

## 🏗️ Architecture Universelle Laravel + Inertia + React (SSR)

Cette architecture allie la robustesse de **Laravel (PHP)** à la puissance de **React**, tout en profitant des avantages du **rendu côté serveur (SSR)** via Vite, sans passer par une API traditionnelle.

## 📦 Versions & Dépendances

| ⚙️ Technologie     | 🔢 Version recommandée |
|--------------------|------------------------|
| ![Laravel](https://img.shields.io/badge/Laravel-12.0-red?logo=laravel&logoColor=white) | `^12.0` |
| ![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.14.0-339933?logo=node.js&logoColor=white) | `>= 22.14.0` |
| ![Inertia.js](https://img.shields.io/badge/Inertia.js-2.0-800080?logo=laravel&logoColor=white) | `^2.0` |
| ![Express](https://img.shields.io/badge/Express.js-4.18.0-black?logo=express&logoColor=white) | `^4.18.0` |
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black) | `^18.2.0` |
| ![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?logo=vite&logoColor=white) | `^5.4.0` |
| ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.2.0-38B2AC?logo=tailwindcss&logoColor=white) | `^3.2.0` |


### 🔁 Cheminement de la requête

1. **🔹 Backend PHP (Laravel)**  
   Laravel reçoit la requête HTTP, résout la route, et transmet la demande au moteur de rendu React via Inertia.js.

2. **🔸 Middleware Inertia (Laravel)**  
   Détermine quel composant React afficher et envoie ses props au serveur Node.js.

3. **🔹 Backend Node.js (Express + Vite SSR)**  
   Utilise Vite pour exécuter et pré-rendre les composants React en HTML.

4. **🔸 Retour vers Laravel**  
   Le HTML généré est injecté dans une vue Blade, et renvoyé au client par Laravel.

5. **🟢 Navigateur (Client)**  
   Le navigateur reçoit une page HTML pré-rendue. Le JavaScript se charge ensuite pour hydrater les composants React et activer l’interactivité.

---

## 🚀 Avantages de l’architecture universelle **sans API**

✅ **Simplicité & rapidité de développement**
- Aucun besoin de créer et maintenir une API.
- Un seul backend (Laravel) pour les règles métier, la sécurité et les routes.
- Moins de duplication entre frontend et backend.

⚡ **Performances optimales**
- Rendu initial rapide grâce au SSR.
- Expérience utilisateur fluide et immédiate.
- Moins de charge côté client.

🔍 **SEO & accessibilité**
- Le contenu HTML est visible dès le premier chargement.
- Meilleure indexabilité par les moteurs de recherche.
- Compatible avec les lecteurs d’écran.


## Technologies Utilisées

- **Backend** : Laravel
- **Frontend** : React
- **Routage** : Inertia.js
- **Style** : Tailwind CSS
- **Base de données** : MySQL (ou toute autre base de données de votre choix)

## Versions

- **Laravel** : 12.0
- **Node.js** : >= 22.14
- **Inertia.js** : 2.0
- **Express** : ^4.18.0
- **React** : ^18.2.0
- **Vite** : ^5.4.0
- **Tailwind CSS** : ^3.2.0

## Rendu Côté Serveur (SSR)

Cette application utilise Inertia.js pour activer le rendu côté serveur, ce qui permet :

- **Amélioration des performances** : Les chargements de pages initiaux sont plus rapides car le serveur envoie du HTML entièrement rendu au client.
- **Avantages SEO** : Les moteurs de recherche peuvent explorer le contenu plus efficacement puisque le HTML est généré sur le serveur.
- **Navigation fluide** : Inertia.js permet des transitions douces entre les pages sans rechargement complet, améliorant ainsi l'expérience utilisateur.

### Comment fonctionne le SSR dans ce projet

1. **Demande initiale** : Lorsqu'un utilisateur navigue vers une page, la demande est envoyée au backend Laravel.
2. **Récupération des données** : Le contrôleur récupère les données nécessaires, y compris les props requises pour la page (par exemple, `menuItems`).
3. **Rendu** : Laravel utilise Inertia pour rendre la page avec les données récupérées et envoie le HTML entièrement rendu au client.
4. **Hydratation** : Une fois le HTML chargé dans le navigateur, React prend le relais et hydrate la page, permettant des interactions dynamiques.

## Installation

### Prérequis

- PHP >= 8.4.X
- Composer
- Node.js >= 22.14
- NPM ou Yarn

### Étapes pour configurer le projet

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votreusername/poc-archi-universelle.git
   cd poc-archi-universelle
   ```

2. **Installer les dépendances backend**

   Accédez au répertoire du projet et installez les dépendances PHP à l'aide de Composer :

   ```bash
   composer install
   ```

3. **Configurer les variables d'environnement**

   Copiez le fichier `.env.example` en `.env` et configurez votre base de données et d'autres paramètres d'environnement :

   ```bash
   cp .env.example .env
   ```

   Ensuite, générez la clé de l'application :

   ```bash
   php artisan key:generate
   ```

4. **Exécuter les migrations**

   Si vous avez des migrations, exécutez-les pour configurer votre base de données :

   ```bash
   php artisan migrate
   ```

5. **Installer les dépendances frontend**

   Accédez au répertoire frontend et installez les dépendances JavaScript à l'aide de NPM ou Yarn :

   ```bash
   npm install
   ```

6. **Exécuter le serveur de développement**

   Démarrez le serveur de développement Laravel :

   ```bash
   php artisan serve
   ```

   Dans un terminal séparé, démarrez le serveur de développement Express :

   ```bash
   node server.js
   ```

   Dans un autre terminal, démarrez le serveur de développement Vite :

   ```bash
   npm run dev

7. **Accéder à l'application**

   Ouvrez votre navigateur et allez à [http://127.0.0.1:8000/](http://127.0.0.1:8000/) pour voir l'application.

## Utilisation

- Naviguez à travers l'application en utilisant le menu dynamique.
- Explorez différentes pages et observez le rendu côté serveur en action.
- Modifiez les éléments du menu dans le `MenuController` pour voir les changements reflétés dans la barre de navigation.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions d'améliorations ou de nouvelles fonctionnalités, n'hésitez pas à ouvrir un problème ou à soumettre une demande de tirage.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

- [Laravel](https://laravel.com/) - Le framework PHP utilisé pour le backend.
- [Inertia.js](https://inertiajs.com/) - Le framework pour construire des applications à page unique en utilisant le routage côté serveur classique.
- [React](https://reactjs.org/) - La bibliothèque JavaScript pour construire des interfaces utilisateur.
- [Tailwind CSS](https://tailwindcss.com/) - Le framework CSS utilitaire pour le style.
