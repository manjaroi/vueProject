<template>
	<div class="app-goods">
		<app-search-header>哈哈哈</app-search-header>
		<app-goods-banner></app-goods-banner>
		<app-goods-info :details="goodsDetails"></app-goods-info>
		<app-spicification :details="goodsDetails"></app-spicification>
		<app-goods-comment></app-goods-comment>
		<img src="http://static.boodoll.cn/wap/v2/img/new_customer.png" style="width:100%;height:1.08rem">
		<app-goods-params :details="goodsDetails"></app-goods-params>
		<app-detail-pics :details="goodsDetails"></app-detail-pics>
		<app-to-top></app-to-top>
		<app-add-cart></app-add-cart>
	</div>
</template>

<script type="text/javascript">
	import GoodsBanner from './GoodsBanner.vue'
	import GoodsInfo from './GoodsInfo.vue'
	import GoodsSpecificatio from './Specification.vue'
	import GoodsParams from './GoodsParam.vue'
	import DetailPics from './GoodsDetailPics.vue'
	import SearchHeader from './SearchHeader.vue'
	import AddCart from './AddCart.vue'
	import GoodsComment from './GoodsComment.vue'

	export default {
		name: "AppGoods",
		components: {
			AppGoodsBanner : GoodsBanner,
			AppGoodsInfo : GoodsInfo,
			AppSpicification : GoodsSpecificatio,
			AppGoodsParams : GoodsParams,
			AppDetailPics : DetailPics,
			AppSearchHeader : SearchHeader,
			AppAddCart : AddCart,
			AppGoodsComment : GoodsComment,
		},
		data(){
			return {
				goodsId: "",
				goodsInfo: null,
				bannerImgs: null,
				goodsDetails: null,
			}
		},
		methods: {
			getGoodsData(){
				//http://goods.api.muyingzhijia.com/json/reply/UnifyGoodsReq
				this.$http.post("/dt/json/reply/UnifyGoodsReq",{
					UserId: 0,
					GoodsID: this.goodsId || 640147,
					DisplayLabel:["8"],
					SourceTypeSysNo: 2,
					ClientIp: "61.144.96.2",
					// PromID: ,
					HasPromInfo: true
				}).then( res => {
					this.goodsDetails = res.data.GoodsDetails;
					console.log(this.goodsDetails);
				})
			}
		},
		mounted(){
			this.goodsId = this.$route.params.id;
			this.getGoodsData();
		},
		
	}

</script>

<style lang="scss" scoped>
	.app-goods {
		width: 100%;
		// height: 9rem;
		background-color: #F3F3F3;
		position: relative;
	}
	
</style>