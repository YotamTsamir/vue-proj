<template>
  <div class="name" v-if="user">Name: {{ user[0].username }}</div>
  <div class="name" v-if="user">Coins: {{ user[0].coins }}</div>
  <div class="name">Bitcoin value: 0.00004674</div>
  <div v-if="user" class="moves">
    <h1>Recent transfers: </h1>
    <div class="move" v-for="move in lastMoves" :key="move.date">
      <p>To: {{ move.to.name }}</p>
      <p>Amount: {{ move.amount }} coins</p>
      <p>At: 
        {{ move.date }} <span>{{ move.hour }}:</span
        ><span>{{ move.minutes }}</span>
      </p>
    </div>
  </div>
  <div v-else>Please sign in!</div>
</template>

<script>
import { UserService } from "../services/user.service.js";
import { bitcoinService } from "../services/bitCoin.service.js";
export default {
  data() {
    return {
      user: null,
      lastMoves: null,
      bitcoinPrice: null,
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadUser" });
    this.user = await UserService.getUser();
    this.lastMoves = this.user[0].moves.slice(
      this.user[0].moves.length - 3,
      this.user[0].moves.length
    );

    // this.lastMoves = this.user[0].moves.slice(0,3)
    // data = await bitcoinService.getBitcoinPrice().data
    // this.bitcoinPrice =
  },
  computed: {
    // user(){return this.$store.getters.user}
  },
};
</script>

<style>
.name{
    margin-bottom: 20px;
}
.move{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 3px;
    width: 300px;
}
.moves{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>