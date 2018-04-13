<template>
  <div>
    <!-- <h4>INDEXXXX</h4> -->
    <!-- <hero/> -->

    <section class="shop">
      <!-- <h1>Shop</h1> -->
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis velit alias, dicta voluptas, ducimus molestias et eius unde quo mollitia soluta repudiandae aliquam nulla neque error aut accusantium, pariatur earum.</p>
    </section>

    <artGrid/>

  </div>

</template>

<script>
  // import hero from '~/components/hero.vue'
  import artGrid from '~/components/artGrid.vue'
  export default {
    name: 'shop',
    layout: 'default',
    components: {
      // hero,
      artGrid,
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design – Shop'
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: 'shop'
        },
        title: this.title,
        meta: [
          {
            hid: 'Valentina Harper - Art & Design – Shop',
            name: 'Valentina Harper - Art & Design – Shop',
            content: 'Valentina Harper - Art & Design – Shop'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .shop {
    text-align: center;
    display: block;
    @include clearfix;
  }

</style>
