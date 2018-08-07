<template>
	<div class="goods-comment" v-if="commentData">
		<div class="title">
			其他妈妈怎么说 <span>{{ commentData.GoodDegree }}%</span>好评(<span>{{ commentData.TotalComment }}</span>人)
			<i class="fa fa-angle-right toComment"></i>
		</div>
		<ul class="user-comment clear">
			<li><img src="http://static.boodoll.cn/wap/v2/img/icon/c-photo.png"></li>
			<li>{{ commentData.LatestComment.CommentContent }}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "GoodsComment",
		data(){
			return {
				commentData : null
			}
		},
		methods: {
			getComments(){
				//http://goods.api.muyingzhijia.com/json/reply/QueryLatestCommentAndTotalRequest
				this.$http.post('/dt/json/reply/QueryLatestCommentAndTotalRequest',{
						SourceTypeSysNo: 2,
						ProductId: this.$route.params.id
				}).then( res => {
					this.commentData = res.data;
				});
			}
		},
		mounted(){
			this.getComments();
		},
	}
</script>

<style lang="scss" scoped>
.goods-comment {
	width: 100%;
	height: 1.31rem;
	margin-top: 0.11rem;
	margin-bottom: 0.11rem;
	padding-left: 0.11rem;
	background-color: #fff;
	.title {
		width: 100%;
		height: 0.43rem;
		line-height: 0.43rem;
		font-size: 0.17rem;
		color: #000;
		border-bottom: 1px solid #ccc;
		position: relative;
		>span:first-child {
			color: #f60;
		}
		.toComment {
			position: absolute;
			width: 0.23rem;
			height: 0.43rem;
			top: 0;
			right: 0;
			font-size: 0.38rem;
			color: #ccc;
		}
	}
	.user-comment {
		width: 100%;
		border-bottom: 1px solid #ccc;
		li {
			float: left;
			height: 0.53rem;

		}
		li:nth-child(1) {
			width: 0.43rem;
			line-height: .43rem;
			text-align: center;

			>img {
				height: 0.43rem;
				width: 0.43rem;
				margin-top: 5px;
			}
		}
		li:nth-child(2) {
			color: #82737A;
			text-indent: 1em;
			line-height: 0.43rem;
			overflow: hidden;
		}
	}
}
</style>