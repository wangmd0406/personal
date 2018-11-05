<template>
  <div>
    <!-- 底部 -->
    <div id="recommend">
      <div class="wx" style="clear: both">
        <div class="nominate">
          <span class="fl">为你推荐</span>
          <span class="anniu fr">
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </span>
        </div>
        <div class="recommend">
          <div class="tj_luntai" v-for="recommend in recommends">
            <div class="recommend_img">
              <img :src="recommend.imgUrl">
            </div>
            <p class="tj_luntai_p">{{recommend.maker}}</p>
            <!--<ul class="tj_luntai_ul" v-for="pattern in recommend.pattern">-->
              <!--<li class="recommend_left fl">{{recommend.pattern}}</li>-->
            <!--</ul>-->
            <ul class="tj_luntai_ul">
              <li class="recommend_left fl">{{recommend.brandName}}</li>
              <li class="recommend_left fl">{{recommend.layer}}</li>
              <li class="recommend_left fl">{{recommend.standard}}</li>
              <li class="recommend_left fl">{{recommend.purpose}}</li>
              <li class="recommend_left fl">{{recommend.road}}</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
       <!--友情链接-->
      <div class="wx">
        <div class="friendship">
          <ul class="friendship_nav" id="friendship">
            <li class="fl"><a href="javascript:;">友情链接1</a></li>
            <li><span class="shuxuian">|</span></li>
            <li class="fl"><a href="javascript:;">友情链接2</a></li>
            <li><span class="shuxuian">|</span></li>
            <li class="fl"><a href="javascript:;">友情链接3</a></li>
          </ul>
        </div>
      </div>
      <p class="copyright">Copyright&nbsp;&copy2018&nbsp;Qiongdao&nbsp;Chelianche&nbsp;Technology Co.,Ltd.All&nbsp;rights&nbsp;reserved.</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "footer",
    data() {
      return {
        recommends: ''
      }
    },
    methods: {
      post() {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/searchGoods', {page: '1', total: '4'})
          .then((response) => {
            this.recommends = response.data.data.goodsList;
            console.log('成功');
          })
          .catch((error) => {
            console.log('失败' + error);
          });
      }
    },
    mounted() {
      this.post()
    }
  }
</script>

<style scoped>
  @import "../assets/comm/css/common.css";
  @import "../assets/css/footer.css";
  #recommend{
    margin-top: 70px;
    background-color: #f5f5f5;
    padding-bottom: 40px;
  }


</style>
