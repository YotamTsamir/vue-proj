<template>
  <div class="contacts">
  
    <div v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
    </div>
  </div>
</template>

<script>
import ContactPreview from "@/components/ContactPreview.vue";
export default {
  props:{
    contacts:{
        type:Array,
        required:true
    }
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>