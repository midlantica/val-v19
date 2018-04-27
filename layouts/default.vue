<template>
  <div class="container">
    <header>
      <a href="/">
        <!-- <ValLogoSVG class="valLogoSVG"/> -->
        <valentinaLogo />
      </a>
      <navvy/>
    </header>

    <nuxt/> <!-- PAGE CONTENT IN HERE -->

    <footer>
      <navvy/>
      <FooterSVG class="footerSVG" width="90%" height="auto"/>
    </footer>
  </div>
</template>

<script>
  // import 'vue-images/dist/vue-images.css'
  // require('node_modules/vue-images/dist/vue-images.css')

  // import ValLogoSVG from '~/assets/img/valentina_logo.svg'
  import FooterSVG from '~/assets/img/svgs/footer.svg'
  import navvy from '~/components/navvy.vue'
  import valentinaLogo from '~/components/icons/valentinaLogo'
  export default {
    components: {
      // ValLogoSVG,
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

