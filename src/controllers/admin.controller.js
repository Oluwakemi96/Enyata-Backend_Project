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
        
        const admin = await db.any(queries.getAdminByEmail, [email_address]);
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
                password: admin.password
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

const updateAdmin = async (req, res) => {
    let { id } = req.params;
    let { upload_photo, name, email_address, phone_number, country, address } = req.body;
    let updateValues = [];
    if (upload_photo) updateValues.push(upload_photo);
    if (name) updateValues.push(name);
    if (email_address) updateValues.push(email_address);
    if (phone_number) updateValues.push(phone_number);
    if (country) updateValues.push(country);
    if (address) updateValues.push(address);

    if (!updateValues.length) return;

    try {
        const admin = await db.any(queries.updateAdmin, [upload_photo, name, email_address, phone_number, country, address, id])
        return res.status(200).json({
            status: 'Success',
            message: 'Admin Updated',
            data: admin
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
}

const getOneAdmin = async(req, res) => {
    let { email_address } = req.params
    try {
        const user = await db.oneOrNone(`SELECT * 
     FROM
        admins       
     WHERE 
        email_address = '${email_address}'`)
        console.log(email_address)
        console.log(user)
        return res.status(200).json({
            status: 'Success',
            message: 'admin Fetched Succesfully',
            data: user
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}

module.exports = {
    adminLogin,
    registerAdmin,
    updateAdmin,
    getOneAdmin
}