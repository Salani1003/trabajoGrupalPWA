const nodemailer = require('nodemailer');


const send = async ({ to, subject, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE,
            auth: {
                user: process.env.CORREO_USER,
                pass: process.env.CORREO_PASSWORD

            },

            tls: {
                rejectUnauthorized: false,
            }

        })
        const mail = {
            from: process.env.CORREO_USER,
            to,
            subject,
            html
        }
        const sendMail = await transporter.sendMail(mail)

        return sendMail.messageId;
    } catch (e) {
        console.log(e)

    }
}

module.exports = { send }