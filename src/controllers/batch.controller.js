const db = require('../config/config')
const queries = require('../queries/batch.queries')

const fetchAllBatches = async(req, res) => {
    try {
        const batch = await db.any(queries.getAllBatches)
        return res.status(200).json({
            status: 'Success',
            message:'Batch Fetched Succesfully',
            data: batch
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}
const createBatch = async(req, res) => {
    let {application_closure_date, batch_id, instruction} = req.body
    try {
        const existingBatch = await db.any(queries.findByBatch, [batch_id]);
        if (existingBatch.length > 0){
            return res.status(400).json({
                status: 'failed',
                message: 'Batch already exists'
            })
        }
        const batch = await db.any(queries.createBatch,[ application_closure_date, batch_id, instruction]);
            return res.status(200).json({
                status: 'Success',
                message: 'Batch added',
                data: batch
            })
        
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {
    fetchAllBatches,
    createBatch
}