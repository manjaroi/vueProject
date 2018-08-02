<template>
    <div class="nav">
        <ul >
            <li v-for="nav in navs" :key="nav.DataId">
                <dl>
                    <dt>
                        <img :src="nav.SmallPic" alt="">
                    </dt>
                    <dd>{{ nav.Title }}</dd>
                </dl>
            </li>
        </ul>
    </div>
</template>


<script>
import Vue from 'vue';

export default {
    name : 'AppHomeNav',
    data (){
        return {
            navs : [],
            key : 'A-302'
        }
    },
    methods : {
        getNav(){
            this.$http.post('/my/Home/GetHomeAdModuleDataList', { adkey : this.key }).then(res => {
                this.navs = res.data.DataList;
            })
        }
    },
    created(){
        this.getNav();
    }
}
</script>


<style lang="scss" scoped>
    .nav{
        height: 0.86rem;
        line-height: 0.2rem;
        background-color: #fff;
        ul li {
            float: left;
            width: 25%;
            text-align: center;
            margin-top: 0.13rem;
            font-size: 0.11rem;
        }
        ul li img{
            width: 0.33rem;
            height: 0.33rem;
            margin: 0 auto;
        }
        ul li dd{
            margin-top: 0.1rem;
        }
        ul li:nth-child(1){
            color: #e7507b;
        }
        ul li:nth-child(2){
            color: #9A6AD1;;
        }
        ul li:nth-child(3){
            color: #009ADC;
        }
        ul li:nth-child(4){
            color: #f60;
        }
    }

</style>
