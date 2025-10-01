
import express from 'express'
import User from '../models/user.js'
import leaderBoard from '../models/leaderboard.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import authMiddleware from '../middleware/auth.js'
const JWT_SECRET="YourSecretKey"
const userRoutes=express.Router()

userRoutes.post('/',async (req,res)=>{
      const { firstName, lastName, email, password } = req.body
      const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists.' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ firstName:firstName, lastName:lastName, email:email, password:hashedPassword })
    await newUser.save()
    res.status(201).json({ message: 'User created successfully.' })

})

userRoutes.post('/login',async (req,res)=>{
     const {email,password}=req.body
     const user=await User.findOne({email})
     if(!user){
      return res.status(401).json({error:"Invalid Credentials"})
     }
     const isPassValid=await bcrypt.compare(password,user.password)
     if(!isPassValid){
      return res.status(401).json({error:"Invalid Credentials"})

     }

     const token=jwt.sign({
      id:user._id,email:user.email
     },JWT_SECRET)
     res.json({token})


})

userRoutes.get('/dashboard',authMiddleware,async(req,res)=>{
   const user = {
    id: req.user.id,
    email: req.user.email
  }

  const leaderBoardDoc=await leaderBoard.findOne()
  const leaderboard=leaderBoardDoc?.leaderboard || []

  res.json({
    message: 'Welcome to Dashboard',
    user,
    leaderboard
  })
})

export default userRoutes


