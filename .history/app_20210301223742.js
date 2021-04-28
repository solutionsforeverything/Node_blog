const express=require('express');

//express app
const app=express();

//listen to request
app.listen(3000);

app.get('/',(req,res)=>{
    
    res.send
});

app.get('/about',(req,res)=>{
    
    res.send('<p>About us</p>');
});