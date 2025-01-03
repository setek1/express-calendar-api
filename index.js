import express from 'express'
import 'dotenv/config'
import userRouter from './routes/user.route.js'

const app = express();

app.use(express.json())

app.use('/api/v1/users',userRouter)
app.use(express.urlencoded({extended:true}))



const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>console.log('servidor andando en '+'localhost:'+PORT))