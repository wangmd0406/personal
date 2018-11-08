<template>
  <div>
    <Header nick-name="你好，请登录"></Header>
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
      return {}
    },
    components: {
      Header,
      Footer,
      HomeBody,
      Slide,
      Aside
    }
  }
</script>

<style scoped>

</style>
