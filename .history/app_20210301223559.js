const express=require('express');

//express app
const app=express();

//listen to request
app.listen(3000);

app.get('/',(req,res)=>{
    
    res.send('<p>Hello world</p>');
});

app.get('./about',(req,res)=>{
    
    res.send()
})