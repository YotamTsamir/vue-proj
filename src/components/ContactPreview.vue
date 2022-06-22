<template>
  <div class="contact">
    <RouterLink :to="`/contacts/${contact._id}`">
      <img
        class="robo"
        v-bind:src="`https://robohash.org/${contact._id}.png`"
      />
      <p class="contact-name">{{ contact.name }}</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.contact {
  display: flex;
  gap: 40px;
  /* justify-content: center; */
  align-items: center;
  background-color: lightgray;
  border-radius: 20px;
  width: 300px;
  height: 60px;
  a {
  height: 100%;
  width: 100%;
      display: flex;
    align-items: center;
    gap: 100px;
}
.contact-name{
  color: #212121;
}
&:hover{
    background-color: rgb(178, 178, 178);
}
}




.robo {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 12px;
  margin-left: 15px;
  /* height: 80px; */
  /* width: 80px; */
}
</style>