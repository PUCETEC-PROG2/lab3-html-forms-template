# GitHub Actions - Autocalificación

Este directorio contiene el workflow de GitHub Actions para la autocalificación automática del Laboratorio 3.

## ¿Qué hace el workflow?

El workflow `grade.yml` se ejecuta automáticamente cuando:
- Haces push a las ramas `main` o `master`
- Creas un Pull Request
- Lo ejecutas manualmente desde la pestaña "Actions"

### Pasos del workflow:

1. **Checkout del código**: Descarga tu código del repositorio
2. **Configurar Node.js**: Instala Node.js 20
3. **Instalar dependencias**: Ejecuta `npm ci` para instalar las dependencias
4. **Ejecutar autocalificación**: Corre `npm run grade`
5. **Leer resultados**: Extrae la calificación del archivo `calificacion.json`
6. **Comentar en PR**: Si es un Pull Request, añade un comentario con los resultados
7. **Crear badge**: Genera badges de calificación
8. **Subir reporte**: Guarda los reportes como artefactos descargables
9. **Resumen en GitHub**: Muestra un resumen visual en la página del workflow
10. **Verificar aprobación**: Falla si la calificación es menor a 5/10

## Cómo ver los resultados

### En un Push:
1. Ve a la pestaña **Actions** de tu repositorio
2. Selecciona la ejecución más reciente
3. Verás el resumen de calificación en la página principal
4. Descarga los artefactos para ver el reporte completo

### En un Pull Request:
- El bot comentará automáticamente con tu calificación
- Verás una tabla con el desglose por sección
- Aparecerá un emoji según tu desempeño:
  - 🌟 Excelente (9-10 puntos)
  - 👍 Muy Bien (7-8.9 puntos)
  - 📚 Aprobado (5-6.9 puntos)
  - 💪 Necesita Mejorar (<5 puntos)

## Artefactos generados

El workflow genera los siguientes artefactos (disponibles por 90 días):

- `calificacion.json`: Reporte detallado de la calificación
- `test-results.json`: Resultados completos de Jest
- `badges/grade.md`: Badges de calificación en formato Markdown

## Ejecutar manualmente

Puedes ejecutar el workflow manualmente:

1. Ve a la pestaña **Actions**
2. Selecciona "Autocalificación Lab 3"
3. Haz clic en "Run workflow"
4. Selecciona la rama y ejecuta

## Requisitos

Para que el workflow funcione correctamente:

- Tu repositorio debe tener las dependencias en `package.json`
- El archivo `index.html` debe existir en la raíz
- Las pruebas deben estar en `tests/form.test.js`

## Nota sobre la calificación mínima

El workflow fallará (marcará ❌) si la calificación es menor a 5 puntos. Esto ayuda a identificar rápidamente trabajos incompletos.
