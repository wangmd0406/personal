<template>
  <div>
    <div class="asside">
      <div class="asside-top">
        <a href="javascript:;">
          <div class="mine"></div>
          我的
        </a>
        <hr>
        <a href="javascript:;">
          <div class="order"></div>
          订单
        </a>
      </div>
      <div class="asside-bottom">
        <a href="javascript:;" class="service-sec">
          <div class="service"></div>
          客服
          <ul class="service-sec-sec">
            <li><a href="javascript:;">在线客服</a></li>
            <li><a href="javascript:;" style="line-height: 20px;">客服电话40000</a></li>
            <li><a href="javascript:;">意见和建议</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
          </ul>
        </a>
        <hr>
        <a href="javascript:;" v-on:click="toTop">
          <div class="top"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aside",
    methods: {
      toTop() {
        document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style scoped>
  .asside {
    position: fixed;
    width: 35px;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    top: 0;
    right: 0;
  }

  hr {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 20px;
  }

  .asside-top {
    height: 180px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 35%;
  }

  .asside-bottom {
    height: 140px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .asside-top a, .asside-bottom a {
    display: block;
    width: 100%;
    height: 55px;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-decoration: none;
    padding: 3px 0;
  }

  .asside-top>a:hover, .asside-bottom>a:hover{
    background-color: rgba(0,0,0,.5);;
  }


  .mine, .order, .service, .top {
    width: 23px;
    height: 23px;
    margin: 8px auto;
  }

  .mine {
    background: no-repeat center center url("../assets/images/首页_slices/mine.png");
  }

  .order {
    background: no-repeat center center url("../assets/images/首页_slices/order.png");
  }

  .service {
    background: no-repeat center center url("../assets/images/首页_slices/service.png");
  }

  .top {
    background: no-repeat center center url("../assets/images/首页_slices/top.png");
  }

  .service-sec {
     position: relative;
     width: 100%;
     height: 45px;
   }

  .service-sec-sec {
    position: absolute;
    width: 67px;
    height: 195px;
    left: -100px;
    bottom: -100px;
    z-index: 5;
    padding: 0 15px;
    border: 1px solid rgba(230, 230, 230, 1);
    visibility: hidden;
    opacity: 0;
    transition: all .5s ease;
  }

  .service-sec-sec li{
    list-style: none;
    text-align: center;
    width: 70px;
    height: 35px;
    border-bottom: 1px solid rgba(230,230,230,1);
    padding: 5px 0;
    line-height: 35px;
  }

  .service-sec-sec li:last-child{
    border-bottom:none;
  }

  .service-sec-sec li a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(127, 127, 127, 1);
    line-height: 35px;
  }
  .service-sec:hover .service-sec-sec{
    opacity: 1;
    visibility: visible;
  }
</style>
