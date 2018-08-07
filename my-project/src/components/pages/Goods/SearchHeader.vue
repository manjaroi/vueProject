<template>
	<div class="search-header">
		<i @click="$router.go(-1)" class="fa fa-angle-left"></i>
		<div class="hd_title hd_search">
			<span><i class="fa fa-search"></i></span>
			<input type="text" placeholder="搜索">
		</div>
		<div class="cart">
			<img src="http://static.boodoll.cn/wap/v2/img/icon/d_cart.png">
			<span>0</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "SearchHeader",

	}
</script>


<style lang="scss" scoped>
.search-header {
	width: 100%;
	height: 0.51rem;
	background-color: #f60;
	position: fixed;
	z-index: 15;
	// margin-top: 0.51rem;
	top: 0;
	left: 0;
	>i {
		position: absolute;  
		top: 0;
		left: 0;
		float: left;
		width: 0.51rem;
		height: 0.51rem;
		font-size: 0.46rem;
		text-align: center;
		line-height: 0.51rem;
		color: #fff;
	}
	.search-header-title {
		widht: 100%;
		height: 0.51rem;
		background-color: #f60;
		color: #fff;
		text-align: center;
		line-height: 0.51rem;
	}
	.hd_title{
		float: left;
		width: 2.7rem;
		margin-left: 0.51rem;
	}
	.hd_search{
		height: 0.32rem;
		background-color: #ff8c3c;
		margin-top: 0.1rem;
		border-radius: 0.05rem;
		position: relative;
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
		>span{
			float: left;
			height: 0.32rem;
			width: 0.32rem;
			text-align: center;
			border-radius: 0.02rem 0rem 0rem 0.02rem;
			>i{
				color: #fff;
				font-size: 0.16rem;
				line-height: 0.32rem;
			}
		}
	}

	.cart {
		width: 0.51rem;
		height: 0.51rem;
		position: absolute;
		right: 0;
		text-align: center;
		line-height: 0.51rem;
		>img {
			display: inline-block;
			width: 0.31rem;
			height: 0.31rem;
			vertical-align: middle;
		}
		>span {
			position: absolute;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: #fff;
			color: #f60;
			top: 5px;
			right: 5px;
			text-align: center;
			line-height: 15px;
			font-size: 12px;
		}
	}
}

</style>