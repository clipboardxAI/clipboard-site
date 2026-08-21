# Installation

ClipboxAI ist für macOS verfügbar.

## Download-Optionen

### Mac App Store (Empfohlen)

- **Download**: Suchen Sie im Mac App Store nach **ClipboxAI** oder öffnen Sie den Link von der [Startseite](/de/).
- Die Mac-App-Store-Version bietet automatische Updates und nahtlose macOS-Integration.

> ~~Falls noch kein Mac-App-Store-Link verfügbar ist, verwenden Sie den unten stehenden GitHub-Releases-Build.~~

### ~~GitHub Releases (Alternative)~~ (derzeit nicht verfügbar)

~~Sie können den neuesten Build direkt von [GitHub Releases](https://github.com/clipboxAI) herunterladen. Beachten Sie, dass diese Version keine automatischen Updates erhält.~~

## Installationsschritte

### Mac App Store

1. Öffnen Sie den obigen Download-Link oder suchen Sie im Mac App Store nach „ClipboxAI".
2. Klicken Sie auf **Get**, um die App herunterzuladen.
3. Die App wird automatisch installiert — starten Sie sie über **Programme** oder **Launchpad**.

### ~~GitHub Releases~~

1. ~~Laden Sie die neueste `.dmg` von der Releases-Seite herunter.~~
2. ~~Doppelklicken Sie auf die heruntergeladene `.dmg`, um sie zu öffnen.~~
3. ~~Ziehen Sie das Symbol `ClipboxAI.app` in Ihren Ordner **Programme**.~~
4. ~~Werfen Sie das eingehängte Image aus und öffnen Sie die App aus **Programme**.~~

Falls macOS das Öffnen der App verhindert (Gatekeeper), öffnen Sie **Systemeinstellungen → Datenschutz & Sicherheit** und klicken Sie auf **Trotzdem öffnen**, oder klicken Sie mit der rechten Maustaste auf die App und wählen Sie **Öffnen**.

## Erster Start

Beim ersten Start führt ClipboxAI Sie durch eine kurze Einrichtung:

- **Menüleisten-Eintrag aktivieren**, damit die App in Ihrer Menüleiste lebt.
- **Berechtigungen erteilen**, die zum Überwachen der Zwischenablage im Hintergrund benötigt werden (siehe [Berechtigungen](/de/guide/permissions)).
- *(Optional)* **Einen Cloud-KI-Anbieter verbinden** unter **Einstellungen → KI**, falls Sie KI-Aktionen wünschen.

Erteilen Sie die Berechtigungen, wenn Sie dazu aufgefordert werden. Sie können sie jederzeit in **Systemeinstellungen → Datenschutz & Sicherheit** ändern.

## Updates

- **Mac-App-Store-Version**: automatisch vom App Store aktualisiert.
- ~~**GitHub-Releases-Version**: Laden Sie das neuere Release herunter und ersetzen Sie die App in `Applications`.~~

## Deinstallation

So entfernen Sie ClipboxAI:

1. Beenden Sie die App.
2. Ziehen Sie `ClipboxAI.app` aus `Applications` in den Papierkorb.
3. (Optional) Lokale Daten entfernen:

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## Systemanforderungen

- **macOS**: Sonoma (14) oder neuer
- **Prozessor**: Apple Silicon (M-Serie) oder Intel (64-Bit)
- **Arbeitsspeicher**: mindestens 4 GB, empfohlen 8 GB
- **Speicher**: ca. 50 MB

## Fehlerbehebung

Falls Probleme bei der Installation auftreten:

- **macOS blockiert die App**: Öffnen Sie **Systemeinstellungen → Datenschutz & Sicherheit** und klicken Sie auf **Trotzdem öffnen**.
- **Notarisierungswarnung**: Laden Sie einen signierten/notariellen Build aus dem Mac App Store herunter.

Weitere Hilfe finden Sie im [Leitfaden zur Fehlerbehebung](/de/guide/troubleshooting).
