import { db } from "../database/connection.database.js";


const searchAllClients= async(role_id)=>{
    const query={
        text:`
        select uid, email, username, role_id from users where role_id=$1
        `,
        values:[role_id]
    }

    const {rows}= await db.query(query)
    return rows

}

const searchClient= async(uid)=>{
    const query={
        text:`
        select * from events where client_id=$1
        `,
        values:[uid]
    }

    const {rows}= await db.query(query)
    return rows

}

const searchInstructor= async(uid)=>{
    const query={
        text:`
        select * from events where tea_id=$1
        `,
        values:[uid]
    }

    const {rows}= await db.query(query)
    return rows

}

const searchAllInstructor=async (role_id)=>{
    const query={
        text:`
        select uid, email, username, role_id from users where role_id=$1
        `,
        values:[role_id]
    }
    const {rows}= await db.query(query)
    return rows
}

export const adminModels={
    searchAllClients,
    searchAllInstructor,
    searchClient,
    searchInstructor
}