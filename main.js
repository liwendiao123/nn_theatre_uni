import Vue from 'vue'
import App from './App'
import DB from './db/db.js'
import CODE from './db/code.js'
import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'

import mIcon from '@/components/m-icon/m-icon.vue' //图标
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniIcon from '@/components/uni-icon/uni-icon.vue'

Vue.component('uni-list-item', uniListItem)
Vue.component('m-icon', mIcon)
Vue.component('uni-icon', uniIcon)


import newsItem from '@/components/1_news_item/1_news_item.vue' //新闻节点
import login from '@/components/2_login/2_login.vue' //登陆
import btnNext from '@/components/3_btn_next/3_btn_next.vue' //下一步按钮
import signForm from '@/components/4_sign_form/4_sign_form.vue' //下一步按钮
import signCussess from '@/components/5_sign_success/5_sign_success.vue' //下一步按钮
import timeLine from '@/components/6_time_line/6_time_line.vue' //下一步按钮
import voteLine from '@/components/7_vote_line/7_vote_line' //下一步按钮



Vue.component('news-item', newsItem)
Vue.component('login', login)
Vue.component('btn-next', btnNext)
Vue.component('sign-form', signForm)
Vue.component('sign-success', signCussess)
Vue.component('time-line', timeLine)
Vue.component('vote-line', voteLine)


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



// "navigationBarBackgroundColor":"#ffffff",
// "navigationBarTextStyle": "black",