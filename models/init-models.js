var DataTypes = require("sequelize").DataTypes;
var _airlines = require("./airlines.js");
var _flights = require("./flights.js");

function initModels(sequelize) {
  var airlines = _airlines(sequelize, DataTypes);
  var flights = _flights(sequelize, DataTypes);


  return {
    airlines,
    flights,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
