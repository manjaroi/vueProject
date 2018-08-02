<template>
    <div class="notice">
        <span>公告</span>
        <div 
        v-for = " notice in notices"
        :key = " notice.DataId "
        class="aNtice">
            <span>{{ notice.Title }}</span>
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

</style>
