const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const db = require('../config/config')
const userQuery = require('../queries/signup.queries')

const registerUsers = async (req, res) => {
    let { first_name, last_name, email_address, phone_number, password, confirm_password} = req.body;
    try {
        const existingEmail = await db.any(userQuery.findByEmail, [email_address]);
        if (existingEmail.length > 0) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Email already exists'
            })
        }
        password = bcrypt.hashSync(password, 10);
        confirm_password = bcrypt.hashSync(confirm_password, 10)
        const user = await db.any(userQuery.registerUsers, [first_name, last_name, email_address, phone_number, password, confirm_password])
        // delete user[0].password
        return res.status(200).json({
            status: 'Success',
            message: 'User Added',
            data: user
        })
    } catch (err) {
        console.log(err)
        return err
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const existingId = await db.any(userQuery.findById, [id]);
        if (existingId !== id) {
            return res.status(400).json({
                status: 'Failed',
                message: `User with id:${id} does not exist`
            })
        }
      await db.none(userQuery.deleteUser, [id])
            return res.status(200).json({
                status: 'Success',
                message: `User with id:${id} deleted`,
            })
    } catch (err) {
        console.log(err)
        return err;
    }
}

const fetchAllUsers = async(req, res) => {
    try {
        const user = await db.any(userQuery.getAllUsers)
        console.log(user)
        return res.status(200).json({
            status: 'Success',
            message:'Users Fetched Succesfully',
            data: user
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}


module.exports = {
    registerUsers,
    deleteUser,
    fetchAllUsers
};
