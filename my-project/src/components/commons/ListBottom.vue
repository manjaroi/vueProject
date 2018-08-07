<template>
	<div class="app-list-bottom">
		<ul class="login-regist">
			<router-link tag="li" to="/Login">
				<i class="fa fa-user"></i>
				<span>登录</span>
			</router-link>
			<router-link tag="li" to="/regist">
				<i class="fa fa-user-plus"></i>
				<span>注册</span>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'

	export default {
		name: "ListBottom"
	}
</script>

<style lang="scss" scoped>
.login-regist {
	display: flex; 
	width: 100%;
	height: 0.55rem;
	position: fixed;
	background-color: #fff;
	bottom: 0;
	left: 0;
	z-index: 20;
	border-top: 1px solid #ccc;
	li {
		float: left;
		text-align:center;
		position:relative;
		height: 0.55rem;
		flex: 1;
		i {
			width: 0.3rem;
			height: 0.3rem;
			position: absolute;
			top: 50%;
			left: 50%;
			font-size: 0.3rem;
			transform: translate(-50%,-75%);
		}
		span {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>