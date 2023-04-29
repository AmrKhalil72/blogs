import  express  from "express";
import * as blogController from "./blog.controller.js";

const blogRouter =express.Router()

blogRouter.post('/', blogController.addBlog)
blogRouter.get('/', blogController.getAllBlogs)
blogRouter.put('/', blogController.updateBlog)
blogRouter.delete('/', blogController.deleteBlog)







export default blogRouter