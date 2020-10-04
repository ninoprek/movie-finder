<style lang="stylus">
  .Movie
    display: flex
    flex-direction: column

    &--data
      display: flex
      justify-content: center
      margin: 100px 0 0 350px
      img
        max-width: 400px

    &--info
      margin: auto 40px
      span
        font-weight: 600

    &--backButton
      margin: 80px auto

</style>

<template>
  <div v-if="dataLoaded" class="Movie">
    <div class="Movie--data">
      <img :src="movie.Poster" alt="Movie Poster">
      <div class="Movie--info">
        <p><span>Title:</span> {{ movie.Title }}</p>
        <p><span>Director:</span> {{ movie.Director }}</p>
        <p><span>Actors:</span> {{ movie.Actors }}</p>
        <p><span>Released:</span> {{ movie.Released }}</p>
        <p><span>Runtime:</span> {{ movie.Runtime }}</p>
        <p><span>Genre:</span> {{ movie.Genre }}</p>
        <p><span>IMDB Rating:</span> {{ movie.imdbRating }}</p>
      </div>
    </div>

    <router-link class="Movie--backButton" :to="{ name: 'SearchResult', query: { movieTitle: this.searchTitle } }">BACK</router-link>
  </div>
</template>

<script>
export default {
  name: 'Movie',

  props: [ 'searchTitle' ],

  data: function () {
    return {
      APIkey: '409e80d3',
      movie: [],
      dataLoaded: false,
      imdbID: this.$route.query.imdbID
    }
  },

  created () {
    this.getMovie();
  },

  methods: {
    getMovie () {
      let params = { i: this.imdbID };

      this.axios
      .get('http://www.omdbapi.com/?apikey=' + this.APIkey , { params: params })
      .then(response => {
        if (response.data.Response === 'True') {
          this.movie = response.data;
          if (this.movie.Poster === "N/A") this.movie.Poster = '/default.jpg'
          this.dataLoaded = true;
        }
      })
    }
  }


}
</script>
