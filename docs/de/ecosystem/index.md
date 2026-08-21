---
title: Ecosystem-Partnerschaft
description: Wie sich macOS-Apps von Drittanbietern über ausgehende Deep-Links in den Action Marketplace von ClipboxAI einbinden.
layout: doc
---

# Ecosystem-Partnerschaft

ClipboxAI ist ein Zwischenablagen-Hub. Doch rechenintensive Aufgaben — Dateikompression, Bildoptimierung, PDF-Arbeiten — erledigen spezialisierte Schwester-Apps besser. Der **Action Marketplace** bietet bereits eine Kategorie *Drittanbieter-Software*, in der Aktionen direkt an Apps delegiert werden, die Ihre Nutzer bereits installiert haben ([NueZip](https://github.com/w3cub/nuezip), [Nicasa](https://github.com/w3cub/nicasa), …).

Diese Seite erklärt, wie die Integration funktioniert und wie **Ihre** App beitreten kann.

## So funktioniert es (ausgehende Delegation)

Eine Ecosystem-Aktion ist lediglich ein Marketplace-Eintrag mit einem `execution`-Deskriptor anstelle eines Prompts:

```json
{
  "id": "nuezip-compress-zip",
  "name": "Compress to ZIP",
  "category": "ecosystem",
  "author": "NueZip",
  "appIcon": "icons/nuezip.png",
  "execution": {
    "kind": "externalApp",
    "scheme": "nuezip",
    "urlTemplate": "nuezip://quickCompress?files={{files}}&extra=zip"
  }
}
```

Wenn der Nutzer auf **Install** klickt, registriert ClipboxAI die Aktion lokal. Wenn er sie bei einem Zwischenablage-Eintrag auslöst, füllt die App die Vorlage aus und öffnet die Ziel-App über `NSWorkspace.open(_:)`:

- `{{files}}` — absoluter(e) Dateipfad/Pfade des aktuellen Zwischenablage-Eintrags (bei mehreren Dateien durch Zeilenumbrüche getrennt).
- `{{text}}` — der Klartext-Inhalt.
- `{{returnURL}}` — eine optionale `clipboxai://callback?…`-Rückgabe-URL für Round-Trips im x-callback-url-Stil (genutzt, sobald die Schwester-App sie implementiert).

Falls die Ziel-App **nicht installiert** ist, wird die Aktion aus dem Panel ausgeblendet, bis der Nutzer sie installiert — keine defekten Buttons.

## URL-Schema-Vertrag für Schwester-Apps

Um ein Ziel zu sein, muss Ihre macOS-App nur:

1. Ein URL-Schema in `Info.plist` registrieren (`CFBundleURLTypes`).
2. Die eingehende URL verarbeiten — `files` / `text` aus der Abfrage lesen und darauf agieren.
3. (Optional) Die `returnURL` beim Abschluss aufrufen, damit ClipboxAI einen „in &lt;App&gt; fertiggestellt"-Toast anzeigen kann.

Das war's. Keine privaten APIs, kein gemeinsamer Code — nur ein Deeplink. Die NueZip- und Nicasa-Finder-Erweiterungen sind Referenzimplementierungen, die Sie kopieren können.

## Dem Ecosystem beitreten

Wir halten den Katalog in einem öffentlichen Repo, sodass jeder eine Aktion beisteuern kann:

- 📦 **Aktion einreichen** (oder beantragen, dass Ihre App hinzugefügt wird) über
  [clipboxAI/marketplace · Issues](https://github.com/clipboxAI/marketplace/issues)
- 🔀 Oder öffnen Sie einen Pull Request gegen
  [`clipboxai-marketplace`](https://github.com/clipboxAI/marketplace)
  und fügen Sie Ihr Aktions-JSON hinzu.

### Richtlinien

- Verwenden Sie einen klaren `author` und `appIcon` (ein quadratisches PNG, ~256×256, transparent ok).
- Halten Sie `urlTemplate` minimal und dokumentieren Sie alle benutzerdefinierten Abfrageparameter.
- Testen Sie den Round-Trip mit tatsächlich installierter App, bevor Sie veröffentlichen.
- Respektieren Sie die Privatsphäre des Nutzers — agieren Sie nur auf Dateien, die er ausdrücklich delegiert.

## Warum partnerschaftlich?

- **Zero integration cost** — ein Deeplink, kein SDK.
- **Distribution** — die Aktionen Ihrer App erscheinen im ClipboxAI Marketplace für jeden Nutzer.
- **Kontext** — Aktionen werden aus der Zwischenablage, dem Finder oder überall dort ausgelöst, wo der Nutzer bereits arbeitet.

[→ Integrations-Issue öffnen](https://github.com/clipboxAI/marketplace/issues)
