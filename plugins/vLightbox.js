import Vue from 'vue'
import lightbox from 'vlightbox'
Vue.use('lightbox', {name: 'vlightbox'})

if (process.BROWSER_BUILD) {
  Vue.use(lightbox, {name: 'vlightbox'})
}

console.log('plugin vlightbox is locked and loaded')
