const Contacts = require("../models/Contact");


// Get all contact
const getContacts = (req, res) => {
  Contacts.findAll()
    .then((contacts) => {
      return res.json(contacts);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error retrieving contacts" });
    });
};

// Create a new contact
const createContacts = (req, res) => {
  console.log('intentando crear contacto');
  console.log(req.body);
  Contacts.create(req.body)
    .then((createContact) => {
      console.log('contacto creado correctamente');
      return res.status(200).json({message : 'contacto creado'});
    })
    .catch((err) => {
     return res.status(500).json({ message: "Error al crear el contacto" });
    });
};

// Update a specific contact 
const updateContact = (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  Contacts.update(req.body,
    { where: { id: req.params.id } }
  )
    .then((result) => {
      if (result[0] === 1) {
        return res.status(200).json({message : 'contacto actualizado'});
      } else {
        return res.status(404).json({ message: "contacts no encontrado" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error durante la actualizacion de datos" });
    });
};

// Delete a specific contact
const deleteContact = (req, res) => {
  console.log('intentando borrar el contacto');
  Contacts.destroy({ where: { id: req.params.id } })
    .then((result) => {
      if (result === 1) {
        console.log('contacto borrado exitosamente');
        return res.status(200).json({message : 'contacto borrado'});
      } else {
        res.status(404).json({ message: "contacto no encontrado!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: "Error al borrar contacto" });
    })
};

module.exports= { getContacts, createContacts, updateContact, deleteContact }