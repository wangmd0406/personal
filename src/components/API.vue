<template>
  <div>
    <h3>商品列表：http://lcx.zzcplus.com/api/goods/searchGoods</h3>
    <p v-text="goodsData"></p>

    <h3>商品详情：http://lcx.zzcplus.com/api/goods/goodsDetail</h3>
    <p v-text="detailData"></p>
  </div>
</template>

<script>
  export default {
    name: "API",
    data() {
      return {
        goodsData: '',
        detailData: ''
      }
    },
    methods: {
      postGoods() {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/searchGoods', {page: '1', total: '10'})
          .then((response) => {
            this.goodsData = response;
            console.log('成功');
          })
          .catch((error) => {
            console.log('失败' + error);
          });
      },
      postDetail() {
        this.$axios.post('http://lcx.zzcplus.com/api/goods/goodsDetail', {goodsId: '18101914153398786319'})
          .then((response) => {
            this.detailData = response;
            console.log('二成功');
          })
          .catch((error) => {
            console.log('error' + error);
          })
      }
    },
    mounted() {
      this.postGoods();
      this.postDetail();
    }
  }
</script>

<style scoped>

</style>
