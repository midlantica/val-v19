
import Vue from 'vue'
import vLightbox from 'vLightbox'

const vLightboxVar = {
  install(Vue, options) {
    Vue.component('vLightbox', vLightbox)
  }
}

Vue.use('vLightbox')
export default vLightbox
