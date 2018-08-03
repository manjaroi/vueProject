<template>
	<div class="goods-list">
		<img src="http://img.muyingzhijia.com/img/201702/20170227160753_10_nfym_01.jpg">
		<app-detail></app-detail>
		<app-products></app-products>
	</div>
</template>

<script type="text/javascript">

	import details from './product_details.vue';
	import products from './product_list.vue';

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