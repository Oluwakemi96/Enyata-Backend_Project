const db = require('../config/config')
const applicationsQueries = require('../queries/application.queries')

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

module.exports = {addApplication}