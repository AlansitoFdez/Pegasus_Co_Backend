const initModels = require('../models/init-models.js').initModels
const sequelize = require('../config/sequelize.js')
const models = initModels(sequelize)

const Flight = models.flights

class FlightsServices {
    
    async getAllFlights() {
        const result = await Flight.findAll();
        return result;
    }

    async getFlightByOrigin(origin) {
        const result = await Flight.findAll({
            where: {
                origin: origin
            }
        });
        return result;
    }

    async getFlightByDestination(destination) {
        const result = await Flight.findAll({
            where: {
                destination: destination
            }
        });
        return result;
    }

    async createFlight(flight) {
        const result = await Flight.create(flight);
        return result;
    }

    async updateFlight(flightId, flight) {
        let numFilas = await Flight.update(flight, {
            where: {
                id: flightId
            }
        });
        
        if(numFilas == 0 && await Flight.findByPk(flightId)){
            numFilas = 1;
        }
        
        return numFilas;
    }

    async deleteFlight(flightId) {
        const result = await Flight.destroy({
            where: {
                id: flightId
            }
        });
        return result;
    }
}

module.exports = new FlightsServices();