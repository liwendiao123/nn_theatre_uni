import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'


import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
Vue.component('uni-list-item', uniListItem)


Vue.config.productionTip = false
Vue.prototype.$db = DB;
Vue.prototype.$CODE = CODE;

// 公共组件
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
