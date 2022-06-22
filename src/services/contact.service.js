'use strict'

import { dbService } from './db.service.js'

export const ContactService = {
    query,
    getContactById,
    save,
    remove,
    getEmptyContact
}

const contacts = [{
    _id: "5a56640269f443a5d64b32ca",
    name: "Ochoa Hyde",
    email: "ochoahyde@renovize.com",
    phone: "+1 (968) 593-3824"
},
{
    _id: "5a56642222f443a5d64b32ca",
    name: "gazibo shlaga",
    email: "gazibo@shlaga.com",
    phone: "+1 (968) 123-23824"
},
{
    _id: "asd142222f443a5d64b32ca",
    name: "baga bog",
    email: "bago@shago.com",
    phone: "+1 (968) 111-23824"
}
]

const KEY ='contacts'


async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function query() {
    var contacts = await dbService.query(KEY)

    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        await dbService.insert(KEY, contacts)
    }
    return contacts
}

function getEmptyContact() {
    return {
        name:'',
        email: '',
        phone:''
    }
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function getContactById(contactId) {
    return await dbService.get(KEY, contactId)
}
function editContact(contact){
    let oldContact = getContactById(contact._id)
    oldContact = contact
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact)
    else return await dbService.post(KEY, contact)
}

function _createDefaultContacts() {
    return [
        _createContact('baga bog', "bago@shago.com","+1 (968) 111-23824"),
        _createContact('Ochoa Hyde',"ochoahyde@renovize.com", "+1 (968) 593-3824"),
        _createContact('gazibo shlaga',"gazibo@shlaga.com","+1 (968) 123-23824"),
    ]
}

function _createContact(name, phone,email) {
    return {
        _id:getRandomIntInclusive(100,1000),
        name,
        phone,
        email
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)}