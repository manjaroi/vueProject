<template>
	<div class="app-to-top">
		<router-link to="/" href="#" class="fa fa-home"></router-link>
		<a v-if="toTopBar" href="#" class="fa fa-arrow-up"></a>
	</div>
</template>

<script type="text/javascript">
	import Vue from "vue";

	export default {
		name: "ToTop",
		data(){
			return {
				toTopBar: false
			}
		},
		methods: {
			watchScoll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop > 62){
 					this.toTopBar = true;
				}else{
					this.toTopBar = false;
				}
			}
		},
		mounted() {
			window.addEventListener("scroll",this.watchScoll);
		},
		destroyed () {
		    window.removeEventListener('scroll', this.watchScoll);
		},
	}
</script>

<style lang="scss" scoped>
	.app-to-top {
		width: 0.4rem;
		height: 1.5rem;
		position: fixed;
		bottom: 0.7rem;
		right: 0.05rem;
		a {
			display: inline-block;
			margin-bottom: 0.08rem;
			width: 0.4rem;
			height: 0.4rem;
			border: 1px solid #ccc;
			text-align: center;	
			line-height: 0.4rem;
			border-radius: 50%;
			font-size: 0.3rem;
			background-color: #fff;
			opacity: 0.6;
		}
	}
</style>