const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const db = require('../config/config')
const queries = require('../queries/signup.queries')

const login = async (req, res) => {
    let { email_address, password } = req.body;
    try {
        const existingEmail = await db.any(queries.findByEmail, [email_address]);
        const user = await db.any(queries.getUserByEmail, [email_address]);
        console.log(user);
        if (!existingEmail) {
            return res.status(404).json({
                status: 'Failed',
                message: 'No user with email'
            })
        }
        const passwordMatch = bcrypt.compareSync(password, user[0].password);
        if (!passwordMatch) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Incorrect password'
            })
        }
        const sessionToken = jwt.sign(
            {
                email_address: user.email_address,
                password: user.password,

            },
            process.env.JWT_SECRET_KEY
        );
        delete user[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'Logged In Successfully',
            data: {
                user,
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