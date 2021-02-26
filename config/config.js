require("dotenv").config();

module.exports = {
  development: {
    username: "root",
<<<<<<< HEAD
    password: Process.env.DBPASSWORD,
    database: "passport_demo",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
=======
    password: process.env.DBPASSWORD,
    database: "beers",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "troya",
    database: "beers",
    host: "127.0.0.1",
    dialect: "mysql"
>>>>>>> d4922972f38865b6b53e1da0751902894a3e5bc6
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
<<<<<<< HEAD
    dialect: "mysql",
  },
=======
    dialect: "mysql"
  }
>>>>>>> d4922972f38865b6b53e1da0751902894a3e5bc6
};
