<template>
  <label for="filter">Filter contacts: </label><input autocomplete="off" id="filter" class="filter" @input="filter" v-model="filterBy.txt" type="text" />
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "" },
    };
  },
  methods:{
    filter(){
        this.$emit('filter',this.filterBy)
    }
  }
};
</script>

<style>
.filter{
    margin-bottom: 10px;
    border-radius: 3px;
    width: 199px;
}
</style>