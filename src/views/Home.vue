<style lang="stylus">
  .Home
    display: flex
    flex-direction: column
    margin: auto

    h2
      margin: 140px auto 100px auto

    &--input
      display: flex
      justify-content: center
      margin: 40px auto

      input
        font-size: 1.8em
        padding: 5px 10px

      button
        font-size: 1.2em

</style>

<template>
  <div class="Home">
    <h2>Welcome to a perfect place to search movie information</h2>
    <div class="Home--input">
      <input type="text" placeholder="Enter a movie title" v-model="movieTitle">
      <button @click="searchMovies" :disabled="buttonDisabled">SEARCH</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },

  data: function () {
    return {
      movieTitle: '',
      buttonDisabled: true
    }
  },

  watch: {
    movieTitle: function () {
      if (this.movieTitle != '') this.buttonDisabled = false;
      else this.buttonDisabled = true;
    }
  },

  created () {
    window.addEventListener('keyup', this.keyHandler)
  },

  destroyed () {
    window.removeEventListener('keyup', this.keyHandler)
  },

  methods: {
    searchMovies () {
      this.$router.push({ name: 'SearchResult', query: { movieTitle: this.movieTitle } });
    },

    keyHandler (e) {
      if (e.which == '13' && !this.buttonDisabled) this.searchMovies();
    }

  }
}
</script>
