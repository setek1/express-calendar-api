import {db} from '../database/connection.database.js'


const create = async ({email, password, username}) =>{
    const query ={
        text:`
            insert into users (email, password, username)
            values ($1, $2, $3)
            returning email, username, role_id
        `,
        values:[email, password, username]
    }
    const {rows} = await db.query(query)
    return rows[0]

}

const findOneByEmail=async(email)=>{
    const query ={
        text:`
        select * from users where email =$1
        `,
        values:[email]
    }
    const {rows}= await db.query(query)
    
    return rows[0]

}

export const userModel={
    create,
    findOneByEmail
}