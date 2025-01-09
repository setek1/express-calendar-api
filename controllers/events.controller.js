import { eventsModel } from "../models/events.model.js"

import moment from "moment-timezone"


const addEvent=async(req, res)=>{
    const {class_type, start_time, tea_id, client_id} = req.body
    const startDate= moment.tz(start_time,"America/Santiago").format('YYYY-MM-DD HH:mm:ss')
    const endDate= moment.tz(start_time,"America/Santiago").add(90, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    const eventDate= await eventsModel.findEvent(startDate,endDate)
    if(eventDate){
        return res.status(400).json({ok:false, msg:'Esta hora ya esta agendada'})
    }
    const newEvent=await eventsModel.create({class_type, start_time:startDate,end_time:endDate ,tea_id, client_id})
    return res.status(200).json({ok:'okey',event:newEvent})
}

const myEvent=async(req,res)=>{
    
    const events= await eventsModel.myEvent(req.uid)
    
    return res.status(200).json({ok:'okey', Miseventos: events})

}

export const EventController={
    addEvent,
    myEvent
}