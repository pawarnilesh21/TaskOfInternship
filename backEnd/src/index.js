import express from 'express'
import connectDB from './db.js'
import userRoutes from './routes/userRoutes.js'
 import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/users', userRoutes)

app.listen(3000,()=>{console.log('Server is listen on Port 3000')})

export default app


