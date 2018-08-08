<template>
    <div class="today loadmore-wrapper">
        <div class="TP_title">
            <h2>
                <span>今日专场</span>
            </h2>
        </div>
        <div class="pd_list">
            <loadmore
            ref="loadmore">
                <ul class="loadmore-list">
                    <li v-for="item in list" :key="item.id" class="loadmore-item loading-img">
                        <div class="img_info">
                            <img :src="item.PictureUrl" alt="">
                            <div class="SurplusTime">
                                <span>
                                    <img src="//static.boodoll.cn/wap/v2/img/icon/h-time.png" alt="">
                                </span>
                                <span></span>
                            </div>
                        </div>
                        <div class="text-info">
                            <span>{{ item.SubjectName }}</span>
                            <span>{{ item.OriDiscount }}</span>
                        </div>
                    </li>
                </ul>
            </loadmore>
        </div>
        <div class="TP_title" v-if="next">
            <h2>
                <span>精选爆款</span>
            </h2>
        </div>
        <div v-else></div>
        <div class="pd_list">
            <loadmore
            ref="loadmore">
                <ul class="loadmore-list">
                    <li v-for="item in product" :key="item.id" class="loadmore-item loading-img">
                        <div class="img_info">
                            <img :src="item.PictureUrl" alt="">
                            <div class="SurplusTime">
                                <span>
                                    <img src="//static.boodoll.cn/wap/v2/img/icon/h-time.png" alt="">
                                </span>
                                <span></span>
                            </div>
                        </div>
                        <div class="text-info">
                            <span>{{ item.ProductName }}</span>
                            <span>￥{{ item.OriginalPrice }}</span>
                        </div>
                    </li>
                </ul>
                <div class="loading_next_page">
                    <div></div>
                    <a>正在努力加载....</a>
                </div>
                <div class="loading_next_page"></div>
            </loadmore>
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
import vueLoading from 'vue-loading-template';


let goods = [];
let arr = [];
let hot = [];
let sum;
export default {
    name : 'app-home-today',
    data (){
        return {
            list : [],
            product : [],
            bottomStatus : '',
            bottomAllLoaded : false,
            idx : 1,
            num : 0,
            status : true,
            next : false,
            isLoading : false,
            tiem : 0
        }
    },
    methods : {
        getList(i){
            this.isLoading = true;
            this.$http.post('/list/json/reply/QueryHotProductSpecialPageListTrans', { 
                ApplyPlace: 9,
                PageIndex : i,
                PageSize: 5,
                UserId: '',
                Guid: '',
                AreaSysNo: '',
                ChannelID: '',
                ClientIp: '',
                DisplayLabel: ["8"],
                SourceTypeSysNo: 2,
                ExtensionSysNo: [0]
             }).then(res => {
                this.loading = false;
                goods = res.data.QueryHotProductSpecialListDtos;
                for(let i = 0;i < goods.length;i ++){
                    this.list.push(goods[i]);
                }
                sum = res.data.Sum;
             })
        },
        loading (i){
            // 缓存指针
            let _this = this;
            // 设置一个开关来避免重负请求数据
            let sw = true;
            // 此处使用node做了代理
            _this.$http.post('/list/json/reply/QueryHotProductSpecialPageListTrans',{ 
                ApplyPlace: 9,
                PageIndex : i,
                PageSize: 5,
                UserId: '',
                Guid: '',
                AreaSysNo: '',
                ChannelID: '',
                ClientIp: '',
                DisplayLabel: ["8"],
                SourceTypeSysNo: 2,
                ExtensionSysNo: [0]
            }).then(function(res){
                    arr = res.data.QueryHotProductSpecialListDtos;
                    for(let i = 0;i < arr.length;i ++){
                        _this.list.push(arr[i]);
                    }
                    // console.log(JSON.parse(response.data).stories);
                    // 将得到的数据放到vue中的data
                    _this.articles = _this.list;
                })
                .catch(function(error){
                    console.log(error);
                });

            // 注册scroll事件并监听
            window.addEventListener('scroll',function(){
                // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
                // console.log(document.body.scrollTop); // 滚动高度
                // console.log(document.body.offsetHeight); // 文档高度
                // 判断是否滚动到底部
                if(document.documentElement.scrollTop + window.innerHeight + 1>= document.body.offsetHeight) {
                    // console.log(sw);
                    // 如果开关打开则加载数据
                    if(sw==true){
                        // 将开关关闭
                        sw = false;
                        setTimeout(() => {
                            _this.idx ++;
                            _this.getList(_this.idx);  
                        },1000);
                        sw = true; 
                        if(arr.length * _this.idx > sum){
                            sw = false;
                            _this.status = false;
                            if( !this.status ){
                                sw = true;
                                _this.next = true;
                                _this.num ++;
                                let num = _this.num;
                                function getHotProduct (num){
                                    _this.$http.post('/list/json/reply/QueryHotProductPageList', {
                                        PageIndex: num,
                                        PageSize: 5,
                                        SourceTypeSysNo: 2,
                                        ApplyPlace: 9
                                    }).then((res) => {
                                        hot = res.data.QueryHotProductListDtos;
                                        for(let i = 0;i < hot.length;i ++){
                                            _this.product.push(hot[i]);
                                        }
                                    })
                                };
                                getHotProduct(num);
                            }  
                        }
                    }
                }
            })
        },
        loadBottom (){
            setTimeout(() => {
                let lastValue = this.list.length;
                console.log(lastValue);

                console.log(this.list.length);
                if (this.list.length === sum)this.bottomAllLoaded = true;

                this.$refs.loadmore.onBottomLoaded();

                this.idx ++;
                this.getList(this.idx);
                
                
            },1500)

        },

    },
    computed : {
        
    },
    mounted(){
        if ( this.isLoading ) return false;
        this.loading();

    },
    beforeCreate(){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    },
    created(){
       
    },
    updated(){

    }
}
</script>


