const queries ={
    signInAdmin:
    `INSERT INTO admins (upload_photo, name, email_address, phone_number, country, address, password)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`,
    // findByEmail: `
    // SELECT email_address FROM admins
    // WHERE email_address = $1
    // `,
    getAdminByEmail: `
    SELECT * FROM admins 
    WHERE email_address = $1
    `,
}


module.exports = queries