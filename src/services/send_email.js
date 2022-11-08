const dotenv = require('dotenv')
dotenv.config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = (to, url) => {
  const msg = {
    to,  // Change to your recipient
    from: 'ijayeti@gmail.com', // Change to your verified sender
    dynamic_template_data: { url },
    template_id: process.env.SEND_GRID_TEMPLATE_ID
  }
  
 return sgMail.send(msg)
  
  }

  module.exports = sendMail