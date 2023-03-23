'use strict'


const gContacts = [
    // _createContact('Graphics Designer', 'Jhon Smith','Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/alex jonathan.jpg'),
    // _createContact('CEO', 'Alex Johnatan', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/janeth carton.jpg'),
    // _createContact('Marketing Manager', 'Monica Smith', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/john-smith.jpg'),
    // _createContact('Sales Manager', 'Michael Zimber', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/michael zimber.jpg'),
    // _createContact('Graphics Designer', 'Sandra Smith', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/monica smith.jpg'),
    // _createContact('Graphics Designer', 'Janet Carton', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/sandra smith.jpg'),
]

async function getContacts() {
    const res = await axios.get("http://localhost:3000/api/contacts");
    return res.data;
    //return gContacts;
}

function saveContact(contact) {
    console.log(contact);
    const { name, title, city, phone} = contact
    const newContact = _createContact(title, name, city, phone)
    newContact.src = "assets/john-smith.jpg"
    newContact.phone = phone
    gContacts.push(newContact)
}





async function removeContact(contactId) {
    return axios.delete(`http://localhost:3000/api/contacts/${contactId}`);
}

function getContactById(contactId) {
    const contact = gContacts.find(contact => contact.id === contactId)
    return contact
}

async function createContact(contact) {
    return axios.post("http://localhost:3000/api/contacts", contact);
}

async function updateContact(id , contact) {
    return axios.put(`http://localhost:3000/api/contacts/${id}`, contact);
}

async function getContact(id) {
    const res = await axios.get(`http://localhost:3000/api/contacts/${id}`);
    return res.data;
}