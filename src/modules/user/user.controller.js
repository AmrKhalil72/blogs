import bcrypt from 'bcrypt';
import { userModel } from './../../../database/models/user.model.js';


export const signUp = async(req,res)=>{
  const {name,email,password} = req.body;
  let user = await userModel.findOne({email})
  if(user){
    res.json({message:'email already in use'})
  }else{
    await bcrypt.hash(password,process.env.ROUNDS,async function(err,hash){
      await userModel.insertMany({name,email,password:hash});
      res.json({message:'success'});
    });
  }
};

export const signIn = async(req,res)=>{
  const {email,password} = req.body;
  let user = await userModel.findOne({email});
  if(user){
    const match = await bcrypt.compare(password,user.password)
    if(match){
      res.json({message: 'login success'})
    }else{
      res.json({message:'incorrect password'})
    }
  }else{
    res.json({message:'login error, account not found'})
  }
}