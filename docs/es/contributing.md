# Contribuir

¡Aceptamos contribuciones para mejorar ClipboardxAI! Ya corrija un error, añada una función, traduzca o mejore la documentación, su ayuda es apreciada.

## Formas de contribuir

### Informes de errores
- Consulte primero los [issues](https://github.com/clipboardxAI/issues) existentes.
- Incluya la versión de macOS, la versión de ClipboardxAI y los pasos para reproducirlo.
- Adjunte texto de muestra (sin contenido sensible del portapapeles, por favor) si es útil.

### Solicitudes de funciones
- Describa la función y el caso de uso.
- Explique por qué beneficiaría a los usuarios de ClipboardxAI.
- Compruebe si encaja en la filosofía local-primero y respetuosa con la privacidad.

### Traducciones
- ClipboardxAI admite varios idiomas mediante archivos JSON de i18n.
- Contribuya con traducciones para idiomas faltantes o incompletos.
- Consulte `ClipboardXAI/Resources/i18n/` para ver las traducciones existentes.

### Contribuciones de código
- La aplicación está escrita en **Swift 6 + SwiftUI**.
- Haga un fork del repositorio y envíe una pull request.
- Siga los patrones de Clean Architecture usados en la base de código.

## Primeros pasos

### Requisitos previos
- Node.js 18 o posterior (para el sitio)
- Gestor de paquetes pnpm (para el sitio)
- Xcode 16+ (para el desarrollo de la aplicación)
- macOS 14 Sonoma+

### Configuración del desarrollo (sitio de documentación)

1. **Haga un fork del repositorio** en GitHub.
2. **Clone su fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/clipboard-site.git
   cd clipboard-site
   ```
3. **Instale las dependencias**:
   ```bash
   pnpm install
   ```
4. **Inicie el servidor de desarrollo**:
   ```bash
   pnpm docs:dev
   ```
5. **Abra** `http://localhost:5173` en su navegador.

### Realizar cambios

1. Cree una nueva rama para sus cambios:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Realice sus cambios en los archivos de documentación en `docs/`.
3. Pruebe sus cambios compilando el sitio:
   ```bash
   pnpm docs:build
   ```
4. Confirme sus cambios:
   ```bash
   git add .
   git commit -m "Descripción de sus cambios"
   ```

### Enviar cambios

1. **Suba su rama** a su fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Cree una Pull Request** en GitHub.
3. **Espere la revisión** y atienda cualquier comentario.

## Directrices

### Estilo de escritura
- Use un lenguaje claro y conciso.
- Escriba en voz activa cuando sea posible.
- Sea inclusivo y acogedor.
- Use un formato coherente.
- Incluya capturas de pantalla cuando sea útil.

### Estructura de archivos
- Las páginas de documentación van en `docs/`.
- Las guías van en `docs/guide/`.
- Use nombres de archivo en minúsculas con guiones: `my-new-guide.md`.

### Enlaces
- Use enlaces relativos para la documentación interna.
- Enlace a recursos externos cuando sea útil.
- Asegúrese de que todos los enlaces funcionan.

### Imágenes y recursos
- Coloque las imágenes en `docs/public/` o subdirectorios.
- Use nombres de archivo descriptivos.
- Optimice las imágenes para la web (preferiblemente menos de 500 KB).

## Código de conducta

Este proyecto sigue un código de conducta. Al participar, usted acepta:
- Ser respetuoso e inclusivo.
- Centrarse en comentarios constructivos.
- Aceptar la responsabilidad por los errores.

## ¿Preguntas?

Si tiene preguntas sobre cómo contribuir, consulte los [issues](https://github.com/clipboardxAI/issues) existentes o cree uno nuevo. ¡Gracias por ayudar a mejorar ClipboardxAI! 🎉
