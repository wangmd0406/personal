<template>
  <div>
    <div class="header login_nav">
      <div class="wrapper">
        <ul>
          <li><router-link to="/login">{{status}}</router-link>
          </li>
          <li></li>
          <li><a href="javascript:;"> 我的订单</a></li>
          <li></li>
          <li><a href="javascript:;">消息通知</a></li>
          <li></li>
          <li><a href="javascript:;"> 我要加盟</a></li>
          <li></li>
          <li><a href="javascript:;">手机浏览</a></li>
        </ul>
      </div>
    </div>
    <div class="wx">
      <div class="logo">
        <div class="logo_img fl"></div>
        <div id="header" class="header_nav fl">
          <!-- 头部导航 -->
          <!--<a href="javascript:;">-->
          <!--你好，请登录-->
          <!--</a>-->
          <ul>
            <li></li>
          </ul>
        </div>
        <!-- 搜索框 -->
        <div id="search" class="search fr">
          <input type="text" placeholder="路通" class="input_search">
          <input type="submit" class="submit" value="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        status: 'weidenglu',
        goods_brands: ''
      }
    },
    methods: {
      post() {
        this.$axios.post('http://lcx.zzcplus.com/api/goodsEnum/searchGoodsEnums', {enumCode:'enum'})
          .then((response) => {
            this.goods_brands = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(new Error('出错'));
          });
      }
    },
    mounted() {
      this.post();
    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";
  @import "../assets/css/header.css";

</style>
