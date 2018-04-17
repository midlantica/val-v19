<template>
  <div class="container">
    <header>
      <a href="/">
        <ValLogoSVG class="valLogoSVG"/>
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
  import ValLogoSVG from '~/assets/img/valentina_logo.svg'
  import FooterSVG from '~/assets/img/svgs/footer.svg'
  import navvy from '~/components/navvy.vue'
  export default {
    components: {
      ValLogoSVG,
      FooterSVG,
      navvy
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

