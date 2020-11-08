import Vue from "vue";
import Vuex from "vuex";

//modulos
import lercc from "./molues/lercc";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Hola, este es un mensaje global"
  },
  mutations: {},
  actions: {},
  modules: { lercc }
});
