// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
const beers = sequelize.define("beers", {
  //id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id: {
    type: Sequelize.int
    //Need to set auto_increment & primary key
  },
  //name varchar(250) NOT NULL,
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //brewery varchar(250) not null,
  brewery: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //flavor varchar(250) not null,
  flavor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //abv decimal (3, 1) null,
  abv: {
    type: Sequelize.double,
    allowNull: true
  },
  //class varchar (250) not null
  class: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Syncs with DB
beers.sync();

// Makes the beerApp Model available for other files (will also create a table)
// module.exports = beers;
