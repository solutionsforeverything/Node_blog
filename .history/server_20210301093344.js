const { RSA_NO_PADDING } = require('constants');
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader('Content-Type','text/html');
    
    fs.read
    
    
});

server.listen(3000,'localhost',()=>{
   console.log('listening to port 3000');
});