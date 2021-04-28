const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.s
});

server.listen(3000,'localhost',()=>{
   console.log('listening to port 3000');
});