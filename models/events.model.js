import { text } from "express";
import { db } from "../database/connection.database.js";


const create =async({class_type, start_time,end_time, tea_id, client_id})=>{
    const query={
        text:`
        insert into events (class_type, start_time, end_time, tea_id, client_id)
        values ($1, $2, $3, $4, $5)
        returning 
        class_type, 
        to_char(start_time, 'YYYY-MM-DD HH24:MI:SS') as start_time,
        to_char(end_time, 'YYYY-MM-DD HH24:MI:SS') as end_time,
        tea_id, 
        client_id ,
        eid
        `,
        values:[class_type, start_time,end_time ,tea_id, client_id]
    }
    const {rows}=await db.query(query)
    return rows[0]
}

const findEvent=async(start_time, end_time)=>{
    const query ={
        text:`
        SELECT 1 FROM EVENTS WHERE (start_time,end_time) OVERLAPS($1, $2) LIMIT 1
        `,
        values:[start_time,end_time]
    }
    const{rows}= await db.query(query)
    return rows.length>0;
}

const myEvent= async(id)=>{
    const query={
        text:`
        select * from events where tea_id=$1 or client_id=$1
        `,
        values:[id]
    }
    const {rows}= await db.query(query)
    return rows

}

export const eventsModel={
    create,
    findEvent,
    myEvent

}

