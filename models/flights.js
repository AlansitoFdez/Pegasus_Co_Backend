const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flights', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flight_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    airline_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'airlines',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'flights',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "flights_airline_id_FK",
        using: "BTREE",
        fields: [
          { name: "airline_id" },
        ]
      },
    ]
  });
};