<style lang="scss" scoped>
    .today{
        .TP_title{
            text-align: center;
            height: 0.43rem;
            h2{
                line-height: 0.43rem;
                height: 0.21rem;
                width: 1.64rem;
                margin: 0 auto;
                border-bottom: 0.01rem solid #d2d2d2;
                span{
                    font-size: 0.16rem;
                    background-color: #f3f3f3;
                    color: #82737A;
                    padding: 0.09rem 0.11rem;
                }
            }
        }
        .pd_list{
            li{
                width: 3.59rem;
                height: 2.06rem;
                margin: 0 auto;
                margin-top: 0.09rem;
                margin-bottom: 0.09rem;
                background-color: #fff;
                box-shadow: 0px 2px 4px rgba(0,0,0,0.35);
                .img_info{
                    width: 3.59rem;
                    height: 1.68rem;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .SurplusTime{
                        width: 0.71rem;
                        height: 0.21rem;
                        background-color: #000;
                        opacity: 0.5;
                        border-radius: 1.5rem 0rem 0rem 0rem;
                        position: absolute;
                        float: right;
                        right: 0;
                        bottom: 0;
                        span{
                            float: left;
                            color: #fff;
                            font-size: 0.12rem;
                            line-height: 0.21rem;
                            img{
                                width: 0.17rem;
                                height: 0.17rem;
                                margin-left: 0.05rem;
                                margin-top: 0.02rem;
                            }
                        }
                    }
                }
                .text-info{
                    width: 3.59rem;
                    line-height: 0.4rem;
                    span:nth-child(1){
                        width: 70%;
                        text-align: left;
                        float: left;
                        font-size: 0.14rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-left: 0.11rem;
                    }
                    span:nth-child(2){
                        width: 21%;
                        text-align: right;
                        float: left;
                        padding-left: 2%;
                        color: red;
                        font-size: 0.14rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-left: 0.11rem;
                    }
                }
            }
        }
        
    }
    .loading_next_page {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        text-align: center;
        color: #82737A;
    }
</style>
