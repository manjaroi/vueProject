<template>
	<div class="account-header">
		<div class="user-info">
			<div class="user-phone">
				<img src="http://static.boodoll.cn/wap/v2/img/icon/c-photo.png">
			</div>
			<div class="user-text">
				<dl>
					<dt>HI M14413006</dt>
					<dd>普通会员</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "AccountHeader"
	}
</script>

<style lang="scss" scoped>
.account-header {
	width: 100%;
	height: 1.35rem;
	padding: 0.24rem;
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FF5D00), to(#FF7E00));
	margin-bottom: 0.18rem;
	.user-info {
		width: 100%;
		height: 100%;
		div {
			float: left;
			height: 0.82rem;
		}
		.user-phone {
			width: 0.82rem;
			>img {
				width: 0.82rem;
				height: 0.82rem;
			}
		}
		.user-text {
			width: 70%;
			color: #fff;
			font-size: 16px;
			padding-left: 0.23rem;
			padding-top: 0.2rem;
		}
	}
}
</style>