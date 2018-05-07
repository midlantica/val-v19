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
  const images = importAll(require.context('~/assets/img/art/gallery/original_artwork', false, /\.(png|jpe?g|svg)$/));

  export default {
    components: {
      // images
    },
    data () {
      return {
        images: [
          {
            title: 'Spring Paisley',
            src:   images['nashville_airport_2016.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Valentines Birds',
            src:   images['aaron.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Birds and Flowers',
            src:   images['alexis.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Boho Flowers',
            src:   images['arabella2.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Candy Flowers',
            src:   images['babette.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Cute Little Owls',
            src:   images['be_awesome.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Dahlias',
            src:   images['eric.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Doodles Garden',
            src:   images['goldbug.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['hedwig.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Flowers Doodles',
            src:   images['juanita_color.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Spring Paisley',
            src:   images['la_pluma.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Valentines Birds',
            src:   images['levy_deborah.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Birds and Flowers',
            src:   images['seahorse.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Boho Flowers',
            src:   images['under_the_sea.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Candy Flowers',
            src:   images['arabella.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Cute Little Owls',
            src:   images['billy_01.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Dahlias',
            src:   images['azure_treasure.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Doodles Garden',
            src:   images['karol.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['born_to_fly.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Flowers Doodles',
            src:   images['lianne.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Spring Paisley',
            src:   images['brown.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Valentines Birds',
            src:   images['buddha.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Birds and Flowers',
            src:   images['bravebird.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Boho Flowers',
            src:   images['coi.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Candy Flowers',
            src:   images['dakota.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Cute Little Owls',
            src:   images['dreams_of_india_vr.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Dahlias',
            src:   images['penny.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Doodles Garden',
            src:   images['frog_in_the_log.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['gordita.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Flowers Doodles',
            src:   images['green_detail01.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Spring Paisley',
            src:   images['henry_the_horse.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Valentines Birds',
            src:   images['liz.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Birds and Flowers',
            src:   images['missy.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Boho Flowers',
            src:   images['lysander.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Candy Flowers',
            src:   images['mr_pop.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Cute Little Owls',
            src:   images['mrwoody.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Dahlias',
            src:   images['randy.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Doodles Garden',
            src:   images['tarquin.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Ethnic Stripes',
            src:   images['the_van.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Flowers Doodles',
            src:   images['melissa.jpg'],
            group: 'Original Artwork'
          },
          {
            title: 'Flowers Doodles',
            src:   images['why_hello_there_gorgeous.jpg'],
            group: 'Original Artwork'
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
