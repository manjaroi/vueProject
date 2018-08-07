<template>
	<div class="goods-params" v-if="details">
		<div class="title">
			<span>商品使用指南</span>
		</div>
		<ul>
			<li  v-for="p in details.attrs ">
                <span>{{ p.Key }}</span>：<span>{{ p.Value }}</span>
            </li>
		</ul>
		<!-- <div class="goods-pic">
			<div class='goods-detail-pics'>
				<p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114557_555_201612161151196108.jpg"></p>
				<p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151196733.jpg"></p>
				<p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151197671.jpg"></p>
				<p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151198452.jpg"></p>
				<p><br/></p>
			</div>
		</div> -->
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "AppGoodsParams",
		props: ['details']
	}
</script>

<style lang="scss" scoped>
.goods-params {
	width: 100%;
	height: 2.04rem;
	background-color: #fff;
	margin-top: 0.11rem;
	padding-left: 0.11rem;
	.title {
		width: 100%;
		height: 0.43rem;
		border-bottom: 1px solid #ccc;
		line-height: 0.43rem;
		>span {
			font-size: 0.17rem;
			color: #000;
		}
	}
	ul {
		margin-top: 0.11rem;
		li {
			line-height: 0.20rem;
			overflow-x: auto;
		}
	}
	.goods-pic {
		position: absolute;
		left: 0;
		img {
			width: 100%;
		}
	}
}
</style>

<style>.goods-detail-pics img{display: block !important;}.goods-detail-pics p{	padding:0 !important;margin:0 !important;}</style><div class='goods-detail-pics'><p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114557_555_201612161151196108.jpg" style="float:none;"/></p><p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151196733.jpg" style="float:none;"/></p><p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151197671.jpg" style="float:none;"/></p><p><img src="http://img.boodoll.cn//pdt/desc/201612/20161216114558_555_201612161151198452.jpg" style="float:none;"/></p><p><br/></p></div>



