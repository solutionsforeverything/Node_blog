const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader('Content-Type',)
});

server.listen(3000,'localhost',()=>{
   console.log('listening to port 3000');
});