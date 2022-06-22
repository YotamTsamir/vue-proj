<template>
  <div v-if="currMoves">
    <div class="move" v-for="move in currMoves" :key="move.date">
      <!-- <p>{{ move.to.name }}</p> -->
      <p>{{ move.amount }} coins</p>
      <p>
       At: {{ move.date }} <span>{{ move.hour }}:</span
        ><span>{{ move.minutes }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { UserService } from "../services/user.service";
export default {
  data() {
    return {
      currMoves: [],
    };
  },
  props: {
    moves: {
      type: Array,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
  },
  async created() {
    const user = await UserService.getUser();

    console.log(this.moves);
    this.moves.forEach((move) => {
      if (move.to.name === this.contact.name) this.currMoves.push(move);
    });

    // const user = await UserService.getUser();
    // this.moves = user[0].moves;
    // console.log(this.moves);
  },

};
</script>

<style>
.move {
  margin-top: 15px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 3px;
  width: 300px;
}
</style>