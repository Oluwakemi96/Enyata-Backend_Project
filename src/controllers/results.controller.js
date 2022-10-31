// const db = require('../config/config')
// const queries = require('../queries/results.queries')
// const applicationsQueries = require('../queries/application.queries')


// const sendResults = async(req, res) => {
    
//     let { applicant_id, score} = req.body

//     let answer = JSON.stringify(req.body.answer)
//     let batch = await db.any(applicationsQueries.getActiveBatch)
//     batch_id = batch[0].batch_id
//     console.log(batch)
//     console.log(batch_id)
//     try {
//         const result = await db.any(queries.postAnswer,[batch_id, applicant_id, answer, score ]);
//             return res.status(200).json({
//                 status: 'Success',
//                 message: 'answer added',
//                 data: result
//             })
        
//     } catch (error) {
//         console.log(error)
//         return error
//     }
// }

// const fetchAllResults = async(req, res) => {
//     try {
//         const result = await db.any(queries.getSingleResults)
//         return res.status(200).json({
//             status: 'Success',
//             message:'Results Fetched Succesfully',
//             data: result
//         });
//     } catch (error) {
//         console.log(error)
//         return error;
//     }
// }
// const fetchSingleResults = async(req, res) => {
//     let {applicant_id} = req.params
//     try {
//         const result = await db.oneOrNone(queries.getSingleResult, [applicant_id])
//         return res.status(200).json({
//             status: 'Success',
//             message:'Result Fetched Succesfully',
//             data: result
//         });
//     } catch (error) {
//         console.log(error)
//         return error;
//     }
// }

// module.exports = {
//     sendResults,
//     fetchAllResults,
//     fetchSingleResults
// }
