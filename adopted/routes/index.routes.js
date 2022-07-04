const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//AUTH ROUTES
router.use("/", require("./auth.routes"))

//POUNDS ROUTES
router.use("/albergue", require("./pound.routes"))

module.exports = router;



