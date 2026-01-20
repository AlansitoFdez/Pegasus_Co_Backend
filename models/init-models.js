var DataTypes = require("sequelize").DataTypes;
var _airlines = require("./airlines");
var _flights = require("./flights");

function initModels(sequelize) {
  var airlines = _airlines(sequelize, DataTypes);
  var flights = _flights(sequelize, DataTypes);

  flights.belongsTo(airlines, { as: "airline", foreignKey: "airline_id"});
  airlines.hasMany(flights, { as: "flights", foreignKey: "airline_id"});

  return {
    airlines,
    flights,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
