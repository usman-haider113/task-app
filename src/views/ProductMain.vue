<template>
  <v-toolbar class="bg-orange-darken-2" prominent>
    <v-app-bar-nav-icon
      class="d-block d-sm-none"
      @click.stop="isMobile = !isMobile"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Demo App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-toolbar>
  <v-navigation-drawer v-model="isMobile" temporary class="w-50">
    <the-categories @filtered-products="getFilteredProducts"></the-categories>
  </v-navigation-drawer>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="3" lg="3">
        <the-categories
          @filtered-products="getFilteredProducts"
          class="the-categories"
        ></the-categories>
      </v-col>
      <v-col cols="12" sm="9" lg="9">
        <the-product :filterData="filteredData"></the-product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheProduct from "../components/TheProduct.vue";
import TheCategories from "../components/TheCategories.vue";

export default defineComponent({
  name: "HelloWorld",
  methods: {
    handleClick() {
      this.filteredData = true;
    },
    getFilteredProducts(boolVal: any) {
      if (boolVal) {
        this.filteredData = true;
      } else {
        this.filteredData = false;
      }
    },
  },
  data() {
    return {
      isMobile: false,
      filteredData: false,
      open: ["Users"],
    };
  },
  components: { TheProduct, TheCategories },
});
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .the-categories {
    display: none;
  }
}
</style>
