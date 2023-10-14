<template>
  <h1 class="text-center">Product Details Page</h1>
  <v-container>
    <v-row v-if="selectedProduct" class="mx-auto my-auto" justify="center">
      <v-col cols="12" sm="6" lg="6">
        <v-card height="auto" flat class="mt-7 my-auto">
          <v-img
            :src="selectedProduct.image"
            :lazy-src="selectedProduct.image"
            height="500"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="6">
        <v-card-text class="mx-auto my-auto">
          <h1 class="text-h3">{{ selectedProduct.title }}</h1>
          <br />
          <span class="text-h6 mt-3 text-grey-darken-2">In Stock</span>
          <br />
          <div class="text-h4">PKR{{ selectedProduct.price }}</div>
          <hr class="my-6" />
          <v-chip-group
            v-if="selectedCategory"
            v-model="selection"
            selected-class="text-deep-purple-accent-4"
            mandatory
          >
            <v-chip v-for="size in sizes" :key="size" :value="size">
              {{ size }}
            </v-chip>
          </v-chip-group>
          <div>{{ selectedProduct.description }}</div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  mounted() {
    const productId = this.$route.params.id;
    store.dispatch("fetchSingleProduct", productId);
  },
  computed: {
    selectedProduct(): any {
      return store.getters.getSingleProduct;
    },
    selectedCategory(): any {
      if (
        this.selectedProduct.category === "men's clothing" ||
        this.selectedProduct.category === "women's clothing"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      selection: "M",
      sizes: ["S", "M", "L", "XL", "XXL"],
    };
  },
});
</script>
<style lang=""></style>
