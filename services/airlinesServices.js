const initModels = require('../models/init-models.js').initModels
const sequelize = require('../config/sequelize.js')
const models = initModels(sequelize)

const Airline = models.airlines

class AirlinesServices {

    async getAllAirlines() {
        const result = await Airline.findAll();
        return result;
    }

    async getAirlineByCountry(country) {
        const result = await Airline.findAll({
            where: {
                country: country
            }
        });
        return result;
    }

    async createAirline(airline) {
        const result = await Airline.create(airline);
        return result;
    }

    async deleteAirline(airlineId) {
        const result = await Airline.destroy({ where: { id: airlineId}});
        return result;
    }

  async updateAirline(id_airline, airline) {
    //Actualizar una aerolínea
    let numFilas = await Airline.update(airline, {
      where: { id: id_airline },
    });
    // Si el numero de filas afectadas por la actualización es cero
    // y existe el registro para esa aerolínea, es que no hay cambios en los datos
    // la actualización
    if(numFilas == 0 && await Airline.findByPk(id_airline)){
      numFilas = 1; // Devuelvo uno para indicar que todo ha ido bien
    }

    return numFilas;
  }
}

module.exports = new AirlinesServices()