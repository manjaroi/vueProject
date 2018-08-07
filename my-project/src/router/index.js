
import Vue  from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import ShoppingCar from '../components/pages/ShoppingCar/ShoppingCar'
import Account from '../components/pages/Account/Account'
import GoodsList from '../components/pages/GoodsList/GoodsList.vue'
import Goods from '../components/pages/Goods/Goods.vue'
import Regist from '../components/pages/Regist/Regist.vue'

// 路由 表
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/classify', name: 'classify', component: Classify },
    { path: '/ShoppingCar', name: 'ShoppingCar', component: ShoppingCar },
    { path: '/Account', name: 'Account', component: Account },
    { path: '/goodslist', name: 'goodslist', component: GoodsList },
    { path: '/goods/:id', name: 'goods', component: Goods },
    { path: '/regist', name: 'goods', component: Regist },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})

// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// });

export default router