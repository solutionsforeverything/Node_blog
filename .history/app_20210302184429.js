const express=require('express');

//express app
const app=express();

//Setting ejs
app.set('views','ejs');

//listen to request
app.listen(3000);

app.get('/',(req,res)=>{
    
    res.render('index');
});

app.get('/about',(req,res)=>{
    
    res.sendFile('./views/about.html',{root:__dirname});
});

//redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//404 page
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html',{root:__dirname});
// })