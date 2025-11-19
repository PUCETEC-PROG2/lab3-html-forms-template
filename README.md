# Laboratorio 3. Formulario de registro a Banco PUCETEC

¡Bienvenido! En este laboratorio crearás una página HTML con un formulario de registro bancario muy sencillo. No necesitas saber programar. Vamos paso a paso.

- Nivel: Principiante (muy, muy básico)
- Tecnologías: Solo HTML (sin CSS, sin JavaScript)
- Objetivo: Crear un formulario con campos básicos y un botón de confirmar
- Tiempo estimado: 30–45 minutos

## Lo que vas a construir
Un formulario llamado "Formulario de registro a PUCE Banco" con estos campos:
1. Nombre
2. Apellido Paterno
3. Apellido Materno
4. Número de cédula
5. Motivo de apertura de cuenta
6. Tipo de cuenta (Ahorros, Corriente)
7. Dirección de domicilio (Calle, número e intersección)
8. Foto (subir archivo)
9. Botón de confirmar

Al final, tu página abrirá en el navegador y mostrará el formulario. No guardaremos datos porque no usamos base de datos ni programación.

## Requisitos previos
- Un editor de texto (por ejemplo, Visual Studio Code).
- Un navegador web (Chrome, Edge, Firefox o Safari).

## Construcción paso a paso (escribe tú el código)
La idea es que pienses y vayas armando el formulario. Te doy micro-pasos y ejemplos pequeños (no el formulario completo). Escribe el código en tu `index.html` después de cada paso y prueba en el navegador.

### Paso 0: Crea el archivo y la estructura base
1. Crea `index.html`.
2. Escribe la estructura mínima de una página HTML.
3. Dentro del `<body>`, deja un comentario que diga: `<!-- Aquí irá el formulario -->`.

Sugerencia de estructura mínima:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 3 - PUCE Banco</title>
</head>
<body>
    <h1>Laboratorio 3 - PUCE Banco</h1>
    <p>Bienvenido al laboratorio 3 del curso de Desarrollo de Aplicaciones Web. En este laboratorio, implementaremos una aplicación web para un banco ficticio llamado PUCE Banco.</p>
    <h2>Nombre del estudiante: [Tu Nombre Aquí]</h2>
    <!-- Aquí irá el formulario -->
</body>
</html>
```

Abre `index.html` en tu navegador para verificar que carga (aunque se vea en blanco).

### Paso 1: Agrega un título visible de la página
Dentro del `<body>`, arriba, escribe un encabezado principal:
```html
<h1>Formulario de registro a PUCE Banco</h1>
```

### Paso 2: Crea el formulario vacío
Debajo del `<h1>`, crea un formulario con `action="#"` (no enviará a ningún servidor) y `method="post"`.
```html
<form action="#" method="post">
  <!-- Campos irán aquí -->
</form>
```

### Paso 3: Campo 1 — Nombre
Agrega una etiqueta y un campo de texto obligatorio.
```html
<label for="nombre">Nombre:</label>
<input id="nombre" name="nombre" type="text" placeholder="Nombre del cliente" required />
```

### Paso 4: Campo 2 — Apellido Paterno
```html
<label for="apellidoPaterno">Apellido Paterno:</label>
<input id="apellidoPaterno" name="apellidoPaterno" type="text" placeholder="Apellido paterno del cliente" required />
```

### Paso 5: Campo 3 — Apellido Materno
```html
<label for="apellidoMaterno">Apellido Materno:</label>
<input id="apellidoMaterno" name="apellidoMaterno" type="text" placeholder="Apellido materno del cliente" required />
```

### Paso 6: Campo 4 — Número de cédula
Para principiantes, mantenlo como texto.
```html
<label for="cedula">Número de cédula:</label>
<input id="cedula" name="cedula" type="text" placeholder="Número de cédula del cliente" required />
```

### Paso 7: Campo 5 — Motivo de apertura de cuenta (texto largo)
```html
<label for="motivo">Motivo de apertura de cuenta:</label><br />
<textarea id="motivo" name="motivo" rows="4" cols="40" placeholder="Motivo de apertura de cuenta del cliente" required></textarea>
```

### Paso 8: Campo 6 — Tipo de cuenta (lista desplegable)
Incluye una opción vacía al inicio.
```html
<label for="tipoCuenta">Tipo de cuenta:</label>
<select id="tipoCuenta" name="tipoCuenta" required>
  <option value="">-- Selecciona una opción --</option>
  <option value="Ahorros">Ahorros</option>
  <option value="Corriente">Corriente</option>
</select>
```

### Paso 9: Campo 7 — Dirección de domicilio (grupo de campos)
Usa `fieldset` y `legend` para agrupar. Dentro agrega tres inputs.
```html
<fieldset>
  <legend>Dirección de domicilio</legend>
  <label for="calle">Calle:</label>
  <input id="calle" name="calle" type="text" placeholder="Calle del domicilio del cliente" required />
  <br /><br />

  <label for="numero">Número:</label>
  <input id="numero" name="numero" type="text" placeholder="Número del domicilio del cliente" required />
  <br /><br />

  <label for="interseccion">Intersección:</label>
  <input id="interseccion" name="interseccion" type="text" placeholder="Intersección del domicilio del cliente" required />
