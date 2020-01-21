<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
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
    #product-list-two{
        background-color: rgb(218, 201, 201);
        margin: 10px;
        padding: 10px;
    }
</style>