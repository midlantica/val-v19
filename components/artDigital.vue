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
  const images = importAll(require.context('~/assets/img/art/gallery/prints', false, /\.(png|jpe?g|svg)$/));

  export default {
    components: {
      // images
    },
    data () {
      return {
        images: [
          {
            title: 'Prints',
            src:   images['ampersand.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['barkysimeto.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['emaline.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['frisky_christy.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['hello_person.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['hippotastique.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['humming_heaven.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['little_fish.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['lovebirds.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['milo.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['phileus_frog.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['ruby.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['shower_of_joy.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['sugar_skull.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['aaron.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['alcahofa.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['alexis.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['always_be_yourself.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['arabella_and_the_flowers.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['beatriz.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['dear_deer.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['deep_blue_me.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['deep_violet.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['emilia.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['escargopolooza.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['eva.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['everything_always_starts_with_a_dream.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['feather_heaven.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['follow_your_dreams.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['ganesha.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['giraffe.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['have_some_coffee.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['helios.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['hello_bird.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['honcho.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['i_was_a_dinosaur.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['its_all_in_your_head.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['lets_cook.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['love_owls_in_the_tree.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['masamiosa.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['mr_pavo_real.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['octopus_bloom.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['out_of_sight.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['paisley_piggy.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['peter.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['random_talking.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['rosebud.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['royal_flamingo.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['shiny_shannon.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['sitting_buddha.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['sushi.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['take_some_pictures.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['the_elephant.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['tiberio.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['unicornicopia.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['vera.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['victor.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['vw.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['walking_in_paradise.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['you_and_me.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['you_are_awesome.jpg'],
            group: 'Prints'
          },
          {
            title: 'Prints',
            src:   images['you_are_right_where_you_should_be.jpg'],
            group: 'Prints'
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
