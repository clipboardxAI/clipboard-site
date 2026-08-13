# Solución de problemas

Esta página recopila problemas comunes con ClipboardxAI en macOS y cómo resolverlos.

## La aplicación no arranca o se cierra al iniciar

1. Asegúrese de que su versión de macOS cumple el mínimo (macOS 14 Sonoma+).
2. Salga y vuelva a abrir la aplicación.
3. Reinicie su Mac.
4. ~~Si la descargó desde GitHub Releases, pruebe la última compilación o la notarizada.~~
5. Si los problemas persisten, recopile los registros (abajo) y abra un issue.

## El historial del portapapeles no captura las copias

Síntomas: las nuevas copias no aparecen en el panel de historial.

Lista de comprobación:

1. Asegúrese de que la aplicación se está ejecutando y su icono de la barra de menú es visible.
2. Confirme que **Supervisión del portapapeles** está activada en **Ajustes → Privacidad / General**.
3. La aplicación necesita el permiso correspondiente de macOS para leer el portapapeles en segundo plano — consulte [Permisos](/es/guide/permissions).
4. Algunas aplicaciones (gestores de contraseñas, campos de entrada segura) bloquean intencionalmente el acceso al portapapeles; esto es esperado.

## Las acciones de IA en la nube no devuelven un resultado

Síntomas: una acción de IA falla, se queda colgada o muestra un error de configuración.

Lista de comprobación:

1. Abra **Ajustes → IA** y confirme que hay un proveedor seleccionado y una clave introducida.
2. Verifique que la clave es válida para ese proveedor y tiene cuota/créditos.
3. Compruebe su conexión de red — la IA en la nube necesita acceso a internet.
4. Confirme que el nombre del modelo seleccionado es correcto para el proveedor.
5. Si el banner de configuración sigue apareciendo en la ventana de la Herramienta de IA, la clave no se ha guardado en el Keychain; vuelva a introducirla.

## La instalación desde el Marketplace no añade la acción

Síntomas: al hacer clic en **Instalar** no pasa nada, o la aplicación no se abre.

Lista de comprobación:

1. El enlace profundo `clipboardxai://install?action=<id>` debe ser gestionado por la aplicación instalada — asegúrese de que ClipboardxAI está instalado y en ejecución.
2. Si su navegador bloquea el enlace profundo, cópielo y ábralo manualmente, o instale desde la pestaña **Marketplace** de la propia aplicación.
3. Compruebe que el ID de la acción sigue publicado en el marketplace.

## Restablecer la aplicación

Para restablecer los ajustes y borrar los datos locales:

1. Salga de ClipboardxAI.
2. Elimine el contenedor (esto borra el historial y los ajustes):

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. Vuelva a abrir la aplicación y reconfigúrela. Las API keys del Keychain deben eliminarse por separado en **Acceso a llaves** si lo desea.

## Cómo recopilar registros de depuración

```bash
# Copiar los registros al Escritorio para compartirlos
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

A continuación, abra un issue en [GitHub](https://github.com/clipboardxAI) y adjunte los registros.

## Informar de un problema

Al abrir un issue, incluya:

- Versión de macOS (menú Apple → Acerca de este Mac)
- Versión de ClipboardxAI (menú de la aplicación → Acerca de)
- Pasos para reproducirlo
- Registros (ver arriba)

Esto ayuda a los mantenedores a identificar y corregir el problema más rápido.
