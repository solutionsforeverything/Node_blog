const { RSA_NO_PADDING } = require('constants');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader('Content-Type','text/html');
    res.write('<p>Hello World!</p>');
    res.write('<p>Hello World again!</p>');
    res.end();
});

server.listen(3000,'localhost',()=>{
   console.log('listening to port 3000');
});