<template>
  <div>
    <div class="header login_nav">
      <div class="wrapper">
        <ul class="">
          <li>
            <router-link to="/login">{{nickName}}</router-link>
          </li>
          <li></li>
          <li><a href="javascript:;"> 我的订单</a></li>
          <li></li>
          <li><a href="javascript:;">消息通知</a></li>
          <li></li>
          <li><a href="javascript:;"> 我要加盟</a></li>
          <li></li>
          <li class="erCodeLi">
            <a href="javascript:;">手机浏览</a>
            <div class="erCode">
              <img src="" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wx">
      <div class="logo">
        <router-link to="/">
          <div class="logo_img fl"></div>
        </router-link>
        <div id="header" class="header_nav fl" v-show="!logStatus">
          <span>登录</span>
        </div>
        <!-- 搜索框 -->
        <div v-show="logStatus" class="tags-search fr">
          <ul class="tags fl">
            <!--<li v-for="brand in goods_brands"><a href="javascript:;">brand.enumName</a></li>-->
            <li>
              <a href="javascript:;">米其林</a>
            </li>
            <li>
              <a href="javascript:;">米其林</a>
            </li>
            <li>
              <a href="javascript:;">米其林</a>
            </li>
            <li>
              <a href="javascript:;">米其林</a>
            </li>
            <li>
              <a href="javascript:;">米其林</a>
            </li>
            <li>
              <a href="javascript:;">米其林</a>
            </li>
          </ul>
          <div id="search" class="search fr">
            <input type="text" placeholder="路通" class="input_search">
            <input type="submit" class="submit" value="">
          </div>
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
        // status: '你好，请登录',
        goods_brands: '',
        logStatus: true,
        postData:{
          enumCode:'GOODS_BRAND'
        }
      }
    },
    props: {
      login: [Number], //是否处于登录界面 1：是（隐藏搜索框，显示登录） other:不是（显示搜索框）
      status: '',
      nickName:{
        type:String,
        default:'你好，服务商'
      }
    },
    methods: {
      post() {
        this.$axios.post('http://lcx.zzcplus.com/api/goodsEnum/searchGoodsEnums', this.postData)
          .then((response) => {
            this.goods_brands = response.data.data.goodsEnums;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(new Error('出错'));
          });
      },
      loginStatus() {
        if (this.login === '1') {
          this.logStatus = false
        }
        else {
          this.logStatus = true
        }
      }
    },
    mounted() {
      this.post();
      this.loginStatus();
    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";
  @import "../assets/css/header.css";

</style>
