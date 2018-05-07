<template>
  <div class="artGrid">
    <div
      v-for="(image, index) in images"
      v-bind:item="image"
      v-bind:index="index"
      v-bind:key="image.id"
    >
      <img class="gridPic" :src="image.src" :alt="image.title" />
    </div>
  </div>
</template>

<script>

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('~/assets/img/art/gallery/patterns', false, /\.(png|jpe?g|svg)$/));

  export default {
    components: {
      // images
    },
    data () {
      return {
        images: [
          {
            title: 'Spring Paisley',
            src:   images['i_spy_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Valentines Birds',
            src:   images['birds_in_the_garden_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Birds and Flowers',
            src:   images['birds-with-flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Boho Flowers',
            src:   images['butterflies_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Candy Flowers',
            src:   images['doodles_garden_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Cute Little Owls',
            src:   images['folkbirds_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Dahlias',
            src:   images['marching_elephants_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Doodles Garden',
            src:   images['pods_and_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['rachel_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['sofia_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Spring Paisley',
            src:   images['stella_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Valentines Birds',
            src:   images['07_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Birds and Flowers',
            src:   images['amelia_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Boho Flowers',
            src:   images['baby_dino_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Candy Flowers',
            src:   images['be_my_valentine_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Cute Little Owls',
            src:   images['beatriz_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Dahlias',
            src:   images['birds_and_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Doodles Garden',
            src:   images['blooming_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['boho_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['candy_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Spring Paisley',
            src:   images['cayenas_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Valentines Birds',
            src:   images['cute_little_owls_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Birds and Flowers',
            src:   images['dahlias_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Boho Flowers',
            src:   images['doodles_black_and_yellow_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Candy Flowers',
            src:   images['eli_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Cute Little Owls',
            src:   images['ethnic_stripes_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Dahlias',
            src:   images['flowers_doodles_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Doodles Garden',
            src:   images['flowers_in_brown_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['flowers_pattern_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['lets_cook_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Spring Paisley',
            src:   images['lila_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Valentines Birds',
            src:   images['little_birds_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Birds and Flowers',
            src:   images['lovely_birds_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Boho Flowers',
            src:   images['marisa_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Candy Flowers',
            src:   images['orange_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Cute Little Owls',
            src:   images['orange_grey_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Dahlias',
            src:   images['owls_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Doodles Garden',
            src:   images['pods_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['random_flowers_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['retro_coffee_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Dahlias',
            src:   images['retro_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Doodles Garden',
            src:   images['reverie_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['spring_paisley_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['under_the_sea_sm.jpg'],
            group: 'Patterns'
          },
          {
            title: 'Flowers Doodles',
            src:   images['valentines_birds_sm.jpg'],
            group: 'Patterns'
          },
        ]
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .artGrid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // align-content: center;
    // width: calc(100%);
    // height: 200px;
    margin: 0 auto;
    // align-content: center;
    // @include clearfix;
    // background: red;

    .gridPic {
      // width: 200px;
      // height: 200px;
      margin: 2px;
      cursor: pointer;
      border: 1px solid $greyLighter !important;
      // flex-grow: 0;
      // flex-shrink: 0;
      // flex-basis: auto;
      // @include clearfix;
      // width: calc(19.6%);


      @media (min-width: 319px) {
        // width: calc(49.1%);
        height: 150px;
        // border: 0px solid orange;
      }

      @media (min-width: 395px) {
        // width: calc(49.1%);
        height: 150px;
        // border: 0px solid orange;
      }

      @media (min-width: 395px) {
        // width: calc(49.1%);
        height: 150px;
        // border: 0px solid orange;
      }

      @media (min-width: 424px) {
        // width: calc(49.1%);
        height: 150px;
        // border: 0px solid orange;
      }

      @media (min-width: 520px) and (min-width: 960px) {
        // width: calc(19.5%);
        height: 176px;
        // border: 0px solid green;
      }

      @media (min-width: 961px) and (min-width: 1400px) {
        // width: calc(9.4%);
        height: 230px;
        // border: 0px solid red;
      }

      @media (min-width: 1401px) and (min-width: 1500px) {
        // width: calc(19.7%);
        height: 250px;
        // border: 0px solid blue !important;
      }

      // @media (min-width: 1500px) {
      //   // width: calc(9.7%);
      //   height: 158px;
      //   // border: 0px solid pink !important;
      // }
    }
  }

</style>
