const applicationsQueries = {
   createApplications:`
      INSERT 
         INTO 
            application_entries(
               upload_CV, 
               user_id, 
               upload_photo, 
               first_name, 
               last_name,
               email_address, 
               date_of_birth, 
               address, 
               university, 
               course_of_study, 
               cgpa, 
               batch_id
            )
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *
   `,

<<<<<<< HEAD
   // findByEmail: `
   //    SELECT
   //       email_address 
   //    FROM
   //       application_entries       
   //    WHERE 
   //       email_address = $1
   //              `,

   addApplicationStatus: `UPDATE
                           application_entries
                          SET status = $1
                           WHERE 
                              id = $2 
   `,

   findByEmail: `
      SELECT
         email_address 
      FROM
         application_entries       
      WHERE 
         email_address = $1
                `,

   getUserByEmail: `
      SELECT
         * 
      FROM
         users       
      WHERE 
         email_address = $1
                `,

   getUserById: `
      SELECT
         * 
      FROM
            users  
      WHERE 
         id = $1
                `,
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905
                  
getActiveBatch: `
      SELECT 
         * 
      FROM 
         batches 
      WHERE 
         application_closure_date > NOW() :: DATE ORDER BY created_at desc
      LIMIT 
         1; `

}

module.exports = {applicationsQueries};