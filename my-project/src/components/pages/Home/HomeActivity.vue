<template>
    <div class="today_activity">
        <div 
        v-for="activity in activitys"
        :key="activity.DataId"
        class="today_list_item">
            <a>
                <img :src="activity.SmallPic" alt="">
            </a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name : 'AppHomeActivity',
    data (){
        return {
            activitys : [],
            key : 'A-308'
        }
    },
    methods : {
        getActivity (){
            this.$http.post('/my/Home/GetHomeAdModuleDataList', { adkey : this.key }).then(res => {
                this.activitys = res.data.DataList
            })
        }
    },
    created (){
        this.getActivity();
    }
}
</script>

<style lang="scss" scoped>
    .today_activity{
        overflow: hidden;
        width: 100%;
        height: 1.35rem;
        background-color: #fff;
        .today_list_item {
            float: left;
            height: 1.35rem;
            width: 1.23rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
