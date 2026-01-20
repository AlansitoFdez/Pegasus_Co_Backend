const { logMensaje } = require('../utils/logger.js')
const airlinesServices = require('../services/airlinesServices.js')

class AirlinesController {

    async getAllAirlines(req, res) {
        try {
            const Airlines = await airlinesServices.getAllAirlines();
            return res.status(200).json({
                ok: true,
                datos: Airlines,
                mensaje: "Aerolíneas obtenidas correctamente"
            });
        } catch (err) {
            logMensaje("Error en getAllAirlines: ", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar datos de directores"
            });
        }
    }

    async getAirlineByCountry(req, res) {
        const AirlineCountry = req.params.country;
        try {
            const Airline = await airlinesServices.getAirlineByCountry(AirlineCountry)
            if(Airline) {
                return res.status(200).json({
                    ok: true,
                    datos: Airline,
                    mensaje: "Aerolíneas obtenidas correctamente"
                })
            } else {
                return res.status(404).json({
                    ok: false, 
                    datos: null, 
                    mensaje: "Aerolíneas no encontradas"
                })
            }
        } catch (err) {
            logMensaje("Error en getAirlineByCountry: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar datos de las aerolíneas"
            })
        }
    }


    async createAirline(req, res) {
        const airline = req.body;
        try {
            const newAirline = await airlinesServices.createAirline(airline);
            return res.status(201).json({
                ok: true,
                datos: newAirline,
                mensaje: "Aerolínea creada correctamente"
            })
        } catch (err) {
            logMensaje("Error en createAirline: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al crear aerolínea"
            })
        }
    }

    async deleteAirline(req, res) {
        const airlineId = req.params.id
        try {
            const numFilas = await airlinesServices.deleteAirline(airlineId)

            if (numFilas == 0) {
                return res.status(404).json({
                    ok: false,
                    datos: null, 
                    mensaje: "Aerolínea no encontrada"
                })
            } else {
                return res.status(204).send()
            }
        } catch (err) {
            logMensaje("Error en deleteAirline: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al eliminar aerolínea"
            })
        }
    }

async updateAirline(req, res) {
    // Recupero el id_airline de la ruta
    const id_airline = req.params.id;
    // El objeto del airline llega en el body
    const airline = req.body;

    try {
      const numFilas = await airlinesServices.updateAirline(id_airline, airline);

      if (numFilas == 0) {
        // No se ha encontrado lo que se quería actualizar o no hay nada que cambiar
        return res.status(404).json({
          ok: false,
          datos: null,
          mensaje: "No encontrado: " + airline.id_airline,
        });
      } else {
        // Al dar status 204 no se devuelva nada
        res.status(204).send();
      }
    } catch (err) {
      logMensaje("Error en updateAirline:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al editar una aerolínea",
      });
    }
  }
}

module.exports = new AirlinesController()