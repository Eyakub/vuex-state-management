<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="(product, index) in saleProducts" :key="index.id">
                <span class="name">{{ product.name }}</span>
                <span class="price"> {{ product.price }}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(4)">Reduce Price</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        // for multiple getters
        ...mapGetters([
          "saleProducts",
          "yourNext",
        ])
    },
    methods: {
        // reducePrice(amount) {
        //     // commit a mutations that will observing the state will update automatically
        //     // by this way we can tract it on vueDevTools
        //     //this.$store.commit("reducePrice");

        //     // dispatch an action is good practice
        //     // instead commit directly
        //     /* $dispatch is always used from your methods in routes/components. 
        //        It sends a message to Vuex store to perform some action. 
        //        The action can be performed any time after the current tick 
        //        so that it will not affect the frontend performance. 
        //        The commit is done from within an action.*/
        //     this.$store.dispatch('reducePrice', amount)
        // }
        ...mapActions([
          "reducePrice",
        ])
    }
};
</script>

<style scoped>
#product-list-one {
    background-color: darkgray;
    margin: 10px;
    padding: 10px;
}
</style>
