const queries = {
    postAnswer:
    `INSERT INTO assessments_results (batch_id,  applicant_id, answer, score)
    VALUES ($1, $2, $3, $4) 
    RETURNING * `,

    getAllResults:
    `SELECT * FROM assessments_results`,

    getSingleResult:
    `SELECT score FROM assessments_results
    `,
}


module.exports = queries