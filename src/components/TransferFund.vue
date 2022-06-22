<template>
  <div class="transfer">
    <p>
      Moving money to <span>{{ contact.name }}</span>
    </p>
    <form @submit.prevent="transfer">
      <label for="money">Amount: </label>
      <input v-model="money" id="money" type="number" />
      <button class="transfer-btn">Transfer</button>
    </form>
  </div>
</template>

<script>
import { UserService } from "../services/user.service";
export default {
  data() {
    return {
      money: null,
    };
  },
  props: {
    contact: {
      type: Object,
      require: true,
    },
  },
  created() {
    console.log(this.user[0]);
  },
  methods: {
    async transfer() {
      const date = new Date();
      console.log(date.toDateString());
      const move = {
        date: date.toDateString(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        to: this.contact,
        amount: this.money,
      };
      const user = await UserService.getUser();
      if (user[0].coins - this.money < 0) return this.money = null
      user[0].coins -= this.money;
      user[0].moves.push(move);
      UserService.updateUser(user[0]);
      this.$emit("updateUser", user[0]);
      this.money = null
      //   const currUser = { ...this.user[0]};
      // currUser.moves.push(move)
      //   console.log('this user',currUser)
      // this.$store.dispatch({ type: "saveUser", user: currUser});
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
.transfer-btn{
    margin-left: 10px;
}
</style>