</fieldset>
```

### Paso 10: Campo 8 — Foto (archivo)
```html
<label for="foto">Cargar foto:</label>
<input id="foto" name="foto" type="file" accept="image/*" />
```

### Paso 11: Botón — Confirmar
```html
<button type="submit">Confirmar</button>
```

Entre campos, puedes usar saltos de línea simples como `<br />` para separarlos visualmente (opcional).

## Explicación sencilla
- Cada **label** (etiqueta) describe para qué sirve el campo que está al lado.
- El **for** del label debe ser igual al **id** del input correspondiente (así el clic en la etiqueta activa el campo).
- El atributo **name** del input pone un nombre al dato (útil si se enviara a un servidor).
- El atributo **required** hace que el campo sea obligatorio.
- `type="text"` crea un campo de texto; `textarea` es para textos largos.
- `select` crea una lista desplegable con varias opciones.
- `type="file"` permite subir archivos; `accept="image/*"` limita a imágenes.
- `button type="submit"` envía el formulario (aquí no va a ningún servidor).

## ¿Cómo probarlo?
1. Abre la carpeta del laboratorio en tu editor.
2. Abre el archivo `index.html` y verifica que fuiste agregando los pasos.
3. Haz doble clic en `index.html` para abrirlo en tu navegador.
4. Escribe datos de prueba y presiona "Confirmar". Verás que los campos obligatorios deben estar llenos para permitir el envío.

## Autocalificación
Este laboratorio incluye un sistema de autocalificación sobre **10 puntos**. Para calificar tu trabajo:

1. Instala las dependencias (solo la primera vez):
```bash
npm install
```

2. Ejecuta la autocalificación:
```bash
npm run grade
```

El sistema evaluará:
- **1 punto**: Estructura HTML básica (DOCTYPE, html, head, body, charset, viewport, title)
- **0.5 puntos**: Título y encabezado de la página
- **0.5 puntos**: Formulario con action y method
- **1 punto**: Campo Nombre (input con label, type, required)
- **1 punto**: Campos Apellidos (apellido paterno y materno con labels)
- **1 punto**: Campo Cédula (input con label y required)
- **1 punto**: Campo Motivo (textarea con label y required)
- **1 punto**: Campo Tipo de cuenta (select con opciones Ahorros/Corriente)
- **1 punto**: Dirección de domicilio (fieldset con calle, número e intersección)
- **1 punto**: Campo Foto (input type="file" con accept="image/*")
- **1 punto**: Botón Confirmar (button type="submit")

Los resultados se guardarán en `calificacion.json` con el desglose completo.

## Autocalificación en GitHub Actions

Si subes tu trabajo a GitHub, la autocalificación se ejecutará automáticamente:

### Configuración inicial:
1. Crea un repositorio en GitHub
2. Sube tu código:
```bash
git add .
git commit -m "Laboratorio 3 completado"
git push origin main
```

### Funcionalidades:
- ✅ **Autocalificación automática** en cada push
- 📊 **Reporte visual** en la pestaña Actions
- 💬 **Comentarios automáticos** en Pull Requests
- 📥 **Reportes descargables** como artefactos (90 días)
- 🏷️ **Badges de calificación** generados automáticamente

### Ver resultados:
1. Ve a la pestaña **Actions** de tu repositorio
2. Selecciona la ejecución más reciente
3. Verás tu calificación en el resumen
4. Descarga el reporte completo desde "Artifacts"

El workflow fallará (❌) si obtienes menos de 5 puntos, ayudándote a identificar trabajo incompleto.

## Lista de verificación (Checklist)
- [ ] La página tiene el título y el encabezado correctos.
- [ ] Todos los campos solicitados están presentes.
- [ ] Cada campo tiene su **label**.
- [ ] Los campos principales son **required** (obligatorios).
- [ ] El campo de tipo de cuenta usa un **select** con Ahorros y Corriente.
- [ ] La dirección tiene **Calle**, **Número** e **Intersección**.
- [ ] Hay un campo **file** para la foto.
- [ ] Hay un botón **Confirmar** que envía el formulario.

## Retos opcionales (si quieres practicar un poco más)
- Agrega un botón extra para **Limpiar** (`type="reset"`).
- Cambia el campo de cédula a `type="number"` y prueba.
- Agrega un texto pequeño debajo de algún campo con una pista (por ejemplo, formato de cédula).
- Usa `<fieldset>` y `<legend>` para agrupar más campos si lo deseas (ya se usa en dirección).

---
¡Listo! Con esto completas el "Laboratorio 3. Formulario de registro a PUCE Banco" solo con HTML. Si algo no funciona, revisa que los **id** y los **for** coincidan y que todos los **required** estén bien escritos.