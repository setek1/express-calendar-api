import { eventsModel } from "../models/events.model.js"


const addEvent=async(req, res)=>{

    const {class_type, start_time, tea_id, client_id} = req.body
    
    const startDate=new Date(start_time)
    const endDate= new Date(startDate.getTime() + (90 * 60000))
    const endtimeF= endDate.toISOString()

    const newEvent=await eventsModel.create({class_type, start_time,end_time:endtimeF ,tea_id, client_id})
    
    
    return res.status(200).json({ok:'okey',event:newEvent})
}

export const EventController={
    addEvent
}