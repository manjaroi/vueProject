<template>
    <div class="account">
       	<account-header></account-header>
		<account-content></account-content>
    
    </div>
</template>

<script type="text/javascript">

import AccountHeader from './AccountHeader.vue'
import AccountContent from './AccountContent.vue'
import { mapState } from 'vuex'
	export default {
		name: "account",
		components: {
			AccountHeader,
			AccountContent,
		},
		created (){
        let user_state = this.$store.state.commons.user_state
        if ( !user_state ){
            this.$router.push('./Login')
        }
     }
	}
</script>




<style lang='scss' scoped>
	.account {
		background-color: #F3F3F3;
	}
</style>

