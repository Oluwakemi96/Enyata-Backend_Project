const db = require('../config/config')
const queries = require('../queries/composed.queries')
// const applicationsQueries = require('../queries/application.queries')

const composedAssessments = async(req, res) => {
    let {questions, option_a, option_b, option_c, option_d } = req.body
    // let batch = await db.any(applicationsQueries.getActiveBatch)
    // batch_id = batch[0].batch_id
    try {
        const assessments = await db.any(queries.postQuestion,[ questions, option_a, option_b, option_c, option_d]);
            return res.status(200).json({
                status: 'Success',
                message: 'question added',
                data: assessments
            })
        
    } catch (error) {
        console.log(error)
        return error
    }
}

const getQuestionById = async(req, res) => {
    let { id } = req.params
    try {
        const question = await db.oneOrNone(`SELECT * 
     FROM
        assessments       
     WHERE 
        id = '${id}'`)
        console.log(id)
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
    getQuestionById
}