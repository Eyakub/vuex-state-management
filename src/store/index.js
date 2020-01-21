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
    mutations: {},
    actions: {},
    modules: {}
});
