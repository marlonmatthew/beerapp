//using normalizeEmail for lower case and uppercase email
const normalizeEmail = require("normalize-email");
const db = require("../models");
const passport = require("../config/passport");

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect(401, "/login");
  }

  return next();
};

module.exports = (app) => {
  app.post("/api/users", async (req, res) => {
    const { email, password, firstName } = req.body;

    try {
      const normalEmail = normalizeEmail(email);

      const existingUsers = await db.User.findAll({
        where: { email: normalEmail },
      });

      if (existingUsers.length > 0) {
        return res.status(422).send("This user already exists");
      }

      const newUser = await db.User.create({
        email: normalEmail,
        password,
        firstName,
      });

      return res.json({
        email,
        firstName,
        id: newUser.id,
      });
    } catch (error) {
      return res.status(503).send("There was an error creating the user");
    }
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
      firstName: req.user.firstName,
    });
  });

  app.post("/api/logout", isAuth, async (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid", { path: "/" });
      res.send(true);
    });
  });
};