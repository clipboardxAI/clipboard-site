# Anpassung

Machen Sie ClipboardxAI so, wie Sie arbeiten. Dieser Leitfaden behandelt die Einstellungen, die Sie anpassen können.

## Allgemein

Öffnen Sie **ClipboardxAI → Einstellungen** (oder drücken Sie `Cmd+,`).

- **Language**: Englisch, 简体中文, 繁體中文, 日本語.
- **Launch at Login**: startet die App automatisch bei der Anmeldung.
- **Appearance**: Hell, Dunkel oder System (folgt macOS).

## KI-Konfiguration

Richten Sie Cloud-KI unter **Einstellungen → KI** ein:

| Einstellung | Optionen | Beschreibung |
|---------|---------|-------------|
| **Provider** | DeepSeek, MiniMax, GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic, Gemini | Der aufzurufende OpenAI-kompatible Dienst |
| **API Key** | Ihr Schlüssel | Im **Keychain** gespeichert, niemals im Klartext auf die Festplatte geschrieben |
| **Model** | pro Anbieter | Das für KI-Aktionen verwendete Modell |
| **Cloud AI enabled** | Ein / Aus | Hauptschalter zum Senden von Einträgen in die Cloud |

Cloud-KI ist **standardmäßig deaktiviert**. Wenn aktiviert, wird Ihr Eintrag nur an den von Ihnen konfigurierten Anbieter gesendet.

## Aktionen

Passen Sie das Verhalten der Werkzeuge an:

- **Auto-run on output**: Wenn aktiviert, läuft das ausgewählte Werkzeug automatisch in dem Moment, in dem Sie kopieren.
- **Excluded apps**: Hier aufgeführte Apps werden von der Zwischenablagen-Überwachung und Auto-run übersprungen (z. B. Passwort-Manager).
- **Tool order**: Ziehen Sie im KI-Werkzeug-Fenster installierte Werkzeuge, um sie neu anzuordnen; Ihre Reihenfolge wird gemerkt.

## Datenschutz

Öffnen Sie **Einstellungen → Privacy**:

- **Cloud AI opt-in**: Der Hauptschalter zum Senden von Daten an einen Anbieter.
- **Excluded apps**: Stoppt die Erfassung bestimmter Apps.
- **History controls**: Verwaltet, wie lange Einträge auf Ihrem Gerät aufbewahrt werden.

Der gesamte Verlauf bleibt lokal. Wir laden Einträge nicht hoch und führen keine Analysen durch.

## Marketplace

Verwalten Sie installierte Aktionen:

- **Browse**: Öffnen Sie den **Marketplace** aus dem KI-Werkzeug-Fenster oder der Website.
- **Install**: Klicken Sie bei einer Aktion auf **Install**, um sie über Deep-Link hinzuzufügen.
- **Remove**: Deinstallieren Sie eine Aktion aus Ihrer Liste **Installed**.

## Menüleiste

- **Show in menu bar**: Symbol in der Menüleiste aktivieren/deaktivieren.
- **Quit on close**: Wählen Sie, ob die App im Hintergrund weiterläuft.

## Tipps

- Halten Sie Cloud-KI deaktiviert, bis Sie sie benötigen — lokale Werkzeuge decken die meiste tägliche Bereinigung ab.
- Fügen Sie Passwort-Manager und sichere Eingabe-Apps zu **Excluded apps** hinzu, damit Geheimnisse nie erfasst werden.
- Kombinieren Sie Auto-run mit einem lokalen Werkzeug für die griffbereite Textbereinigung bei jedem Kopiervorgang.
