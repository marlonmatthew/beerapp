require("dotenv").config();

module.exports = {
  development: {
    username: "root",
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
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
