const queries = {
    getOneBatch:
    `SELECT * FROM batches
    WHERE batch_id = $1`,
    createBatch:
    `INSERT INTO batches(application_closure_date, batch_id, instruction )
    VALUES ($1, $2, $3)
    RETURNING *`,
    getAllBatches:
    `SELECT * FROM batches`,
    findByBatch:
    `SELECT batch_id FROM batches
    WHERE batch_id = $1`,
    getBatchById: `SELECT
                       * 
                    FROM    
                       batches
                    WHERE
                        batch_id = $1`
}


module.exports = queries