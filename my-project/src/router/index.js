
import Vue  from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import ShoppingCar from '../components/pages/ShoppingCar/ShoppingCar'
import Account from '../components/pages/Account/Account'
import GoodsList from '../components/pages/GoodsList/goodslist.vue'

// 路由 表
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/classify', name: 'classify', component: Classify },
    { path: '/ShoppingCar', name: 'ShoppingCar', component: ShoppingCar },
    { path: '/Account', name: 'Account', component: Account },
    { path: '/goodslist', name: 'goodslist', component: GoodsList }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router