import { userModel } from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"

const register =async(req,res)=>{
    try {
        
        const {username,email,password}=req.body

        if(!username, !email, !password){
            return res.status(400).json({ok:false, msg:'son requeridos : email, username, password'})
        }

        const user = await userModel.findOneByEmail(email)

        if (user){
            return res.status(409).json({ok: false, msg:'El email ya existe'})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser= await userModel.create({email,password:hashedPassword , username})
        

        const token = jwt.sign({
            uid:newUser.uid,
            email: newUser.email,
            role_id: newUser.role_id
            
        },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        )

        return res.status(201).json({ok:true, token:token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error server'
        })
    }
}
const login =async(req,res)=>{
    try {
        const {email, password}=req.body
        if(!email, !password){
            return res.status(400).json({ok:false, msg:'son requeridos : email, username, password'})
        }
        const user = await userModel.findOneByEmail(email)
        if(!user){
            return res.status(400).json({ok:false, msg:'Usuario no existe'})
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if( !isMatch){
            return res.status(400).json({ok:false, msg:'Credenciales invalidas'})
        }
        const token = jwt.sign({
            uid:user.uid,
            email: user.email,
            role_id: user.role_id
        },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        )
        return res.status(200).json({ok:true, token:token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error server'
        })
    }
}


const profile =async (req, res)=>{
    try {
        const user= await userModel.findOneByEmail(req.email)
        return res.json({ok: true, msg:user})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error server'
        })
    }
}
export const UserController={
    register,
    login,
    profile
}