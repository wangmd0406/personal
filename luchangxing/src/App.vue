<template>
  <div id="app">
    <router-link to="goodsDetails"><h1>商品详情</h1></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  #app {

  }
</style>
