# Personalización

Haga que ClipboxAI funcione a su manera. Esta guía cubre los ajustes que puede ajustar.

## General

Abra **ClipboxAI → Ajustes** (o pulse `Cmd+,`).

- **Idioma**: Inglés, 简体中文, 繁體中文, 日本語.
- **Inicio al iniciar sesión**: inicia la aplicación automáticamente al iniciar sesión.
- **Apariencia**: Claro, Oscuro o Sistema (sigue a macOS).

## Configuración de IA

Configure la IA en la nube en **Ajustes → IA**:

| Ajuste | Opciones | Descripción |
|---------|---------|-------------|
| **Proveedor** | DeepSeek, MiniMax, GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic, Gemini | El servicio compatible con OpenAI a llamar |
| **API Key** | su clave | Almacenada en el **Keychain**, nunca se escribe en disco en texto plano |
| **Modelo** | según proveedor | El modelo usado para las acciones de IA |
| **IA en la nube activada** | Activado / Desactivado | Interruptor maestro para enviar fragmentos a la nube |

La IA en la nube está **desactivada por defecto**. Cuando se activa, su fragmento se envía solo al proveedor que configuró.

## Acciones

Personalice cómo se comportan las herramientas:

- **Ejecutar automáticamente al generar**: cuando está activado, la herramienta seleccionada se ejecuta automáticamente en el momento en que copia.
- **Aplicaciones excluidas**: las aplicaciones de esta lista se omiten por la supervisión del portapapeles y la ejecución automática (p. ej., gestores de contraseñas).
- **Orden de herramientas**: en la ventana de la Herramienta de IA, arrastre las herramientas instaladas para reordenarlas; su orden se recuerda.

## Privacidad

Abra **Ajustes → Privacidad**:

- **Opción de IA en la nube**: el interruptor maestro para enviar datos a un proveedor.
- **Aplicaciones excluidas**: detenga la captura de aplicaciones concretas.
- **Controles del historial**: gestione cuánto tiempo se conservan los fragmentos en su dispositivo.

Todo el historial permanece local. No subimos fragmentos ni ejecutamos analítica.

## Marketplace

Gestione las acciones instaladas:

- **Explorar**: abra **Marketplace** desde la ventana de la Herramienta de IA o desde el sitio.
- **Instalar**: haga clic en **Instalar** en una acción para añadirla mediante un enlace profundo.
- **Eliminar**: desinstale una acción de su lista de **Instaladas**.

## Barra de menú

- **Mostrar en la barra de menú**: active/desactive el icono de la bandeja.
- **Salir al cerrar**: elija si la aplicación sigue en ejecución en segundo plano.

## Sugerencias

- Mantenga la IA en la nube desactivada hasta que la necesite — las herramientas locales cubren la mayoría de la limpieza diaria.
- Añada gestores de contraseñas y aplicaciones de entrada segura a **Aplicaciones excluidas** para que los secretos nunca se capturen.
- Combine la ejecución automática con una herramienta local para una limpieza de texto sin manos en cada copia.
