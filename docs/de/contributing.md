# Mitwirken

Wir freuen uns über Beiträge zur Verbesserung von ClipboxAI! Ob Sie einen Fehler beheben, eine Funktion hinzufügen, übersetzen oder die Dokumentation verbessern — Ihre Hilfe ist willkommen.

## Möglichkeiten, beizutragen

### Fehlerberichte
- Prüfen Sie zunächst bestehende [Issues](https://github.com/clipboxAI/issues).
- Geben Sie macOS-Version, ClipboxAI-Version und Schritte zur Reproduktion an.
- Hängen Sie bei Bedarf Beispieltext an (bitte keine sensiblen Zwischenablage-Inhalte).

### Funktionswünsche
- Beschreiben Sie die Funktion und den Anwendungsfall.
- Erklären Sie, warum sie ClipboxAI-Nutzern nützen würde.
- Prüfen Sie, ob sie zur Local-First-, datenschutzorientierten Philosophie passt.

### Übersetzungen
- ClipboxAI unterstützt mehrere Sprachen über i18n-JSON-Dateien.
- Tragen Sie Übersetzungen für fehlende oder unvollständige Sprachen bei.
- Siehe `ClipboardXAI/Resources/i18n/` für bestehende Übersetzungen.

### Code-Beiträge
- Die App ist in **Swift 6 + SwiftUI** geschrieben.
- Forken Sie das Repository und reichen Sie einen Pull Request ein.
- Folgen Sie den Clean-Architecture-Mustern des Codebases.

## Erste Schritte

### Voraussetzungen
- Node.js 18 oder neuer (für die Website)
- pnpm package manager (für die Website)
- Xcode 16+ (für die App-Entwicklung)
- macOS 14 Sonoma+

### Entwicklungsumgebung einrichten (Dokumentations-Website)

1. **Forken Sie das Repository** auf GitHub.
2. **Klonen Sie Ihren Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **Abhängigkeiten installieren**:
   ```bash
   pnpm install
   ```
4. **Entwicklungsserver starten**:
   ```bash
   pnpm docs:dev
   ```
5. **Öffnen** Sie `http://localhost:5173` in Ihrem Browser.

### Änderungen vornehmen

1. Erstellen Sie einen neuen Branch für Ihre Änderungen:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Nehmen Sie Ihre Änderungen an den Dokumentationsdateien in `docs/` vor.
3. Testen Sie Ihre Änderungen, indem Sie die Website bauen:
   ```bash
   pnpm docs:build
   ```
4. Committen Sie Ihre Änderungen:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Änderungen einreichen

1. **Pushen Sie Ihren Branch** in Ihren Fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Erstellen Sie einen Pull Request** auf GitHub.
3. **Warten Sie auf Review** und gehen Sie auf Feedback ein.

## Richtlinien

### Schreibstil
- Verwenden Sie klare, prägnante Sprache.
- Schreiben Sie nach Möglichkeit im Aktiv.
- Seien Sie inklusiv und einladend.
- Verwenden Sie konsistente Formatierung.
- Fügen Sie bei Bedarf Screenshots hinzu.

### Dateistruktur
- Dokumentationsseiten gehören nach `docs/`.
- Leitfäden gehören nach `docs/guide/`.
- Verwenden Sie Dateinamen in Kleinbuchstaben mit Bindestrichen: `my-new-guide.md`.

### Links
- Verwenden Sie relative Links für interne Dokumentation.
- Verlinken Sie bei Bedarf auf externe Ressourcen.
- Stellen Sie sicher, dass alle Links funktionieren.

### Bilder und Assets
- Legen Sie Bilder in `docs/public/` oder Unterverzeichnissen ab.
- Verwenden Sie aussagekräftige Dateinamen.
- Optimieren Sie Bilder für das Web (unter 500 KB bevorzugt).

## Verhaltenskodex

Dieses Projekt folgt einem Verhaltenskodex. Durch Ihre Teilnahme stimmen Sie zu:
- Seien Sie respektvoll und inklusiv.
- Fokussieren Sie sich auf konstruktives Feedback.
- Übernehmen Sie Verantwortung für Fehler.

## Fragen?

Falls Sie Fragen zum Mitwirken haben, prüfen Sie bestehende [Issues](https://github.com/clipboxAI/issues) oder erstellen Sie ein neues. Vielen Dank, dass Sie dabei helfen, ClipboxAI zu verbessern! 🎉
