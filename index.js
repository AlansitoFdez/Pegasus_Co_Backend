const express = require('express');
const path = require("path")
const { logMensaje } = require('./utils/logger.js')

const airlinesRoutes = require('./routes/airlinesRoutes.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/airlines', airlinesRoutes)

app.listen(port, () => {
    logMensaje(`Servidor escuchando en el puerto ${port}`)
})