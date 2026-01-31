const { logMensaje } = require('../utils/logger.js')
const flightsServices = require('../services/flightsServices.js')

class FlightsController {
    
    async getAllFlights(req, res) {
        try {
            const Flights = await flightsServices.getAllFlights();
            return res.status(200).json({
                ok: true,
                datos: Flights,
                mensaje: "Vuelos obtenidos correctamente"
            });
        } catch (err) {
            logMensaje("Error en getAllFlights: ", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar datos de vuelos"
            });
        }
    }

    async getFlightByOrigin(req, res) {
        try {
            const FlightOrigin = req.params.origin;
            const Flight = await flightsServices.getFlightByOrigin(FlightOrigin);
            if(Flight) {
                return res.status(200).json({
                    ok: true,
                    datos: Flight,
                    mensaje: "Vuelo obtenido correctamente"
                });
            } else {
                return res.status(404).json({
                    ok: false, 
                    datos: null, 
                    mensaje: "Vuelo no encontrado"
                });
            }
        } catch (err) {
            logMensaje("Error en getFlightByOrigin: ", err);
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al recuperar datos del vuelo"
            });
        }
    }

    async createFlight(req, res) {
        const flight = req.body;
        try {
            const newFlight = await flightsServices.createFlight(flight);
            return res.status(201).json({
                ok: true,
                datos: newFlight,
                mensaje: "Vuelo creado correctamente"
            })
        } catch (err) {
            logMensaje("Error en createFlight: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al crear vuelo"
            })
        }
    }

    async updateFlight(req, res) {
        const flightId = req.params.id;
        const flight = req.body;
        try {
            const updatedFlight = await flightsServices.updateFlight(flightId, flight);
            return res.status(200).json({
                ok: true,
                datos: updatedFlight,
                mensaje: "Vuelo actualizado correctamente"
            })
        } catch (err) {
            logMensaje("Error en updateFlight: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al actualizar vuelo"
            })
        }
    }

    async deleteFlight(req, res) {
        const flightId = req.params.id;
        try {
            const numFilas = await flightsServices.deleteFlight(flightId)

            if (numFilas == 0) {
                return res.status(404).json({
                    ok: false,
                    datos: null,
                    mensaje: "Vuelo no encontrado"
                })
            }

            return res.status(200).json({
                ok: true,
                datos: null,
                mensaje: "Vuelo eliminado correctamente"
            })
        } catch (err) {
            logMensaje("Error en deleteFlight: ", err)
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: "Error al eliminar vuelo"
            })
        }
    }

}

module.exports = new FlightsController()