# 📲 Module Sed — Mettre l'app en ligne et l'installer sur ton iPhone

Une PWA doit être **hébergée sur une adresse web en https** pour pouvoir s'installer sur l'iPhone. C'est gratuit et ça prend environ 10 minutes. Tu as deux options : choisis celle qui te convient.

---

## Option A — GitHub Pages (faisable 100 % depuis l'iPhone) ✅ recommandé

### 1. Décompresser le dossier
1. Enregistre `module-sed.zip` dans l'app **Fichiers**.
2. Touche le zip : iOS crée un dossier `module-sed` avec 11 fichiers dedans.

### 2. Créer un compte GitHub
1. Va sur **github.com** dans Safari et crée un compte gratuit (vérifie ton email).

### 3. Créer le dépôt
1. Touche **+** (en haut) → **New repository**.
2. Nom : `module-sed` · coche **Public** · touche **Create repository**.

### 4. Envoyer les fichiers
1. Sur la page du dépôt, touche le lien **« uploading an existing file »** (ou **Add file → Upload files**).
   - Si tu ne le vois pas : dans Safari, touche **aA** → **Demander le site pour ordinateur**.
2. Touche **choose your files** → sélectionne **les 11 fichiers** du dossier `module-sed` (pas le dossier lui-même, les fichiers dedans).
3. En bas, touche **Commit changes**.

### 5. Activer la publication
1. Dans le dépôt : **Settings** → **Pages** (menu de gauche).
2. Source : **Deploy from a branch** · Branch : **main** · dossier **/ (root)** → **Save**.
3. Attends 1 à 2 minutes, recharge la page : ton adresse s'affiche, du type
   `https://ton-pseudo.github.io/module-sed/`

---

## Option B — Netlify Drop (depuis un ordinateur, 2 minutes)

1. Décompresse `module-sed.zip` sur l'ordinateur.
2. Va sur **app.netlify.com/drop**.
3. Glisse-dépose le dossier `module-sed` dans la page.
4. Crée un compte gratuit quand on te le propose, pour que le site reste en ligne.
5. Tu obtiens une adresse du type `https://nom-au-hasard.netlify.app` (renommable dans *Site settings*).

---

## Installer l'app sur l'iPhone

1. Ouvre ton adresse dans **Safari** (obligatoire : pas Chrome ni l'app Instagram).
2. Touche le bouton **Partager** (le carré avec la flèche vers le haut).
3. Fais défiler et choisis **« Sur l'écran d'accueil »**.
4. Vérifie le nom « Module Sed » → **Ajouter**.
5. Lance l'app depuis sa nouvelle icône : elle s'ouvre **en plein écran**, sans barre Safari, et fonctionne **même hors ligne**.

---

## Tes données

- Tout ce que tu écris (progression, journal, défis, profil) est enregistré **sur ton iPhone**, dans l'app.
- ⚠️ iOS peut effacer les données d'une app web **qui n'a pas été ouverte depuis plusieurs semaines**. Fais une sauvegarde de temps en temps : **Profil → Exporter une sauvegarde** (enregistre le fichier dans Fichiers ou iCloud Drive). Pour restaurer : **Profil → Importer**.
- Les données de l'app installée et celles de Safari sont séparées : utilise toujours l'icône de l'écran d'accueil.

---

## Mettre à jour l'app plus tard

1. Remplace le ou les fichiers modifiés dans ton dépôt GitHub (Upload files → même nom = écrasé).
2. Dans `sw.js`, change la ligne `VERSION` (ex. `v1.0.0` → `v1.0.1`).
3. Ferme complètement l'app et rouvre-la (deux fois si besoin) : la nouvelle version se charge. Tes données sont conservées.

---

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | La page de l'app + le design |
| `app.js` | Le fonctionnement (onglets, sauvegarde, quiz, journal…) |
| `content1.js`, `content2.js` | Tout le contenu des 14 modules (modifiable) |
| `manifest.webmanifest` | Nom, icône, plein écran |
| `sw.js` | Mode hors ligne |
| `*.png` | Icônes |
