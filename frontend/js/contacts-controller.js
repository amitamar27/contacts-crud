'use strict'

async function onInit() {
    const contacts = await getContacts();
    renderContacts(contacts);
}

const elModal = document.querySelector('.contact-form')

const form = document.querySelector('.contact-form');
//form.addEventListener('submit', onSubmitForm);

async function onSubmitForm(event) {
    event.preventDefault();
    document.querySelector('.form-header').innerHTML = 'Add Contact';
    elModal.hidden = true
    const name = document.querySelector('#name').value;
    const title = document.querySelector('#title').value;
    const mainAddress = document.querySelector('#mainAddress').value;
    const phone = document.querySelector('#phone').value;
    const id = document.querySelector('#id').value;
    const gpsCoordinates = document.querySelector('#gpsCoordinates').value;
    const address = document.querySelector('#address').value;
    const imageUrl = document.querySelector('#imageUrl').value;
    const socialMedia = document.querySelector('#socialMedia').value;
    let contact = {
        name,
        title,
        mainAddress,
        phone,
          gpsCoordinates,
              address,
              socialMedia,
              imageUrl,
    }

    if (id) {
        await updateContact(id, contact);
    } else {
        contact = {
            ...contact,
            gpsCoordinates: '795 Folsom Ave, Suite 600',
            address: 'San Farncisco, CA 94107',
            socialMedia: 'Twitter, Inc',
            imageUrl : './assets/alex jonathan.jpg',
        }
        await createContact(contact);
    }
    form.reset();
    const contacts = await getContacts();
    renderContacts(contacts);
}



async function onRemoveContact(ev, contactId) {
    ev.stopPropagation();
    await removeContact(contactId);
    const contacts = await getContacts();
    renderContacts(contacts);
}

async function onEditContact(contactId) {
    elModal.hidden = false
    const contact = await getContact(contactId)
    document.querySelector('.form-header').innerHTML = 'Edit Contact';
    elModal.querySelector('#id').value = contact.id
    elModal.querySelector('#name').value = contact.name
    elModal.querySelector('#title').value = contact.title
    elModal.querySelector('#mainAddress').value = contact.mainAddress
    elModal.querySelector('#phone').value = contact.phone
    elModal.querySelector('#gpsCoordinates').value = contact.gpsCoordinates
    elModal.querySelector('#address').value = contact.address
    elModal.querySelector('#imageUrl').value = contact.imageUrl
    elModal.querySelector('#socialMedia').value = contact.socialMedia
}


function onOpenModal() {
    elModal.hidden = false
}

function onCloseModal(event) {
    event.preventDefault()
    elModal.hidden = true
}


function renderContacts(contacts) {
    let strHtmls = contacts.map(contact => {
        return `
                    <article class="contact-preview">
                        <div class="left-contact-info">
                        <img class="card-img-top" src="${contact.imageUrl}" alt="${contact.id}">
                        <small>${contact.title}</small>
                        </div>
                        <div class="contacts-info">
                            <h3>${contact.name}</h3>
                            <div class="main-address">
                                <span class ="icon"> <i class ="fas fa-map-marker-alt"></i></span>
                                <span class="text"> ${contact.mainAddress} </span>
                            </div>
                            <p>${contact.socialMedia}</p>
                            <p>${contact.gpsCoordinates}</p>
                            <p>${contact.address}</p>
                            <p>P: ${contact.phone}</p>
                        </div>
                        <div class="actions">
                            <button class="icon" onClick="onEditContact('${contact.id}')"> <i class ="fas fa-pen"></i></button>
                            <button class="icon" onClick="onRemoveContact(event,'${contact.id}')"> <i class ="fas fa-trash"></i></button>
                        </div>
                    </article>
                `
    })
    let addContactHtmls = `<div class="add-btn-container">
            <button class="add-btn" onClick="onOpenModal()"> 
                <i class="fas fa-plus"></i>
            </button>
        </div>`
    document.querySelector('.contacts-container').innerHTML = strHtmls.join('').concat(addContactHtmls)
}