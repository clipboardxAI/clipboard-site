# Permisos de macOS

ClipboardxAI puede solicitar algunos permisos de macOS para ofrecer la mejor experiencia. Esta página explica para qué sirve cada permiso y cómo gestionarlo.

## Portapapeles / Automatización

Para capturar su portapapeles en segundo plano y pegar los resultados de vuelta, ClipboardxAI usa el acceso de Automatización de macOS.

**Para qué se usa**: leer el portapapeles actual cuando copia y escribir los resultados de vuelta cuando ejecuta una acción.

**Gestionar**: **Configuración del sistema → Privacidad y seguridad → Automatización** → active **ClipboardxAI**.

Conceda el acceso cuando se le solicite durante el primer inicio. Puede gestionarlo o revocarlo en cualquier momento.

## Accesibilidad (opcional)

Algunas compilaciones usan Accesibilidad para ofrecer atajos de teclado globales y activar el panel de historial desde cualquier lugar.

**Para qué se usa**: abrir el panel de historial y ejecutar acciones mediante teclas de acceso rápido, incluso cuando la aplicación no tiene el foco.

**Gestionar**: **Configuración del sistema → Privacidad y seguridad → Accesibilidad** → active **ClipboardxAI**.

## Notificaciones (opcional)

ClipboardxAI puede mostrar notificaciones cuando una acción de larga duración finaliza o requiere atención.

**Para qué se usa**: avisarle cuando una acción termina o cuando se requiere configuración.

**Gestionar**: **Configuración del sistema → Notificaciones** → **ClipboardxAI**.

## Acceso total al disco (opcional)

No se requiere para un uso normal. Solo es necesario si desea que la aplicación lea fragmentos de ubicaciones protegidas por el sistema.

**Gestionar**: **Configuración del sistema → Privacidad y seguridad → Acceso total al disco**.

Este permiso es opcional y solo se necesita en escenarios avanzados.

## Restablecer un permiso con Terminal

Si se descartó un cuadro de diálogo de permiso o el estado es inconsistente, puede restablecer los avisos de permiso de macOS usando `tccutil`:

```bash
# Restablecer los avisos de automatización/accesibilidad para ClipboardxAI
tccutil reset All com.w3cub.clipboard
```

Tras ejecutar `tccutil`, reinicie la aplicación y vuelva a activar la función para que se le solicite de nuevo.

## Solución de problemas

- Si el historial del portapapeles no captura las copias, compruebe que el permiso de **Automatización** esté concedido.
- Si los atajos globales no funcionan, compruebe el permiso de **Accesibilidad**.
- Tras cambiar los permisos, salga y vuelva a abrir ClipboardxAI siempre para que los cambios surtan efecto.

Para obtener más ayuda, visite la [guía de solución de problemas](/es/guide/troubleshooting).
