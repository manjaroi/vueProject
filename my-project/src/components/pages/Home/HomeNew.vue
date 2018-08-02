<template>
    <div class="newcustomer">
        <div  
        v-for = " a in news"
        :key = " a.DataId "
        class="new">
            <img :src="a.SmallPic" alt="">
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name : 'app-home-new',
    data (){
        return{
            news : [],
            key : 'A-307'
        }
    },
    methods : {
        getNew (){
            this.$http.post('/my/Home/GetHomeAdModuleDataList',{ adkey : this.key }).then(res => {
                this.news = res.data.DataList;
            })
        }
    },
    mounted (){
        this.getNew()
    }    
}
</script>

<style lang="scss" scoped>
    .newcustomer{
        overflow: hidden;
        width: 100%;
        height: 1.56rem;
        margin-top: 0.11rem;
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
