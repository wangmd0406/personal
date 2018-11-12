<template>
  <div>
    <Header :nick-name="nickName"></Header>
    <Slide></Slide>
    <HomeBody></HomeBody>
    <Footer></Footer>
    <Aside></Aside>
  </div>
</template>

<script>
  import Header from '../components/header';
  import Footer from '../components/footer';
  import HomeBody from '../components/home_body';
  import Slide from '../components/slide';
  import Aside from '../components/aside';

  export default {
    name: "HomePage",
    data() {
      return {
        nickName:''
      }
    },
    components: {
      Header,
      Footer,
      HomeBody,
      Slide,
      Aside
    },
    methods:{
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
          this.nickName=inf;
        }
        else {
          this.nickName='你好，请登录';
        }
      }
    },
    mounted(){
      this.get_nickName();
    }
  }
</script>

<style scoped>

</style>
