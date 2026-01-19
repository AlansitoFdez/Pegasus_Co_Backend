const { logMensaje } = require('../utils/logger.js');

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'pegasus',
        password: process.env.DB_PASSWORD || 'pegasus',
        name: process.env.DB_NAME || 'pegasus',
        port: process.env.DB_PORT || 3306,
    },
}

logMensaje("DBNAME", process.env.DB_NAME)
logMensaje("DBUSER", process.env.DB_USER)
logMensaje("DBPASSWORD", process.env.DB_PASSWORD)
logMensaje("DBHOST", process.env.DB_HOST)
logMensaje("DBPORT", process.env.DB_PORT)
