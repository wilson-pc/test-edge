var express = require("express");
const edge = require('edge.js')
var app = express();
const { config, engine } = require("express-edge");
app.use(engine);

edge.global('count', function (array) {
    return array instanceof Array ? array.length : 0
  })
  const someMiddleware = function (req, res,next) {
    
    next();
    res.user=req.session||false;
  }
  app.use(someMiddleware);

app.set("views", `${__dirname}/views`);
app.get("/", function (req, res) {
  let users = [
    { username: "Lopez", bio: "loreen itsu " },
    { username: "Lopez", bio: "loreen itsu " },
    { username: "Lopez", bio: "loreen itsu " },
    { username: "Lopez", bio: "loreen itsu " },
    { username: "Lopez", bio: "loreen itsu " },
    { username: "Lopez", bio: "loreen itsu " },
  ];
  res.render("welcome", { username: "Virk",users:users });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
