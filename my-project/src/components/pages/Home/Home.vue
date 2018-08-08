<template>
    <div id="app-hone" class="page">
        <app-home-head></app-home-head>
        <app-home-banner></app-home-banner>
        <app-notice></app-notice>
        <app-home-nav></app-home-nav>
        <app-home-new></app-home-new>
        <app-home-activity></app-home-activity>
        <app-home-zone></app-home-zone>
        <app-home-today></app-home-today>
        <app-nav></app-nav>
        <app-mask></app-mask>
    </div>
</template>

<script>
import AppHomeBanner from './HomeBanner';
import AppNotice from './HomeNotice';
import AppHomeNav from './HomeNav';
import AppHomeNew from './HomeNew';
import AppHomeActivity from './HomeActivity';
import AppHomeZone from './HomeZone';
import AppHomeToday from './HomeToday';

 
export default {
    name : 'AppHome',
    data (){
        return {
            loading : true
        }
    },
    components : {
        AppHomeBanner,
        AppNotice,
        AppHomeNav,
        AppHomeNew,
        AppHomeActivity,
        AppHomeZone,
        AppHomeToday
    },
    mounted (){
        // this.loading = false;
        // console.log(this.loading);
    },
    destroyed (){
        // this.loading = false;
        // console.log(this.loading);
    }

}
</script>

// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    
</style>


