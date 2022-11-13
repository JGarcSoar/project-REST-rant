const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "../images/thai-food.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "../images/kittens.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;
