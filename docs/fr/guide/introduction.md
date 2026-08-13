# Introduction

## À propos de ClipboardxAI

**ClipboardxAI** est un gestionnaire de presse-papiers intelligent pour macOS. À chaque fois que vous copiez du texte, du code ou un lien, il est enregistré dans un historique consultable depuis votre barre de menus. En un clic — ou de façon totalement automatique — vous pouvez exécuter une action sur cet élément : le résumer, le traduire, le mettre en forme, ou le confier à un modèle d'IA cloud.

Il repose sur deux types d'outils :

- **Outils locaux intégrés** qui s'exécutent entièrement sur votre Mac, sans connexion réseau.
- **Actions IA** qui appellent un modèle cloud que vous configurez vous-même (votre propre clé API, stockée dans le Keychain du système).

## Fonctionnalités clés

### 📋 Historique du presse-papiers

Tout ce que vous copiez est capturé automatiquement et conservé dans un historique consultable. Revenez à n'importe quel élément précédent depuis la barre de menus — plus aucun extrait perdu.

### ⚡ Suggestions intelligentes

ClipboardxAI propose les actions les plus pertinentes pour l'élément en cours. Acceptez une suggestion, ou parcourez la liste complète des outils.

### 🛠️ Outils locaux intégrés

Hors ligne, privé, instantané :

- **Extraire les liens** — extrait toutes les URL d'un bloc de texte.
- **Compter les statistiques** — nombre de mots, de caractères, de lignes et de phrases.
- **Réduire les lignes vides** — nettoie le texte collé en une seule étape.

D'autres outils locaux pourront être ajoutés avec le temps — ils ne quittent jamais votre appareil.

### ✨ Actions IA

Envoyez l'élément en cours à un modèle cloud pour :

- **Résumer** de longs articles et fils de discussion.
- **Traduire** entre différentes langues.
- **Réécrire / corriger** le ton et la clarté.
- Exécuter n'importe quelle action depuis le **Marketplace**.

### 🛒 Marketplace d'actions

Parcourez les actions IA créées par la communauté et installez-les en un clic via un lien profond (`clipboardxai://install?action=<id>`). Les catégories comprennent Écriture, Développeur, Productivité, Traduction, Réseaux sociaux et Analyse.

### 🔒 Privé par conception

Votre historique de presse-papiers reste sur votre appareil. L'IA cloud est **optionnelle** : lorsqu'elle est activée, le contenu n'est envoyé qu'au fournisseur *que vous* choisissez, à l'aide d'une clé API stockée dans votre Keychain. Nous ne recevons ni ne stockons vos éléments, et il n'y a aucune analytique ni télémétrie.

## Configuration requise

- **Système d'exploitation** : macOS 14 Sonoma ou version ultérieure
- **Processeur** : Apple Silicon (série M) ou Intel (64 bits)
- **Mémoire** : 4 Go de RAM minimum, 8 Go recommandés
- **Stockage** : ~50 Mo pour l'installation
- **Pour l'IA cloud** : une clé API d'un fournisseur pris en charge (DeepSeek, MiniMax, Zhipu GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic ou Gemini)

## Langues prises en charge

L'application et ce site prennent en charge 7 langues : anglais, chinois simplifié (简体中文), chinois traditionnel (繁體中文), japonais (日本語), allemand, espagnol, français.

## Pour commencer

Si vous découvrez ClipboardxAI, commencez par le [Guide d'installation](/fr/guide/installation) pour faire fonctionner l'application sur votre Mac, puis lisez [Utilisation](/fr/guide/usage) pour comprendre le fonctionnement des actions.
