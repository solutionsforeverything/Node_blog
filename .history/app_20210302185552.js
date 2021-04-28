const express=require('express');

const app=express();

//register view engine
app.set('view engine')

app.listen(3000);

app.get('/',(req,res)=>{
    res.render(index);
});