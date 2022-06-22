<template>
<form class="login" @submit.prevent="signup">
   <label for="username">Username: </label> <input id="username" v-model="username" type="text">
    <button class="sign-btn">Sign up</button>
</form>
</template>

<script>
import { UserService } from '../services/user.service'
export default {
data(){
    return {
        username:''
    }
},
methods:{
   async signup(){
        const user = {
            username:this.username,
            coins:100,
            moves:[]
        }

       await UserService.signup(user)
       this.$router.push('/')
    }
}

}
</script>

<style>
.login{
    border: 1px solid #212121;
    border-radius: 3px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    padding-bottom: 15px;
}
.sign-btn{
    width: 70px;
}

</style>