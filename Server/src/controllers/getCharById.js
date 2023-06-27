const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

// try {
//   function getCharById (req, res) {
//     const { id } = req.params
//     axios
//       .get(`${URL}${id}`)
//       .then((response) => {
//         const { name, status, species, gender, origin, image } = response.data;
//         // console.log(response.data);
//         return res.status(200).json({ id, name, status, species, gender, origin, image })
//       })
//   };
// } catch (error) {
//   return res.status(500).send(error.message)
// }

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    const { name, status, species, gender, origin, image } = response.data;
    return res.status(200).json({ id, name, status, species, gender, origin, image });
  } catch (error) {
    return res.status(500).send(error.message);
  }
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