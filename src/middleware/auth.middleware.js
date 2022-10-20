const { JWT_SIGN_OPTIONS } = require('../config/jwt')
const applicationQueries = require('../queries/application.queries')
const db = require('../config/config')

const jwt = require('jsonwebtoken')
require('dotenv').config()


const verifyToken = async (req, res, next) => {
  const tokenExists = req.headers.authorization;
  if(tokenExists){
    const token = req.headers.authorization.split(' ')[1];
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, JWT_SIGN_OPTIONS, (err, decodedToken) =>{
      // next();
      if(err){
        return res.status(403).json({message: 'Unauthorized access.'})
      }
      console.log(token)
      req.user = decodedToken; //what is encoded in the token
      console.log(req.user)

      db.oneOrNone(applicationQueries.findByEmail, [decodedToken.email_address]).then((verifyToken) => {
        if (!verifyToken) {
            next(res.status(404).json({
                message:'ivalid token, user does not exists',
                status: 'not found'
            }))
        } else {
            next()
        }
    })
      // return next()
    })
  }else{
    return res.status(403).json({message: 'Missinng token'})
  }
}
module.exports = {verifyToken}