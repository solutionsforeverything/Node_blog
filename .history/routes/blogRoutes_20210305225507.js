const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController');



router.get('/',blogController.blog_index);
 
 router.get('/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
});
 router.get('/:id',(req,res)=>{
       
     const id=req.params.id;
 
     Blog.findById(id)
     .then((result)=>{
         res.render('details',{title:'Blog Details',blog:result})
     }).catch((err)=>{
         console.log(err);
     });
 
 });
 //blogs to handle POST request
 router.post('/',(req,res)=>{
         const blog=new Blog(req.body);
 
         blog.save()
         .then((result)=>{
             res.redirect('/blogs');
         }).catch((err)=>{
             console.log(err);
         })
 
 });
 
 router.delete('/:id', blogController.blog_details);
 


 module.exports=router;