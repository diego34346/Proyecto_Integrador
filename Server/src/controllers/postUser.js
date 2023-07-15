const {User} = require ('../DB_connection')

const postUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      if (!email || !password) {
        return res.status(400).json({message:'Faltan datos'});
      }
        const [user] = await User.findOrCreate({ 
          where: {email, password}
        }); // Crear un nuevo usuario en la base de datos
        return res.status(201).json(user); // Enviar el usuario creado como respuesta
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = postUser
