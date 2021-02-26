require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DBPASSWORD,
<<<<<<< HEAD
    database: "passport_demo",
    host: "127.0.0.1",
=======
    database: "beers",
    host: "localhost",
>>>>>>> d4922972f38865b6b53e1da0751902894a3e5bc6
    dialect: "mysql"
  },
  test: {
    username: "root",
<<<<<<< HEAD
    password: null,
    database: "database_test",
=======
    password: "troya",
    database: "beers",
>>>>>>> d4922972f38865b6b53e1da0751902894a3e5bc6
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
