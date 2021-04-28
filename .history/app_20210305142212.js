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
app.use(express.static('public'));

//middleware to use data from other ejs files or accepting form data
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


 app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

//blog route  //render blog data
app.get('/blogs',(req,res)=>{
   Blog.find().sort({createdAt: -1})
   .then((result)=>{
       res.render('index',{title:'All Blogs',blogs:result})
   }).catch(err=>console.log(err));
});

//blogs to handle POST request
app.post('/blogs',(req,res)=>{
        const blog=new Blog(req.body);

        


            
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

