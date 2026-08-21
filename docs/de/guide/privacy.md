# Datenschutzerklärung

ClipboxAI ist ein intelligenter Zwischenablagen-Manager für macOS. Ihre Privatsphäre hat für uns Priorität.

## Local-First-Design

- Ihr Zwischenablagen-Verlauf wird vollständig auf Ihrem Mac gespeichert.
- Eingebaute lokale Aktionen (extract links, count stats, collapse blank lines und On-Device-ML-Vorschläge) laufen vollständig offline.
- Für die Nutzung der Kern-App ist kein Konto oder Registrierung erforderlich.
- Für die lokale Zwischenablagen-Verwaltung und On-Device-Funktionen ist keine Internetverbindung erforderlich.

## Cloud-KI (Optional)

ClipboxAI kann optional Cloud-KI-Anbieter (wie DeepSeek, MiniMax, GLM, Kimi, Mistral oder einen lokalen Ollama-Server) nutzen, um erweiterte Aktionen wie Zusammenfassen, Übersetzen und benutzerdefinierte Prompts auszuführen.

- Wenn aktiviert, wird der ausgewählte Text oder Zwischenablage-Inhalt **direkt an den von Ihnen konfigurierten Anbieter** gesendet, unter Verwendung **Ihres eigenen API-Schlüssels**.
- Ihr API-Schlüssel wird ausschließlich im Keychain Ihres Macs gespeichert und niemals zu uns hochgeladen.
- Sie können Cloud-KI jederzeit deaktivieren und weiterhin lokale Funktionen nutzen.
- Der Zwischenablagen-Verlauf wird **nicht** automatisch in die Cloud gesendet; Cloud-Anfragen werden nur ausgelöst, wenn Sie eine Cloud-Aktion ausführen.

## Was wir nicht erfassen

- Wir erfassen Ihre Zwischenablage-Inhalte, Dokumente oder Dateien nicht.
- Wir verfolgen Ihre Aktivität, Ihr Surfverhalten oder Nutzungsmuster nicht.
- Wir betreiben keinen Server, der Ihre Zwischenablage-Daten empfängt.
- Wir binden keine Analysesoftware, Werbe- oder Tracking-SDKs von Drittanbietern ein.
- Wir haben kein Telemetrie-System.

## Welche Daten lokal gespeichert werden

Die folgenden Daten werden ausschließlich auf Ihrem Gerät gespeichert:

- **Zwischenablagen-Verlauf**: Aktuelle Einträge für den Schnellzugriff (auf Ihrem Mac).
- **App-Einstellungen**: Theme, Sprachpräferenz, aktivierte Aktionen, Anbieter-Konfiguration.
- **API-Schlüssel**: Sicher im lokalen Keychain gespeichert (nur wenn Sie einen Cloud-Anbieter konfigurieren).
- **Benutzerdefinierte Aktionen**: Prompts und Konfiguration, die Sie erstellen.
- **Protokolle**: Debug-Protokolle zur Fehlerbehebung (können jederzeit gelöscht werden).

## Von der App verwendete Berechtigungen

- **Accessibility / Full Disk Access**: Erforderlich, um die System-Zwischenablage zu lesen und globale Tastenkürzel bereitzustellen.
- **Benachrichtigungen**: Optional, für Abschluss-Hinweise bei länger laufenden Cloud-Anfragen.

Sie können diese Berechtigungen jederzeit in **Systemeinstellungen → Datenschutz & Sicherheit** verwalten.

## In-App-Käufe / Lizenz

Lizenzkäufe (falls vorhanden) werden von Apple über den Mac App Store abgewickelt. ClipboxAI empfängt oder speichert Ihre Zahlungsdaten nicht. Lizenz-Belege werden lokal gespeichert, um den Besitz zu verifizieren.

## Drittanbieter-Dienste

ClipboxAI selbst enthält keine Analysen, Werbung oder Tracking-Dienste von Drittanbietern. Wenn Sie einen Cloud-KI-Anbieter aktivieren, werden Ihre Anfragen von diesem Anbieter gemäß dessen eigener Datenschutzerklärung bearbeitet.

## Datenschutz-Anfragen

Da ClipboxAI alle Daten lokal auf Ihrem Gerät speichert, halten wir keine personenbezogenen Daten auf unseren Servern vor. Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte.

## Kontakt

Für Datenschutz-Fragen öffnen Sie ein Issue unter [GitHub Issues](https://github.com/clipboxAI/clipboard-site/issues) oder schreiben Sie uns an clipboxai@w3cub.com.
