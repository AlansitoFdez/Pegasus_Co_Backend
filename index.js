// IMPORTACIONES
const express = require('express');
const path = require("path")
const { logMensaje } = require('./utils/logger.js')

// RUTAS
const airlinesRoutes = require('./routes/airlinesRoutes.js')
const flightsRoutes = require('./routes/flightsRoutes.js')

// CONFIGURACIÓN
const app = express()
const port = process.env.PORT || 3000

// MIDDLEWARES
app.use(express.json())

// RUTAS
app.use('/api/airlines', airlinesRoutes)
app.use('/api/flights', flightsRoutes)

// INICIAR SERVIDOR
app.listen(port, () => {
    logMensaje(`Servidor escuchando en el puerto ${port}`)
})