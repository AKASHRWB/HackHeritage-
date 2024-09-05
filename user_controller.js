import {User} from "../models/user_model.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req,res)=>{
    try{
        const{ name,email,password}=req.body;
        if(!name ||  !email || !password){
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        };
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already exist with this email",
                success:false,
            });
        }
        const hashedPassword= await bycrypt.hash(password,10);
        await User.create({
            name,
            email,
       
            password:hashedPassword,
        });
        return res.status(201).json({
            message:"account created successfully",
            success:true,
        });
    }catch(error){
        console.log(error);
    }
}


export const login=async(req,res)=>{
    try{
        const{ email,password}=req.body;
        if( !email || !password){
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        };
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"incorrect email or password",
                success:false,
            });
        };
        const isPasswordMatch=await bycrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"incorrect email or password",
                success:false,
            });
        };
        const tokenData={
            userId:user._id
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
        user={
            _id:user._id,
            name:user.name,
            email:user.email,
          
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpsOnly:true,samSite:'strict'}).json({
            message:`welcome back ${user.name}`,
            user,
            success:true,
        })
    }catch(error){
        console.log(error);
    }
} 

export const logout=async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logged out successfully",
            success:true,
        });
    }catch(error){
        console.log(error);
    }
}
