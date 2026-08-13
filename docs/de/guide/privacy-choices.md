# Datenschutz-Optionen

ClipboardxAI ist eine Local-First-Anwendung. Da Ihre Daten auf Ihrem Gerät bleiben, erfassen, verkaufen oder teilen wir keine personenbezogenen Informationen.

## Lokal gespeicherte Daten

ClipboardxAI speichert alle Daten lokal auf Ihrem Mac:

- Zwischenablagen-Verlauf und App-Einstellungen
- Benutzerdefinierte Aktionen und Konfiguration
- API-Schlüssel (im Keychain, nur wenn Sie einen Cloud-Anbieter konfigurieren)
- Debug-Protokolle (falls aktiviert)

Keine dieser Daten wird von der App selbst auf einen Server hochgeladen.

## Cloud-KI-Opt-in

Cloud-KI-Funktionen sind **standardmäßig deaktiviert**. Sie senden Inhalte nur an den von Ihnen gewählten Anbieter, unter Verwendung Ihres eigenen API-Schlüssels und nur, wenn Sie eine Cloud-Aktion auslösen. Sie können konfigurierte Anbieter unter **Einstellungen → KI** einsehen oder löschen.

## Ihre Rechte

Da ClipboardxAI keine personenbezogenen Daten auf unseren Servern erfasst oder speichert, gibt es keine personenbezogenen Daten, auf die wir zugreifen, die wir löschen oder übertragen könnten. Alle Ihre Daten können direkt in der App verwaltet oder durch Entfernen des Container-Ordners der App gelöscht werden:

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

## Do Not Sell

ClipboardxAI verkauft keine personenbezogenen Informationen. Wir verwenden keine Analysesoftware, Werbung oder Tracking-Dienste irgendeiner Art von Drittanbietern.

## Kontakt

Falls Sie Fragen zu Datenschutz-Optionen haben, öffnen Sie ein Issue unter:
`https://github.com/clipboardxAI/clipboard-site/issues`
