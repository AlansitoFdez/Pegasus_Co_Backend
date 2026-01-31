# Pegasus & Co. - API REST Aeronáutica (Backend)

Esta es la API robusta de **Pegasus & Co.**, diseñada para gestionar la persistencia y lógica de negocio del sistema aeronáutico. Construida con **Node.js** y **Express**, utiliza el ORM **Sequelize** para una comunicación eficiente con la base de datos MySQL.

## 🚀 Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor.
* **Express**: Framework minimalista para la gestión de rutas y middleware.
* **Sequelize**: ORM para mapeo objeto-relacional y gestión de modelos.
* **Sequelize-Auto**: Generación automatizada de modelos a partir de la base de datos.
* **CORS**: Para permitir la comunicación segura con el frontend de React.
* **MySQL**: Motor de base de datos relacional.

## 📦 Características Principales

1.  **Arquitectura por Capas:** Separación clara entre Rutas, Controladores, Servicios y Modelos.
2.  **Gestión de Datos (CRUD):** * Endpoints completos para **Aerolíneas** (Airlines) y **Vuelos** (Flights).
    * Manejo de estados de respuesta estandarizados (`ok: true/false`).
3.  **Filtrado Dinámico:** Endpoints específicos para búsquedas por país (aerolíneas) y origen (vuelos).
4.  **Logger Integrado:** Utilidad personalizada para el seguimiento de eventos y errores en el servidor.

## 🗄️ Configuración de la Base de Datos

Para que el servidor conecte correctamente, configura tu instancia de MySQL con los siguientes datos definidos en `config/config.js`:

### 1. Datos de Conexión
* **Usuario:** `pegasus`
* **Contraseña:** `pegasus`
* **Base de Datos:** `pegasus`
* **Puerto:** `3306`

### 2. Script SQL de Inicialización
Ejecuta este comando en tu terminal de MySQL:

```sql
CREATE DATABASE IF NOT EXISTS pegasus;
CREATE USER 'pegasus'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pegasus';
GRANT ALL PRIVILEGES ON pegasus.* TO 'pegasus'@'localhost';
FLUSH PRIVILEGES;