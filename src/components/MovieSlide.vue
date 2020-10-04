<style lang="stylus" scoped>

  .MovieSlide
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0px 10px 40px 10px
    padding: 10px 10px 0 10px
    width: 270px
    box-shadow: 0px 0px 10px -4px rgba(140,140,140,1);
    -webkit-box-shadow: 0px 0px 10px -4px rgba(140,140,140,1);
    -moz-box-shadow: 0px 0px 10px -4px rgba(140,140,140,1);
    img
      margin: 10px auto 0 auto
      height: 350px
      width: 100%

    &--info
      margin: 0 0 0 10px
      p
        margin: 10px 0

</style>

<template>
  <div class="MovieSlide" @click="goToMovie">
    <img :src="movie.Poster" alt="Movie Poster">
    <div class="MovieSlide--info">
      <p>Title: {{ movie.Title }}</p>
      <p>Year: {{ movie.Year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSlide',
  props: [ 'movie' , 'APIkey', 'searchTitle'],

  created () {
  },

  methods: {
    goToMovie () {
      this.$router.push({ name: 'Movie', params: { APIkey: this.APIkey, searchTitle: this.searchTitle }, query: { imdbID: this.movie.imdbID } })
    }
  }

}
</script>
