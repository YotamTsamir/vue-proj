<template>
  <h1>Contact edit:</h1>
  <div class="contact-edit">
    <form v-if="contact" @submit.prevent="save">
      <div class="input">
        <p>Name:</p>
        <input v-model="contact.name" type="text" />
      </div>
      <div class="input">
        <p>Email:</p>
        <input v-model="contact.email" type="text" />
      </div>
      <div class="input">
        <p>Phone:</p>
        <input v-model="contact.phone" type="text" />
      </div>
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { ContactService } from "../services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async save() {
      this.contact._id = this.$route.params._id;
      //   await ContactService.save(this.contact);
      this.$store.dispatch({ type: "saveContact", contact: this.contact });
      this.$router.push("/contacts");
    },
  },
  async created() {
    const id = this.$route.params._id;
    if (id) {
      this.contact = await ContactService.getContactById(id);
    } else this.contact = await ContactService.getEmptyContact()
  },
};
</script>

<style>
.contact-edit {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  width: 200px;
}
.input {
    margin-bottom: 15px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  width: 250px;
}
</style>