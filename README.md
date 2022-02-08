# Coder House Documentacion Proyecto Ecommerce

## Descripcion del proyecto
Este proyecto es una aplicacion del tipo ecommerce que permite seleccionar, agregar al carrito y eliminar productos del carrito para luego realizar la compra la cual sera persistida en en Firebase.

## Tecnologias utilizadas
* ReactJS
* Materialize
* Firebase

## Clonado y ejecucion local del proyecto
  1. Clonar el repositorio el proyecto
   
   ```
   git clone https://github.com/ngrosso/ecommerce-grosso.git
   ```

  2. Posicionarse en la carpeta del proyecto

  ```
  cd app
  ```
  3. Instalar dependencias
   ```
   npm install
   ```
  4. Ejecutar el proyecto de ecommerce
   ```
   npm start
   ```
  5. La se ejecutara en el navegador, usualmente en localhost:3000
   
## Como usar el ecommerce
1. Seleccionar una categoria o "productos" para ver todos los productos disponibles
   ![Navegacion entre categorias](https://raw.githubusercontent.com/ngrosso/ecommerce-grosso/master/public/media/ecommerce-navegacion.gif)

2. Seleccionar un producto y su cantidad para agregarlo al carrito, a medida que se van agregando al carrito quedan temporalmente 
   ![Seleccion de producto](https://raw.githubusercontent.com/ngrosso/ecommerce-grosso/master/public/media/ecommerce-compra.gif)
3. Seleccionar la opcion "ver carrito" para ver los productos agregados al carrito, donde se puede modificar la compra antes de enviarla, por ultimo se confirma la compra
   ![Ver carrito](https://raw.githubusercontent.com/ngrosso/ecommerce-grosso/master/public/media/ecommerce-compra2.gif)

4. Confirmamos la insercion, en este ejemplo, de la orden "ScLVtTYzHL6oTQz5dXxO" en firebase
   ![Confirmacion de orden](https://raw.githubusercontent.com/ngrosso/ecommerce-grosso/master/public/media/ecommerce-persistencia.jpeg)

5. El carrito aparece vacio y listo para otra compara
   ![Carrito vacio](https://raw.githubusercontent.com/ngrosso/ecommerce-grosso/master/public/media/ecommerce-carrito.gif)