const nodemailer = require('nodemailer');

const sendMail = (email, asunto) => {

    let transporter = nodemailer.createTransport({

        host: process.env.MAIL_HOST,
        port:  process.env.MAIL_PORT,
        tls:{rejectUnauthorized: false},
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });


    return transporter.sendMail({
        from: email,
        to: process.env.MAIL_ADMIN_ADRESS,
        subject: `respuesta a :${asunto} `,
        html: `<p>su consulta esta siendo procesada, en breve recibira una respuesta.</p>`
    });

    
};

module.exports = {sendMail};