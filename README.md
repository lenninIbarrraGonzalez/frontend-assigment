# DocRed Frontend test

_Este proyecto fue creado por componentes con el fin de hacerlo mantenible y fácil de entender por cualquier persona_

## Comenzando 🚀

### Pre-requisitos 📋
_clona el proyecto_

### Instalación 🔧
_npm install_

## Despliegue 📦
_npm run build_
_npm start_

## Tecnlogias 🔧
_React_
_React router_
_Context_
_Sass_
_Webpack_

## sistema de diseño 🚀

###Principios
_Mantenerlo simple y reusar lo más posible._
_Un código que luzca como si una sola persona lo haya escrito_
_Escribir para escalabilidad._

## Generales
_Usamos BEM como metodología de creación de código_
_Nombre de archivos en plural (Ejemplo: _botones.scss)_
_Clases en singular y minúsculas (Ejemplo: .galeria__boton)_


## Sintaxis

_1 espacio después del selector y antes de {}_
_2 espacios para indentación._
_1 espacio después del :_
_Evitar abuso de anidaciones. Limite 1 nivel_
_Mixins para tamaño, estilos y valores numéricos de fuentes._

## Manejo de propiedades

_Propiedades y selectores deben ordenarse de la siguiente forma:_
_Propiedades del modelo de caja (display, width, height, margin, etc)_
_Posicionamiento (position, left, top, right, etc)_
_Posicionamiento (position, left, top, right, etc)_
_Decoración (background-image, color, etc)_
_Variables_
_Mixins_

.button {
display: block;
width: 220px;
height: 40px;
position: relative;
text-transform: uppercase;
background-color: #333333;
font-weight: $semibold;
@include font-size (13px);
}


## Autor ✒️

- **Lennin Ibarra** - _Front-end developer_ - [Lennin Ibarra](https://github.com/lenninIbarrraGonzalez)

## Licencia 📄
Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](https://wikis.fdi.ucm.es/ELP/Licencia_MIT) para detalles
