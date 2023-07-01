// require('dotenv').config()
// const { URL_API } = process.env
const axios = require("axios");

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get ( process.env.URL_API + id);
    const { name, status, species, gender, origin, image } = response.data;
    return res.status(200).json({ id, name, status, species, gender, origin, image });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;