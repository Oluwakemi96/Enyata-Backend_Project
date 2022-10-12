const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const db = require('../config/config')
const userQuery = require('../queries/users.queries')

const registerUsers = async (req, res) => {
    let { first_name, last_name, email_address, phone_number, password, confirm_password} = req.body;
    try {
        const existingEmail = await db.any(userQuery.findByEmail, [email_address]);
        if (!existingEmail) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Email already exists'
            })
        }
        password = bcrypt.hashSync(password, 10);
        const user = await db.any(userQuery.registerUsers, [first_name, last_name, email_address, phone_number, password, confirm_password])
        // delete user[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'Student Added',
            data: user
        })
    } catch (err) {
        console.log(err)
        return err
    }
}


module.exports = {registerUsers};
