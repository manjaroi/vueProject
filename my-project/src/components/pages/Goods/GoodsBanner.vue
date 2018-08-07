<template>
	<div class="goods-banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"  v-for="obj in bannerImgs">
					<img  :src="obj.url | formatUrl" >
				</div>
			</div>
			<div class="swiper-pagination"></div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import Vue from "vue"
	import Swiper from 'swiper';

	export default {
		name: "GoodsBanner",
		// props: ['bannerImgs'],
		data(){
			return {
				bannerImgs: null,
				goodsId: null
			}
		},
		methods: {
			getBanners(){
				this.$http.post("/dt/json/reply/UnifyGoodsReq",{
					UserId: 0,
					GoodsID: this.goodsId || 640147,
					DisplayLabel:["8"],
					SourceTypeSysNo: 2,
					ClientIp: "61.144.96.2",
					// PromID: ,
					HasPromInfo: true
				}).then( res => {
					this.bannerImgs = res.data.ProductImageList;
					Vue.nextTick(() => {
						new Swiper('.swiper-container', {
							pagination: { el: '.swiper-pagination' },
						})
					})
				})
			}
		},
		mounted(){
			this.goodsId = this.$route.params.id;
			this.getBanners();
		},
		
		
	}
</script>

<style lang="scss" scoped>
.goods-banner {
	width: 100%;
	height: 3.28rem;
	background-color: #fff;
	margin-top: 0.51rem;
	img {
		width: 3.28rem;
		height: 3.28rem;
		margin: 0 auto;
	}
}
</style>