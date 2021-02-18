# DocRed Frontend test

_Este proyecto fue creado por componentes con el fin de hacerlo mantenible y fácil de entender por cualquier persona_

## Comenzando 🚀

### Pre-requisitos 📋
_clona el proyecto_

### Instalación 🔧
- _npm install_

## Despliegue 📦
- npm run build
- npm start 

## Tecnlogias 🔧
- React
- React router
- Context
- Sass
- Webpack

## sistema de diseño 🚀

### Principios
- Mantenerlo simple y reusar lo más posible.
- Un código que luzca como si una sola persona lo haya escrito
- Escribir para escalabilidad.

## Generales
- Usamos BEM como metodología de creación de código
- Nombre de archivos en plural (Ejemplo: _botones.scss)
- Clases en singular y minúsculas (Ejemplo: .galeria__boton)


## Sintaxis

- 1 espacio después del selector y antes de {}
- 2 espacios para indentación.
- 1 espacio después del :
- Evitar abuso de anidaciones. Limite 1 nivel
- Mixins para tamaño, estilos y valores numéricos de fuentes.

## Manejo de propiedades

- Propiedades y selectores deben ordenarse de la siguiente forma:_
- Propiedades del modelo de caja (display, width, height, margin, etc)_
- Posicionamiento (position, left, top, right, etc)_
- Posicionamiento (position, left, top, right, etc)_
- Decoración (background-image, color, etc)_
- Variables
- Mixins

- .button {
- display: block;
- width: 220px;
- height: 40px;
- position: relative;
- text-transform: uppercase;
- background-color: #333333;
- font-weight: $semibold;
- @include font-size (13px);
- }


## Autor ✒️

- **Lennin Ibarra** - _Front-end developer_ - [Lennin Ibarra](https://github.com/lenninIbarrraGonzalez)

## Licencia 📄
Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](https://wikis.fdi.ucm.es/ELP/Licencia_MIT) para detalles
