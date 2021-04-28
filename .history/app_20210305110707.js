const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose'); 
const Blog=require('./models/blog');
const app=express();

//connect to Mongo db
const dbURI='mongodb+srv://gopi:gopi2611@nodetuts.tw0ef.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


//register viewengine
app.set('view engine','ejs');


//middleware(run on server inbetween request and response) & static
app.use(morgan('dev'));
app.use(express.static('public'));

//mongoose(used to access db and sandbox routes)
app.get('/add-blog',(req,res)=>{

    const blog=new Blog({
        title:'New blog 2',
        snippet:'More about blog 2',
        body:'More details about blog 2'
    });

    blog.save()
    .then((result)=>res.send(result))
    .catch(err=>console.log(err));
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

