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
    updateAdmin: `UPDATE admins 
       SET upload_photo = $1, name = $2, email_address =$3, phone_number = $4, country = $5, address= $6
          WHERE id = $7 RETURNING *;`,

}


module.exports = queries