<template>
  <div>
    <!-- <h4>INDEXXXX</h4> -->
    <!-- <hero/> -->

    <section class="artBio">
      <h1>Valentina's Bio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis velit alias, dicta voluptas, ducimus molestias et eius unde quo mollitia soluta repudiandae aliquam nulla neque error aut accusantium, pariatur earum.</p>
    </section>

    <!-- <artGrid/>
    <bioShort/> -->

  </div>

</template>

<script>
  // import hero from '~/components/hero.vue'
  import artGrid from '~/components/artGrid.vue'
  export default {
    name: 'artistBio',
    layout: 'default',
    components: {
      // hero,
      artGrid,
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design – Biography'
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: 'artBio'
        },
        title: this.title,
        meta: [
          {
            hid: 'Valentina Harper - Art & Design – Biography',
            name: 'Valentina Harper - Art & Design – Biography',
            content: 'Valentina Harper - Art & Design – Biography'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .artBio {
    text-align: center;
    display: block;
    @include clearfix;
  }

</style>
