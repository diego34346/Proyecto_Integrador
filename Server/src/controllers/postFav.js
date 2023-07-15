const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {

  try {
    const { id, name, image, gender  } = req.body;
    
    if (!id || !name || !image || !gender )
    return res.status(401).send("Faltan datos");
    
    await Favorite.findOrCreate({
      where: { id },
      defaults: {name, image, gender},
    });
    
    const favorites = await Favorite.findAll();
    
    res.json(favorites);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;