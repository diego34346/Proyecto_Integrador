const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  try {
    const [addFav] = await Favorite.findOrCreate({
      where: { id,},
      defaults: { name, origin, status, image, species, gender }
    });

    if (!id || !name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }
    if (addFav) {
      return res.status(200).json(addFav);
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = postFav;
