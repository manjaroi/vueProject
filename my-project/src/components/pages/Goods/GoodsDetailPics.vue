<template>
	<div class="detail-pics" v-if="details">
		<div class="pics" v-html="details.desc">
			<!-- {{ details.desc | formatTags }} -->
		</div>
		<!-- <div>
			<img src="http://img.boodoll.cn//pdt/desc/201802/20180208095648_555_201802081000101295.jpg">
		</div> -->
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	Vue.filter("formatTags",function(str){
		let idx = str.search("</style>") + 8;
		str = str.substr(idx);
		return str;
	})
	export default {
		name: "AppDetailPics",
		props: ['details']
	}
</script>

<style lang="scss">
.detail-pics {
	margin-bottom: 0.53rem;
	img {
		width: 100%;
	}
}
</style>