import { ContactService } from "../../services/contact.service.js";
import { UserService } from "../../services/user.service.js";
export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
        saveUser(state, { user }) {
            const userId = user._id
            const idx = state.user.findIndex(user => user._id === userId)
            if (idx === -1) state.user.push(user)
            else state.user.splice(idx, 1, user)
        },
    },
    actions: {
        async loadUser(context) {
            const user = await UserService.getUser()
            context.commit({ type: 'setUser', user })
        },
        async saveUser({ commit }, { user,move }) {
            try {
                await UserService.updateUser(user,move)
                commit({ type: 'saveUser', user })
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters: {
        user(state) { return state.user }
    }
}