const jwt =require ("jsonwebtoken")

 const verifyToken=async(req,res,next)=>{
    console.log(req.cookies)
    
    if(req.cookies==undefined)return res.send({status:false,message:"Please Login "})
    const token=req.cookies.access_token
    if(!token) return res.send({status:false,message:"You are not authenticated!!"})
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return res.send({status:false,message:"You are not authorised!!"}) 
        if(user){
            req.userId=user.id
            next()

        }
    })
}
module.exports = {verifyToken}