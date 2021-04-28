const { RSA_NO_PADDING } = require('constants');
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
    //set the header content type
    res.setHeader('Content-Type','text/html');
    let path='./views/';
    
    switch(req.url)
    //send an html file
    fs.readFile('./views/index.html',(err,data)=>{
      if(err)
      {
          console.log(err);
          res.end();
      }
      else{
          res.write(data);
          res.end();
      }
    });
    
    
});

server.listen(3000,'localhost',()=>{
   console.log('listening to port 3000');
});