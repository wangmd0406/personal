<template>
  <div>
    <!--&lt;!&ndash; 轮播图&ndash;&gt;-->
    <!--<div class="Sowing wx">-->
    <!--<div class="Sowing_nav">-->
    <!--<ul id="hover" class="hover">-->
    <!--<li class="hover_index">-->
    <!--品牌-->
    <!--<ul class="hover_item">-->
    <!--<li v-for="brand in brands">-->
    <!--<img :src="brand.images" alt="">-->
    <!--</li>-->
    <!--<li v-for="brand in brands">-->
    <!--<img :src="brand.images" alt="">-->
    <!--</li>-->
    <!--<li v-for="brand in brands">-->
    <!--<img :src="brand.images" alt="" class="hover_in">-->
    <!--</li>-->
    <!--<li v-for="brand in brands">-->
    <!--<img :src="brand.images" alt="" class="hover_in">-->
    <!--</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--规格-->
    <!--<ul class="hover_item">-->
    <!--<li>222</li>-->

    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--花纹-->
    <!--<ul class="hover_item">-->
    <!--<li>333</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--用途-->
    <!--<ul class="hover_item">-->
    <!--<li>444</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--时速-->
    <!--<ul class="hover_item">-->
    <!--<li>555</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--路面-->
    <!--<ul class="hover_item">-->
    <!--<li>666</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="hover_index">-->
    <!--载重量-->
    <!--<ul class="hover_item">-->
    <!--<li>777</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--<script src="../"></script>-->

    <!--<div class="Sowing_img">-->
    <!--<ul>-->
    <!--<li>-->
    <!--<a href="#">-->
    <!--<img src="../assets/images/首页_slices/banner_01.png" alt="" class="active">-->
    <!--</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->

    <!--&lt;!&ndash; 轮播点 &ndash;&gt;-->
    <!--<div class="lbd">-->
    <!--<span></span>-->
    <!--<span></span>-->
    <!--<span></span>-->
    <!--<span></span>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash; 轮胎信息 &ndash;&gt;-->
    <!--<div class="ltxx wx">-->
    <!--<ul class="ltxx_box">-->
    <!--<li class="ltxx_box_item" v-for="">{{}}</li>-->
    <!--</ul>-->
    <!--</div>-->

    <!-- 轮胎列表 -->
    <div class="wx">
      <div id="app">
        <div class="goods_list fl" v-for="todo in todos">
          <div class="goods_top">
            <img class="goods_pic" :src="todo.imgUrl"/>
            <div class="goods_pic_information">
              <div class="goods_bottom">
                <p></p>
                <ul class="goods_item">
                  <li>
                    {{todo.brandName}}
                    <strong>
                      <span style="font-size: 16px">￥ </span>
                      <span style="font-size: 20px;padding: 0;margin: 0;">{{todo.salePrice.split('.')[0]}}</span>.<span
                      style="font-size:14px; padding: 0;margin: 0;">{{todo.salePrice.split('.')[1]}}</span>
                    </strong>
                  </li>
                </ul>
                <div class="goods_tag">
                  <p>{{todo.brandName}}</p>
                  <p>{{todo.layer}}</p>
                  <p>{{todo.standard}}</p>
                  <p>{{todo.purpose}}</p>
                  <p>{{todo.road}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="goods_bottom">
            <p class="goods_title">
              <!--获取人名在哪-->
              <strong>{{todo.salePrice}}</strong>&nbsp;&nbsp;等{{todo.soldNum}}位客户购买过该轮胎
              <a href="javascript:;" title="加入购物车"><span class="goods_add"></span></a>
            </p>

          </div>
          <div class="translate">
            <img src="../assets/images/首页_slices/pc-logo-02.png" alt="">
          </div>
        </div>
        <div class="clear"></div>

        <!-- 底部内容分页 -->
        <div class="goods_page">
          <li v-show="hide"><a href="javascript:;">上一页</a></li>
          <li><a href="javascript:;" class="page_active">{{page}}</a></li>
          <li><a href="javascript:;">{{page+1}}</a></li>
          <li><a href="javascript:;">{{page+2}}</a></li>
          <li><a href="javascript:;">{{page+3}}</a></li>
          <li><a href="javascript:;">下一页</a></li>
        </div>
      </div>
    </div>


    <!--重写-->


  </div>
</template>

<script>
  // 当前页
  export default {
    name: "home_body",
    data() {
      return {
        todos: '',
        // 当前页
        page: '',
        hide: true,
        postData:
          {page: '1', total: '18'}

      }
    },
    methods: {
      postGoods() {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/searchGoods',this.postData)
          .then((response) => {
            this.todos = response.data.data.goodsList;
            this.page = response.data.data.currentPage;
            console.log(this.page);
            console.log('成功');
          })
          .catch((error) => {
            console.log('失败' + error);
          });
      },
      hide_prev() {
        if (this.page != 1) {
          this.hide = false;
        }
      }
    },
    mounted() {
      this.postGoods();
      this.hide_prev();
    },
    computed() {

    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";
  @import "../assets/css/home_body.css";
  /*@import "https://unpkg.com/element-ui/lib/theme-chalk/index.css";*/
  .wx {
    margin-top: 50px;
    height: auto;
  }

  .goods_item li {
    text-align: left;
  }

  .goods_item li strong {
    float: right;
  }

  .goods_tag p {
    margin-right: 9px;
  }
</style>
