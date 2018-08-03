<template>
    <footer class="nav_menu">
        <ul>
            <li v-for="nav in navs" :key="nav.id">
                <router-link exact  :to="nav.path" class="menu" :class="[ $route.name === nav.name ? 'active' : ':' ]">
                    <dl>
                        <dt :class="nav.icon"></dt>
                        <dd>{{ nav.title }}</dd>
                    </dl>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name : 'app-nav',
    data (){
        return {
            navs : [
                { id : 1, title : '首页', icon : 'fa fa-home fa-2x', path : '/', name : 'home' },
                { id : 2, title : '分类', icon : 'fa fa-rocket fa-2x', path : '/classify', name : 'classify' },
                { id : 3, title : '购物车', icon : 'fa fa-shopping-cart fa-2x', path : '/shoppingCar', name : 'ShoppingCar' },
                { id : 4, title : '账户', icon : 'fa fa-gift fa-2x', path : '/account', name : 'Account' },
            ]
        }
    },
    mounted (){
        
    }
}
</script>

<style lang="scss" scoped>
    .nav_menu{
        width: 100%;
        height: 0.52rem;
        border-top: 0.01rem solid #d2d2d2;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        ul li {
            color: #82737A;
            float: left;
            width: 25%;
            text-align: center;
            margin-top: 0.04rem;
        }
        dt{
            width: 0.28rem;
            height: 0.28rem;
            margin: 0 auto;
        }
        .active{
            color: #f60;
        }
    }
</style>
