const jwt = require("jsonwebtoken");
const db = require("../config/config");
const { JWT_TOKEN_EXPIRE } = require("../config/jwt");
const forgetPassword = require("../queries/forgetPassword.queries");
const bcrypt = require("bcrypt");
const sendMail = require("../services/send_email")

const forgotPassword = async(req, res) => {
    let { email_address } = req.body;

    try {
        const existingEmail = await db.oneOrNone(forgetPassword.existingEmail, [
            email_address
        ]);
        if (!existingEmail) {
            return res.status(400).json({
                status: "failed",
                message: "email does not exist"
            });
        }

        const user = await db.oneOrNone(forgetPassword.getDetails, [email_address]);
        const token = jwt.sign({
                email_address: user.email_address,
                phone_number: user.phone_number
            },

            process.env.JWT_SECRET_KEY,
            JWT_TOKEN_EXPIRE
        );

        const resetLink = `http://localhost:8080/reset_password?token=${token}`;
        console.log(resetLink);
        sendMail(email_address, resetLink)
        
        return res.status(200).json({
            status: "success",
            message: "a link to reset your password has been sent to your email "
        });
    } catch (error) {
        return error;
    }
};

const resetPassword = async(req, res) => {
    let { email_address } = req.user;
    let { password, confirm_password } = req.body;

    let updateValues = [];
    if (password) updateValues.push(password);
    if (confirm_password) updateValues.push(confirm_password);
    if (!updateValues.length) return;

    password = bcrypt.hashSync(password, 10);
    confirm_password = bcrypt.hashSync(confirm_password, 10);

    try {
        const user = await db.oneOrNone(forgetPassword.updateUser, [
            password,
            confirm_password,
            email_address
        ]);

        return res.status(200).json({
            status: "success",
            message: "password reset successfully",
            data: user
        });
    } catch (error) {}
};

module.exports = {
    forgotPassword,
    resetPassword
};