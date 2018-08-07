<template>
    <div class="account">
       	<account-header></account-header>
		<account-content></account-content>
        <app-nav></app-nav>
    </div>
</template>

<script type="text/javascript">

import AccountHeader from './AccountHeader.vue'
import AccountContent from './AccountContent.vue'

	export default {
		name: "account",
		components: {
			AccountHeader,
			AccountContent,
		}
	}
</script>

<style lang='scss' scoped>
	.account {
		background-color: #F3F3F3;
	}
</style>
