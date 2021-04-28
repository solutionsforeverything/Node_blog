const express=require('express');

const app=express();

//register viewengine
app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{

    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/about-us',(req,res)=>{
    res.redirect('about');
});

app.use((req,res)=>{
    res.status(render('404');
});

