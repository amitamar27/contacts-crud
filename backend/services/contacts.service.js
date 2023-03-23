const contacts = [{
        id: 1,
        title: 'Graphics Designer',
        name: 'Jhon Smith',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/alex jonathan.jpg'
    },
    {
        id: 2,
        title: 'CEO',
        name: 'Alex Johnatan',
        mainAddress: 'Riviera State 32/106',
        socialMedia: "Twitter, Inc",
        address: "San Farncisco, CA 94107",
        gpsCoordinates: "795 Folsom Ave, Suite 600",
        phone: "(123) 456-7890",
        imageUrl: 'assets/alex jonathan.jpg'
    }
];

// _createContact('CEO', 'Alex Johnatan', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/janeth carton.jpg'),
// _createContact('Marketing Manager', 'Monica Smith', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/john-smith.jpg'),
// _createContact('Sales Manager', 'Michael Zimber', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/michael zimber.jpg'),
// _createContact('Graphics Designer', 'Sandra Smith', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/monica smith.jpg'),
// _createContact('Graphics Designer', 'Janet Carton', 'Riviera State 32/106', "Twitter, Inc", "San Farncisco, CA 94107", "795 Folsom Ave, Suite 600", "(123) 456-7890", 'assets/sandra smith.jpg'),


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