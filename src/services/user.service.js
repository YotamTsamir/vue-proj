'use strict'

import { dbService } from "./db.service"


export const UserService = {
    getUser,
    signup,
    updateUser
}
const KEY = 'user'
const user = {
    name: "yotam",
    coins: 100,
    moves: []
}

async function getUser() {
    return await dbService.query(KEY)
}

async function updateUser(user,move){
    console.log(user)
    if(move) user[0].moves.push(move)
    return await dbService.put(KEY, user)
}

async function signup(username) {
    const user = await getUser()
    console.log(user)
    if (user.length) await dbService.remove(KEY, user[0]._id)
    dbService.post(KEY, username)
}