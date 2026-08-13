# Fehlerbehebung

Diese Seite sammelt häufige Probleme mit ClipboardxAI unter macOS und deren Lösung.

## Die App startet nicht oder stürzt beim Start ab

1. Stellen Sie sicher, dass Ihre macOS-Version die Mindestanforderung erfüllt (macOS 14 Sonoma+).
2. Beenden Sie die App und starten Sie sie neu.
3. Starten Sie Ihren Mac neu.
4. ~~Falls von GitHub Releases heruntergeladen, versuchen Sie den neuesten oder notariellen Build.~~
5. Falls die Probleme bestehen bleiben, sammeln Sie Protokolle (unten) und öffnen Sie ein Issue.

## Der Zwischenablagen-Verlauf erfasst keine Kopien

Symptome: Neue Kopien erscheinen nicht im Verlaufs-Panel.

Checkliste:

1. Stellen Sie sicher, dass die App läuft und ihr Menüleisten-Symbol sichtbar ist.
2. Bestätigen Sie, dass **Clipboard monitoring** unter **Einstellungen → Privacy / General** aktiviert ist.
3. Die App benötigt die entsprechende macOS-Berechtigung, um das Pasteboard im Hintergrund zu lesen — siehe [Berechtigungen](/de/guide/permissions).
4. Einige Apps (Passwort-Manager, sichere Eingabefelder) blockieren den Zwischenablage-Zugriff absichtlich; das ist erwartungsgemäß.

## Cloud-KI-Aktionen liefern kein Ergebnis

Symptome: Eine KI-Aktion schlägt fehl, hängt oder zeigt einen Konfigurationsfehler.

Checkliste:

1. Öffnen Sie **Einstellungen → KI** und bestätigen Sie, dass ein Anbieter ausgewählt und ein Schlüssel eingegeben ist.
2. Prüfen Sie, dass der Schlüssel für diesen Anbieter gültig ist und Kontingent/Guthaben besitzt.
3. Prüfen Sie Ihre Netzwerkverbindung — Cloud-KI benötigt Internetzugriff.
4. Bestätigen Sie, dass der ausgewählte Modellname für den Anbieter korrekt ist.
5. Falls das Konfigurations-Banner weiterhin im KI-Werkzeug-Fenster erscheint, ist der Schlüssel nicht im Keychain gespeichert; geben Sie ihn erneut ein.

## Marketplace-Installation fügt die Aktion nicht hinzu

Symptome: Ein Klick auf **Install** bewirkt nichts, oder die App öffnet nicht.

Checkliste:

1. Der Deep-Link `clipboardxai://install?action=<id>` muss von der installierten App verarbeitet werden — stellen Sie sicher, dass ClipboardxAI installiert ist und läuft.
2. Falls Ihr Browser den Deep-Link blockiert, kopieren Sie ihn und öffnen Sie ihn manuell, oder installieren Sie über den Reiter **Marketplace** innerhalb der App.
3. Prüfen Sie, dass die Aktions-ID weiterhin im Marketplace veröffentlicht ist.

## Zurücksetzen der App

Um Einstellungen zurückzusetzen und lokale Daten zu löschen:

1. Beenden Sie ClipboardxAI.
2. Entfernen Sie den Container (dies löscht Verlauf und Einstellungen):

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. Öffnen Sie die App erneut und konfigurieren Sie sie neu. API-Schlüssel im Keychain müssen ggf. separat in der **Keychain Access** entfernt werden.

## So sammeln Sie Debug-Protokolle

```bash
# Copy logs to Desktop for sharing
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

Öffnen Sie anschließend ein Issue auf [GitHub](https://github.com/clipboardxAI) und hängen Sie die Protokolle an.

## Ein Issue melden

Wenn Sie ein Issue öffnen, geben Sie an:

- macOS-Version (Apple-Menü → Über diesen Mac)
- ClipboardxAI-Version (App-Menü → Über)
- Schritte zur Reproduktion
- Protokolle (siehe oben)

Das hilft den Maintainern, das Problem schneller zu identifizieren und zu beheben.
