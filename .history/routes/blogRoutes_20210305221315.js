const express=require('express');
const router=express.router();


.get('/blogs',(req,res)=>{
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
 
 app.delete('/blogs/:id', (req, res) => {
     const id = req.params.id;
     
     Blog.findByIdAndDelete(id)
       .then(result => {
         res.json({ redirect: '/blogs' });
       })
       .catch(err => {
         console.log(err);
       });
   });
 
 app.get('/blogs/create',(req,res)=>{
     res.render('create',{title:'Create a new Blog'});
 });