# Instalación

ClipboardxAI está disponible para macOS.

## Opciones de descarga

### Mac App Store (recomendado)

- **Descargar**: busque **ClipboardxAI** en la Mac App Store, o abra el enlace desde la [página de inicio](/es/).
- La versión de la Mac App Store ofrece actualizaciones automáticas e integración perfecta con macOS.

> ~~Si aún no hay un enlace de la Mac App Store disponible, utilice la compilación de GitHub Releases que aparece a continuación.~~

### ~~GitHub Releases (alternativa)~~ (no disponible por ahora)

~~Puede descargar la última compilación directamente desde [GitHub Releases](https://github.com/clipboardxAI). Tenga en cuenta que esta versión no recibe actualizaciones automáticas.~~

## Pasos de instalación

### Mac App Store

1. Abra el enlace de descarga anterior o busque "ClipboardxAI" en la Mac App Store.
2. Haga clic en **Obtener** para descargar la aplicación.
3. La aplicación se instala automáticamente — ábrala desde **Aplicaciones** o **Launchpad**.

### ~~GitHub Releases~~

1. ~~Descargue el último `.dmg` desde la página de Releases.~~
2. ~~Haga doble clic en el `.dmg` descargado para abrirlo.~~
3. ~~Arrastre el icono `ClipboardxAI.app` a su carpeta **Aplicaciones**.~~
4. ~~Expulse la imagen montada y abra la aplicación desde **Aplicaciones**.~~

Si macOS impide abrir la aplicación (Gatekeeper), abra **Configuración del sistema → Privacidad y seguridad** y haga clic en **Abrir de todos modos**, o haga clic derecho en la aplicación y elija **Abrir**.

## Primer inicio

En el primer inicio, ClipboardxAI le guía a través de una breve configuración:

- **Habilitar el elemento de la barra de menú** para que la aplicación resida en su barra de menú.
- **Conceder permisos** que necesita para supervisar el portapapeles en segundo plano (consulte [Permisos](/es/guide/permissions)).
- *(Opcional)* **Conectar un proveedor de IA en la nube** en **Ajustes → IA** si desea acciones de IA.

Conceda los permisos cuando se lo soliciten. Puede cambiarlos en cualquier momento en **Configuración del sistema → Privacidad y seguridad**.

## Actualizaciones

- **Versión de la Mac App Store**: se actualiza automáticamente mediante la App Store.
- ~~**Versión de GitHub Releases**: descargue la versión más reciente y reemplace la aplicación en `Applications`.~~

## Desinstalación

Para eliminar ClipboardxAI:

1. Salga de la aplicación.
2. Arrastre `ClipboardxAI.app` desde `Applications` a la Papelera.
3. (Opcional) Elimine los datos locales:

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## Requisitos del sistema

- **macOS**: Sonoma (14) o posterior
- **CPU**: Apple Silicon (serie M) o Intel (64 bits)
- **Memoria**: 4 GB mínimo, 8 GB recomendado
- **Almacenamiento**: ~50 MB

## Solución de problemas

Si encuentra problemas durante la instalación:

- **macOS bloquea la aplicación**: abra **Configuración del sistema → Privacidad y seguridad** y haga clic en **Abrir de todos modos**.
- **Aviso de notarización**: descargue una compilación firmada y notarizada desde la Mac App Store.

Para obtener más ayuda, consulte la [guía de solución de problemas](/es/guide/troubleshooting).
