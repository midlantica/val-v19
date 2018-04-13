<!-- bioShort.vue -->
<template>
  <section class="bioShort">
    <img class="valPic" alt="">
    <div class="bioPanel">
      <h1>Artist’s Bio</h1>
      <p>“My work is primarily driven by the idea of the creation of a unified whole through the use of minute details. The use of pop colors, lines and circles that swirl & undulate result in playful artwork made with passion. I use ink and other mediums to create flowing, intricate and highly detailed patterns, sometimes utilizing words for positive inspiration. Self healing and positive energy are the motivating concepts which ignite my passion to create. Through my work I hope to inspire and help others follow their dreams. I try to bring a fantastical, dreamlike appearance to my artwork, which includes digital drawings, mixed media and pen & ink illustrations.”</p>
    </div>

  </section>
</template>

<script>
  //
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .bioShort {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 2em auto 0;
    border: 0;
    @include clearfix;

    .valPic,
    .bioPanel {
      // width: 40%;
      margin-top: 0.3em;
      border-radius: 20em;
      @include clearfix;
    }

    .valPic {
      background: url(~assets/img/val_pic.jpg);
      background-size: cover;
      width: 190px;
      height: 190px;
      align-self: flex-start;
      margin-right: 2em;
    }

    .bioPanel {
      // flex-grow: 1;
      align-self: flex-start;
      width: 40%;
      // max-width: 300px;
    }

  }
</style>
