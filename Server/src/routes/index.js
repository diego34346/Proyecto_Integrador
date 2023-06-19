const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/handleFavorites");
const deleteFav = require("../controllers/handleFavorites");
const express = require("express");
const router = express.Router();


router.get("/character/:id", getCharById)

// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

// Se pueden enrutar de las dos maneras pero es redundente colocar los 
// parametros (req, res)

router.get("/login", login)

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router;


