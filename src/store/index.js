import { createStore } from 'vuex'
import contacts from './modules/contacts.js'
import user from './modules/user.js'

// Create a new store instance.
const storeOptions = {
    strict: true,

    modules:{
        contacts,
        user
    }
}
const store = createStore(storeOptions)
export default store