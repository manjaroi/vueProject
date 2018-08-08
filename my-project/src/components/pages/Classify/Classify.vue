<template>
    <div>
        <app-home-head></app-home-head>
        <app-classify-item></app-classify-item>
        <app-nav></app-nav>
    </div>
</template>

<script>
import Vue from 'vue';
import AppClassifyItem from './ClassifyItem';

export default {
    name : 'AppClassify',
    components : {
        AppClassifyItem,
    }
}
</script>

<style lang="scss" scoped>
    
</style>

