const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController');


 router.get('/',blogController.blog_index);

 router.get('/create', blogCodelentroller.blog_create_get);

 router.get('/:id',blogController.blog_delete);

 //blogs to handle POST request
 router.post('/',blogController.blog_create_post);
 
 router.delete('/:id', blogController.blog_);
 
 module.exports=router;