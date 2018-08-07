<template>
    <ul>
        <router-link
            tag="li"
            v-for="item in data"
            :key="item.id">
                
            </router-link>
    </ul>
</template>


<script>
export default {
    name : 'category-list',
    props : ['data']
}
</script>


<style lang="scss" scoped>

</style>
