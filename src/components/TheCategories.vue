<template>
  <v-list v-model:opened="open" class="border list-items mr-4">
    <v-list-group>
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" title="categories"></v-list-item>
      </template>
      <v-checkbox
        hide-details
        v-model="selectedCategory"
        :value="`men's clothing`"
        label="Men  Clothing"
      ></v-checkbox>
      <v-checkbox
        hide-details
        v-model="selectedCategory"
        :value="`women's clothing`"
        label="Women  Clothing"
      ></v-checkbox>
      <v-checkbox
        hide-details
        v-model="selectedCategory"
        :value="`electronics`"
        label="Electronics"
      ></v-checkbox>
      <v-checkbox
        hide-details
        v-model="selectedCategory"
        :value="`jewelery`"
        label="Jewelery"
      ></v-checkbox>
    </v-list-group>
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  emits: ["filteredProducts"],
  mounted() {
    store.dispatch("fetchCategories");
  },
  computed: {
    categories(): any {
      return store.getters.getAllCategories;
    },
  },
  watch: {
    selectedCategory(newCategory, oldCategory) {
      if (newCategory !== oldCategory) {
        store.commit("setCategory", newCategory);
        this.$emit("filteredProducts", true);
      } else {
        this.$emit("filteredProducts", false);
      }
    },
  },
  data() {
    return {
      open: ["Users"],
      selectedCategory:null
    };
  },
});
</script>
<style scoped>
@media (max-width: 600px) {
  .list-items {
    margin-right: 0;
    border: 1px;
  }
}
</style>
