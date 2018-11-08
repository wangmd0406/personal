<template>
  <div>

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
            {{soldNum}}
            <p class="goods_title" v-if="(todo.soldNum != '0')">
            <!--获取人名在哪-->
            <strong>{{todo.salePrice}}</strong>&nbsp;&nbsp;等{{todo.soldNum}}位客户购买过该轮胎
            <a href="javascript:;" title="加入购物车"><span class="goods_add"></span></a>
          </p>
            <p class="goods_title" v-else="(todo.soldNum = '0')">
              <!--获取人名在哪-->
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>&nbsp;&nbsp;暂时没有用户购买过该轮胎
              <a href="javascript:;" title="加入购物车"><span class="goods_add"></span></a>
            </p>

          </div>
          <div class="translate">
            <img src="../assets/images/首页_slices/pc-logo-02.png" alt="">
          </div>
        </div>
        <div class="clear"></div>

        <!-- 底部内容分页 -->
        <nextPage :total="total" :current-page='current' @pagechange="pagechange"></nextPage>
      </div>
    </div>


    <!--重写-->


  </div>
</template>

<script>
  // 当前页
  import nextPage from '../components/nextPage.vue'

  export default {
    name: "home_body",
    data() {
      return {
        todos: '',
        // 当前页
        page: '',
        hide: true,
        postData:
          {
            page: '1',
            total: '18' //获取条数
          },
        total: 150,     // 记录总条数
        display: 18,   // 每页显示条数
        current: 1,   // 当前的页数

      }
    },
    components: {
      nextPage
    },
    computed:{

    },
    methods: {
      pagechange: function (currentPage) {
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.postData.page = currentPage;
        this.postGoods(this.postData);
      },
      postGoods(postData) {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/searchGoods', postData)
          .then((response) => {
            this.todos = response.data.data.goodsList;
            this.page = response.data.data.currentPage;
            this.total = response.data.data.totalCount;
            console.log(this.page);
            console.log('成功');
          })
          .catch((error) => {
            console.log('失败' + error);
          });
      }
    },
    mounted() {
      this.postGoods(this.postData);
    },
    computed() {

    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";
  @import "../assets/css/home_body.css";
  .wx {
    margin-top: 50px;
    height: auto;
    padding-bottom: 70px;
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
