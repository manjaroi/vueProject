<template>
    <div class="app-home-banner swiper-container">
        123
    </div>
</template>


<script>
import Vue from 'vue';
import Swiper from 'swiper';
export default {
    name : 'AppHomeBanner',
    data  (){
        return {
            banners : []
        }
    },
    methods : {
        getBanners (){
            this.$http.get('/my/napi/mbanner/', {
                // parmas : {
                //     app_code: 'mdt'
                // }
            }).then(res => {
                console.log(res);
            })
        }
    },
    created (){
        this.getBanners();
    }
}
</script>
