<template>
    <div ref = "el" class="app-home-banner swiper-container">
        <div class="swiper-wrapper">
            <div 
                v-for = " banner in banners"
                :key = " banner.DataId "
                class="swiper-slide loading-img">
                <img :src="banner.SmallPic | formatImage" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>


<script>
import Vue from 'vue';
import Swiper from 'swiper';
export default {
    name : 'AppHomeBanner',
    data  (){
        return {
            banners : [],
            key : 'A-200I'
        }
    },
    methods : {
        getBanners (){
            this.$http.post('/my/Home/GetHomeAdModuleDataList', { adkey : this.key }).then(res => {
                this.banners = res.data.DataList;
                Vue.nextTick(() => {
                    new Swiper(this.$refs.el, {
                        pagination : {
                            el: '.swiper-pagination'
                        },
                        effect: 'cube',
                        autoplay: true,
                        speed:1000,
                          autoplay : {
                            delay:2000
                        },
                        grabCursor: true,
                        cubeEffect: {
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        },
                        loop : true 
                    })
                })
            })
        }
    },
    created (){
        this.getBanners();
    }
}
</script>

<style lang = "scss">
    .app-home-banner {
        width: 100%;
        overflow: hidden;
        position: relative;
        perspective: 15000px;
        .swiper-wrapper{
            width: 100%;
            height: 1.75rem;
        }
        .swiper-slide{
            img{width: 100%;}
        }
        .swiper-pagination  {
            .swiper-pagination-bullet {
                width: 5px; height: 5px;
            }
            .swiper-pagination-bullet-active {
                background: #f40;
            }
        }
    }
</style>
