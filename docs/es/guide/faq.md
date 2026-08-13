# Preguntas frecuentes

**P: ¿Qué es ClipboardxAI?**

R: ClipboardxAI es un gestor de portapapeles inteligente para macOS. Mantiene un historial buscable de todo lo que copia y le permite ejecutar acciones sobre él — resumir, traducir, ordenar texto o enviarlo a un modelo de IA en la nube.

**P: ¿Qué versiones de macOS son compatibles?**

R: macOS 14 Sonoma o posterior, optimizado para Apple Silicon (serie M) con compatibilidad para Intel.

**P: ¿Cómo lo instalo?**

R: Descárguelo desde la [Mac App Store](/es/) (recomendado) o obtenga la última compilación desde [GitHub Releases](https://github.com/clipboardxAI). Consulte la [Guía de instalación](/es/guide/installation).

**P: ¿Es gratuito ClipboardxAI?**

R: ClipboardxAI es una app de pago en el Mac App Store. Tras la compra, todas las herramientas locales integradas están incluidas y no se requiere cuenta. Las acciones de IA en la nube usan la API key de *su propio* proveedor, por lo que solo paga al proveedor de IA directamente — no hay ninguna capa de pago adicional en la aplicación.

**P: ¿Qué proveedores de IA son compatibles?**

R: Cualquier proveedor compatible con OpenAI: DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral y el Ollama local — además de OpenAI, Anthropic y Gemini. Su clave se almacena en el Keychain.

**P: ¿Funciona sin conexión?**

R: Sí. El historial del portapapeles y las herramientas locales integradas (extraer enlaces, contar estadísticas, colapsar líneas en blanco y más) se ejecutan completamente en su Mac sin conexión a internet.

**P: ¿Son privados mis datos del portapapeles?**

R: Su historial permanece en su dispositivo. La IA en la nube es opcional y envía el contenido solo al proveedor que configure, usando una clave de su Keychain. Nunca recibimos ni almacenamos sus fragmentos, y no hay telemetría. Consulte la [Política de privacidad](/es/guide/privacy).

**P: ¿Cómo añado más acciones?**

R: Explore el [Marketplace](/es/marketplace/) y haga clic en **Instalar** en cualquier acción. Abre la aplicación mediante un enlace profundo y aparece en su lista de **Instaladas**.

**P: ¿Cómo actualizo la aplicación?**

R: La versión de la Mac App Store se actualiza automáticamente. Para las compilaciones de GitHub, descargue la última versión y reemplace la aplicación en `Applications`.

**P: ¿Cómo informo de errores o solicito funciones?**

R: Abra un issue en el [repositorio de GitHub](https://github.com/clipboardxAI). Incluya su versión de macOS, la versión de la aplicación y los pasos para reproducirlo.

**P: ¿Dónde se almacenan mis datos?**

R: En el contenedor sandbox:

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

Las API keys residen en el Keychain del sistema, no en esa carpeta.
