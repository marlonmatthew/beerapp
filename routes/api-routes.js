// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

// const { resolveConfigFile } = require("prettier");
const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect(401, "/login");
  }
  return next();
};
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Route for getting a beer from database at random for featured beer card
  app.get("/api/random_beer", async (req, res) => {
    const randomBeer = await getRandomBeer();
    res.json(randomBeer);
  });

  //Route for getting entire beer list from database
  // app.get("/list", (req, res) => {
  //   db.beer.findAll({ raw: true }).then(result => {
  //     res.render("list", { beer: result });
  //   });
  // });
  app.get("/list", async (req, res) => {
    const getBeerlist = await getAll();
    res.render("list", { beer: getBeerlist });
  });

  // app.get("/api/filter", (req, res) => {
  //   db.beer
  //     .findAll({
  //       raw: true,
  //       where: {
  //         class: req.query.abvPerc,
  //         flavor: req.query.flavorRadio
  //       }
  //     })
  //     .then(data => {
  //       res.render("filter", { beer: data });
  //     });
  // });

  app.get("/api/filter", async (req, res) => {
    const getfilteredBeers = await getfiltered(
      req.query.abvPerc,
      req.query.flavorRadio
    );
    res.render("list", { beer: getfilteredBeers });
  });

  app.post("/api/logout", isAuth, async (req, res) => {
    req.session.destroy(() => {
      res.clearCookies("connect.sid", { path: "/" });
      res.send(true);
    });
  });
};

function getfiltered(abv, flavor) {
  return new Promise(resolve => {
    db.beer
      .findAll({
        raw: true,
        where: {
          class: abv,
          flavor: flavor
        }
      })
      .then(data => {
        return resolve(data);
      });
  });
}

function getAll() {
  return new Promise(resolve => {
    db.beer.findAll({ raw: true }).then(result => {
      return resolve(result);
    });
  });
}

//Funtion returns element from database at random
function getRandomBeer() {
  return new Promise(resolve => {
    //TODO Have max value (100) generate from size of database
    //sequilize documentation on size of db
    const randomNumber = Math.floor(Math.random() * Math.floor(90));
    db.beer
      .findOne({
        where: {
          id: randomNumber
        }
      })
      .then(result => {
        return resolve(result);
      });
  });
}

//get count of total number of items in database
// const { count, rows } = await db.beer.findAndCountAll({});
// console.log(count);
// console.log(rows);
