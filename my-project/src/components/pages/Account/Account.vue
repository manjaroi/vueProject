<template>
    <div>
        <app-nav></app-nav>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name : 'Account',
    created (){
        let user_state = this.$store.state.commons.user_state
        if ( !user_state ){
            this.$router.push('./Login')
        }
    }
}
</script>

