<!-- portfolio.vue -->
<template>
  <section class="portfolio">
    <!-- <ValLogo/> -->
    <use xlink:href="#valentina_logo"></use>
    <div class="gridPic gridPic01" alt=""></div>
    <div class="gridPic gridPic02" alt=""></div>
    <div class="gridPic gridPic03" alt=""></div>
    <div class="gridPic gridPic04" alt=""></div>
    <div class="gridPic gridPic05" alt=""></div>
    <div class="gridPic gridPic06" alt=""></div>
    <div class="gridPic gridPic07" alt=""></div>
    <div class="gridPic gridPic08" alt=""></div>
    <div class="gridPic gridPic09" alt=""></div>
    <div class="gridPic gridPic10" alt=""></div>

    <div class="gridPic gridPic01" alt=""></div>
    <div class="gridPic gridPic02" alt=""></div>
    <div class="gridPic gridPic03" alt=""></div>
    <div class="gridPic gridPic04" alt=""></div>
    <div class="gridPic gridPic05" alt=""></div>
    <div class="gridPic gridPic06" alt=""></div>
    <div class="gridPic gridPic07" alt=""></div>
    <div class="gridPic gridPic08" alt=""></div>
    <div class="gridPic gridPic09" alt=""></div>
    <div class="gridPic gridPic10" alt=""></div>

  </section>
</template>

<script>
  // import ValLogo from '~/assets/img/valentina_logo';
  export default {
    components: {
      // ValLogo
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  #valentina_logo {
    width: 219x;
    height: 88px;
    border: 1px solid red;
    display: block;
  }

  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    //
    width: calc(100%);
    // height: 200px;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    @include clearfix;
    // background: red;

    .gridPic {
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin: 2px;
      // width: calc(19.6%);

      @media (min-width: 424px) {
        width: calc(49.1%);
        height: 150px;
        border: 0px solid orange;
      }

      @media (min-width: 520px) and (min-width: 960px) {
        width: calc(19.5%);
        height: 176px;
        border: 0px solid green;
      }

      @media (min-width: 961px) and (min-width: 1400px) {
        width: calc(9.4%);
        height: 137px;
        border: 0px solid red;
      }

      @media (min-width: 1401px) and (min-width: 1500px) {
        width: calc(19.7%);
        height: 175px;
        border: 0px solid blue !important;
      }

      @media (min-width: 1500px) {
        width: calc(9.7%);
        height: 158px;
        border: 0px solid pink !important;
      }

      &.gridPic01 {
        background: url(~assets/img/art/gallery/patterns/spring_paisley.jpg);
      }

      &.gridPic02 {
        background: url(~assets/img/art/gallery/patterns/valentines_birds.jpg);
      }

      &.gridPic03 {
        background: url(~assets/img/art/gallery/patterns/birds_and_flowers.jpg);
      }

      &.gridPic04 {
        background: url(~assets/img/art/gallery/patterns/boho_flowers.jpg);
      }

      &.gridPic05 {
        background: url(~assets/img/art/gallery/patterns/candy_flowers.jpg);
      }

      &.gridPic06 {
        background: url(~assets/img/art/gallery/patterns/cute_little_owls.jpg);
      }

      &.gridPic07 {
        background: url(~assets/img/art/gallery/patterns/dahlias.jpg);
      }

      &.gridPic08 {
        background: url(~assets/img/art/gallery/patterns/doodles_garden.jpg);
      }

      &.gridPic09 {
        background: url(~assets/img/art/gallery/patterns/ethnic_stripes.jpg);
      }

      &.gridPic10 {
        background: url(~assets/img/art/gallery/patterns/flowers_doodles.jpg);
      }

    }

  }
</style>
