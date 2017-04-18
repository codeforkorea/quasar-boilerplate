// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// noinspection JSUnresolvedFunction, JSUnresolvedVariable
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar-framework'
import router from 'src/router'
import 'src/modules/Common/Fields'

Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  /* eslint-disable no-new */
  // noinspection JSUnresolvedFunction
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
