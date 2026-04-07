# Homepage

Persönliche Homepage von Simon Kell, gebaut mit Astro und CSS.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Die statische Seite wird nach `dist/` gebaut und kann direkt auf einen Webspace
hochgeladen werden.

## Inhalte pflegen

- Grunddaten und Links: `src/site.ts`
- Projektkarten: `src/data/projects/*.md`
- Globales Styling: `src/styles/global.css`

Neue Projekte legst du als Markdown-Datei in `src/data/projects/` an. Dateien
mit `draft: true` erscheinen nicht auf der Startseite.

## Strato-Deploy per GitHub Actions

Der Workflow `.github/workflows/deploy-strato.yml` baut die Seite bei jedem Push
auf `main` und spiegelt `dist/` per SFTP auf den Strato-Webspace.

Lege dafür im GitHub-Repository unter `Settings -> Secrets and variables ->
Actions` diese Secrets bzw. Variablen an:

- `STRATO_HOST`: dein personalisierter Strato-SFTP-Hostname, z. B. aus dem
  Strato-Login
- `STRATO_USERNAME`: dein SFTP-Benutzer
- `STRATO_PASSWORD`: das SFTP-Passwort
- `STRATO_TARGET_DIR`: optional, z. B. `./`, wenn der SFTP-Benutzer direkt im
  Webroot startet
- `SITE_URL`: optional als Repository Variable oder Secret, z. B.
  `https://deine-domain.de`

Der Workflow löscht remote bewusst keine alten Dateien. Wenn das Zielverzeichnis
dediziert nur für diese Seite genutzt wird, kannst du später im Workflow bei
`mirror` noch `--delete` ergänzen, damit verwaiste Assets entfernt werden.
