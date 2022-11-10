const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)


// const sendMail = (to, url) => {
//   const msg = {
//     to,  // Change to your recipient
//     from: 'omah@enyata.com', // Change to your verified sender
//     subject: 'reset password',
//     dynamic_template_data: { url },
//     template_id: process.env.SENDGRID_TEMPLATE_ID
//   } 
  
//   sgMail.send(msg).then(()=> console.log("message sent")).catch((e)=> console.log(e))
  
//   }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  const sendMail = (to, url) => {
    const mailOptions = {
      from: 'oluwadamilolaoyelade@gmail.com',
      to, 
      subject: 'Reset Password',
      text: 'click or copy this link to rest your password  ' + url
      
      
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
  }


  module.exports = sendMail