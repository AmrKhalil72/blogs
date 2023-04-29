import { blogModel } from "../../../database/models/blog.model.js"



const addBlog=async(req,res)=>{
  const {title,desc,createdBy}=req.body
  await blogModel.insertMany({title,desc,createdBy})
  res.json({message:'success'})
}

const getAllBlogs=async(req,res)=>{
  const blog=await blogModel.find({}).populate('createdBy')
  res.json({message:'success blogs',blog})
}

const updateBlog=async(req,res)=>{
  const {title,desc,_id}=req.body
  const blog=await blogModel.findByIdAndUpdate(_id,{title,desc,new:true})
  if(blog){
    res.json({message:'success',blog})
  }else{
    res.json({message:'blog not found'})
  }
}

const deleteBlog=async(req,res)=>{
  const {_id}=req.body
  const blog=await blogModel.findByIdAndDelete({_id})
  if(blog){
    res.json({message:'success',blog})
  }else{
    res.json({message:'blog not found'})
  }
}
export{
  addBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog
}