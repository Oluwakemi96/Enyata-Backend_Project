const applicationsQueries = {
   postApplications: `INSERT INTO applications(upload_CV, upload_photo, first_name, last_name,email, date_of_birth, address, university, course_of_study, cgpa)
   VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
   RETURNING *
   `,

   findByEmail: `SELECT email FROM applications
                WHERE email = $1
                `
                  
}

module.exports = applicationsQueries;