const queries = {
    postQuestion:
    `INSERT INTO assessments (questions, option_a, option_b, option_c, option_d )
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING * `,
}

module.exports = queries