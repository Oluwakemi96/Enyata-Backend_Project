const db = require('../config/config')
const applicationsQueries = require('../queries/application.queries')


const addApplication = async(req, res) => {

  let {upload_CV, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa} = req.body
  let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
  const batch_id = batch.batch_id


  let user_id = req.user.user_id
  console.log(user_id)
    try {

      const applicationDetails = await db.any(applicationsQueries.createApplications, [upload_CV, user_id, upload_photo, first_name, last_name,email_address, date_of_birth, address, university, course_of_study, cgpa, batch_id,])
      console.log(applicationDetails)
          return res.status(200).json({
            status:'successful',
            message:'Application submitted successfully',
            data: applicationDetails
          })


  } catch (error) {
    console.log(error);
  }

}


const addStatus = async (req, res) => {
    let {status, user_id} = req.body
    console.log(status)
  try {
   
    const currentStatus = await db.any(` UPDATE
                                application_entries
                                SET
                                status = '${status}'
                                WHERE
                                user_id = '${user_id}'
                                RETURNING *`)
   
                                console.log(currentStatus)
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

const getOneUser = async(req, res) => {
    let {email_address } = req.body
    try {
        const user = await db.any(`SELECT * 
     FROM
        application_entries       
     WHERE 
        email_address = '${email_address}'` )
        console.log(email_address)
        console.log(user)
        return res.status(200).json({
            status: 'Success',
            message:'User Fetched Succesfully',
            data: user
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}



module.exports = {
  addApplication,
  addStatus,
  getOneUser

}