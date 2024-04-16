// const nodeMailer = require("nodemailer");

// const sendEmail = async(options) => {

//     const transporter = nodeMailer.createTransport({
//         host: process.env.HOST,
//         port: process.env.PORT,
//         service: process.env.SMPT_SERVICE,
//         auth: {
//             user: process.env.SMPT_MAIL,
//             pass: process.env.SMPT_PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from :process.env.SMPT_MAIL,
//         to: options.email,
//         subject: options.subject,
//         text: options.message,
//     };

//     transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;

const nodemailer= require('nodemailer');

const sendEmail =async  options => {
    //1) Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
        //Activate in gmail "less secure app" option
    });

    //2) Define the email options
    const mailOptions = {
        from: 'Shashank Shekhar <test@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    };


    //3)Actually send the email

    await transporter.sendMail(mailOptions)
};
module.exports = sendEmail;