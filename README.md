# CinePlus - Cartelera de Películas Premium

## Descripción del Proyecto
CinePlus es una aplicación web moderna y elegante diseñada para los amantes del cine. Permite visualizar películas en cartelera, ver detalles de cada filme, consultar reseñas y realizar rentas virtuales de forma sencilla. La aplicación destaca por su diseño "Luminous", colores claros y una experiencia de usuario fluida y receptiva.

## Funcionalidades Implementadas
- **Cartelera Dinámica**: Carga de películas mediante AJAX desde archivos JSON con efectos de animación.
- **Detalle de Películas**: Información completa, sinopsis, géneros y visualización de trailers oficiales.
- **Sistema de Reseñas**: Visualización de opiniones de la audiencia cargadas dinámicamente.
- **Formulario de Renta**: Cálculo de precios basado en la fecha de estreno (precios normales vs estreno) y generación de ticket digital.
- **Formulario de Contacto**: Validación completa del lado del cliente, asegurando campos obligatorios y mensajes con extensión controlada (20-50 caracteres).
- **Alerta de Bienvenida Inteligente**: Notificación persistente que aparece solo la primera vez que visitas el sitio.
- **Diseño Responsive Premium**: Interfaz adaptada a todos los dispositivos utilizando Bootstrap 5 y fuentes de Google.
- **Navegación Consistente**: Barra de navegación presente en todas las páginas con resaltado de la sección activa.
- **Sticky Footer**: Pie de página configurado para permanecer siempre en la parte inferior.

## Tecnologías Utilizadas
- **HTML5 / CSS3** (Vanilla + Custom Props)
- **Bootstrap 5** (Layout y Componentes)
- **JavaScript / jQuery** (Lógica de negocio y AJAX)
- **Google Fonts** (Outfit)
- **LocalStorage** (Persistencia de estado simple)

## Instrucciones de Uso
1. Abre el archivo `index.html` en un navegador web moderno(el navegador suele bloquear protocolos asi que es mejor hacerlo como liveserver).
2. Navega por la cartelera y haz clic en "Ver Detalles" para conocer más sobre una película.
3. Utiliza la sección de "Renta" para simular la reserva de una película.
4. Si tienes dudas, utiliza el formulario de "Contacto" el cual te guiará con mensajes de error si los datos no son correctos.
