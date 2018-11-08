<template>
  <div>
    <div class="slide" id="slide">

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
          <li class="hover_index hover_brands">
            品牌
            <span>&gt;</span>
            <ul class="hover_item">
              <li>
                <a href="javascript:;">
                  朝阳轮胎
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  路通
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../assets/images/首页_slices/pc-logo-02.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../assets/images/首页_slices/pc-logp-03.png" alt="">
                </a>
              </li>
            </ul>
          </li>
          <li class="hover_index">
            规格
            <span>&gt;</span>
            <ul class="hover_item">
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
              <li><a href="javascript:;">295/67R2E</a></li>
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
        },
        category: '',//类目
        brands: '',//品牌
        standard: '',//规格
        speed: '',//速度
        pattern: '',//轮胎花纹
        layer: '',//层级
        loadeight: '',//载重
        purpose: '',//轮胎用途
        road: '',//使用路面
        position: '',//可用位置

        postDataBrands: {
          'enumCode': 'GOODS_BRAND'
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      post(postData) {
        this.$axios.post('http://lcx.zzcplus.com/api/goodsEnum/searchGoodsEnums', postData)
          .then((response) => {
            alert('商品选择项值集成功');
            return response.data.data.goodsEnums.enumName;
          })
          .catch((error) => {
            console.log(new Error('商品选择项值集获取失败' + error));
            return '';
          });
      }
    },
    mounted() {
      this.brands = this.post(this.postDataBrands);
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

  .hover_item li {
    width: 80px;
    height: 30px;
    margin-left: 13px;
    margin-bottom: 27px;
    text-align: center;
    line-height: 30px;
  }

  .hover_brands li:nth-child(1) {

  }

  .hover_brands li:nth-child(2) {
    border: 1px solid rgba(82, 182, 33, 1);
  }

  .hover_brands li:nth-child(2) a {
    font-size: 14px;
    color: rgba(82, 182, 33, 1);
    font-family: MicrosoftYaHei;
    font-weight: 400;
  }

  .hover_brands li:nth-child(3), .hover_brands li:nth-child(4) {
    border: 1px dashed #8c939d;
  }


</style>
