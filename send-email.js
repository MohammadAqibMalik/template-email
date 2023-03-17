const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

// Load the email template file
const emailTemplate = fs.readFileSync('email-template.html', 'utf8');

const EMAIL_ADDRESS = 'user-email'
const PASSWORD = 'email-password'
// Compile the template
const compiledTemplate = handlebars.compile(emailTemplate);

// Set up the Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: EMAIL_ADDRESS,
        pass: PASSWORD
    }
});

// Define the email options
const mailOptions = {
    from: EMAIL_ADDRESS,
    to: EMAIL_ADDRESS,
    subject: 'Test Email',
    html: compiledTemplate({ name: 'John' })
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
