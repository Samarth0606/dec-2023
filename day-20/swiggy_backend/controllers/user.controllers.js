import UserModel from "../models/User.model.js";
import bcrypt from 'bcrypt';


export async function register(req,res){
    try{
        let {firstName,email,password} = req.body;
        UserModel.findOne({email})
        .then((data)=>{
            if(data){
                return res.status(409).json({message:"User already exists"})
            }
            else{
                UserModel.create({
                    firstName,
                    email,
                    password: bcrypt.hashSync(password, 10)
                })
                res.status(201).json({message: "user created successfully"})
            }
        })
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}


export async function login(req,res){
    try{
        let {email,password} = req.body;
        UserModel.findOne({email}).then((data)=>{
            if(!data){
                return res.status(403).json({message:"User doesnot exists"})
            }
            let validPassword = bcrypt.compareSync(password, data.password); 
            if(!validPassword){
                return res.status(403).json({message:"Wrong credentials"})
            }
            return res.status(200).json({
                user : {
                    email: data.email,
                    firstName: data.firstName,
                    // password: data.password // we dont share
                }
            })
        })
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}