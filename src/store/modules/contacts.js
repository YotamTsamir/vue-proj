import { ContactService } from "../../services/contact.service.js";
export default {
    state: {
        contacts: []
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        saveContact(state, { contact }) {
            const contactId = contact._id
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            if (idx === -1) state.contacts.push(contact)
            else state.contacts.splice(idx, 1, contact)
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts(context) {
            const contacts = await ContactService.query()
            context.commit({ type: 'setContacts', contacts })
        },
        async saveContact({ commit }, { contact }) {
            try {
                await ContactService.save(contact)
                commit({ type: 'saveContact', contact })
            } catch (err) {
                console.log(err)
            }
        },
        async removeContact({ commit }, { contactId }) {
            await ContactService.remove(contactId)
            commit({ type: 'removeContact' })
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}