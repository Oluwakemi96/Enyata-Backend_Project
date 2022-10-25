const queries = {
    postQuestion:
    `INSERT INTO assessments (questions, option_a, option_b, option_c, option_d, answer )
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING * `,
}

module.exports = queries