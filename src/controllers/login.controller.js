const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const db = require('../config/config')
const { JWT_SIGN_OPTIONS } = require('../config/jwt')
const queries = require('../queries/signup.queries')

const login = async (req, res) => {
    let { email_address, password } = req.body;
    try {
        const existingEmail = await db.oneOrNone(queries.findByEmail, [email_address]);
        const user = await db.oneOrNone(queries.getUserByEmail, [email_address]);

        if (!existingEmail) {
            return res.status(404).json({
                status: 'Failed',
                message: 'No user with email'
            })
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);
<<<<<<< HEAD

=======
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905
        if (!passwordMatch) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Incorrect password'
            })
        }

        const sessionToken = jwt.sign(
            {
                email_address: user.email_address,
                user_id: user.id
            },

            process.env.JWT_SECRET_KEY,
            JWT_SIGN_OPTIONS
        );

        delete user.password
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