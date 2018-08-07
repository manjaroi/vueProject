<template>
	<div class="goods-info" v-if="details">
		<div class="info-content" >
			<div class="goods-price">
				<span>￥<em>{{ details.price }}.00</em></span>
			</div>
			<div class="goods-name">
				{{ details.title }}
			</div>
			<div class="goods-desc">
				{{ details.BrandDesc }}
			</div>
		</div>
		<div class="supplier" >
			<span>{{ details.WareHouseName }}</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default {
		name: "AppInfo",
		props: ['details']
	}
</script>

<style lang="scss" scoped>
.goods-info {
	width: 100%;
	// height: 2rem;
	// background-color: #ccc;
	background-color: #fff;
	margin-top: 0.17rem;
	.info-content {
		width: 100%;
		height: 100%;
		// background-color: blue;
		padding-left: 0.11rem;
		padding-bottom: 0.11rem;
		.goods-price {
			width: 100%;
			height: 0.52rem;
			border-bottom: 1px solid #d2d2d2;
			line-height: 0.52rem;
			span {
				color: red;
				em {
					font-size: 0.21rem;
				}
			}
		}
		.goods-name {
			width: 100%;
			height: 0.46rem;
			font-size: 0.16rem;
			font-weight: 400;
			margin: 0.11rem 0;
			color: #000;
		}
		.goods-desc {
			width: 100%;
			height: 0.55rem;
			margin: 0.11rem 0;
			color: rgb(130,115,122);
			overflow: hidden;
		}
	}
	.supplier {
		width: 100%;
		height: 0.28rem;
		background-color: rgb(210,210,210);
		text-align: right;
		margin-bottom: 0.11rem;
		padding-right: 0.11rem;
		line-height: 0.28rem;
	}
}
</style>