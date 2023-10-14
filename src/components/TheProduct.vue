<template>
  <v-row>
    <template v-if="!filteredData">
      <v-col cols="12" sm="6" lg="4" v-for="(index, i) in product" :key="i">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            :elevation="isHovering ? 20 : 0"
            color="grey-lighten-4"
            height="350"
            max-width="350"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16 / 9"
              :src="index.image"
              :lazy-src="index.image"
            >
            </v-img>

            <v-card-text class="d-flex flex-wrap flex-column justify-space-between">
              <h2 class="text-h6 text-black">{{ index.title }}</h2>
              <div class="text-h6 text-black align-bottom text-orange-darken-2">
                PKR  {{ index.price }}
              </div>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-btn
                variant="flat"
                :to="{ name: 'productDetails', params: { id: index.id } }"
                >See more info</v-btn
              >
            </v-overlay>
          </v-card>
        </v-hover>
      </v-col>
    </template>
    <template v-else>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(index, i) in categorizedProducts"
        :key="i"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            :elevation="isHovering ? 20 : 0"
            color="grey-lighten-4"
            height="350"
            max-width="350"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16 / 9"
              :src="index.image"
              :lazy-src="index.image"
            >
            </v-img>

            <v-card-text class="d-flex flex-wrap flex-column justify-space-between">
              <h2 class="text-h6 text-black">{{ index.title }}</h2>
              <div class="text-h6 text-black align-bottom text-orange-darken-2">
                PKR  {{ index.price }}
              </div>
            </v-card-text>
            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-btn
                variant="flat"
                :to="{ name: 'productDetails', params: { id: index.id } }"
                >See more info</v-btn
              >
            </v-overlay>
          </v-card>
        </v-hover>
      </v-col>
    </template>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  props: {
    filterData: {
      type: Boolean,
    },
  },
  mounted() {
    store.dispatch("fetchProducts");
    this.filteredData = this.filterData;
  },
  computed: {
    product(): any {
      return store.getters.getAllProducts;
    },
    categorizedProducts(): any {
      return store.getters.getFilteredProducts;
    },
  },
  methods: {
    handleClick() {
      this.filteredData = true;
    },
  },
  data() {
    return {
      filteredData: false,
    };
  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
