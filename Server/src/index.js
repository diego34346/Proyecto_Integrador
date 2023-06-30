const express = require("express");
const server = express();
const PORT = 3001;
const router = require('./routes/index')
const morgan = require('morgan')


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

server.listen(PORT, () => {
  console.log(`server raised in port ${PORT}`);
})






// const http = require ("http")
// const getCharById = require ("./controllers/getCharById")

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1)
//         getCharById(res,id)
//     }
//   }).listen(3001, ("localhost"))



// const http = require("http");
// const data = require("./utils/data")
// var fs = require("fs");

// module.exports =

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     console.log(req.url)

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1)
//         const character = data.find((char) => char.id == id)

//         if(character){
//             res.writeHead(200, {"Content-Type" : "application/json"})
//             return res.end(JSON.stringify(character))
//         }else{
//             res.writeHead(404,{"Content-Type": "application/json"})
//             return res.end(JSON.stringify({error:"Character not found"}))
//         }
//     }
//     res.writeHead(404,{"Content-Type":"text-plain"})
//     res.end("Route not found")

//   }).listen(3001, "localhost");
