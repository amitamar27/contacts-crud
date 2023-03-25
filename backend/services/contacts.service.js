const contacts = [{
        id: 1,
        title: 'CEO',
        name: 'Alex Jonathan',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/alex jonathan.jpg'
    },
    {
        id: 2,
        title: 'Graphics designer',
        name: 'Janet Carton',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/janeth carton.jpg'
    },
    {
        id: 3,
        title: 'Graphics designer',
        name: 'Jhon Smith',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/john-smith.jpg'
    },
    {
        id: 4,
        title: 'Graphics designer',
        name: 'Michael Zimber',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/michael zimber.jpg'
    },
    {
        id: 5,
        title: 'Marketing manager',
        name: 'Monica Smith',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/monica smith.jpg'
    },
    {
        id: 6,
        title: 'Graphics designer',
        name: 'Sandra Smith',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/sandra smith.jpg'
    },
];


function getContacts() {
    return contacts;
}

function getContact(id) {
    return contacts.find(c => c.id == id);
}

function createContact(contact) {
    let id = 1;
    if (contacts.length) {
        id = contacts[contacts.length - 1].id + 1;
    }
    const newContact = {
        id,
        ...contact
    }

    contacts.push(newContact);
    return newContact;
}

function updateContact(contact) {
    const cIndex = contacts.findIndex(c => c.id === contact.id);
    contacts[cIndex] = contact;
}

function deleteContact(id) {
    const cIndex = contacts.findIndex(c => c.id === id);
    const deletedContact = contacts.splice(cIndex, 1);
    return deletedContact[0];
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}