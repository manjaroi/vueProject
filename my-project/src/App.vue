<template>
  <div id="app">
    <!-- <app-home></app-home> -->
    <keep-alive include="AppHome">
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import AppHome from './components/pages/Home/Home';
export default {
  name: 'App',
  components : {
    AppHome : AppHome 
  },
  created () {
    // 初始化的去获取全局所需要使用的category_list数据
    // this.$store.dispatch('action_get_category_list')
  }
}
</script>

<style>
  
</style>
