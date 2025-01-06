import express from 'express'
import 'dotenv/config'
import userRouter from './routes/user.route.js'
import eventsRouter from './routes/events.route.js'
import instructorRouter from './routes/instructor.route.js'

const app = express();

app.use(express.json())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/eventos',eventsRouter)
app.use('/api/v1/instructor',instructorRouter)
app.use(express.urlencoded({extended:true}))



const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>console.log('servidor andando en '+'localhost:'+PORT))