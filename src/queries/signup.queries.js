const queries = {
    registerUsers: `
          INSERT 
            INTO 
              users (
                 first_name, 
                 last_name, 
                 email_address,
                 phone_number, 
                 password,
                 confirm_password
                 )
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING *
    `,
    getAllUsers: `
      SELECT * FROM users
      
    `,
    getOneUser: `
    SELECT * FROM users 
    WHERE id = $1
    `,
    getUserByEmail: `
    SELECT * FROM users 
    WHERE email_address = $1
    `,
    updateUser: `
      UPDATE users 
      SET first_name = $1, last_name = $2, email_address = $3, phone_number = $4, password = $5
      WHERE id = $6
    `,
    deleteUser: `
    DELETE FROM users
    WHERE id = $1
    `,
    findByEmail: `
    SELECT email_address FROM users
    WHERE email_address = $1
    `,

    findById: `
    SELECT id FROM users
    WHERE id = $1
    `,
  }
  
  module.exports = queries;