# Contribution

Nous accueillons avec plaisir les contributions pour améliorer ClipboxAI ! Que vous corrigiez un bug, ajoutiez une fonctionnalité, traduisiez ou amélioriez la documentation, votre aide est appréciée.

## Façons de contribuer

### Rapports de bug
- Vérifiez d'abord les [tickets](https://github.com/clipboxAI/issues) existants.
- Incluez la version de macOS, la version de ClipboxAI et les étapes pour reproduire.
- Joignez un texte d'exemple (aucun contenu de presse-papiers sensible, s'il vous plaît) si utile.

### Demandes de fonctionnalités
- Décrivez la fonctionnalité et le cas d'usage.
- Expliquez en quoi elle bénéficierait aux utilisateurs de ClipboxAI.
- Vérifiez qu'elle correspond à la philosophie locale d'abord et respectueuse de la vie privée.

### Traductions
- ClipboxAI prend en charge plusieurs langues via des fichiers JSON i18n.
- Contribuez des traductions pour les langues manquantes ou incomplètes.
- Voir `ClipboxAI/Resources/i18n/` pour les traductions existantes.

### Contributions de code
- L'application est écrite en **Swift 6 + SwiftUI**.
- Forkez le dépôt et soumettez une pull request.
- Suivez les motifs Clean Architecture utilisés dans la base de code.

## Pour commencer

### Prérequis
- Node.js 18 ou version ultérieure (pour le site)
- Gestionnaire de paquets pnpm (pour le site)
- Xcode 16+ (pour le développement de l'application)
- macOS 14 Sonoma+

### Configuration du développement (site de documentation)

1. **Forkez le dépôt** sur GitHub.
2. **Clonez votre fork** :
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **Installez les dépendances** :
   ```bash
   pnpm install
   ```
4. **Démarrez le serveur de développement** :
   ```bash
   pnpm docs:dev
   ```
5. **Ouvrez** `http://localhost:5173` dans votre navigateur.

### Apporter des modifications

1. Créez une nouvelle branche pour vos modifications :
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Apportez vos modifications aux fichiers de documentation dans `docs/`.
3. Testez vos modifications en construisant le site :
   ```bash
   pnpm docs:build
   ```
4. Validez vos modifications :
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Soumettre les modifications

1. **Poussez votre branche** vers votre fork :
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Créez une Pull Request** sur GitHub.
3. **Attendez la revue** et répondez aux retours éventuels.

## Recommandations

### Style d'écriture
- Utilisez un langage clair et concis.
- Écrivez à la voix active quand possible.
- Soyez inclusif et accueillant.
- Utilisez un formatage cohérent.
- Incluez des captures d'écran lorsque cela est utile.

### Structure des fichiers
- Les pages de documentation vont dans `docs/`.
- Les guides vont dans `docs/guide/`.
- Utilisez des noms de fichiers en minuscules avec des traits d'union : `my-new-guide.md`.

### Liens
- Utilisez des liens relatifs pour la documentation interne.
- Liez vers des ressources externes lorsque cela est utile.
- Assurez-vous que tous les liens fonctionnent.

### Images et ressources
- Placez les images dans `docs/public/` ou ses sous-répertoires.
- Utilisez des noms de fichiers descriptifs.
- Optimisez les images pour le web (moins de 500 Ko recommandé).

## Code de conduite

Ce projet suit un code de conduite. En participant, vous acceptez :
- D'être respectueux et inclusif.
- De vous concentrer sur des retours constructifs.
- D'accepter la responsabilité de vos erreurs.

## Des questions ?

Si vous avez des questions sur la contribution, consultez les [tickets](https://github.com/clipboxAI/issues) existants ou créez-en un nouveau. Merci d'aider à améliorer ClipboxAI ! 🎉
