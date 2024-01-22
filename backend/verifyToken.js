const jwt = require('jsonwebtoken')

// there is  middlewear so there will be next as parameter
const verifyToken=(req, res, next)=>{
    //to get the token
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token, process.env.SECRET, async(err, data)=>{
        if(err) {
            return res.status(403).json("Token is not valid")
        }
        req.userId = data._id
        // console.log("passed");
        next()
    })
}

module.exports = verifyToken