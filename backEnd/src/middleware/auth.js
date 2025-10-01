import jwt from 'jsonwebtoken'
const JWT_SECRET="pawarnilesh21"

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token=authHeader &&authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({error:"access denied, No Token is Provided"})

    }

    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(error){
        return res.status(403).json({error:"Invalid or exPired Token"})
    }
}

export default authMiddleware
