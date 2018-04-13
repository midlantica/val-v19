<!-- navvy.vue -->
<template>
  <div class="navvyArea">
    <div class="logoArea">
      <div class="valentinaLogo"></div>
      <!-- <h2>Valentina Harper</h2> -->
      <!-- <h4>Art & Design</h4> -->
    </div>
    <nav>
      <ul>
        <li class="indexBtn">
          <a href="/">Home
          </a>
        </li>
        <li class="galleryBtn">
          <a href="gallery">Gallery
          </a>
        </li>
        <li class="shopBtn">
          <a href="shop">Shop
          </a>
        </li>
        <li class="contactBtn">
          <a href="contact">Contact
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  // import '~/components/svgs.svg'
  // export default {
  //   components: {
  //     valLogo
  //   }
  // }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .navvyArea {
    // background: pink;
    margin: 1.5em auto 0em;
    // @include clearfix;
    // line-height: 0;
  }

  .valentinaLogo {
    background: url(~assets/img/valentina_logo.svg);
    display: block;
    background-repeat: no-repeat;
    background-size: 218px 85px;
    width: 218px;
    height: 85px;
    text-align: center;
    margin: 0em auto;
    // fill: red;
  }

  .logoArea {
    margin: 0;
    padding: 0em 0em 1em;
    text-align: center;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    list-style: none;
    // flex-direction: column;

    h2 {
      margin: 0 auto;
      display: block;
      // align-self: flex-start;
      // flex-shrink: 1;
    }

    h4 {
      margin: 0 auto;
      display: block;
      // align-self: flex-end;
      // flex-shrink: 1;
    }

  }

  nav {
    // background: green;
    // font-family: RegisterBold:
    margin-bottom: 0em;
    @include clearfix;
    //
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      list-style: none;
      font-family: RegisterBold;

      li {
        //
        &.indexBtn,
        &.galleryBtn,
        &.shopBtn,
        &.contactBtn {
          color: lighten($black, 60);
          line-height: 0;
          @include clearfix;

          a {
            color: $greyLighter;
            display: block;
            padding: 1rem 2rem;
            font-size: 1rem;
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
  }

  body.index nav ul li.indexBtn a {
    color: $purple;
    text-shadow: darken($purple, 20) 0px 0px 1px;
    // background: beige;
  }

  body.contact nav ul li.contactBtn a {
    color: $purple;
    text-shadow: darken($purple, 20) 0px 0px 1px;
    // background: beige;
  }

  body.gallery nav ul li.galleryBtn a {
    color: $purple;
    text-shadow: darken($purple, 20) 0px 0px 1px;
    // background: beige;
  }

  body.shop nav ul li.shopBtn a {
    color: $purple;
    text-shadow: darken($purple, 20) 0px 0px 1px;
    // background: beige;
  }

</style>
