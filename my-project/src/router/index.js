
import Vue  from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import ShoppingCar from '../components/pages/ShoppingCar/ShoppingCar'
import Account from '../components/pages/Account/Account'
import GoodsList from '../components/pages/GoodsList/goodslist.vue'
import Login from '../components/pages/Login/Login'


import store from '../store'


// 路由 表
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/classify', name: 'classify', component: Classify},
    { path: '/ShoppingCar', name: 'ShoppingCar', component: ShoppingCar },
    { path: '/Account', name: 'Account', component: Account },
    { path: '/goodslist', name: 'goodslist', component: GoodsList },
    { path : '/Login', name : 'path', component : Login }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


//全局路由守卫

let need_user_state = [ 'Account' ]

router.beforeEach((to, from ,next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    if ( need_us && !store.state.commons.user_state ) {
        next('/Login');return false;
    }
    next();
})

export default router