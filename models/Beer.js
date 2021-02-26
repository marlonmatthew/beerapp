module.exports = function(sequelize, DataTypes) {
  const Beer = sequelize.define("beer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    brewery: {
      type: DataTypes.STRING,
      allowNull: false
    },

    flavor: {
      type: DataTypes.STRING,
      allowNull: false
    },

    abv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },

    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Beer;
};
