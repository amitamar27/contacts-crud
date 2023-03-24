const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('./services/contacts.service');

app.use(cors());

app.use(bodyParser.json());

app.get('/api/contacts', (req, res) => {
    const contacts = getContacts();
    res.json(contacts);
})

app.get('/api/contacts/:id', (req, res) => {
    const contact = getContact(req.params.id);
    res.json(contact);
})


app.post('/api/contacts', (req, res) => {
    const createdContact = createContact(req.body);
    res.status(201).json({
        id: createdContact.id
    });
})

app.put('/api/contacts/:id', (req, res) => {
    const contact = {id: Number(req.params.id),...req.body}
    updateContact(contact);
    res.status(200).send();
})

app.delete('/api/contacts/:id', (req, res) => {
    deleteContact(Number(req.params.id));
    res.status(200).send();
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})