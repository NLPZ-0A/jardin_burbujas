const Contact = require('../models/Contact');
const { sendMail } = require('../tools/sendMail');

//recibe el formulario de contacto y lo guarda en la bbdd
exports.receiveFormContact = async(req, res) => {
    try {
    
        const newform = await Contact.create(req.body);
        const sendMailForm = sendMail(req.body.email, req.body.asunto);

        res.json({
            message: 'Contacto creado exitosamente',
            contact: newform
          });

    } catch (error) {
        console.log(error);
        res.status(400).send({error: 'error al crear el formulario de contacto.'});
    }
};

