import {adminModels} from '../models/admin.model.js'
import { userModel } from '../models/user.model.js'

const viewAllClient=async(req, res)=>{
    //Rol de cliente
    const role_id=3
    const clients = await adminModels.searchAllClients(role_id)
    return res.status(201).json({ok:'ok',clientes:clients})
}
const viewClient=async(req, res)=>{

    const {uid} =req.params
    const clientEvents=await adminModels.searchClient(uid)
    if(!client || client.length===0){
        return res.status(201).json({ok:'ok', msg:'Cliente sin eventos'})
    }
    return res.status(201).json({ok:'ok', cliente:clientEvents})
}

const viewInstructor=async(req, res)=>{

    const {uid} =req.params
    const instructorEvents=await adminModels.searchInstructor(uid)
    if(!instructorEvents || instructorEvents.length===0){
        return res.status(201).json({ok:'ok', msg:'Instructor sin eventos'})
    }
    return res.status(201).json({ok:'ok', eventos_instructor:instructorEvents})

}
const viewAllInstructor=async(req, res)=>{
    //Rol de Instructor
    const role_id=2
    const instructores = await adminModels.searchAllInstructor(role_id)
    return res.status(201).json({ok:'ok',Instructores:instructores})
    
  
}

export const AdminController={
    viewClient,
    viewAllClient,
    viewInstructor,
    viewAllInstructor
}

