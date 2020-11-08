export default {
  namespaced: true,
  state: {
    nombre: "luis",
    apPater: "roque",
    apMater: "ccanto",
    edad: "21"
  },
  mutations: {
    aumentarEdad(state, payload) {
      state.edad += payload;
    }
  },
  getters: {
    fullname(state) {
      return `${state.apPater} ${state.apMater}, ${state.nombre}`;
    }
  }
};
