const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"


const getCharById = (req, res) => {
  const { id } = req.params
  axios
    .get(`${URL}${id}`)
    .then((response) => {
      const { id, name, status, species, gender, origin, image } = response.data;
      return res.status(200).json({ id, name, status, species, gender, origin, image })
    })

    .catch((error) => {
      return res.status(500).send(error.message)
    });
};

module.exports = getCharById;



// axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { id, name, status, species, gender, origin, image } = response.data;
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ id, name, status, species, gender, origin, image }));
//     })
//     .catch((error) => {
//       res.writeHead((500, { "Content-Type": "text/plain" }));
//       res.end(error.message);
//     });
// };