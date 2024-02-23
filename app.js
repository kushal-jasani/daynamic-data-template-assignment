const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

// app.engine("hbs", expressHbs.engine({
//     extname:'hbs',
//     defaultLayout:'mainlayout',
//     layoutsDir:'views/layout/'
// }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const usersarr = [];

app.get("/", (req, res, next) => {
  res.render("index", { pagetitle: "add-user" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pagetitle: "users",
   users: usersarr,
   hasUsers:(usersarr.length>0)
});
});

app.post("/add-user", (req, res, next) => {
  usersarr.push({ name: req.body.username });
  res.redirect("/users");
});
app.listen(3000);
