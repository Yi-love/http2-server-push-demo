'use strict';

const fs = require('fs');
const path = require('path');
const http2 = require('http2');

const PORT = process.env.PORT || 4000

let options = {
  key: fs.readFileSync(path.resolve(__dirname , './ssl/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname , './ssl/server.crt'))
};

const server = http2.createSecureServer(options , (req , res)=>{
  res.writeHead(200);
  res.end('ok');
}).listen(PORT , (err)=>{
  console.log(err ? err : `server start success . on port : ${PORT}`);
});

module.exports = server;