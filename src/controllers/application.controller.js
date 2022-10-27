const db = require('../config/config')
const applicationsQueries = require('../queries/application.queries')


const addApplication = async(req, res) => {

    let { upload_CV, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa } = req.body
    let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
    const batch_id = batch.batch_id

    let user_id = req.user.user_id
    console.log(user_id)
    try {

        const applicationDetails = await db.any(applicationsQueries.createApplications, [upload_CV, user_id, upload_photo, first_name, last_name, email_address, date_of_birth, address, university, course_of_study, cgpa, batch_id, ])
        console.log(applicationDetails)
        return res.status(200).json({
            status: 'successful',
            message: 'Application submitted successfully',
            data: applicationDetails
        })


    } catch (error) {
        console.log(error);
    }

}


const addStatus = async(req, res) => {
    let { status, email_address } = req.body
    console.log(status)
    try {

        const currentStatus = await db.any(` UPDATE
                                application_entries
                                SET
                                status = '${status}'
                                WHERE
                                email_address = '${email_address}'
                                RETURNING *`)

        console.log(currentStatus)
        return res.status(200).json({
            status: 'successful',
            message: 'status added successfully',
            data: currentStatus
        })

    } catch (error) {
        console.log(error)
        return error;
    }

}

const getOneApplicant = async(req, res) => {
    let { email_address } = req.params
    try {
        const user = await db.oneOrNone(`SELECT * 
     FROM
        application_entries       
     WHERE 
        email_address = '${email_address}'`)
        console.log(email_address)
        console.log(user)
        return res.status(200).json({
            status: 'Success',
            message: 'User Fetched Succesfully',
            data: user
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}

const fetchAllApplicant = async(req, res) => {
    try {
        const applicant = await db.any(`SELECT * FROM application_entries`)
        console.log(applicant)
        return res.status(200).json({
            status: 'success',
            message: 'applicant fetched successfully',
            data: applicant
        })
    } catch (error) {
        console.log(error)
        return error;
    }
}

const getApplicantByBatch = async(req, res) => {
    let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
    const batch_id = batch.batch_id
    try {
        const applicant = await db.any(`SELECT * FROM application_entries WHERE batch_id = '${batch_id}'`)
        console.log(applicant)
        return res.status(200).json({
            status: 'success',
            message: 'applicant fetched successfully',
            data: applicant
        })
    } catch (error) {
        console.log(error)
        return error;
    }
}

const countAllApplications = async(req, res) => {
    try {
        const totalApplications = await db.any(`SELECT COUNT(*) FROM application_entries`)

        return res.status(200).json({
            staus: 'successful',
            message: 'total applications fetched successfully',
            data: totalApplications
        })

    } catch (error) {
        console.log(error)
    }
}

const countCurrentApplications = async(req, res) => {
    let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
    const batch_id = batch.batch_id
    try {
        const currentApplications = await db.oneOrNone(`SELECT COUNT(*) FROM application_entries WHERE
      batch_id = '${batch_id}'`)

        return res.status(200).json({
            staus: 'successful',
            message: 'total applications fetched successfully',
            data: currentApplications
        })

    } catch (error) {
        console.log(error)
    }
}

const getActiveBatch = async(req, res) => {
    try {
        const currentBatch = await db.oneOrNone(applicationsQueries.getCurrentBatch)

        return res.status(200).json({
            status: 'successful',
            message: 'current batch fetched successfully',
            data: currentBatch
        })
    } catch (error) {
        console.log(error)
    }
}
const getAllBatches = async(req, res) => {
    try {
        const allBatches = await db.any(applicationsQueries.getAllBatches)

        return res.status(200).json({
            status: 'successful',
            message: 'batches fetched successfully',
            data: allBatches
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addApplication,
    addStatus,
    getOneApplicant,
    fetchAllApplicant,
    getApplicantByBatch,
    countAllApplications,
    countCurrentApplications,
    getActiveBatch,
    getAllBatches
}