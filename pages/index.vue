<template>
  <div>
    <!-- <h4>INDEXXXX</h4> -->
    <hero/>
    <section class="mid">
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      <p>Dolor iusto, nam, quibusdam quos nemo est autem inventore natus consequuntur ea maiores repudiandae, fugit, culpa voluptatibus delectus adipisci nisi. Iure, amet! Ullam iste quas reiciendis nisi fugit, suscipit numquam.</p>
    </section>
    <artGrid/>
    <bioShort/>
    <section class="instagram">
      <h1>Instagram??</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis velit alias, dicta voluptas, ducimus molestias et eius unde quo mollitia soluta repudiandae aliquam nulla neque error aut accusantium, pariatur earum.</p>
    </section>

  </div>

</template>

<script>
  import hero from '~/components/hero.vue'
  import artGrid from '~/components/artGrid.vue'
  import bioShort from '~/components/bioShort.vue'
  export default {
    name: 'index',
    layout: 'default',
    components: {
      hero,
      artGrid,
      bioShort
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design'
      }
    },
    head () {
      return {
        title: this.title,
        bodyAttrs: {
          class: 'index'
        },
        meta: [
          {
            hid: 'Valentina Harper - Art & Design',
            name: 'Valentina Harper - Art & Design',
            content: 'Valentina Harper - Art & Design'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .mid,
  .instagram {
    text-align: center;
    display: block;
    @include clearfix;
  }

</style>
