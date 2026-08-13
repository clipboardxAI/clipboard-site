# Nutzungsanleitung

## Zwischenablagen-Verlauf

ClipboardxAI läuft in Ihrer **Menüleiste**. Jedes Mal, wenn Sie etwas kopieren, wird es Ihrem Verlauf hinzugefügt.

- Klicken Sie auf das Menüleisten-Symbol, um das Verlaufs-Panel zu öffnen.
- Fahren Sie mit der Maus über einen Eintrag und drücken Sie den Aktions-Shortcut, oder klicken Sie, um ihn zurück in die Zwischenablage zu kopieren.
- Nutzen Sie das Suchfeld, um einen Eintrag anhand des Texts zu finden.

## Das KI-Werkzeug-Fenster

Das **KI-Werkzeug**-Fenster ist der Ort, an dem Aktionen ausgeführt werden. Es verwendet ein geteiltes Layout:

- **Links** — eine Liste von Werkzeugen, gruppiert in:
  - **Built-in AI** — Zusammenfassung, Übersetzung und weitere KI-Aktionen.
  - **Built-in Local** — Offline-Werkzeuge (extract links, count stats, collapse blank lines).
  - **Installed** — Aktionen, die Sie aus dem Marketplace hinzugefügt haben. Sie können sie per Drag & Drop **neu anordnen**.
- **Rechts** — zwei Bereiche: der **originale** Eintrag auf der einen und das **Ergebnis** auf der anderen Seite.

KI-Werkzeuge zeigen ein „cloud"-Abzeichen; lokale Werkzeuge zeigen ein „device"-Abzeichen, sodass Sie immer wissen, ob eine Aktion das Netzwerk nutzt.

## Ausführen einer Aktion

1. Wählen Sie ein Werkzeug aus der linken Liste (oder nehmen Sie einen intelligenten Vorschlag an).
2. Der aktuelle Eintrag erscheint im Bereich **original**.
3. Das Ergebnis wird im Bereich **result** erzeugt.

### Auto-run

Aktivieren Sie **Auto-run on output** in der Fußzeile des Fensters. Wenn aktiviert, läuft das ausgewählte Werkzeug automatisch in dem Moment, in dem Sie etwas kopieren — ohne manuellen Klick. Lokale Werkzeuge überschreiben Ihre Zwischenablage niemals, sodass Auto-run sicher ist.

## Eingebaute lokale Werkzeuge

Diese laufen vollständig offline auf Ihrem Mac:

- **Extract Links** — gibt jede im Text gefundene URL zurück.
- **Count Stats** — Wort-/Zeichen-/Zeilen-/Satzzählung.
- **Collapse Blank Lines** — entfernt leere Zeilen aus eingefügtem Text.

## Cloud-KI-Einrichtung

Um KI-Aktionen zu nutzen, verbinden Sie einen Anbieter unter **Einstellungen → KI**:

1. Wählen Sie einen Anbieter — **DeepSeek**, **MiniMax**, **Zhipu GLM**, **Kimi (Moonshot)**, **Mistral**, **Ollama** (lokal) oder einen anderen OpenAI-kompatiblen Dienst.
2. Fügen Sie Ihren **API-Schlüssel** ein. Er wird im **Keychain** gespeichert, niemals im Klartext auf die Festplatte geschrieben.
3. Wählen Sie ein Modell.
4. Cloud-KI ist standardmäßig deaktiviert. Wenn aktiviert, wird Ihr Eintrag nur an den von Ihnen konfigurierten Anbieter gesendet.

Falls kein Schlüssel festgelegt ist, erinnert Sie das Konfigurations-Banner im KI-Werkzeug-Fenster daran.

## Marketplace

1. Öffnen Sie den **Marketplace** aus dem KI-Werkzeug-Fenster (oder der [Marketplace](/de/marketplace/)-Seite der Website).
2. Klicken Sie bei einer Aktion auf **Install**. Dadurch wird die App über den Deep-Link `clipboardxai://install?action=<id>` geöffnet und die Aktion Ihrer Liste **Installed** hinzugefügt.

## Tastenkürzel

| Tastenkürzel | Aktion |
|----------|--------|
| `Cmd+Shift+V` | Zwischenablagen-Verlauf öffnen |
| `Cmd+,` | Einstellungen öffnen |
| `Cmd+W` | Fenster schließen |
| `Cmd+Q` | Anwendung beenden |

> Die genauen Tastenkürzel können je nach Build variieren; prüfen Sie **Einstellungen → Shortcuts** in der App.

## Einstellungen

Öffnen Sie **ClipboardxAI → Einstellungen** (oder `Cmd+,`):

- **General**: Sprache, Start beim Anmelden, Erscheinungsbild-Theme.
- **AI**: Cloud-Anbieter, Modell und API-Schlüssel (Keychain).
- **Actions**: Auto-run-Schalter, ausgeschlossene Apps und Werkzeug-Reihenfolge.
- **Privacy**: Cloud-KI-Opt-in, ausgeschlossene Apps und Verlaufssteuerung.
- **Marketplace**: Installierte Aktionen durchsuchen und verwalten.
