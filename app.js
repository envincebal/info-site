const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if(req.url === "/"){
    fs.readFile("./")
  }
}).listen(3000);