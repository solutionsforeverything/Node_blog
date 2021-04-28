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

app.get('/blogs/:id',(req,res)=>{
      
    const id=req.params.id;

    Blog.findById(id)
    .then((result)=>{
        res.render('details',{title:'Blog Details',blog:result})
    }).catch((err)=>{
        console.log(err);
    });

});
//blogs to handle POST request
app.post('/blogs',(req,res)=>{
        const blog=new Blog(req.body);

        blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        }).catch((err)=>{
            console.log(err);
        })

});

app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    })
    .catch(err=>console.log(err));
});
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
    body{
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
      font-family: 'Noto Serif', serif;
      max-width: 1200px;
    }
    p, h1, h2, h3, a, ul{
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: #222;
    }

    /* nav & footer styles */
    nav{
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      text-transform: uppercase;
    }
    nav ul{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    nav li{
      list-style-type: none;
      margin-left: 20px;
    }
    nav h1{
      font-size: 3em;
    }
    nav p, nav a{
      color: #777;
      font-weight: 300;
    }
    footer{
      color: #777;
      text-align: center;
      margin: 80px auto 20px;
    }
    h2{
      margin-bottom: 40px;
    }
    h3{
      text-transform: capitalize;
      margin-bottom: 8px;
    }
    .content{
      margin-left: 20px;
    }

    /* index styles */
    .blogs a{
      display: block;
      margin: 40px 0;
      padding-left: 30px;
      border-left: 6px solid crimson;
    }
    .blogs a:hover h3{
      color: crimson;
    }

    /* details styles */
    .details{
      position: relative;
    }
    .delete{
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      padding: 8px;
    }
    .delete:hover{
      cursor: pointer;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }

    /* create styles */
    .create-blog form{
      max-width: 400px;
      margin: 0 auto;
    }
    .create-blog input,
    .create-blog textarea{
      display: block;
      width: 100%;
      margin: 10px 0;
      padding: 8px;
    }
    .create-blog label{
      display: block;
      margin-top: 24px;
    }
    textarea{
      height: 120px;
    }
    .create-blog button{
      margin-top: 20px;
      background: crimson;
      color: white;
      padding: 6px;
      border: 0;
      font-size: 1.2em;
      cursor: pointer;
    }
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

