import { db } from "../database/connection.database.js";


const create =async({class_type, start_time,end_time, tea_id, client_id})=>{
    const query={
        text:`
        insert into events (class_type, start_time, end_time, tea_id, client_id)
        values ($1, $2, $3, $4, $5)
        returning class_type, start_time , end_time , tea_id, client_id
        `,
        values:[class_type, start_time,end_time ,tea_id, client_id]
    }
    const {rows}=await db.query(query)
    return rows[0]
}

export const eventsModel={
    create

}

