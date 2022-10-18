const applicationsQueries = {
   createApplications: `INSERT INTO application_entries(upload_CV, user_id, upload_photo, first_name, last_name,email, date_of_birth, address, university, course_of_study, cgpa, batch_id)
   VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
   RETURNING *
   `,

   findByEmail: `SELECT email FROM application_entries
                WHERE email = $1
                `,
                  
   addUserByBatch: `SELECT * FROM batches 
                     WHERE application_closure_date > NOW :: DATE ORDER BY created_at desc
                     LIMIT 1; `
}

module.exports = applicationsQueries;