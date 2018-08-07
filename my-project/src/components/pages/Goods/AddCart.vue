<template>
	<div class="add-cart">
		<ul class="clear">
			<li>
				<img src="http://static.boodoll.cn/wap/v2/img/icon/c_service.png">
			</li>
			<li>
				<div>
					<button class="btn_l" @click="minusQty">-</button>
					<input type="text" :value="qty">
					<button class="btn_r" @click="addQty">+</button>
				</div>
			</li>
			<li>
				<div class="addCartButton">加入购物车</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "AppAddCart",
		data(){
			return {
				qty: 1
			}
		},
		methods: {
			addQty(){
				this.qty++;
			},
			minusQty(){
				if(this.qty <= 1) return;
				this.qty--;
			}
		}
	}
</script>

<style lang="scss" scoped>
.add-cart {
	width: 100%;
	height: 0.53rem;
	border-top: 1px solid #ccc;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 20;
	background-color: #fff;
	ul {
		li{
			float: left;
			height: 0.53rem;
			text-align: center;
			line-height: 0.53rem;
		}
		li:nth-child(1) {
			width: 15%;
			>img {
				display: inline-block;
				width: 0.4rem;
				height: 0.4rem;
				vertical-align: middle;
			}
		}
		li:nth-child(2) {
			width: 30%;
			position: relative;
			font-size: 0px;
			>div {
				width: 0.98rem;
				height: 0.32rem;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				font-size: 0px;
				button {
					display: block;
					float: left;
					width: 25%;
					height: 0.32rem;
					background-color: #fff;
					border: 1px solid #ccc;
					outline: none;

				}
				input {
					display: block;
					float: left;
					width: 50%;
					height: 0.32rem;
					border: 0 none;
					border-top: 1px solid #ccc;
					border-bottom: 1px solid #ccc;
					text-align: center;
					
				}
			}
		}
		li:nth-child(3) {
			width: 55%;
			.addCartButton {
				height: 0.37rem;
				width: 1.89rem;
				border-radius: 4px;
				background-color: #f60;
				color: #fff;
				text-align: center;
				line-height: 0.37rem;
				margin: 0 auto;
				margin-top: 8px;
			}
		}
	}
}

</style>