// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
// const { nextTick } = require("process");
// const authRoutes = require("./authRoutes");

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect(401, "/login");
  }
  next();
};

module.exports = app => {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../views/age.handlebars"));
    res.render("age");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    console.log("This is to2 login");
    res.render("login");
    // }
    // res.sendFile(path.join(__dirname, "/login.handlebars"));
  });

  app.get("/login", (req, res) => {
    console.log("this is in html routes");
    res.render("index");

    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });

  app.post("/index", (req, res) => {
    console.log("getting the page");
    res.render("index");
  });

  app.get("/login", isAuth, (req, res) => {
    res.render("index", {
      firstName: req.user.firstName
    });
  });
};
