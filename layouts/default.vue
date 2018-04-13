<template>
  <div class="container">
    <header>
      <navvy/>
    </header>
    <nuxt/>
    <footer>
      <navvy/>
    </footer>
  </div>
</template>

<script>
  import navvy from '~/components/navvy.vue'
  export default {
    components: {
      navvy
    }
  }
</script>

<style lang="scss">
  @import "~assets/css/main.scss";

  .container {
    // width: 100%;
    // @include clearfix;
    // background: url(~/assets/img/bg/graphy_2.png) repeat;

  }

  header {
    margin-bottom: 1em;
  }

  footer {
    margin-top: 3em;
  }

</style>

