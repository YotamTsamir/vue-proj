<template>
  <div v-if="contact">
    <p>Name: {{ contact.name }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <p>Email: {{ contact.email }}</p>

    <button class="contact-btn back" @click="back">Go back</button>
    <button class="contact-btn" @click="onDelete">Delete</button>
    <RouterLink :to="`/contact-edit/${contact._id}`">
      <button class="contact-btn">Edit</button>
    </RouterLink>
    <transfer-fund @updateUser="updateUser" :contact="contact" />
    <MoveList v-if="user" :moves="moves" :contact="contact" />
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
import { ContactService } from "../services/contact.service.js";
import TransferFund from "@/components/TransferFund.vue";
import MoveList from "@/components/MoveList.vue";
import { UserService } from "../services/user.service.js";
export default {
  data() {
    return {
      contact: null,
      user: null,
      moves: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.user = await UserService.getUser();
    this.contact = await ContactService.getContactById(contactId);
    this.moves = this.user[0].moves;
  },
  methods: {
    back() {
      this.$router.push("/contacts");
    },
    updateUser(user) {
      this.user = user;
      this.moves = this.user.moves;
    },
    async onDelete() {
      // await ContactService.remove(this.contact._id)
      const contactId = this.contact._id;
      this.$store.dispatch({ type: "removeContact", contactId });
      this.$router.push("/contacts");
    },
  },
  components: {
    TransferFund,
    MoveList,
  },
};
</script>

<style>
.contact-btn {
  margin-left: 5px;
}
.back {
  margin-left: 0;
}
</style>