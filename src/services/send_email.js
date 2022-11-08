const dotenv = require('dotenv')
dotenv.config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = (to, url) => {
  const msg = {
    to,  // Change to your recipient
    from: 'omah@enyata.com', // Change to your verified sender
    subject: 'reset password',
    dynamic_template_data: { url },
    template_id: process.env.SENDGRID_TEMPLATE_ID
  } 
  
  sgMail.send(msg).then(()=> console.log("message sent")).catch((e)=> console.log(e))
  
  }

  module.exports = sendMail