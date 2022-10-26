const queries = {
    postQuestion:
    `INSERT INTO assessments (batch_id, questions, time_allocated)
    VALUES ($1, $2, $3) 
    RETURNING * `,
}


module.exports = queries