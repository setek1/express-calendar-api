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

export const eventsModel={
    create

}

