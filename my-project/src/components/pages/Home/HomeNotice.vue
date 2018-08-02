<template>
    <div class="notice">
        <span class="tips_notice">公告</span>
        <div 
        v-for = " notice in notices"
        :key = " notice.DataId "
        class="aNtice">
            <span class="careful">{{ notice.Title }}</span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name : 'AppNotice',
    data() {
        return {
            notices : [],
            key : 'A-216'
        }
    },
    methods : {
        getNotice (){
            this.$http.post('/my/Home/GetHomeAdModuleDataList',{ adkey: this.key }).then(res => {
                this.notices = res.data.DataList;
            })
        }
    },
    created (){
        this.getNotice();
    }
}
</script>

<style lang="scss" scoped>
    .notice{
        width: 100%;
        height: 0.31rem;
        line-height: 0.31rem;
        background-color: #fff;
        text-align: left;
        overflow: hidden;
        .tips_notice{
            float: left;
            height: 0.20rem;
            width: 0.30rem;
            border: 0.01rem solid #f60;
            margin: 0.05rem 0.05rem 0;
            padding: 0.05rem 0.02rem 0 0.03rem;
            font-size: 0.11rem;
            color: #f60;
            border-radius: 0.02rem;
            line-height: 0.07rem;
        }
        .aNtice{
            position: relative;
            float: left;
            height: 0.31rem;
            font-size: 0.12rem;
            font-family: Arial, Helvetica, sans-serif;
            overflow: hidden;
        }
        .careful{
            margin-left: 0.10rem;
            font-size: 0.12rem;
            color: #aaa;
            font-weight: bold;
        }
    }
</style>
