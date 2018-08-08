import Vue from 'vue'
import AppNav from './Nav.vue'
import AppListHeader from './ListHeader.vue'
import AppListBottom from './ListBottom.vue'
import AppToTop from './ToTop.vue'

Vue.component('app-nav', AppNav)
Vue.component('app-list-header', AppListHeader)
Vue.component('app-list-bottom', AppListBottom)
Vue.component('app-to-top', AppToTop)
import AppMask from './Mask.vue'
import AppHomeHead from './HomeHead'
import categoryList from './CategoryList'
import appHeader from './AppHeader'

Vue.component('app-nav', AppNav)
Vue.component('app-mask', AppMask)
Vue.component('app-home-head', AppHomeHead)
Vue.component('category-list', categoryList)
Vue.component('app-header', appHeader)
