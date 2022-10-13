const bcrypt = require('bcrypt')

const db = require('../config/config')
const queries = require('../queries/signup.queries')

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        const existingEmail = await db.any(queries.findByEmail, [email]);
        const user = await db.any(queries.getUserByEmail, [email]);
        if (!existingEmail) {
            return res.status(404).json({
                status: 'Failed',
                message: 'No user with email'
            })
        }
        // console.log('Student', student.password)
        const passwordMatch = bcrypt.compareSync(password, user[0].password);
        if (!passwordMatch) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Incorrect password'
            })
        }
        const sessionToken = jwt.sign(
            {
                student_id: user.id,
                email: user.email,
                name: user.name,
            },
            process.env.JWT_SECRET_KEY
        );
        delete student[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'Logged In Successfully',
            data: {
                student,
                token: sessionToken
            }
        })
    } catch (err) {
        console.log(err)
        return err;
    }

}

module.exports ={
    login
}