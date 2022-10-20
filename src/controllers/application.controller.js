const db = require('../config/config')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { JWT_SIGN_OPTIONS } = require('../config/jwt')
const queries = require('../queries/signup.queries')
const applicationsQueries = require('../queries/application.queries')

const login = async (req, res) => {
  let { email_address, password } = req.body;
  try {
      const existingEmail = await db.any(queries.findByEmail, [email_address]);
      const user = await db.any(queries.getUserByEmail, [email_address]);
      console.log(user);
      if (!existingEmail) {
          return res.status(404).json({
              status: 'Failed',
              message: 'No user with email'
          })
      }
      if (!user) {
          return res.status(404).json({
              status: 'Failed',
              message: 'No user with email'
          })
      }
      const passwordMatch = bcrypt.compareSync(password, user[0].password);
      if (!passwordMatch) {
          return res.status(400).json({
              status: 'Failed',
              message: 'Incorrect password'
          })
      }

      const sessionToken = jwt.sign(
          {
              email_address: user.email_address,
              user_id: user.id
          },
          process.env.JWT_SECRET_KEY,
          JWT_SIGN_OPTIONS
      );

      delete user[0].password
      return res.status(200).json({
          status: 'Success',
          message: 'Logged In Successfully',
          data: {
              user,
              token: sessionToken
          }
      })
  } catch (err) {
      console.log(err)
      return err;
  }

}


const addApplication = async(req, res) => {
  let {upload_CV, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa} = req.body
  let batch = await db.any(applicationsQueries.getActiveBatch)
  batch_id = batch[0].batch_id
  
  let user_id = req.user.user_id
  console.log(user_id)
    try {
      const existingEmail = await db.any( applicationsQueries.findByEmail, [email_address]);
      if (existingEmail.length > 0) {
          return res.status(400).json({
              status: 'Failed',
              message: 'Email already exists'
          })
      }
    const applicationDetails = await db.any(applicationsQueries.addApplications, [upload_CV, user_id, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa, batch_id,])
      return res.status(200).json({
        status:'successful',
        message:'Application submitted successfully',
        data: applicationDetails
      })

  } catch (error) {
    console.log(error);
  }

}

module.exports = {
  login,
  addApplication
}