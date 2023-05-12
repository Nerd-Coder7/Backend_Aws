const express =require("express");
const app = express.Router()
const Blog = require("../model/blogs")

app.get('/blogs/:blogTitle', async(req, res,next) => {
    try{
         const blog=  await Blog.find({ title: req.params.blogTitle });
   res.status(200).send(blog)
    }catch(err){
        next(err)
    }
  
 })

 app.get('/blogs', async(req, res,next) => {
 try{ const blog= await Blog.find();   
   res.status(200).send(blog)
 }catch(err){
    next(err)
 }
 })

 app.post('/blogs', async(req, res,next) => {
try{    const title = req.body.title
    const content = req.body.content
    const blog = new Blog({
        title: title,
        content: content
    })
    await blog.save();
    res.status(200).json(blog)
}catch(err){
    next(err)
}
 })

 app.delete('/blogs', async(req, res) => {
    const title = req.body.title
   const delete_BLog = await Blog.deleteOne({ title: title });
   res.status(200).send(delete_BLog)
   })
 module.exports=app;