require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DBPASSWORD,
    database: "beers",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "	tw5rbgt459c0wk0r",
    password: process.env.DBPASSWORD,
    database: "pj4qq2yjmuzx0dqp",
    host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
