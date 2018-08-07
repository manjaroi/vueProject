<template>
    <div class="classify touchweb_content">
        <div class="left_menu">
            <ul>
                <li 
                v-for="(item,idx) in result" 
                :key="idx" 
                @click="[clickId(item.ProductCategoryId), index == idx]" 
                :data-num="item.ProductCategoryId"
                >
                    <a href="javascript:;">
                        {{ item.ProductCategoryName }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="right_menu" v-if="!isShow">
            <div class="list_content">
                <div class="list_title" v-for="(item,i) in result1" :key="i">
                    <span>{{ item.ProductCategoryName }}</span>
                    <div>
                        <ul>
                            <li class="list_nav" v-for="list in result1[i].PcList" 
                            :key="list.id" 
                            :data-list="list.ParentId">
                                <dl>
                                    <dt>
                                        <img :src="list.VchCatePic" alt="">
                                    </dt>
                                    <dd>
                                        {{ list.ProductCategoryName }}
                                    </dd>
                                </dl> 
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
        <div class="right_menu" v-else>
            <div class="list_content">
                <div class="list_title" v-for="(item,i) in result4.PcList" :key="i">
                    <span>{{ item.ProductCategoryName }}</span>
                    <div>
                        <ul>
                            <li class="list_nav" v-for="list in result4.PcList[i].PcList" 
                            :key="list.id" 
                            :data-list="list.ParentId">
                                <dl>
                                    <dt>
                                        <img :src="list.VchCatePic" alt="">
                                    </dt>
                                    <dd>
                                        {{ list.VchMobileShowName }}
                                    </dd>
                                </dl> 
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name : 'app-classify-item',
    data() {
        return {
            list: [],
            arr: [],
            num : [],
            sort : [],
            result : [],
            result1 : [],
            result2 : [],
            result3 : [],
            result4 : [],
            num1 : 0,
            index : 0,
            isShow : true
        };
    },
    methods: {
        getClassify() {
        this.$http.post("/list/json/reply/QueryCategoryListReq", {
            UserId: 0,
            SourceTypeSysNo: 2
        }).then(res => {
                this.list = res.data.CategoryList;
                for(let i = 0;i < this.list.length;i ++){
                    this.num.push(this.list[i].SortNo)
                };
                this.sort = this.num.sort(sortNumber);
                for(let i = 0;i < this.sort.length;i ++){
                    for(let j = 0;j < this.sort.length;j ++){
                        if (this.list[j].SortNo == this.sort[i]){
                            this.result.push(this.list[j]);
                        }
                    }             
                }
                this.result4 = this.result[0];
            });
        },
        clickId (ProductCategoryId){
            this.isShow = false;
            let id = ProductCategoryId;
            for(let i = 0;i < this.list.length;i ++){
                if (this.list[i].ProductCategoryId == id){
                    this.index = i;
                    this.arr = this.list[i];
                    this.result1 = this.arr.PcList;
                    for(let i = 0;i < this.result1.length;i ++){
                        this.result2.push(this.result1[i].PcList);
                        this.result3 = this.result3.concat(this.result2[i])
                    }
                }
            }
        }
    },
    computed: {
        change (){
           this.result3 = []; 
        }
    },
    mounted (){
        this.getClassify();
    }
    
};
function sortNumber(a,b){
    return a-b
}
</script>

<style lang="scss" scoped>
    .classify{
        position: fixed;
        background-color: #fff;
        height: 5.6rem;
        margin: 0 0 0.58rem 0;
        .left_menu{
            float: left;
            width: 0.94rem;
            background-color: #f3f3f3;
            overflow-y: scroll;
            height: 100%;
            padding-right: 0.01rem;
            ul li {
                width: 100%;
                float: left;
                height: 0.58rem;
                text-align: center;
                position: relative;
                line-height: 0.58rem;
                font-size: 0.12rem;
            }
        }
        .right_menu{
            width: 2.78rem;
            float: right;
            overflow-y: scroll;
            height: 100%;
            .list_content{
                width: 2.8rem;
                padding: 0.14rem;
                height: 100%;
                overflow-x: hidden;
                color: #82737A;
                .list_title{
                    width: 100%;
                    float: left;
                    line-height: 0.37rem;
                    span{
                        font-size: 0.12rem;
                        padding-left: 0.05rem;
                        border-left: 0.03rem solid #f60;
                    }
                }
                .list_nav{
                    line-height: 0.21rem;
                    background-color: #fff;
                    width: 100%;
                    margin: 0 0.2rem;
                    dl{
                        float: left;
                        width: 0.8rem;
                        height: 0.8rem;
                        dd{
                            font-size: 0.12rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }
                    img{
                        width: 0.58rem;
                        height: 0.58rem;
                    }
                    ul li {
                        float: left;
                        width: 33.3%;
                        text-align: center;
                        margin-bottom: 0.21rem;
                    }
                }
            }
        }
        .active {
            color: #f60;
            background-color: #fff;
        }
    }
    
</style>
