const db = require('../config/config')
const applicationsQueries = require('../queries/application.queries')

const addApplication = async(req, res) => {
  let {upload_CV, upload_photo, first_name, last_name,email, date_of_birth, address, university, course_of_study, cgpa} = req.body
  let batch = await db.any(applicationsQueries.addUserByBatch)
  batch_id = batch.batch_id
    try {
      const existingEmail = await db.any( applicationsQueries.findByEmail, [email]);
      if (existingEmail.length > 0) {
          return res.status(400).json({
              status: 'Failed',
              message: 'Email already exists'
          })
      }
    const applicationDetails = await db.any(applicationsQueries.addApplications, [upload_CV, upload_photo, first_name, last_name,email, date_of_birth, address, university, course_of_study, cgpa, batch_id])
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