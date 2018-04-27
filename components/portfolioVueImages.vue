<!-- portfolio.vue -->
<template>
  <section class="portfolio">

    <vue-images :imgs="images"></vue-images>

  </section>
</template>

<script>
  const pats = 'assets/img/art/gallery/patterns/'

  import vueImages from 'vue-images'
  export default {
    components: {
      vueImages: vueImages
    },
    data () {
      return {
        images: [
          {
            imageUrl: pats+'spring_paisley.jpg',
            caption: 'Spring Paisley'
          },
          {
            imageUrl: pats+'valentines_birds.jpg',
            caption: 'Valentines Birds'
          },
          {
            imageUrl: pats+'birds_and_flowers.jpg',
            caption: 'Birds and Flowers'
          },
          {
            imageUrl: pats+'boho_flowers.jpg',
            caption: 'Boho Flowers'
          },
          {
            imageUrl: pats+'candy_flowers.jpg',
            caption: 'Candy Flowers'
          },
          {
            imageUrl: pats+'cute_little_owls.jpg',
            caption: 'Cute Little Owls'
          },
          {
            imageUrl: pats+'dahlias.jpg',
            caption: 'Dahlias'
          },
          {
            imageUrl: pats+'doodles_garden.jpg',
            caption: 'Doodles Garden'
          },
          {
            imageUrl: pats+'ethnic_stripes.jpg',
            caption: 'Ethnic Stripes'
          },
          {
            imageUrl: pats+'flowers_doodles.jpg',
            caption: 'Flowers Doodles'
          }
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    @include clearfix;
    // background: red;

    .gridPic {
      // height: 200px;
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
        color: black;
        background: url(~assets/img/art/gallery/patterns/spring_paisley.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/spring_paisley.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic02 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/valentines_birds.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/valentines_birds.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic03 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/birds_and_flowers.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/birds_and_flowers.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic04 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/boho_flowers.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/boho_flowers.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic05 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/candy_flowers.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/candy_flowers.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic06 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/cute_little_owls.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/cute_little_owls.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic07 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/dahlias.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/dahlias.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic08 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/doodles_garden.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/doodles_garden.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic09 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/ethnic_stripes.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/ethnic_stripes.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

      &.gridPic10 {
        color: black;
        background: url(~assets/img/art/gallery/patterns/flowers_doodles.jpg);
        cursor: pointer;
        text-align: center;

        &:hover {
          background: url(~assets/img/art/gallery/patterns/flowers_doodles.jpg);
          opacity: .5;
          content: "Duuude";
          color: black;
          // background: transparentize($green, .5);
        }
      }

    }

  }
</style>
