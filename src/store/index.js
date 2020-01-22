import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            { name: "Apple", price: 20 },
            { name: "Orange", price: 40 },
            { name: "Banana", price: 30 }
        ]
    },
    getters: {
        // getting data from state
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2
                };
            });
            return saleProducts;
        }
    },
    // commit a mutations that will observing the state will update automatically
    // don't put async code inside MUTATIONS
    mutations: {
        reducePrice: (state, payload) => {
            console.log('payload', payload)
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    // any ASYNC code inside actions
    actions: {
        // context is like store
        reducePrice: (context, payload) => {
            setTimeout(() =>{
                // dispatch from One.vue and commit here to mutation
                context.commit('reducePrice', payload)
            }, 2000)
        }
    },
    modules: {}
});
