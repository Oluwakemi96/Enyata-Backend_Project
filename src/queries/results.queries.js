const queries = {
    postAnswer:
    `INSERT INTO assessments_results (batch_id,  applicant_id, answer, score)
    VALUES ($1, $2, $3, $4) 
    RETURNING * `,

    getAllResults:
    `SELECT * FROM assessments_results`,

    getSingleResult:
    `SELECT * FROM assessments_results
    WHERE applicant_id = $1`,
}


module.exports = queries