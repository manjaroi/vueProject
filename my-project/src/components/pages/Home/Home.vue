<template>
    <div id="app-hone" class="page">
        <app-home-head></app-home-head>
        <app-home-banner></app-home-banner>
        <app-notice></app-notice>
    </div>
</template>

<script>
import AppHomeBanner from './HomeBanner';
import AppHomeHead from './HomeHead';
import AppNotice from './HomeNotice';
 
export default {
    name : 'AppHome',
    components : {
        AppHomeBanner,
        AppHomeHead,
        AppNotice
    }
}
</script>

// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    
</style>


