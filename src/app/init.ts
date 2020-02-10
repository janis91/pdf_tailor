import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { App } from '@a/App.ts'
import View from '@a/App.vue'
import StoreConfig from '@a/store/Store'

Vue.use(Vuex)
Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC
Vue.prototype.OCA = OCA

const TailorView = document.createElement('div')
TailorView.id = 'tailor-view'
document.body.appendChild(TailorView)

// Init TailorService
let initCounter = 0
const interval = setInterval(() => {
  if (typeof t === 'function' && typeof n === 'function' && typeof OC?.Notification?.showHtml === 'function' &&
            typeof OCA?.Files?.App?.fileList?.getCurrentDirectory === 'function' &&
            typeof OCA?.Files?.App?.fileList?.filesClient?.putFileContents === 'function') {
    const store = new Store(StoreConfig)
    Object.assign(OCA, {
      Tailor: {
        app: new App(),
        view: new Vue({
          el: '#tailor-view',
          name: 'TailorView',
          render: h => h(View),
          store
        }),
        store
      }
    })
    OCA.Tailor.app.init()
    clearInterval(interval)
  } else if (initCounter === 50) {
    // eslint-disable-next-line no-console
    console.error('PDF Tailor could not be initialized. Some of the required resources (OC, OCA, etc.) did not load in time.')
    clearInterval(interval)
  }
  initCounter++
}, 100)
