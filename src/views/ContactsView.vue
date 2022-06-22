<template>
  <ContactsFilter @filter="onFilterBy" />
  <ContactList v-if="contacts" :contacts="contactsToShow" />
  <RouterLink to="/contact-edit">
    <button class="create-btn">Create new</button>
  </RouterLink>
</template>

<script>
import ContactsFilter from "@/components/ContactsFilter.vue";
import ContactList from "@/components/ContactList.vue";
export default {
  data() {
    return {
      filterBy: { txt: "" },
    };
  },
  methods: {
    onFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
    contacts(){ return this.$store.getters.contacts}
  },
  components: {
    ContactList,
    ContactsFilter,
  },
};
</script>

<style>
.create-btn{
    margin-top: 15px;
}
</style>