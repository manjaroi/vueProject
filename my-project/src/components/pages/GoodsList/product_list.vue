<template>
	<div class="app-list" >
		<div class="classify" v-for="item in columnList">
			<div class="p_title" v-if="item.ImgList == '' ">
				<span class="title_line">
					<span>{{ item.Attribute.ShowName}}</span>
				</span>
			</div>
			<a href="#" class="top_pic" v-else>
					<img :src="item.ImgList[0].ImgUrl">
			</a>
			<ul class="product-list clear">
				<li class="product-item" v-for="p in item.ColumnProductList" >
					<div class="p_img">
						<a href="#">
							<img :src="p.ImgUrl | formatUrl">
						</a>
					</div>
					<div class="p_name">
						{{ p.ProductName }}                                               
					</div>
					<div class="p_button clear">
						<div class="button_l">￥{{ p.Price }}</div>
						<div class="button_r "><a href="#">立即购买</a></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>


<script type="text/javascript">
	import Vue from "vue";
	Vue.filter("formatUrl",function(url){
		return url.replace("{type}","380x380");
	})
	export default {
		name: "productList",
		data  (){
			return {
				columnList : [],
			}
		},
		methods: {
			getDatas(){
				this.$http.post("/my/Activity/ActivityList",{
					SubId: 1484,
					SubCode: "",
					SubTime: "",
					IsCache: true,
					DisplayLabel: ["8"],
					SourceTypeSysNo: 2
				}).then( res => {
					let len = res.data.Model.ColumnList.length;
					for(let i=2; i<len; i++){
						this.columnList.push(res.data.Model.ColumnList[i]);
					}
					console.log(this.columnList);
				});
			}
		},
		mounted(){
			this.getDatas();
		}
	}
</script>

<style  lang="scss" scoped>
.classify {
	.p_title {
		text-align: center;
		width: 100%;
		height: 0.5rem;
		// background-color: #ccc;
		border-bottom: 1px solid #ccc;
		padding: 0 0.24rem;
		.title_line {
			display: block;
			width: 100%;
			height: 0.25rem;
			border-bottom: 1px solid #f60;
			>span {
				display: inline-block;
				width: 1.24rem;
				height: 0.49rem;
				background-color: white;
				line-height: 0.49rem;
				color: #f60;
				font-size: 0.16rem;
			}
		}
	}

		.top_pic {
			img {
				width: 100%;
				height: 0.65rem;
			}
		}
	.product-list {
		width: 100%;
		li {
			width: 50%;
			height: 2.87rem;
			// background-color: green;
			float: left;
			padding: 0.12rem;
			padding-bottom: 0;
			.p_img {
				a {
					img {
						width: 100%;
						height: 1.81rem;					
					}
				}
			}
			.p_name {
				height: 0.42rem;
				width: 100%;
				padding: 5px;
				background-color: #FFF;
				position: relative;
				font-size: 12px;
				overflow: hidden;
				color: black;
				line-height: 20px;
				margin-bottom: 10px;
			}
			.p_button {
				width: 100%;
				height: 0.43rem;
				.button_l {
					padding: 0rem 0.12rem;
					width: 50%;
					height: 0.43rem;
					line-height: 0.43rem;
					color: #FFFFFF;
					text-align: left;
					float: left;
					background-color: #FF85AC;
					font-size: 16px;
				}
				.button_r {
					a {
						display: block;
						padding: 0rem 0.12rem;
						width: 50%;
						height:  0.43rem;
						font-size: 15px;
						line-height: 0.43rem;
						color: #FFFFFF;
						text-align: center;
						float: right;
						background-color: #e7507b;
					}

				}
			}
		}
	}
}



</style>