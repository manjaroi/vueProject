<template>
    <div class="app-home-head">
       <div class="touchweb_header">
           <div class="hd_left hd_logo">
               <img src="//static.boodoll.cn/wap/v2/img/icon/logo.png" alt="">
           </div>
           <div class="hd_title hd_search">
               <span><i class="fa fa-search"></i></span>
               <input type="text" placeholder="搜索">
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name : 'AppHomeHead'
}
</script>

<style lang="scss" scoped>
    .app-home-head{
        background-color: #f60;
        width: 100%;
        height: 0.51rem;
        .hd_left{
            float: left;
            width: 0.7rem;
            img{
                width: 0.55rem;
                margin: 0.13rem 0 0 0.08rem;
            }
        }
        .hd_title{
            float: left;
            width: 2.7rem;
        }
        .hd_search{
            height: 0.32rem;
            background-color: #ff8c3c;
            margin-top: 0.1rem;
            border-radius: 0.05rem;
            input{
                height: 100%;
                width: 2.2rem;
                float: left;
                font-size: 0.13rem;
                color: #fff;
                background-color: #ff8c3c;
                border: none;
            }
            input::-webkit-input-placeholder{
                color: #fff;
            }
            span{
                float: left;
                height: 0.32rem;
                width: 0.32rem;
                text-align: center;
                border-radius: 0.02rem 0rem 0rem 0.02rem;
                i{
                    color: #fff;
                    font-size: 0.14rem;
                    line-height: 0.32rem;
                }
            }
        }
    }
</style>

