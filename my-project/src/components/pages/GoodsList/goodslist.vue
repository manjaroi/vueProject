<template>
	<div class="goods-list">
		<app-list-header>奶粉精选</app-list-header>
		<img src="http://img.muyingzhijia.com/img/201702/20170227160753_10_nfym_01.jpg">
		<app-detail></app-detail>
		<app-products></app-products>
		<app-to-top></app-to-top>
		<app-list-bottom></app-list-bottom>
	</div>
</template>

<script type="text/javascript">

	import details from './ProductDetails.vue';
	import products from './ProductList.vue';

	export default {
		name: "AppList",
		components: {
			AppDetail : details,
			AppProducts : products
		}
	}
</script>

<style  lang="scss" scoped>
	img {
		width: 100%;
		height: 1.61rem;
	}
	
	
</style>