const db = require('../config/config')
const queries = require('../queries/composed.queries')
const applicationsQueries = require('../queries/application.queries')

const composedAssessments = async(req, res) => {
    
    let {time_allocated} = req.body
    let questions = JSON.stringify(req.body.questions)

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

const getQuestions = async(req, res) => {
    let batch = await db.oneOrNone(applicationsQueries.getActiveBatch)
    batch_id = batch.batch_id
    try {
        const question = await db.any(queries.getQuestions, [batch_id])
        console.log(question)
        return res.status(200).json({
            status: 'Success',
            message: 'question fetched succesfully',
            data: question
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}

module.exports = {
    composedAssessments,
    getQuestions
}