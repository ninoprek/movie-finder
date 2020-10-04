<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

  .MovieFinder
    display: flex
    flex-direction: column
    font-family: 'Roboto Mono', monospace

    a
      text-decoration: none
      color: red

    &--header
      margin: 100px auto 0 auto
      font-size: 4em
      text-align: center

</style>

<template>
  <div id="app" class="MovieFinder">
    <h1 class="MovieFinder--header"><router-link :to="{ name: 'Home' }">Movie Finder</router-link></h1>
    <router-view/>
  </div>
</template>

