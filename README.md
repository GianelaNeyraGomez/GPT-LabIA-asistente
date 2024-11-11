# Asistente de Configuración de dispositivos de Red

Este proyecto es una API para la configuración y optimización de dispositivos de red (enrutadores, switches, firewalls). Ofrece configuraciones y recomendaciones adaptadas a diferentes niveles de experiencia y tipos de dispositivos.

## Cómo ejecutar el proyecto

1. Clona el repositorio y navega al directorio del proyecto.
2. Instala las dependencias con npm install.
3. Ejecuta el servidor con npm start.
4. Accede a la API en http://localhost:3000.

## Endpoints

### POST /configuracion
- Recibe detalles sobre el dispositivo de red y la topología para sugerir configuraciones específicas.
- *Parámetros*: tipo_dispositivo, modelo_dispositivo, nivel_experiencia, tipo_configuracion, detalles_red.

### GET /recomendaciones
- Devuelve recomendaciones de buenas prácticas de seguridad y optimización.
- *Parámetros*: tipo_dispositivo, modelo_dispositivo, nivel_experiencia.
