const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Laboratorio 3 - Formulario de registro a PUCE Banco', () => {
  let html;
  let dom;
  let document;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'index.html');
    html = fs.readFileSync(htmlPath, 'utf8');
  });

  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  // Prueba 1: Estructura HTML básica (1 punto)
  describe('1. Estructura HTML básica (1 punto)', () => {
    test('Debe tener la estructura DOCTYPE y etiquetas html, head y body', () => {
      expect(html).toMatch(/<!DOCTYPE html>/i);
      expect(html).toMatch(/<html/i);
      expect(html).toMatch(/<head>/i);
      expect(html).toMatch(/<body>/i);
    });

    test('Debe tener el charset UTF-8 y viewport configurado', () => {
      expect(html).toMatch(/<meta\s+charset=["']UTF-8["']/i);
      expect(html).toMatch(/<meta\s+name=["']viewport["']/i);
    });

    test('Debe tener un título en el head', () => {
      expect(html).toMatch(/<title>.*<\/title>/i);
    });
  });

  // Prueba 2: Formulario existe (0.5 puntos)
  describe('2. Formulario existe (0.5 puntos)', () => {
    test('Debe existir un elemento form', () => {
      const form = document.querySelector('form');
      expect(form).toBeTruthy();
    });

    test('El formulario debe tener atributos action y method', () => {
      const form = document.querySelector('form');
      expect(form.hasAttribute('action')).toBe(true);
      expect(form.hasAttribute('method')).toBe(true);
    });
  });

  // Prueba 3: Campo Nombre (1 punto)
  describe('3. Campo Nombre (1 punto)', () => {
    test('Debe existir un input con id="nombre"', () => {
      const input = document.querySelector('#nombre');
      expect(input).toBeTruthy();
      expect(input.tagName).toBe('INPUT');
    });

    test('El input debe tener type="text" y atributo required', () => {
      const input = document.querySelector('#nombre');
      expect(input.getAttribute('type')).toBe('text');
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Debe existir un label asociado al campo nombre', () => {
      const label = document.querySelector('label[for="nombre"]');
      expect(label).toBeTruthy();
    });
  });

  // Prueba 4: Campos Apellidos (1 punto)
  describe('4. Campos Apellidos (1 punto)', () => {
    test('Debe existir input con id="apellidoPaterno"', () => {
      const input = document.querySelector('#apellidoPaterno');
      expect(input).toBeTruthy();
      expect(input.getAttribute('type')).toBe('text');
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Debe existir input con id="apellidoMaterno"', () => {
      const input = document.querySelector('#apellidoMaterno');
      expect(input).toBeTruthy();
      expect(input.getAttribute('type')).toBe('text');
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Deben existir labels para apellido paterno y materno', () => {
      const labelPaterno = document.querySelector('label[for="apellidoPaterno"]');
      const labelMaterno = document.querySelector('label[for="apellidoMaterno"]');
      expect(labelPaterno).toBeTruthy();
      expect(labelMaterno).toBeTruthy();
    });
  });

  // Prueba 5: Campo Cédula (1 punto)
  describe('5. Campo Cédula (1 punto)', () => {
    test('Debe existir input con id="cedula"', () => {
      const input = document.querySelector('#cedula');
      expect(input).toBeTruthy();
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Debe existir un label asociado al campo cédula', () => {
      const label = document.querySelector('label[for="cedula"]');
      expect(label).toBeTruthy();
    });
  });

  // Prueba 6: Campo Motivo (1 punto)
  describe('6. Campo Motivo de apertura (1 punto)', () => {
    test('Debe existir textarea con id="motivo"', () => {
      const textarea = document.querySelector('#motivo');
      expect(textarea).toBeTruthy();
      expect(textarea.tagName).toBe('TEXTAREA');
      expect(textarea.hasAttribute('required')).toBe(true);
    });

    test('Debe existir un label asociado al textarea motivo', () => {
      const label = document.querySelector('label[for="motivo"]');
      expect(label).toBeTruthy();
    });
  });

  // Prueba 7: Campo Tipo de cuenta (1 punto)
  describe('7. Campo Tipo de cuenta (1 punto)', () => {
    test('Debe existir select con id="tipoCuenta"', () => {
      const select = document.querySelector('#tipoCuenta');
      expect(select).toBeTruthy();
      expect(select.tagName).toBe('SELECT');
      expect(select.hasAttribute('required')).toBe(true);
    });

    test('El select debe tener opciones para Ahorros y Corriente', () => {
      const options = document.querySelectorAll('#tipoCuenta option');
      expect(options.length).toBeGreaterThanOrEqual(3); // Incluye opción vacía
      
      const optionsText = Array.from(options).map(opt => opt.textContent.toLowerCase());
      expect(optionsText.some(text => text.includes('ahorros'))).toBe(true);
      expect(optionsText.some(text => text.includes('corriente'))).toBe(true);
    });

    test('Debe existir un label asociado al select', () => {
      const label = document.querySelector('label[for="tipoCuenta"]');
      expect(label).toBeTruthy();
    });
  });

  // Prueba 8: Campos de Dirección (1 punto)
  describe('8. Campos de Dirección de domicilio (1 punto)', () => {
    test('Debe existir fieldset con legend para dirección', () => {
      const fieldset = document.querySelector('fieldset');
      expect(fieldset).toBeTruthy();
      
      const legend = fieldset.querySelector('legend');
      expect(legend).toBeTruthy();
      expect(legend.textContent).toMatch(/dirección/i);
    });

    test('Debe existir input con id="calle"', () => {
      const input = document.querySelector('#calle');
      expect(input).toBeTruthy();
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Debe existir input con id="numero"', () => {
      const input = document.querySelector('#numero');
      expect(input).toBeTruthy();
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Debe existir input con id="interseccion"', () => {
      const input = document.querySelector('#interseccion');
      expect(input).toBeTruthy();
      expect(input.hasAttribute('required')).toBe(true);
    });

    test('Deben existir labels para calle, número e intersección', () => {
      const labelCalle = document.querySelector('label[for="calle"]');
      const labelNumero = document.querySelector('label[for="numero"]');
      const labelInterseccion = document.querySelector('label[for="interseccion"]');
      
      expect(labelCalle).toBeTruthy();
      expect(labelNumero).toBeTruthy();
      expect(labelInterseccion).toBeTruthy();
    });
  });

  // Prueba 9: Campo Foto (1 punto)
  describe('9. Campo Foto (1 punto)', () => {
    test('Debe existir input type="file" con id="foto"', () => {
      const input = document.querySelector('#foto');
      expect(input).toBeTruthy();
      expect(input.getAttribute('type')).toBe('file');
    });

    test('El input file debe aceptar imágenes', () => {
      const input = document.querySelector('#foto');
      const accept = input.getAttribute('accept');
      expect(accept).toBeTruthy();
      expect(accept).toMatch(/image/i);
    });

    test('Debe existir un label asociado al campo foto', () => {
      const label = document.querySelector('label[for="foto"]');
      expect(label).toBeTruthy();
    });
  });

  // Prueba 10: Botón Confirmar (1 punto)
  describe('10. Botón Confirmar (1 punto)', () => {
    test('Debe existir un botón de tipo submit', () => {
      const button = document.querySelector('button[type="submit"]');
      expect(button).toBeTruthy();
    });

    test('El botón debe tener texto "Confirmar"', () => {
      const button = document.querySelector('button[type="submit"]');
      expect(button.textContent).toMatch(/confirmar/i);
    });
  });
});
