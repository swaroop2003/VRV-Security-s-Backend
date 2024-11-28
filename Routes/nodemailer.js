const nodemailer = require('nodemailer');

// Create a transporter with your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'praveenkumarpalaboyina@gmail.com', // Replace with your email address
    pass: 'wrxpxannxxsanrmi', // Replace with your email password
  },
});

// Function to send the registration email
const sendRegistrationEmail = (recipientEmail, subject, text) => {
  const mailOptions = {
    from: 'praveenkumarpalaboyina@gmail.com', // Replace with your email address
    to: recipientEmail, // The recipient's email address
    subject: subject,
    text: text,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendRegistrationEmail };