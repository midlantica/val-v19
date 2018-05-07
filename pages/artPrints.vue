<template>
  <section>
    <!-- <portfolio class="clearfix"/> -->
    <ul>
      <li><a href="artOriginals">Originals</a></li>
      <li><a href="artPrints">Prints</a></li>
      <li><a href="artPatterns">Patterns</a></li>
    </ul>

    <!-- <artOriginal/> -->
    <artDigital/>
    <!-- <artPatterns/> -->

  </section>
</template>

<script>
  // import hero from '~/components/hero.vue'
  // import portfolio from '~/components/portfolio.vue'
  // import artOriginal from '~/components/artOriginal.vue'
  import artDigital from '~/components/artDigital.vue'
  // import artPatterns from '~/components/artPatterns.vue'
  export default {
    name: 'Prints',
    layout: 'default',
    components: {
      // portfolio,
      // artOriginal
      artDigital
      // artPatterns
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design – Gallery - Original Art'
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: 'gallery'
        },
        title: this.title,
        meta: [
          {
            hid: 'Valentina Harper - Art & Design – Gallery Prints',
            name: 'Valentina Harper - Art & Design – Gallery Prints',
            content: 'Valentina Harper - Art & Design – Gallery Prints'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  section {
    //
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      font-family: $copy-bold;
      li {
        list-style: none;
        // padding: 0 1em 0 0;
        margin: 0 1em 0 0;

        a {
          color: $greyLighter;
          display: block;
          padding: 1rem 2rem;
          font-size: 0.85rem;
          max-width: 140px;
          text-decoration: none;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: lighten($black, 60) 0px 0px 1px;

          &:hover,
          &:focus {
            background: none;
            // background: $white;
            color: $purple;
            // color: $black;
            svg {
              // fill: green;
            }
            span {
              // color: black;
            }
          }
        }
      }
    }
  }
</style>



