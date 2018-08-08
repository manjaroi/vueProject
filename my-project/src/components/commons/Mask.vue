<template>
    <div class="web_mask" v-show="replace">
        <div class="loading">
            <div class="gif_img"></div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'app-mask',  
    props : {
        show : {
            type : Boolean,
            default :false
        },
        message : {
            type : String,
            default : 'loading'
        }
    },
    transitions : {
        fade : {
            enterClass : '',
            leaveClass : 'fadeOut'
        }
    },
    events : {
        show_mask : function(message){
            this.showTMask(message);
        },
        hide_mask : function(){
            setTimeout(() => {
                setTimeout(() => {
                    this.hideTMask();
                }, 500)
            })
        }
    },
    beforeCreate (){
        this.replace = true;
    },
    data (){
        return {
            replace : false
        }
    }
}
</script>

<style lang="scss" scoped>
    .web_mask{
        width: 100%;
        height: 100%;
        background-color:#ddd;
        z-index: 1001;
        position: fixed;
        top: 0;
        left: 0;
        .loading{
            width: 0.5rem;
            height: 0.5rem;
            position: fixed;
            left: 50%;
            top: 50%;
            .gif_img{
                width: 0.5rem;
                height: 0.5rem;
                background: url(http://static.boodoll.cn/wap/v2/img/icon/loading.gif);
                background-size: 100%;
                margin-left: -0.25rem;
                margin-top: -0.25rem;
            }
        }
    }
</style>
