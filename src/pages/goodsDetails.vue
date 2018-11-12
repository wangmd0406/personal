<template>
  <div>
    <Header login="1" :nick-name="nickName"></Header>
    <div class="wx con red">
      <div class="nav red">
        <!--小导航-->
      </div>
      <!--商品详情-->
      <div class="goods">
        <!--左侧图片-->
        <div class="goods-imgs fl red">
          <!--此处引用slide组件-->
          <!--<swiper :options="swiperOption" ref="mySwiper">-->
          <!--&lt;!&ndash; slides &ndash;&gt;-->

          <!--<swiper-slide v-for="(goods,index) in goodsInfo.imgUrlList" :key="index">-->
          <!--<img :src="goods" height="400" width="400"/>-->
          <!--</swiper-slide>-->


          <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
          <!--&lt;!&ndash;<div class="swiper-pagination" slot="pagination"></div>&ndash;&gt;-->
          <!--<div class="swiper-button-next"></div>-->
          <!--<div class="swiper-button-prev"></div>-->
          <!--</swiper>-->
          <abbSlide :img-list-list="imgUrlList"></abbSlide>
        </div>
        <!--右侧详情-->
        <div class="goods-right fr red">
          <h1 class="goods-title red">&nbsp;{{goodsInfo.brandName}}轮胎</h1>
          <ul class="goods-tag red">
            <li>{{goodsInfo.brandName}}</li>
            <li>{{goodsInfo.layer}}</li>
            <li>{{goodsInfo.standard}}</li>
            <li>{{goodsInfo.purpose}}</li>
            <li>{{goodsInfo.road}}</li>
            <li>{{goodsInfo.road}}</li>
            <li>{{goodsInfo.road}}</li>
            <li>{{goodsInfo.road}}</li>
            <li>{{goodsInfo.road}}</li>
            <li>{{goodsInfo.road}}</li>
          </ul>
          <div class="goods-add red">
            <br>
            <li class="goods-price fl red">价格
              <span v-if="priceShow"><router-link to="/login"><span
                class="price-link fr">查看价格</span></router-link></span>
              <span v-else class="sale-price fr"><span style="font-size: 24px">￥</span>{{goodsInfo.salePrice}}</span>
            </li>
            <!--<li class="goods-price fr red">价格 -->
            <!--</li>-->
            <div class="clear"></div>
            <div class="add-num red">
              <div class="fl" style="margin-right: 56px">数量</div> &nbsp;
              <div class="fl">
                <Number @getnumberadd="getNumberAdd" @getnumberminue="getNumberMinus"
                        @getnumberkeyup="getNumberKeyUp"></Number>
              </div>
              <div class="fl" style="margin: 0 12px">件</div>
              <div class="goods-stock fl" style="margin-left: 22px">(剩余库存{{goodsInfo.stock}}件)</div>
            </div>
            <div class="add-now" @click="buyNow">
              加入采购单
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <!--底部规格-->
        <div class="goods-detail red">
          <ul>
            <li>品牌：{{goodsInfo.brandName}}</li>
            <li>轮胎名称：{{goodsInfo.goodsName.split('/')[2]}}</li>
            <li>轮胎编号：{{goodsInfo.goodsSn}}</li>
            <li>轮胎规格：{{goodsInfo.standard}}</li>
          </ul>
          <ul>
            <li>轮胎花纹：{{goodsInfo.pattern}}</li>
            <li>轮胎产地：{{goodsInfo.madeAddress}}</li>
            <li>用途：{{goodsInfo.purpose}}</li>
            <li>轮胎厂家：{{goodsInfo.maker}}</li>
          </ul>
          <ul>
            <li>速度级别：{{goodsInfo.speed}}</li>
            <li>路面：{{goodsInfo.road}}</li>
            <li>载重量：{{goodsInfo.loadWeight}}</li>
          </ul>
        </div>
      </div>
      <!--商品详情图片-->
      <div class="goods-detail-img" v-html="goodsDesc.goodsDesc">
      </div>
    </div>
    <div class="clear"></div>
    <Footer></Footer>
    <Aside></Aside>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import Aside from '../components/aside';
  import Number from '../components/inputNumber'
  import abbSlide from '../components/abbSlide'


  require('swiper/dist/css/swiper.css');

  export default {
    name: "goodsDetails",
    components: {
      Header,
      Footer,
      swiper,
      swiperSlide,
      Aside,
      Number,
      abbSlide
    },
    data() {
      return {
        imgUrlList: [],
        priceShow: false,
        postData: {
          'goodsId': '18110317302292898088'
        },
        buyNumber: 1,
        nickName: '',
        goodsInfo: '',
        goodsDesc: '',   //商品详情图片，
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
          navigation: {
            nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
            prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
            hideOnClick: false, //点击slide时显示/隐藏按钮
            disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
            hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
          }
        },
        swiperOption2: {
          // slidesPerView : 2,
          // centeredSlides : slide,
          loop: true,
          slidesPerView: 4,
          loopedSlides: 3,
          loop: false
        }
      }
    },
    methods: {
      hasLogin() {
        if (sessionStorage.getItem('hasLogin') != null) {
          this.priceShow = false;
        }
        else {
          this.priceShow = true;
        }
      },
      getNumberKeyUp(data) {
        console.log(data);
        this.buyNumber = data;
      },
      getNumberAdd(data) {
        console.log(data);
        this.buyNumber = data;
      },
      getNumberMinus(data) {
        console.log(data);
        this.buyNumber = data;
      },
      buyNow() {
        alert(`您购买了 ${this.buyNumber} 件商品`);
      }
      ,
      post() {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/goodsDetail', this.postData)
          .then((response) => {
            this.goodsInfo = response.data.data.goodsInfo;
            this.goodsDesc = response.data.data.goodsDesc;
            this.imgUrlList = response.data.data.goodsInfo.imgUrlList;
          })
          .catch((error) => {
            console.log(new Error('获取商品详情错误'));
          });
      },
      get_cookie(Name) {
        let search = Name + "=";//查询检索的值
        let returnvalue = "";//返回值
        if (document.cookie.length > 0) {
          let sd = document.cookie.indexOf(search);
          if (sd !== -1) {
            sd += search.length;
            let end = document.cookie.indexOf(";", sd);
            if (end === -1)
              end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue = unescape(document.cookie.substring(sd, end))
          }
        }
        return returnvalue;
      },
      get_nickName() {
        let inf = this.get_cookie('userId').split('_')[0];
        if (inf !== '') {
          this.nickName = inf;
        }
        else {
          this.nickName = '你好，请登录';
        }
      },
      setPostData() {
        let detailsSes = sessionStorage.getItem('detailsId');
        if (detailsSes != null) {
          this.postData.goodsId = detailsSes;
        }
        else {
          alert('商品详情获取失败');
        }
      }
    },
    mounted() {
      this.post();
      this.get_nickName();
      this.setPostData();
      this.hasLogin();
    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";

  .red {
    box-sizing: border-box;
    border: 1px solid transparent;
  }

  .nav {
    width: 100%;
    height: 20px;
  }

  .goods-imgs {
    width: 400px;
    height: 500px;
  }

  .goods-right {
    width: 620px;
    height: 500px;
    padding: 0 25px;
    overflow: hidden;
  }

  .details {

  }

  .goods-title {
    font-size: 48px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .goods-tag {
    height: 160px;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }

  .goods-tag li {
    box-sizing: border-box;
    height: 40px;
    width: auto;
    float: left;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(82, 182, 33, 1);
    border: 1px solid rgba(82, 182, 33, 1);
    border-radius: 20px;
    padding: 0 33px;
    line-height: 40px;
    margin: 6px;
  }

  .goods-add {
    height: 260px;
    width: 100%;
    padding: 10px;
  }

  .goods-price {
    width: 220px;
    height: 35px;
    line-height: 35px;
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(61, 58, 58, 1);
  }

  .sale-price {
    font-size: 35px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(232, 33, 57, 1);
  }

  .price-link {
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(232, 33, 57, 1)
  }

  .add-num {
    width: 100%;
    height: 45px;
    margin-top: 15px;
    line-height: 45px;
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(61, 58, 58, 1);
  }

  .goods-stock {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .add-now {
    margin-top: 40px;
    width: 299px;
    height: 53px;
    background: rgba(0, 87, 171, 1);
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    line-height: 53px;
    text-align: center;
  }

  /*底部规格*/

  .goods-detail {
    margin-top: 30px;
    width: 100%;
    height: 150px;
    overflow: hidden;
  }

  .goods-detail ul {
    width: 320px;
    height: 100%;
    float: left;
    margin: 0 10px;
    padding: 10px;

  }

  .goods-detail ul li {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(61, 58, 58, 1);
    line-height: 30px;
  }

  .goods-detail-img {
    width: 1026px;
    height: auto;
    text-align: center;
  }

</style>
