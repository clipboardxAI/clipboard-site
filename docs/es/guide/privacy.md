# Política de privacidad

ClipboxAI es un gestor de portapapeles inteligente para macOS. Su privacidad es nuestra prioridad.

## Diseño local-primero

- Su historial del portapapeles se almacena completamente en su Mac.
- Las acciones locales integradas (extraer enlaces, contar estadísticas, colapsar líneas en blanco y sugerencias de ML en el dispositivo) se ejecutan totalmente sin conexión.
- No se requiere cuenta ni registro para usar la aplicación principal.
- No se requiere conexión a internet para la gestión local del portapapeles ni para las funciones en el dispositivo.

## IA en la nube (opcional)

ClipboxAI puede usar opcionalmente proveedores de IA en la nube (como DeepSeek, MiniMax, GLM, Kimi, Mistral o un servidor Ollama local) para potenciar acciones avanzadas como resumir, traducir y avisos personalizados.

- Cuando se activa, el texto seleccionado o el contenido del portapapeles se envía **directamente al proveedor que configure**, usando **su propia API key**.
- Su API key solo se almacena en el Keychain de su Mac y nunca se nos sube.
- Puede desactivar la IA en la nube en cualquier momento y seguir usando las funciones locales.
- El historial del portapapeles **no** se envía a la nube automáticamente; las solicitudes en la nube solo se activan cuando ejecuta una acción en la nube.

## Lo que no recopilamos

- No recopilamos el contenido de su portapapeles, documentos ni archivos.
- No rastreamos su actividad, comportamiento de navegación ni patrones de uso.
- No operamos ningún servidor que reciba sus datos del portapapeles.
- No incluimos SDK de analítica, publicidad o seguimiento de terceros.
- No tenemos ningún sistema de telemetría.

## Qué datos se almacenan localmente

Los siguientes datos se almacenan solo en su dispositivo:

- **Historial del portapapeles**: elementos recientes para acceso rápido (guardados en su Mac).
- **Ajustes de la aplicación**: tema, preferencia de idioma, acciones activadas, configuración del proveedor.
- **API keys**: almacenadas de forma segura en el Keychain local (solo si configura un proveedor en la nube).
- **Acciones personalizadas**: avisos y configuración que cree.
- **Registros**: registros de depuración para la solución de problemas (pueden eliminarse en cualquier momento).

## Permisos usados por la aplicación

- **Accesibilidad / Acceso total al disco**: necesario para leer el portapapeles del sistema y ofrecer atajos globales.
- **Notificaciones**: opcional, para avisos de finalización en solicitudes en la nube de larga duración.

Puede gestionar estos permisos en **Configuración del sistema → Privacidad y seguridad** en cualquier momento.

## Compras dentro de la aplicación / Licencia

Las compras de licencia (si las hay) las procesa Apple a través de la Mac App Store. ClipboxAI no recibe ni almacena su información de pago. Los recibos de licencia se almacenan localmente para verificar la titularidad.

## Servicios de terceros

ClipboxAI en sí no incluye ningún servicio de analítica, publicidad o seguimiento de terceros. Cuando activa un proveedor de IA en la nube, sus solicitudes las gestiona ese proveedor bajo su propia política de privacidad.

## Solicitudes de privacidad

Dado que ClipboxAI almacena todos los datos localmente en su dispositivo, no conservamos ningún dato personal en nuestros servidores. Si tiene preguntas sobre la privacidad, póngase en contacto con nosotros.

## Contacto

Para preguntas sobre privacidad, abra un issue en [GitHub Issues](https://github.com/clipboxAI/clipboard-site/issues) o envíenos un correo a clipboxai@w3cub.com.
