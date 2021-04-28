const express=require('express');

const app=express();

//register viewengine
app.set('view engine','ejs');

app.listen(3000);

//middleware( it is called for every request and when it wont be called after a response is made)
app.use((req,res)=>{
   console.log('Request is made '); 
   console.log('Hostname: '+req.ho); 
   console.log('Request is made '); 
   console.log('Request is made '); 
});

app.get('/',(req,res)=>{
    
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

    res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

