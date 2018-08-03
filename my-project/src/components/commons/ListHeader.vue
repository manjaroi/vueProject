<template>
	<div class="list-header">
		<i class="fa fa-angle-left"></i>
		<h2 class="list-header-title"><slot></slot></h2>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "listHeader",

	}
</script>


<style lang="scss" scoped>
	.list-header {
		i {
			position: absolute;  
			top: 0;
			left: 0;
			float: left;
			width: 0.56rem;
			height: 0.56rem;
			font-size: 0.46rem;
			text-align: center;
			line-height: 0.56rem;
			color: #fff;
		}
		.list-header-title {
			widht: 100%;
			height: 0.56rem;
			background-color: #f60;
			color: #fff;
			text-align: center;
			line-height: 0.56rem;
		}
	}
</style>