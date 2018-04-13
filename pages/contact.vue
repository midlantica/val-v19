<template>
  <div>
    <!-- <h4>INDEXXXX</h4> -->
    <!-- <hero/> -->

    <section class="contact">
      <div class="flexcontainer">
        <section>
        </section>
        <section>
          <!-- Begin myContactForm.com Form HTML -->
          <form id="contactForm" name="contactForm" method="post" action="http://www.mycontactform.com/sendform/sendform.php">
            <h2>Send an email</h2>
            <p class="emailLeft"><a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a></p>
            <div class="clearfix">
              <h3>Or simply use this form</h3> <h4><span class="asterisk">*</span>Required</h4>
            </div>

            <p class="leftClear">name<span class="asterisk">*</span></p>
            <input class="left" name="q1" type="text" id="q1" value="" size="12" maxlength="40" >

            <!--  <p>subject<span class="asterisk">*</span></p>
            <input name="subject" type="text" id="subject" size="12" maxlength="30"  required="required"> -->

            <p class="leftClear">email<span class="asterisk">*</span></p>
            <input class="left" name="email" type="email" id="email" size="12" maxlength="100" required >

            <p class="leftClear">message&nbsp;</p>
            <textarea class="left" name="q2" id="q2" cols="20" rows="5"></textarea>

              <input name="user" type="hidden" id="user" value="valentina_73">
              <input name="formid" type="hidden" id="formid" value="135001">

            <button name="submit" type="submit" value="Submit">submit</button>

              <input name="subject" type="hidden" id="subject" value="ValentinaDesign.com Contact Email" />
          </form>
          <!-- End myContactForm.com Form HTML -->
        </section>
      </div>
    </section>
  </div>

</template>

<script>
  // import hero from '~/components/hero.vue'
  import artGrid from '~/components/artGrid.vue'
  export default {
    name: 'contact',
    layout: 'default',
    components: {
      // hero,
      artGrid,
    },
    data () {
      return {
        title: 'Valentina Harper - Art & Design – Contact'
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: 'contact'
        },
        title: this.title,
        meta: [
          {
            hid: 'Valentina Harper - Art & Design – Contact',
            name: 'Valentina Harper - Art & Design – Contact',
            content: 'Valentina Harper - Art & Design – Contact'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .flexcontainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // padding: 0 15em;
    width: 80%;
    margin: 0 auto;

    section:first-of-type {
      width: 40%;
      // background: red;
      flex-grow: 1;
      // flex-shrink: 0;
      background-image: url(~assets/img/contact_bird.png);
      background-repeat: no-repeat;
      background-position: 80px 40px;
      height: 300px;
    }

    section:last-of-type {
      width: 60%;
      // background: blue;
      text-align: left;
      flex-grow: 1;
      align-self: flex-start;
      // flex-shrink: 0;
    }
  }

  $fieldMargin: 88px;

  // JUST EMAIL FORM
  #contactForm {
    margin: .75em 0 0em 0;
    @include clearfix;


    h2 {
      margin-bottom: 0;
      margin-left: $fieldMargin;
    }

    h3 {
      margin-bottom: .5em;
      margin-left: $fieldMargin;
      display: block;
      float: left;

    }

    h4 {
      float: left;
      // clear: left;
      margin: 2em 0 0 1em;
      font-size: .75em;
      font-family: Register !important;
    }

    .asterisk {
      color: red;
      margin: 0 0 0 0;
    }

    p {
      font-family: Register;
      color: $grey;
      font-size: 1em;
      letter-spacing: 0.065em;
      margin: 0 .5em 0 0;
      padding: 0;
      text-align: top;
      text-align: right;
      width: 5em;
    }

    .leftClear {
      display: block;
      float: left;
      clear: left;
    }

    .left {
      font-family: Register;
      display: block;
      float: left;
      color: $grey;
      font-size: 1em;
      letter-spacing: 0.065em;
      margin: 0 .5em 1em 0;
      padding: 0;
      text-align: top;
      text-align: left;
      display: block;
    }



    input,
    select,
    textarea {
      height: 1.7em;
      border: 1px dashed $purple;
      margin: .5em 0 1em 0;
      width: 24em;
      background-color: tint(orange, 95%);
      font-family: $copy-bold;
      color: $purple;
      font-size: 1em;
      padding: 0 0 0 .3em;
      outline: none;
      @include border-radius(6px);
    }

    textarea {
      height: initial;
      // margin-bottom: 0;
    }

    button {
      background-color: $orange;
      display: block;
      width: 80px;
      border: none;
      font-family: $copy;
      color: white;
      font-size: 1.25em;
      margin: 0em 0 0 $fieldMargin;
      letter-spacing: 0.05em;
      padding: 2px 0 2px 0;
      cursor: pointer;
      float: left;
      clear: left;
      @include border-radius(6px);
    }

    .email {
      margin: 0;
      text-align: left;

      a {
        text-decoration: none;
      }
    }

    .emailLeft {
      margin: 0;
      text-align: left;
      margin-bottom: .5em;
      margin-left: $fieldMargin;
    }
  }
  //  END EMAIL FORM

  .contact {
    text-align: center;
    display: block;
    @include clearfix;
  }



</style>
