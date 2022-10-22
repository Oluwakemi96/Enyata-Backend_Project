const { response } = require('express')
const db = require('../config/config')
const applicationsQueries = require('../queries/application.queries')


const addApplication = async(req, res) => {
<<<<<<< HEAD
  let {upload_CV, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa} = req.body
  let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
  const batch_id = batch.batch_id

=======
  let {upload_CV,  upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa} = req.body
  let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
  batch_id = batch.batch_id
  
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905
  let user_id = req.user.user_id
  console.log(user_id)
    try {
<<<<<<< HEAD
      const applicationDetails = await db.any(applicationsQueries.createApplications, [upload_CV, user_id, upload_photo, first_name, last_name,email_address, date_of_birth, address, university, course_of_study, cgpa, batch_id,])
      console.log(applicationDetails)
          return res.status(200).json({
            status:'successful',
            message:'Application submitted successfully',
            data: applicationDetails
          })
=======
    const applicationDetails = await db.any(applicationsQueries.createApplications, [upload_CV, user_id, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa, batch_id,])
      return res.status(200).json({
        status:'successful',
        message:'Application submitted successfully',
        data: applicationDetails
      })
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905

  } catch (error) {
    console.log(error);
  }

}

<<<<<<< HEAD
const addStatus = async (req, res) => {
  try {
    let {status, id} = req.body
    console.log(status)
    console.log(id)
    const currentStatus = await db.oneOrNone(applicationsQueries.addApplicationStatus, [status, id] )
   
    return res.status(200).json({
        status:'successful',
        message: 'status added successfully',
        data: currentStatus
    })

  } catch (error) {
    console.log(error)
    return error;
  }

}

module.exports = {
  addApplication,
  addStatus
=======
module.exports = {
  addApplication
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905
}