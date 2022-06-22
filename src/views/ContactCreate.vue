<template>
  <h1>YES!</h1>
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
      contact: {
        name:'',
        phone:'',
        email:''
      },
    };
  },
  methods: {
    save() {
      ContactService.save(this.contact);
      this.$router.push("/contacts");
    },
  },
 
};
</script>

<style>

</style>