import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'

Vue.config.productionTip = false
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
