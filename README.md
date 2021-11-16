# Proyecto ecommerce
## Descripción
    Desarrollamos una aplicación para poder exponer nuestros productos, tanto herramientas como asesorias.
## Recursos de desarrollo
### Lenguaje de programación
    React JS
### Bases de datos
    Firebase
### Recursos de imágenes
    AWS - S3

## Usabilidad
- Al desplegar la aplicación nos encontramos un con un catalogo de productos
- Estos productos pueden ser filtrados por categorias
- Los productos pueden ser seleccionados, luego, se pueden agregar a un carro de compras
- la compra finaliza al ingresar informacion de entrega

## Desarrollo
- La aplicación cuenta con un componente *NavBar*, este a su vez usa un componente *CartWidget*, en este ultimo se muestra la cantidad de productos agreagados en el carro de compras.
- Se tiene un componente *ItemListContainer* con procesos de solicitudes a un backend para obtener un listado de productos. Este componente envía la información hacia un componente *ItemList* y este componente listado está formado por elementos que se muestran dentro de un componente denominado *Item*.
-  Tambien se tiene un componente *ItemDetailContainer* para que solicite información al backend sobre un producto específico, seguidamente, envía la infomación a un componente denominado *ItemDetailContainer*, en este último se muestra toda la información de un producto, además, tiene un componente de nombre *ItemCount* que permite seleccionar la cantidad de productos y también tiene el botón de acción para poder agregar el producto al carro de compras.
- Para el proceso de compra se tiene un componente denominado *Cart*, este componente tiene un listado de items mostrados usando el componente *CartItem*. El componente *Cart* tiene el mecanismo de NO duplicar los productos iguales si no, agregar solo la cantidad; así también, permitirá eliminar un producto que ya no se quiera comprar.
- Finalmente, se tiene un componente llamado *Checkout*, aquí se ingresa la información del cliente y se procede con la compra.
