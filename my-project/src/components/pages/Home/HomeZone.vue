<template>
    <div class="homezone">
        <div 
        v-for="zone in zones"
        :key="zone.DataId"
        class="homezone_con">
            <a href="">
                <img :src="zone.SmallPic" alt="">
            </a>
        </div>
    </div>    
</template>

<script>
import Vue from 'vue';

export default {
    name : 'app-home-zone',
    data (){
        return {
            zones : [],
            key : 'A-207'
        }
    },
    methods : {
        getZone(){
            this.$http.post('/my/Home/GetHomeAdModuleDataList', { adkey : this.key }).then(res => {
                this.zones = res.data.DataList;
            })
        }
    },
    created(){
        this.getZone();
    }    
}
</script>

<style lang="scss" scoped>
    .homezone{
        overflow: hidden;
        width: 100%;
        height: 0.77rem;
        margin-bottom: 0.11rem;
        .homezone_con{
            float: left;
            width: 1.86rem;
            height: 0.77rem;
            border-top: 0.01rem solid #f3f3f3;
        }
        .homezone_con:nth-child(2n-1){
            border-right: 0.01rem solid #f3f3f3;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
