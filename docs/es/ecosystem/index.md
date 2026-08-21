---
title: Colaboración del ecosistema
description: Cómo las aplicaciones de terceros para macOS se integran en el Action Marketplace de Clipboard x AI mediante enlaces profundos salientes.
layout: doc
---

# Colaboración del ecosistema

Clipboard x AI es un centro de portapapeles. Pero el trabajo pesado — compresión de archivos, optimización de imágenes, trabajo con PDF — lo hacen mejor aplicaciones hermanas especializadas. El **Action Marketplace** ya incluye una categoría de *software de terceros* donde las acciones delegan directamente en aplicaciones que sus usuarios ya tienen instaladas ([NueZip](https://github.com/w3cub/nuezip), [Nicasa](https://github.com/w3cub/nicasa), …).

Esta página explica cómo funciona la integración y cómo **su** aplicación puede unirse.

## Cómo funciona (delegación saliente)

Una acción de ecosistema es simplemente una entrada del marketplace con un descriptor `execution` en lugar de un aviso:

```json
{
  "id": "nuezip-compress-zip",
  "name": "Compress to ZIP",
  "category": "ecosystem",
  "author": "NueZip",
  "appIcon": "icons/nuezip.png",
  "execution": {
    "kind": "externalApp",
    "scheme": "nuezip",
    "urlTemplate": "nuezip://quickCompress?files={{files}}&extra=zip"
  }
}
```

Cuando el usuario hace clic en **Instalar**, Clipboard x AI registra la acción localmente. Cuando la activa sobre un elemento del portapapeles, la aplicación rellena la plantilla y abre la aplicación de destino mediante `NSWorkspace.open(_:)`:

- `{{files}}` — ruta(s) absoluta(s) del archivo del elemento actual del portapapeles
  (separadas por saltos de línea si hay varios archivos).
- `{{text}}` — el contenido de texto sin formato.
- `{{returnURL}}` — una URL de retorno opcional `clipboxai://callback?…` para
  idas y vueltas estilo x-callback-url (se usa una vez que la aplicación hermana la implemente).

Si la aplicación de destino **no está instalada**, la acción se oculta del panel
hasta que el usuario la instale — sin botones rotos.

## Contrato de esquema de URL para aplicaciones hermanas

Para ser un destino, su aplicación para macOS solo necesita:

1. Registrar un esquema de URL en `Info.plist` (`CFBundleURLTypes`).
2. Gestionar la URL entrante — leer `files` / `text` de la consulta y actuar sobre ellos.
3. (Opcional) Llamar a la `returnURL` al terminar, para que Clipboard x AI pueda mostrar
   un aviso de "finalizado en &lt;App&gt;".

Eso es todo. Sin APIs privadas, sin código compartido — solo un enlace profundo. Las
extensiones de Finder de NueZip y Nicasa son implementaciones de referencia de las que puede copiar.

## Únase al ecosistema

Mantenemos el catálogo en un repositorio público para que cualquiera pueda contribuir con una acción:

- 📦 **Enviar una acción** (o solicitar que se añada su aplicación) mediante
  [clipboxAI/marketplace · Issues](https://github.com/clipboxAI/marketplace/issues)
- 🔀 O abra una pull request contra
  [`clipboxai-marketplace`](https://github.com/clipboxAI/marketplace)
  añadiendo el JSON de su acción.

### Directrices

- Use un `author` y un `appIcon` claros (un PNG cuadrado, ~256×256, transparente admitido).
- Mantenga `urlTemplate` mínimo y documente cualquier parámetro de consulta personalizado.
- Pruebe la ida y vuelta con su aplicación realmente instalada antes de publicar.
- Respete la privacidad del usuario — actúe solo sobre los archivos que delegue explícitamente.

## ¿Por qué asociarse?

- **Coste de integración cero** — un enlace profundo, sin SDK.
- **Distribución** — las acciones de su aplicación aparecen en el Marketplace de Clipboard x AI
  para cada usuario.
- **Contexto** — las acciones se disparan desde el portapapeles, el Finder o cualquier lugar donde
  ya trabaje el usuario.

[→ Abrir un issue de integración](https://github.com/clipboxAI/marketplace/issues)
