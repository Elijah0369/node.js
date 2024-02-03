const nodemailer = require('nodemailer');

const senderEmail = 'aziz.email@gmail.com';
const senderPassword = 'aziz-email-password';
const recipientEmail = 'weal.email@example.com';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});


const mailOptions = {
  from: senderEmail,
  to: recipientEmail,
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
