<template>
    <div class="app-login">
        <app-header>登录</app-header>
        <div class="touchweb_content ">
            <div class="common-form-box">
                <div class="item">
                    <input type="text" placeholder="请输入邮箱或手机号">
                </div>
                <div class="item">
                    <input type="text" placeholder="请输入密码(6-20位数字、字母、符号)" maxlength="20">
                </div>
                <p class="overflow_hide">
                    <a href="" class="link_type fr">忘记密码</a>
                </p>
                <div class=" overflow_hide">
                    <a href="javascript:;" class="btn unavail">登录</a>
                    <a class="link_type newRegBtn fl">新用户注册</a>
                    <a class="link_type phoneRegBtn fr">手机验证码登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'app-login',
    data (){
        return {

        }
    },
    computed: {
        isPhone() {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                return false;
            } else {
                return true;
            }
        }
    }
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
            width: 60%;
            float: left;
            height: 100%;
            text-align: center;
            line-height: 0.51rem;
            font-size: 0.2rem;
        }
    }
    .touchweb_content{
        .common-form-box{
            width: 3.1rem;
            margin: 0.35rem auto 0;
            .item{
                position: relative;
                overflow: hidden;
                height: 0.58rem;
                border-bottom: 0.01rem solid #ffb480;
                margin: 0;
                input{
                    text-align: center;
                    height: 0.58rem;
                    width: 3.1rem;
                    font-size: 0.16rem;
                    border: none;
                }
            }
            p{
                a{
                    font-size: 0.14rem;
                    line-height: 0.46rem;
                    color: #fe6700;
                }
            }
            .overflow_hide{
                .btn{
                    overflow: hidden;
                    display: inline-block;
                    width: 3.1rem;
                    height: 0.44rem;
                    font-size: 0.16rem;
                    line-height: 0.44rem;
                    text-align: center;
                    border-radius: 0.2rem;
                    background-color: #fea060;
                    color: #fff;
                }
                .link_type{
                    font-size: .14rem;
                    line-height: 0.46rem;
                    color: #fe6700;
                }
            }
        }
    }
</style>
