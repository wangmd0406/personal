<template>
  <div>
    <div class="slide" id="slide">
      <div>
        <!--轮播图-->
        <!--<div class="swiper-container">-->
        <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide">-->
        <!--<a href="javascript:;">-->
        <!--<img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>-->
        <!--</a>-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
        <!--<a href="javascript:;">-->
        <!--<img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>-->
        <!--</a>-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
        <!--<a href="javascript:;">-->
        <!--<img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>-->
        <!--</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;&lt;!&ndash; 如果需要分页器 &ndash;&gt;&ndash;&gt;-->
        <!--<div class="swiper-pagination"></div>-->

        <!--&lt;!&ndash;&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="swiper-button-prev"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="swiper-button-next"></div>&ndash;&gt;-->

        <!--&lt;!&ndash;&lt;!&ndash; 如果需要滚动条 &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="swiper-scrollbar"></div>&ndash;&gt;-->
        <!--</div>-->
      </div>

      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <a href="javascript:;">
            <img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <img src="../assets/images/首页_slices/banner_01@2x.png" height="460" width="1024"/>
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="showing-nav">
        <ul id="hover" class="hover">
          <li class="hover_index">
            品牌
            <span>&gt;</span>
            <ul class="hover_item">
              <!--<li v-for="brand in brands">-->
              <!--<img :src="brand.images" alt="">-->
              <!--</li>-->
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                </a>
              </li>
            </ul>
          </li>
          <li class="hover_index">
            规格
            <span>&gt;</span>
            <ul class="hover_item">
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              <li><a href="javascript:;">222</a></li>
              s
            </ul>
          </li>
          <li class="hover_index">
            花纹
            <span>&gt;</span>
            <ul class="hover_item">
              <li>333</li>
            </ul>
          </li>
          <li class="hover_index">
            用途
            <span>&gt;</span>
            <ul class="hover_item">
              <li>444</li>
            </ul>
          </li>
          <li class="hover_index">
            时速
            <span>&gt;</span>
            <ul class="hover_item">
              <li>555</li>
            </ul>
          </li>
          <li class="hover_index">
            路面
            <span>&gt;</span>
            <ul class="hover_item">
              <li>666</li>
            </ul>
          </li>
          <li class="hover_index">
            载重量
            <span>&gt;</span>
            <ul class="hover_item">
              <li>777</li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // import Swiper from 'swiper'
  //
  // export default {
  //   name: "slide",
  //   data() {
  //     return {
  //       brands: ''
  //     }
  //   },
  //   components: {},
  //   methods: {
  //     post() {
  //       this.$axios.post('http://lcx.zzcplus.com/api/goods/searchGoods', {page: '1', total: '10'})
  //         .then((response) => {
  //           this.brands = response.data.data.goodsList;
  //         })
  //         .catch((error) => {
  //           console.log('失败' + error);
  //         });
  //     }
  //   },
  //   mounted() {
  //     var mySwiper = new Swiper('.swiper-container', {
  //       loop: true,
  //       autoplay: true,
  //       speed: 300,
  //
  //       // 鼠标移入手掌状态
  //       grabCursor: true,
  //
  //       // 当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等
  //       watchOverflow: true,
  //
  //       // 是否一次加载所有图片
  //       preloadImages: false,
  //
  //       // 循环
  //       loop: false,
  //
  //       // 鼠标模拟滑动
  //       simulateTouch: true,
  //
  //       // 切换效果
  //       // effect : 'fade',
  //
  //
  //       // 如果需要分页器
  //       pagination: {
  //         el: '.swiper-pagination',
  //         // type: 'custom'
  //       },
  //
  //       // pagination:'.swiper-pagination',
  //
  //
  //       // 如果需要前进后退按钮
  //       nextButton: '.swiper-button-next',
  //       prevButton: '.swiper-button-prev',
  //       // 如果需要滚动条
  //       scrollbar: '.swiper-scrollbar',
  //     });
  //     // mySwiper.on('click',alert('dianjile'));
  //   }
  // }


  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  require('swiper/dist/css/swiper.css');
  export default {
    name: 'slide',
    data() {
      return {
        swiperOption: {
          autoplay: true,
          speed: 300,

          // 鼠标移入手掌状态
          // grabCursor: true,

          // 当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等
          watchOverflow: true,

          // 是否一次加载所有图片
          preloadImages: false,

          // 循环
          loop: true,

          // 鼠标模拟滑动
          simulateTouch: true,

          // 切换效果
          // effect : 'fade',

          // 延迟加载
          lazy: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            // type: 'custom',
            // 点击跳转
            clickable: true,
          },
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      stopPlay() {
        // const slide = document.querySelector('#slide');
        // this.swiperOption.autoplay = false;
        // alert(this.swiperOption.autoplay);
        // swiper.stop();
      }
    },
    mounted() {
      this.stopPlay();
    }
  }


</script>

<style scoped>
  @import "../assets/css/slide.css";
  /*@import "../assets/css/swiper.min.css";*/

  body {
    margin: 0;
    padding: 0;
  }

  .swiper-pagination {
    /*height: 30px;*/
    width: 200px;
    text-align: right;
    position: absolute;
    bottom: 20px;
    left: 795px;

  }

  .swiper-pagination span {

  }

  .swiper-pagination .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;

  }

  .swiper-pagination-bullet-active {

  }
</style>
