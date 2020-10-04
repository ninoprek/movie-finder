<style lang="stylus">
</style>

<template>
  <div class="SearchResult">
    <input type="text" placeholder="Enter a movie title" v-model="movieTitle">
    <button @click="getMovies">Search</button>
    <p v-if="errorMessage != this.errorMessage != ''" class="SearchResult--errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',

  data: function () {
    return {
      APIkey: '409e80d3',
      movieTitle: this.$route.query.movieTitle,
      errorMessage: '',
      movies: []
    }
  },

  created () {
    console.log('SEARCH: ', this.movieTitle);
    this.getMovies();
  },

  methods: {
    getMovies () {
      if (this.errorMessage != '') this.errorMessage = '';

      let params = { s: this.movieTitle };

      this.axios
      .get('http://www.omdbapi.com/?apikey=' + this.APIkey , { params: params })
      .then(response => {
        console.log('RESPONSE: ', response);
        if (response.data.Response === 'True') {
          this.movies = response.data.Search;
          console.log('TRUE: ', this.movies);
        } else {
          this.errorMessage = response.data.Error;
          console.log('FALSE: ', this.errorMessage);
        }
      })
      .catch(error => {
        this.errorMessage = error;
      })
    }
  }

}
</script>
