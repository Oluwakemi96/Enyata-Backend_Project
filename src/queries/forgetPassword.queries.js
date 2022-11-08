const forgetPassword = {
    existingEmail: 
    `SELECT 
        email_address 
    FROM 
        users
    WHERE 
        email_address = $1
    `,
    
    getDetails:
    `SELECT
        *
    FROM
        users
    WHERE
        email_address = $1
    `,

    updateUser:
    `
    UPDATE
        users
    SET
        password = $1,
        confirm_password = $2
    WHERE
        email_address = $3
    RETURNING *
    `

}

module.exports = forgetPassword