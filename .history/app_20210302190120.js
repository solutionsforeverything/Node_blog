const express=require('express');

const app=express();

//register viewengine
app.set('view engine','ejs')

app.listen(3000);

