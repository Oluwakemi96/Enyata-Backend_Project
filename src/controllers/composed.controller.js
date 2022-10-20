const db = require('../config/config')
const queries = require('../queries/composed.queries')
const applicationsQueries = require('../queries/application.queries')

const composedAssessments = async(req, res) => {
    let {questions, time_allocated} = req.body
    let batch = await db.any(applicationsQueries.getActiveBatch)
    batch_id = batch[0].batch_id
    try {
        const assessments = await db.any(queries.postQuestion,[ batch_id, questions, time_allocated]);
            return res.status(200).json({
                status: 'Success',
                message: 'Batch added',
                data: assessments
            })
        
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {
    composedAssessments
}