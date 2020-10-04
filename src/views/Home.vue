<style lang="stylus">
</style>

<template>
  <div class="home">
    <input type="text" placeholder="Enter a movie title" v-model="movieTitle">
    <button @click="searchMovies">Search</button>
    <img src="../assets/icons/search-icon.svg" alt="Search icon">

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
    searchMovies () {
      this.$router.push({ name: 'SearchResult', query: { movieTitle: this.movieTitle } });
    }
  }
}
</script>
