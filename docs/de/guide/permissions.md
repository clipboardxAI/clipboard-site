# macOS-Berechtigungen

ClipboxAI kann einige macOS-Berechtigungen anfragen, um das beste Erlebnis zu bieten. Diese Seite erklärt, wofür jede Berechtigung dient und wie Sie sie verwalten.

## Zwischenablage / Automation

Um Ihre Zwischenablage im Hintergrund zu erfassen und Ergebnisse zurück einzufügen, verwendet ClipboxAI den macOS Automation-Zugriff.

**Verwendungszweck**: Das aktuelle Pasteboard beim Kopieren lesen und Ergebnisse zurückschreiben, wenn Sie eine Aktion ausführen.

**Verwalten**: **Systemeinstellungen → Datenschutz & Sicherheit → Automation** → **ClipboxAI** aktivieren.

Erteilen Sie den Zugriff, wenn Sie beim ersten Start dazu aufgefordert werden. Sie können ihn jederzeit verwalten oder widerrufen.

## Accessibility (optional)

Einige Builds verwenden Accessibility, um globale Tastenkürzel bereitzustellen und das Verlaufs-Panel von überall zu aktivieren.

**Verwendungszweck**: Das Verlaufs-Panel öffnen und Aktionen über Hotkeys ausführen, selbst wenn die App nicht den Fokus hat.

**Verwalten**: **Systemeinstellungen → Datenschutz & Sicherheit → Accessibility** → **ClipboxAI** aktivieren.

## Benachrichtigungen (optional)

ClipboxAI kann Benachrichtigungen anzeigen, wenn eine länger laufende Aktion abgeschlossen ist oder Aufmerksamkeit benötigt.

**Verwendungszweck**: Sie zu benachrichtigen, wenn eine Aktion endet oder eine Konfiguration erforderlich ist.

**Verwalten**: **Systemeinstellungen → Benachrichtigungen** → **ClipboxAI**.

## Full Disk Access (optional)

Für die normale Nutzung nicht erforderlich. Nur nötig, wenn die App Ausschnitte aus systemgeschützten Orten lesen soll.

**Verwalten**: **Systemeinstellungen → Datenschutz & Sicherheit → Full Disk Access**.

Diese Berechtigung ist optional und nur in fortgeschrittenen Szenarien nötig.

## Zurücksetzen einer Berechtigung mit Terminal

Falls ein Berechtigungsdialog abgelehnt wurde oder der Zustand inkonsistent ist, können Sie die macOS-Berechtigungsabfragen mit `tccutil` zurücksetzen:

```bash
# Reset automation/accessibility prompts for ClipboxAI
tccutil reset All com.w3cub.clipboard
```

Nach dem Ausführen von `tccutil` starten Sie die App neu und lösen die Funktion erneut aus, um erneut gefragt zu werden.

## Fehlerbehebung

- Falls der Zwischenablagen-Verlauf Kopien nicht erfasst, prüfen Sie, ob die Berechtigung **Automation** erteilt ist.
- Falls globale Tastenkürzel nicht funktionieren, prüfen Sie die Berechtigung **Accessibility**.
- Ändern Sie nach dem Anpassen von Berechtigungen immer ClipboxAI, damit die Änderungen wirksam werden.

Weitere Hilfe finden Sie im [Leitfaden zur Fehlerbehebung](/de/guide/troubleshooting).
