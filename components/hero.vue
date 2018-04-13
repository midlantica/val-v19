<!-- hero.vue -->
<template>
  <section class="hero">
    <div class="hero01" alt=""></div>
    <div class="hero02" alt=""></div>
  </section>
</template>

<script>
  //
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .hero {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    //
    width: calc(100%);
    height: 300px;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    // max-height: 200px;
    @include clearfix;
    // background: grey;

    .hero01,
    .hero02 {
      width: calc(50%);
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      // background: green;
    }

    .hero01 {
      // background: pink;
      background: url(~assets/img/art/gallery/patterns/amelia.jpg);
    }

    .hero02 {
      // background: azure;
      background: url(~assets/img/art/gallery/patterns/beatriz.jpg);
    }

  }
</style>
