const axios = require("axios");
const URL_API = "https://rickandmortyapi.com/api/character"
// require('dotenv').config()
// const { URL_API } = process.env


const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get ( `${URL_API}/${id}`);
    const { name, status, species, gender, origin, image } = response.data;
    return res.status(200).json({ id, name, status, species, gender, origin, image });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;