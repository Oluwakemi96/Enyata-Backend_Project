const queries = {
    postQuestion:
    `INSERT INTO assessments (batch_id, questions, time_allocated)
    VALUES ($1, $2, $3) 
    RETURNING * `,

    getQuestions: `SELECT *
    FROM
       assessments 
       WHERE batch_id = $1     
    `
}


module.exports = queries