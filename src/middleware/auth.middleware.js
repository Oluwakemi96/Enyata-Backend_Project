const { JWT_SIGN_OPTIONS } = require('../config/jwt');

const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = async (req, res, next) => {
  const tokenExists = req.headers && req.headers.authorization;
  if(tokenExists){
    const token = req.headers.authorization.split(' ')[1];
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, JWT_SIGN_OPTIONS, (err, decodedToken) =>{
      if(err){
        return res.status(403).json({message: 'Unauthorized access.'})
      }

      req.user = decodedToken; //what is encoded in the token
      return next()
    })
  }else{
    return res.status(403).json({message: 'Missinng token'})
  }
}

module.exports = {verifyToken}