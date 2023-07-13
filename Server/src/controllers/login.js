const users = require("../utils/users")

const login = async (req, res) => {
    const { email, password } = req.query;
  
    try {
      const userSearch = await users.find((user) => user.email === email && user.password === password);
  
      if (userSearch) {
        return res.status(200).json({ access: true });
      } else {
        return res.status(404).json({ access: false });
      }
    } catch (error) {
      return res.status(500).json({ error: message });
    }
  };

module.exports = login