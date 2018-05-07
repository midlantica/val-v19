<template>
  <div class="container">
    <header>
      <a href="/">
        <valentinaLogo />
      </a>
      <navvy/>
    </header>

    <nuxt/> <!-- PAGE CONTENT IN HERE -->

    <footer>
      <navvy/>
      <FooterSVG/>
    </footer>
  </div>
</template>

<script>
  import FooterSVG from '~/components/FooterSVG'
  import navvy from '~/components/navvy.vue'
  import valentinaLogo from '~/components/valentinaLogo'
  export default {
    components: {
      FooterSVG,
      navvy,
      valentinaLogo
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .container {
    // width: 100%;
    // @include clearfix;
    // background: url(~/assets/img/bg/graphy_2.png) repeat;

  }

  .valLogoSVG,
  .footerSVG {
    margin: 0 auto;
    text-align: center;
  }

  header {
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;

    a {
      text-decoration: none;
      border: none;
    }
  }

  footer {
    margin-top: 2em;
    text-align: center;
  }

</style>

