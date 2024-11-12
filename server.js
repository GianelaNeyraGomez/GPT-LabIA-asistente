const express = require('express');
const app = express();

// Usa el puerto definido en la variable de entorno o el puerto 3000 por defecto
const port = process.env.PORT || 3000;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Bienvenido al Asistente de Configuración de dispositivos de Red!');
});

// Inicia el servidor y muestra un mensaje en la consola
app.listen(port, () => {
    console.log(Servidor ejecutándose en http://localhost:${port});
});

app.use(express.json());

// Endpoint para /configuracion
app.post('/configuracion', (req, res) => {
    const { tipo_dispositivo, modelo_dispositivo, nivel_experiencia, tipo_configuracion, detalles_red } = req.body;

    if (!tipo_dispositivo || !modelo_dispositivo || !nivel_experiencia || !tipo_configuracion || !detalles_red) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos o valores no válidos.' });
    }

    // Simulación de respuesta con datos de ejemplo
    const configuracionSugerida = [
        { paso: 1, descripcion: "Configurar interfaz de red", comando: "interface GigabitEthernet0/0" },
        { paso: 2, descripcion: "Asignar dirección IP", comando: "ip address 192.168.1.1 255.255.255.0" }
    ];
    const recomendacionesSeguridad = ["Usar contraseñas fuertes", "Habilitar autenticación multifactor"];
    const mejoresPracticas = ["Documentar cambios en la red", "Monitorear el tráfico regularmente"];

    res.status(200).json({ configuracion_sugerida: configuracionSugerida, recomendaciones_seguridad: recomendacionesSeguridad, mejores_practicas: mejoresPracticas });
});

// Endpoint para /recomendaciones
app.get('/recomendaciones', (req, res) => {
    const { tipo_dispositivo, modelo_dispositivo, nivel_experiencia } = req.query;

    if (!tipo_dispositivo || !modelo_dispositivo || !nivel_experiencia) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos o valores no válidos.' });
    }

    // Simulación de respuesta con datos de ejemplo
    const recomendacionesSeguridad = ["Actualizar firmware regularmente", "Desactivar servicios no necesarios"];
    const recomendacionesRendimiento = ["Optimizar el uso de VLANs", "Priorizar tráfico crítico con QoS"];
    const mejoresPracticasGenerales = ["Revisar configuraciones de backup", "Implementar redundancia en enlaces críticos"];

    res.status(200).json({ recomendaciones_seguridad: recomendacionesSeguridad, recomendaciones_rendimiento: recomendacionesRendimiento, mejores_practicas_generales: mejoresPracticasGenerales });
});

app.listen(port, () => {
    console.log(Servidor ejecutándose en http://localhost:${port});
});
