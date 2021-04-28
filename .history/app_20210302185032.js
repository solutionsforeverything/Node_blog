const express=require('express');

const app=express();

//register view engine

app.set('views','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile
})