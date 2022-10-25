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
   // getApplicantByEmail: `
   //    SELECT
   //       * 
   //    FROM
   //       application_entries       
   //    WHERE 
   //       email_address = $1
   //              `,
   
   getUserById: `
   SELECT
   * 
   FROM
   users  
   WHERE 
   id = $1
   `,
   getApplicantById: `
   SELECT
   * 
   FROM
   application_entries  
   WHERE 
   id = $1
   `,
   
getAllApplicant: `
               SELECT * FROM application_entries
               
   `,
                  
getActiveBatch: `
      SELECT 
         * 
      FROM 
         batches 
      WHERE 
         application_closure_date > NOW() :: DATE ORDER BY created_at desc
      LIMIT 
         1; `,

// countAllApplications: `SELECT 
//                         COUNT(*) 
//                      FROM 
//                         application_entries 
//                     `,

// countCurrentApplications: `SELECT 
//                               COUNT(*) 
//                            FROM 
//                              application_entries 
//                            WHERE
//                               batch_id = 'Batch 3.0'`,

getCurrentBatch: `
      SELECT 
         batch_id 
      FROM 
         batches 
      WHERE 
         application_closure_date > NOW() :: DATE ORDER BY created_at desc
      LIMIT 
         1; `,


   getDateOnly:`SELECT DATE(date_of_birth) FROM application_entries`,
}

module.exports = applicationsQueries;