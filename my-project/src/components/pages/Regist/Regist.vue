<template>
	<div class="regist">
		<app-list-header>注册</app-list-header>
		<div class="regist-content">
			<div class="inputBox">
				<input type="text" v-model="phone" name="phone" placeholder="请输入手机号码" @keyup="validate" maxlength="11">
				<i v-if="phone.length > 0" class="fa fa-times-circle fa-lg" @click="close"></i>
				<!-- <input type="text" v-model="phone" name="phone" placeholder="请输入验证码" @keyup="validate" maxlength="11"> -->
			</div>
			<div class="inputBox" v-if="vCode">
				<input type="text" v-model="vCodeNum"  placeholder="请输入验证码" maxlength="6">
			</div>
			<div v-if="!vCode" class="tips"><a href="javascript:" @click="sendCode" :class="isPhone? 'active' : '' ">发送验证码</a></div>
			<div v-else class="tips"><a href="javascript:" v-model="vCodeNum" @click="validateCode" >下一步</a></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "regist",
		data(){
			return {
				phone: "",
				vCodeNum: "",
				isPhone: false,
				vCode: false,
			}
		},
		methods: {
			validate(){
				if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone) && this.phone.length == 11){
					this.isPhone = true;
				}else{
					this.isPhone = false;
				}
			},
			sendCode(){
				if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){
					console.log("手机号不正确");
				}else{
					console.log(6666);
					this.$http.post('/my/Member/IsBindThird',{
						mobile: this.phone
					}).then( res => {
						this.vCode = true;
						console.log(res.data);
						// http://m.muyingzhijia.com/Login/DynamicLogin
					})
				}
			},
			close(){
				this.phone = "";
			},
			validateCode(){
				this.$http.post('/my/Login/DynamicLogin',{
					loginMobile: this.phone,
					smsCode: this.vCodeNum
				}).then( res => {
					console.log(res.data)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.regist {
	width: 100%;
	.regist-content {
		padding: 1.5rem 0.32rem 0 0.32rem;
		.inputBox {
			width: 100%;
			height: 0.6rem;
			border-bottom: 1px solid #f60;
			position: relative;
			padding-top: 0.2rem;
			>input {
				outline: none;
				-webkit-tap-highlight-color: transparent;
				text-align: center;
				height: 0.3rem;
				width: 100%;
				border: 0 none;
				font-size: .17rem;
			}
			>i {
				width: 0.21rem;
				height: 0.21rem;
				position: absolute;
				right: 0;
				top: 0.22rem;
				text-align: center;
				line-height: 0.21rem;
				color: #ccc;
			}
		}
		.tips {
			width: 100%;
			height: 0.6rem;
			text-align: center;
			line-height: 0.6rem;
			>a {
				font-size: 0.2rem;
				color: #999;
			}
			.active {
				color: #f60;
			}
		}
	}

}
</style>