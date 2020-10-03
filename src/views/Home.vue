<style lang="stylus">

</style>

<template>
  <div class="home">
    <input type="text" placeholder="Enter a movie title" v-model="movieTitle">
    <button @click="searchMovie">Submit</button>

    <div>{{ movieTitle }}</div>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  },

  data: function () {
    return {
      movieTitle: '',
      APIkey: '409e80d3'
    }
  },

  methods: {
    searchMovie () {

      let params = { s: this.movieTitle };

      this.axios
      .get('http://www.omdbapi.com/?apikey=' + this.APIkey , { params: params })
      .then(response => (
        console.log('RESPONSE: ', response)
      ))
      .catch(error => (
        console.log('CATCH RESPONSE: ', error)
      ))
    }
  }
}
</script>
