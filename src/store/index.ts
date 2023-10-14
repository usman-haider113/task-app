import { createStore } from 'vuex'
import axios from 'axios'
interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
export default createStore({
  state: {
    allProducts: [],
    allCategories: [],
    selectedProduct: null,
    filters: {
      price: {
        min: 0,
        max: 1000
      },
      category: '',
      brand: '',
    }
  },
  getters: {
    getAllProducts(state){
      return state.allProducts
    },
    getAllCategories(state){
      return state.allProducts
    },
    getFilteredProducts(state){
      if (!state.filters.category) {
        return state.allProducts;
      }
      return state.allProducts.filter((product:any) => {
        return product.category === state.filters.category;
      });
    },
    getSingleProduct(state){
      return state.selectedProduct;
    }
  },
  mutations: {
    setProducts: (state, products) => {
      state.allProducts = products;
    },
    setCategories: (state, categories) => {
      state.allCategories = categories;
    },
    setCategory: (state, category) => {
      state.filters.category = category;
    },
    setSelectedProduct: (state, product) => {
      state.selectedProduct = product;
    }
  },
  actions: {
    async fetchProducts({commit}){
      try{
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('setProducts', response.data)
      }catch(e){
        console.log(e)
      }
    },
    async fetchCategories({commit}){
      try{
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        commit('setCategories', response.data)
      }catch(e){
        console.log(e)
      }
    },
    async fetchSingleProduct(context:any, id:number){
      try{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        context.commit('setSelectedProduct', response.data)
      }catch(e){
        console.log(e)
      }
    }
  },
  modules: {
  }
})
