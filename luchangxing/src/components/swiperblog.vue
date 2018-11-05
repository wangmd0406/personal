<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
        </div>
      </div>
      <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
      <!--<div class="swiper-pagination"></div>-->

      <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->

      <!--&lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'; // this

  export default {
    name: "swiperblog",
    data() {
      return {}
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: false,
        speed: 300,
        stopOnLastSlide: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    }
  }
</script>

<style scoped>
  @import "../assets/css/swiper.min.css";  /* and this */
</style>
