const {User} = require ('../DB_connection')


const login = async (req, res) => {
    const { email, password } = req.query;
  
    try {  
      if(!email){
        return res.status(404).send('Usuario no encontrado');
      }
      if(!password){
        return res.status(403).send('Contraseña incorrecta')
      }

      const user = await User.findOne({
        where: {email}
      })

      if(user.password === password){
        return res.status(200).json({ access: true })
      }      

    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  };

  module.exports = login





// const login = async (req, res) => {
//     const { email, password } = req.query;
  
//     try {
//       const userSearch = await users.find((user) => user.email === email && user.password === password);
  
//       if (userSearch) {
//         return res.status(200).json({ access: true });
//       } else {
//         return res.status(404).json({ access: false });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: message });
//     }
//   };

// module.exports = login