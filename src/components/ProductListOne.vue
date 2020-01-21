<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index.id">
        <span class="name">{{ product.name }}</span>
        <span class="price"> {{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
      products (){
          return this.$store.state.products
      }
  }
};
</script>

<style scoped>
    #product-list-one{
        background-color: darkgray;
        margin: 10px;
        padding: 10px;
    }
</style>