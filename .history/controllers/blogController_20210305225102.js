const Blog=require('../models/blog');
//blog_index, blog_details, blog_create, blog_create_post, blog_delete

const blog_index=(req,res)=>
{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index',{title:'All Blogs',blogs:result})
    }).catch(err=>console.log(err));
}

module.exports=