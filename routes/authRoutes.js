// //using normalizeEmail for lower case and uppercase email
// const normalizeEmail = require("normalize-email");
// const db = require("../models");
// module.exports = app => {
//   app.post("/api/user", async (req, res) => {
//     //grabbing the information, email password
//     const { email, password, firstName } = req.body;
//     //normalize the email- npm i normalize-email
//     const normalEmail = normaliseEmail(email);
//     const existingUsers = await db.User.findAll({
//       where: { email: normalEmail }
//     });
//     if (existingUsers.length > 0) {
//       return res.status(422).send("This user already exists");
//     }

//     const newUser = await db.User.create({
//       email: normalEmail,
//       password,
//       firstName
//     });
//     // returning in json the email, firstname, id so that the front end can use this information on the front end.
//     return res.json({ email, firstName, id: newUser.id });
//   });
// };
