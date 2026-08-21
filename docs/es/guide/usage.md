# Guía de uso

## Historial del portapapeles

ClipboxAI se ejecuta desde su **barra de menú**. Cada vez que copia algo, se añade a su historial.

- Haga clic en el icono de la barra de menú para abrir el panel de historial.
- Pase el cursor sobre un elemento y pulse el atajo de la acción, o haga clic para copiarlo de nuevo al portapapeles.
- Use el campo de búsqueda para encontrar un elemento por su texto.

## La ventana de herramientas de IA

La ventana **Herramienta de IA** es donde se ejecutan las acciones. Utiliza un diseño dividido:

- **Izquierda** — una lista de herramientas, agrupadas en:
  - **IA integrada** — resumen, traducción y otras acciones de IA.
  - **Local integrada** — herramientas sin conexión (extraer enlaces, contar estadísticas, colapsar líneas en blanco).
  - **Instaladas** — acciones que añadió desde el Marketplace. Puede arrastrar para **reordenarlas**.
- **Derecha** — dos paneles: el fragmento **original** a un lado y el **resultado** al otro.

Las herramientas de IA muestran una insignia de "nube"; las herramientas locales muestran una insignia de "dispositivo", para que siempre sepa si una acción usa la red.

## Ejecutar una acción

1. Seleccione una herramienta de la lista de la izquierda (o acepte una sugerencia inteligente).
2. El fragmento actual aparece en el panel **original**.
3. El resultado se genera en el panel **resultado**.

### Ejecución automática

Active **Ejecutar automáticamente al generar** en el pie de la ventana. Cuando está activado, la herramienta seleccionada se ejecuta automáticamente en el momento en que copia algo — sin necesidad de clic manual. Las herramientas locales nunca sobrescriben su portapapeles, por lo que la ejecución automática es segura.

## Herramientas locales integradas

Estas se ejecutan totalmente sin conexión en su Mac:

- **Extraer enlaces** — devuelve todas las URL encontradas en el texto.
- **Contar estadísticas** — recuento de palabras / caracteres / líneas / frases.
- **Colapsar líneas en blanco** — elimina las líneas vacías del texto pegado.

## Configuración de la IA en la nube

Para usar acciones de IA, conecte un proveedor en **Ajustes → IA**:

1. Elija un proveedor — **DeepSeek**, **MiniMax**, **Zhipu GLM**, **Kimi (Moonshot)**, **Mistral**, **Ollama** (local) u otro servicio compatible con OpenAI.
2. Pegue su **API key**. Se almacena en el **Keychain**, nunca se escribe en disco en texto plano.
3. Elija un modelo.
4. La IA en la nube está desactivada por defecto. Cuando se activa, su fragmento se envía solo al proveedor que configuró.

Si no se ha establecido ninguna clave, el banner de configuración le lo recuerda dentro de la ventana de la Herramienta de IA.

## Marketplace

1. Abra **Marketplace** desde la ventana de la Herramienta de IA (o la página [Marketplace](/es/marketplace/) del sitio).
2. Haga clic en **Instalar** en una acción. Esto abre la aplicación mediante el enlace profundo `clipboxai://install?action=<id>` y añade la acción a su lista de **Instaladas**.

## Atajos de teclado

| Atajo | Acción |
|----------|--------|
| `Cmd+Shift+V` | Abrir el historial del portapapeles |
| `Cmd+,` | Abrir Ajustes |
| `Cmd+W` | Cerrar ventana |
| `Cmd+Q` | Salir de la aplicación |

> Los atajos exactos pueden variar según la compilación; consulte **Ajustes → Atajos** en la aplicación.

## Ajustes

Abra **ClipboxAI → Ajustes** (o `Cmd+,`):

- **General**: idioma, inicio al iniciar sesión, tema de apariencia.
- **IA**: proveedor en la nube, modelo y API key (Keychain).
- **Acciones**: interruptor de ejecución automática, aplicaciones excluidas y orden de las herramientas.
- **Privacidad**: opción de IA en la nube, aplicaciones excluidas y controles del historial.
- **Marketplace**: explore y gestione las acciones instaladas.
