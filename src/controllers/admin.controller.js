const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const db = require('../config/config')
const queries = require('../queries/admin.queries')

const registerAdmin = async (req, res) => {
    let { upload_photo, name, email_address, phone_number, country, address, password} = req.body;
    password = bcrypt.hashSync(password, 10);
    try {
        const admin = await db.any(queries.signInAdmin, [upload_photo, name, email_address, phone_number, country, address, password])
        delete admin[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'Admin Added',
            data: admin
        })
    } catch (err) {
        console.log(err)
        return err
    }
}

const adminLogin = async (req, res) => {
    let { email_address, password } = req.body;
    try {
        // const existingEmail = await db.any(queries.findByEmail, [email_address]);
        const admin = await db.any(queries.getAdminByEmail, [email_address]);
        console.log(admin);
        // if (!existingEmail) {
        //     return res.status(404).json({
        //         status: 'Failed',
        //         message: 'No user with email'
        //     })
        // }
        const passwordMatch = bcrypt.compareSync(password, admin[0].password);
        if (!passwordMatch) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Incorrect password'
            })
        }
        const sessionToken = jwt.sign(
            {
                email_address: admin.email_address,
                password: admin.password,

            },
            process.env.JWT_SECRET_KEY
        );
        delete admin[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'Logged In Successfully',
            data: {
                admin,
                token: sessionToken
            }
        })
    } catch (err) {
        console.log(err)
        return err;
    }

}
module.exports = {
    adminLogin,
    registerAdmin
}