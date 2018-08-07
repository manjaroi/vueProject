<template>
	<div class="account-content">
		<div class="user-order clear">
			<div class="title">我的订单</div>
			<ul class="state-list clear" >
				<li v-for="state in order_state" :key="state.id">
					<i :class="['fa fa-' + state.icon ]"></i>
					<p>{{ state.msg }}</p>
				</li>
			</ul>
		</div>
		<div class="manager-list">
			<ul>
				<li v-for="m in manager_state" :key="m.id">
					<i :class="['fa fa-' + m.icon ]"></i>
					<span>{{ m.msg }}</span>
				</li>
			</ul>
		</div>
		<div class="logout">
			退出当前账户
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "AccountContent",
		data(){
			return {
				order_state: [
					{id: 1, icon: "credit-card", msg: "待付款", },
					{id: 2, icon: "cube", msg: "待发货", },
					{id: 3, icon: "truck", msg: "待收货", },
					{id: 4, icon: "heart-o", msg: "已完成", },
					{id: 5, icon: "car", msg: "退货", },
				],
				manager_state: [
					{id: 1, icon: "money", msg: "抵扣券", },
					{id: 2, icon: "star-o", msg: "我的收藏", },
					{id: 3, icon: "map-marker", msg: "地址管理", },
					{id: 4, icon: "cog", msg: "账号设置", },
					{id: 5, icon: "tags", msg: "我的团", },
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
.account-content {
	width: 100%;
	// height: 4.52rem;
	.user-order {
		width: 100%;
		height: 1.23rem;
		padding-left: 0.17rem;
		background-color: #fff;
		margin-bottom: 0.18rem;
		.title {
			font-size: 0.18rem;
			height: 0.46rem;
			width: 100%;
			line-height: 0.46rem;
			border-bottom: 1px solid #ccc;
		}
	}
	.state-list {
		padding-top: 0.15rem;
		
		li {
			float: left;
			width: 20%;
			height: 0.49rem;
			text-align: center;
			i {
				font-size: 0.2rem;
			}
			p {
				line-height: 27px;
			}
		}
	}
	.manager-list {
		width: 100%;
		height: 2.4rem;
		padding-left: 0.18rem;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		background-color: #fff;
		ul {
			>li {
				width: 100%;
				height: 0.48rem;
				border-bottom: 1px solid #ccc;
				line-height: 0.48rem;
				// padding-left: 0.2rem;
				>span {
					padding-left: 5px;
					font-size: 0.16rem;
				}
			}
			>li:last-child {
				border-bottom: 0 none;
			}
			>li:first-child {
				border-top: 0 none;
			}
		}
	}
	.logout {
		width: 100%;
		height: 0.49rem;
		margin-top: 0.19rem;
		text-align: center;
		line-height: 0.49rem;
		font-size: 0.18rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
}
</style>