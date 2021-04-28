const Blog=require('../models/blog');

//blog_index, blog_details, blog_create, blog_create_post, blog_delete

const blog_index=(req,res)=>
{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    }).catch(err=>console.log(err));
}

//blog details
const blog_details=(req,res)=>{
    const id=req.params.id;
 
     Blog.findById(id)
     .then((result)=>{
         res.render('details',{title:'Blog Details',blog:result})
     }).catch((err)=>{
        res.render('404',{title:'Blog not found'})
     });
}

//blog create page
const blog_create_get=(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
}

//blog create post

const blog_create_post=(req,res)=>{
    const blog=new Blog(req.body);
 
         blog.save()
         .then((result)=>{
             res.redirect('/blogs');
         }).catch((err)=>{
             console.log(err);
         })
}

//blog delete
const blog_delete=(req,res)=>{
    const id = req.params.id;
     
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });   
 
}

module.exports={
    blog_index, 
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete

}