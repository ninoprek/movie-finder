<style lang="stylus">
  .SearchResult
    display: flex
    flex-direction: column

    &--movies
      margin: 20px auto 0 auto
      display: flex
      flex-wrap: wrap

    h2
      margin: 100px auto 80px auto

    input
      font-size: 1em
      padding: 5px 10px

</style>

<template>
  <div class="SearchResult">
    <div class="SearchResult--input">
      <input type="text" placeholder="Enter a movie title" v-model="title">
      <button @click="updateRouter" :disabled="buttonDisabled">Search</button>
    </div>
    <div v-if="dataLoaded">
      <h2>Search results:</h2>
      <p v-if="this.errorMessage != ''" class="SearchResult--errorMessage">{{ errorMessage }}</p>

      <div v-if="movies.length > 0" class="SearchResult--movies">
        <MovieSlide
          v-for="movie in movies"
          :key="movie.Title"
          :movie='movie'
          :searchTitle='latestSearch'
          :APIkey='APIkey'
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieSlide from '@/components/MovieSlide.vue'

export default {
  name: 'SearchResult',

  // props: [ 'movieTitle' ],

  components: {
    MovieSlide
  },

  data: function () {
    return {
      APIkey: '409e80d3',
      title: this.$route.query.movieTitle,
      latestSearch: '',
      errorMessage: '',
      movies: [],
      buttonDisabled: true,
      dataLoaded: false
    }
  },

  watch: {
    title: function () {
      if (this.title != '') this.buttonDisabled = false;
      else this.buttonDisabled = true;
    },

    $route: function () {
      console.log(this.$route);
      this.title = this.$route.query.movieTitle;
      this.getMovies();
    }
  },

  created () {
    window.addEventListener('keyup', this.keyHandler);
    this.getMovies();
  },

  destroyed () {
    window.removeEventListener('keyup', this.keyHandler);
  },

  methods: {
    getMovies () {
      if (this.errorMessage != '') this.errorMessage = '';
      if (this.movies.length > 0) this.movies = [];
      if (this.dataLoaded) this.dataLoaded = false;

      let params = { s: this.title };
      this.$route.query.movieTitle = this.title;
      this.latestSearch = this.title;
      this.title = '';

      this.axios
      .get('http://www.omdbapi.com/?apikey=' + this.APIkey , { params: params })
      .then(response => {
        if (response.data.Response === 'True') {
          this.movies = response.data.Search;
          this.dataLoaded = true;
        } else {
          this.errorMessage = response.data.Error;
        }
      })
      .catch(error => {
        this.errorMessage = error;
      })
    },

    updateRouter () {
      this.$router.push({ name: 'SearchResult', query: { movieTitle: this.title } });
    },

    keyHandler (e) {
      if (e.which == '13' && !this.buttonDisabled) this.updateRouter();
    }
  }

}
</script>
