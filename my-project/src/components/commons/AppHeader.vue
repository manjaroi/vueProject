<template>
    <div class="touchweb_header ">
        <a href="javascript:;">
            <a @click = "$router.go(-1)"><i class="fa fa-arrow-left"></i></a>
        </a>
        <span class="hd_title hd_title_style">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name : 'app-header'
}
</script>

<style lang="scss" scoped>
    .touchweb_header{
        height: 0.51rem;
        background-color: #fff;
        color: #333;
        margin-top: 0.16rem;
        a{
            width: 20%;
            float: left;
            color: #f60;
            i{
                font-size: 0.26rem;
                line-height: 0.51rem;
                margin-left: 0.05rem;
            }
        }
        .hd_title_style{
            a{
               width: 60%;
            float: left;
            height: 100%;
            text-align: center;
            line-height: 0.51rem;
            font-size: 0.2rem; 
            }
        }
    }
</style>
