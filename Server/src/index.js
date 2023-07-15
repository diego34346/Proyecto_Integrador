// require('dotenv').config()
const express = require("express");
const server = express();
const router = require('./routes/index')
const morgan = require('morgan')
const { conn } = require('./DB_connection');
const PORT_SERVER = 3001

// require('dotenv').config()
// const { PORT_SERVER } = process.env


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(morgan("dev")) 
server.use(express.json())
server.get("/",(req, res) => {
  res.send("wellcome to my server")
})

server.use("/rickandmorty", router)

conn.sync({force: false})
.then(()=>{
  server.listen(PORT_SERVER, () => {
    console.log(`server raised in port ${PORT_SERVER}`);
  })
})
.catch((error)=> console.log(error))
