module.exports = function(sequelize, DataTypes) {
  const Beer = sequelize.define("beer", {
    // The email cannot be null, and must be a proper email before creation
    //name varchar(250) NOT NULL,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //brewery varchar(250) not null,
    brewery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //flavor varchar(250) not null,
    flavor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //abv decimal (3, 1) null,
    abv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    //class varchar (250) not null
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
