# Marathon Frontend

Este proyecto es el frontend de Marathon, una tienda deportiva en línea, que cuenta con variados productos deportivos, ademas cuenta con registro de usuario, carro de compras y un metodo de pago. La aplicación web utiliza como estructura HTML y está construida en React. A continuación, se presenta una descripción de los componentes y funcionalidades clave del proyecto.

## Componentes Principales

### Main

El componente `Main` es el punto de entrada de la aplicación y se encarga de renderizar la aplicación principal (`App`). Este componente se encuentra en el archivo `main.jsx`.

### Aplicación Principal

El componente `App` es el componente principal que integra las rutas y proveedores de contexto. Este componente se encuentra en el archivo `App.jsx`.

### Rutas y Proveedores

El archivo `AppRouter.jsx` gestiona las rutas y la navegación de la aplicación, conectando los distintos componentes. Los proveedores de contexto, como `UserProvider`, `ProductProvider`, y `CartProvider`, se encargan del estado global de la aplicación.

## Inicio (Home)

El componente `Home` es la página de inicio principal de la aplicación. Muestra información destacada sobre la tienda deportiva Marathon, junto con una presentación de imágenes (carousel) para atraer la atención de los usuarios.

## Navegación

El componente `Navigation` representa la barra de navegación superior de la aplicación. Proporciona enlaces a las diferentes secciones del sitio web y puede contener elementos interactivos para facilitar la navegación del usuario.

### Inicio de sesión y registro

El componente `SignInSide` maneja el proceso de inicio de sesión y registro de los usuarios. Proporciona un formulario de inicio de sesión y registro, este utiliza el contexto de usuario para gestionar la autenticación. Este componente se encuentra en el archivo `SignInSide.jsx`.

### Perfil de Usuario

El componente `Profile` permite a los usuarios ver y editar su información personal, como nombre, edad y correo electrónico. Este componente se encuentra en el archivo `profile.jsx`.

### Productos

El componente `Products` se encarga de mostrar una lista de productos disponibles en la tienda. Los productos se obtienen de un servicio web mediante Axios y se muestran en tarjetas individuales. Este componente se encuentra en el archivo `Products.jsx`.

### Producto

El componente `Product` representa un producto específico. Muestra detalles del producto, como el nombre, precio, descripción y una imagen. Además, permite a los usuarios agregar el producto al carrito de compras. Este componente se encuentra en el archivo `Product.jsx`.

### Checkout

El componente `Checkout` gestiona el proceso de pago y finalización de la compra. Muestra un resumen de los productos seleccionados y realiza la transacción utilizando servicios de pago, como PayPal. Este componente se encuentra en el archivo `Checkout.jsx`.

### PayPal

El componente `PayPal` integra la funcionalidad de pago a través de PayPal en el proceso de pago. Permite a los usuarios realizar transacciones de manera segura utilizando sus cuentas de PayPal o tarjetas de crédito. Este componente se encuentra en el archivo `PayPal.jsx`.

## Contexto de Usuario (UserContext)

El `UserContext` maneja la información del usuario y proporciona funciones para la autenticación y la gestión del perfil del usuario. Se encuentra en el archivo `UserContext.jsx`.

## Contexto de Productos (ProductContext)

El `ProductContext` gestiona la información de los productos disponibles en la tienda y proporciona funciones para obtener y filtrar productos. Se encuentra en el archivo `ProductContext.jsx`.

## Contexto de Carrito (CartContext)

El `CartContext` gestiona el estado del carrito de compras, incluida la adición, eliminación y actualización de productos en el carrito. Se encuentra en el archivo `CartContext.jsx`.

### Términos y Condiciones

El componente `VerticalTabs` muestra los términos y condiciones de uso de la tienda en pestañas verticales. Cada pestaña aborda un tema específico, y los usuarios pueden navegar para obtener información detallada. Este componente se encuentra en el archivo `termsandconditions.jsx`.

### Componente Footer (Pie de Página)
El componente `footer` proporciona información de contacto y enlaces a redes sociales en el pie de página del sitio web. Este componente se encarga de mejorar la accesibilidad al ofrecer información adicional y facilitar la interacción del usuario con la tienda.

## Estilos y Diseño

La aplicación utiliza estilos proporcionados por Material-UI, CSS, Sass, Tailwind y React-Bootstrap para una apariencia atractiva y responsiva.

## Configuración y Validaciones

Se implementan validaciones en el componente `Profile` y `SignInSide` para garantizar que la información del usuario sea correcta. También se incluyen funciones de utilidad para manejar la lógica de validación.

## Configuración del Proyecto

- **Vite y React**: La aplicación utiliza Vite como herramienta de construcción y React como biblioteca principal.

## MongoDB

El proyecto utiliza MongoDB para almacenar los datos de los productos y de los usuarios. 

## Back-End

El proyecto se encuentra conectado con el siguiente Back-End:

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- React
- React Router
- MongoDB
- React Bootstrap
- Material UI
- Tailwind
- Sass
- Font Awesome

## Licencia

Este proyecto está licenciado bajo [Marathon]
