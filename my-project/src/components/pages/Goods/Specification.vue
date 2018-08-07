<template>
	<div class="goods-specification" v-if="details">
		<div class="spic-wrap">
			<span>规格</span>
			<div >
				<span>{{ details.Spec || details.Color}}</span>
				<i class="fa fa-check"></i>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default {
		name: "AppSpecification",
		props: ['details']
	}
</script>

<style lang="scss" scoped>
.goods-specification {
	width: 100%;
	height: 1.04rem;
	margin-bottom: 0.22rem;
	padding: 0.11rem;
	background-color: #fff;
	.spic-wrap {
		span {
			// float:left;
		}
		div {
			width: 0.66rem;
			height: 0.31rem;
			margin-right: 0.11rem;
			background-color: rgb(255, 102, 0);
			border-radius: 15px;
			text-align: center;
			line-height: 0.31rem;
			color: #fff;
			position: relative;
			margin-top: 5px;
			span{
				font-size: 13px;
			}
			i {
				position: absolute;
				bottom: 0;
				right: 0;
				width: 0.17rem; 
				height: 0.17rem;
				background-color: rgb(218,68,5);
				border-radius: .11rem 0rem 0.29rem .02rem;
				font-size: 12px;

			}
		}
	}
}
</style>