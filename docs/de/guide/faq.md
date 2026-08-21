# FAQ

**F: Was ist ClipboxAI?**

A: ClipboxAI ist ein intelligenter Zwischenablagen-Manager für macOS. Er hält einen durchsuchbaren Verlauf aller kopierten Inhalte vor und ermöglicht es, Aktionen darauf auszuführen — zusammenfassen, übersetzen, Text aufräumen oder an ein Cloud-KI-Modell senden.

**F: Welche macOS-Versionen werden unterstützt?**

A: macOS 14 Sonoma oder neuer, optimiert für Apple Silicon (M-Serie) mit Intel-Unterstützung.

**F: Wie installiere ich es?**

A: Laden Sie es aus dem [Mac App Store](/de/) (empfohlen) herunter oder holen Sie sich den neuesten Build von ~~[GitHub Releases](https://github.com/clipboxAI)~~. Siehe die [Installationsanleitung](/de/guide/installation).

**F: Ist ClipboxAI kostenlos?**

A: ClipboxAI ist eine kostenpflichtige App im Mac App Store. Nach dem Kauf sind alle eingebauten lokalen Werkzeuge enthalten und es wird kein Konto benötigt. Cloud-KI-Aktionen verwenden den API-Schlüssel *Ihres eigenen* Anbieters, sodass Sie den KI-Anbieter direkt bezahlen — es gibt keine zusätzliche kostenpflichtige Stufe in der App.

**F: Welche KI-Anbieter werden unterstützt?**

A: Jeder OpenAI-kompatible Anbieter: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral und lokales Ollama — plus OpenAI, Anthropic und Gemini. Ihr Schlüssel wird im Keychain gespeichert.

**F: Funktioniert es offline?**

A: Ja. Zwischenablagen-Verlauf und die eingebauten lokalen Werkzeuge (extract links, count stats, collapse blank lines und mehr) laufen vollständig auf Ihrem Mac ohne Internetverbindung.

**F: Sind meine Zwischenablagen-Daten privat?**

A: Ihr Verlauf bleibt auf Ihrem Gerät. Cloud-KI ist opt-in und sendet Inhalte nur an den von Ihnen konfigurierten Anbieter, unter Verwendung eines Schlüssels aus Ihrem Keychain. Wir empfangen oder speichern Ihre Einträge niemals, und es gibt keine Telemetrie. Siehe die [Datenschutzerklärung](/de/guide/privacy).

**F: Wie füge ich weitere Aktionen hinzu?**

A: Durchsuchen Sie den [Marketplace](/de/marketplace/) und klicken Sie bei einer Aktion auf **Install**. Dadurch wird die App über einen Deep-Link geöffnet und sie erscheint in Ihrer Liste **Installed**.

**F: Wie aktualisiere ich die App?**

A: Die Mac-App-Store-Version wird automatisch aktualisiert. ~~Für GitHub-Builds laden Sie das neueste Release herunter und ersetzen die App in `Applications`.~~

**F: Wie melde ich Fehler oder schlage Funktionen vor?**

A: Öffnen Sie ein Issue im [GitHub-Repository](https://github.com/clipboxAI). Geben Sie Ihre macOS-Version, App-Version und Schritte zur Reproduktion an.

**F: Wo werden meine Daten gespeichert?**

A: Im sandboxed-Container:

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

API-Schlüssel liegen im systemeigenen Keychain, nicht in diesem Ordner.
