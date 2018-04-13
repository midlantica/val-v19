<template>
  <div>
    <!-- <h4>INDEXXXX</h4> -->
    <!-- <hero/> -->

    <!-- <section class="gallery"> -->
      <!-- <h1>Gallery</h1> -->
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis velit alias, dicta voluptas, ducimus molestias et eius unde quo mollitia soluta repudiandae aliquam nulla neque error aut accusantium, pariatur earum.</p> -->
    <!-- </section> -->

    <portfolio/>

  </div>

</template>

<script>
  // import hero from '~/components/hero.vue'
  import portfolio from '~/components/portfolio.vue'
  export default {
    name: 'gallery',
    layout: 'default',
    components: {
      portfolio
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design – gallery'
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
            hid: 'Valentina Harper - Art & Design – Gallery',
            name: 'Valentina Harper - Art & Design – Gallery',
            content: 'Valentina Harper - Art & Design – Gallery'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

</style>
