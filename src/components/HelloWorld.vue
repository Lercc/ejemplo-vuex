<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h4>{{ $store.state.lercc.nombre }}</h4>
    <hr />
    <h2>{{ msg }}</h2>
    <h2>{{ nombre }}</h2>
    <h2>{{ apMater }}</h2>
    <h2>{{ apPater }}</h2>
    <h2>{{ edad }}</h2>
    <hr />
    <h2>{{ fullname }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  computed: {
    ...mapState("lercc", ["nombre", "apPater", "apMater", "edad"]),
    ...mapGetters("lercc", ["fullname"])
  },
  methods: {
    ...mapMutations("lercc", ["aumentarEdad"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
