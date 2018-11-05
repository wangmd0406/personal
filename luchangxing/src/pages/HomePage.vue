<template>
  <div>
    <Header></Header>
    <Slide></Slide>
    <HomeBody></HomeBody>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header';
  import Footer from '../components/footer';
  import HomeBody from '../components/home_body';
  import Slide from '../components/slide'

  export default {
    name: "HomePage",
    data() {
      return {}
    },
    components: {
      Header,
      Footer,
      HomeBody,
      Slide
      // API
    }
  }
</script>

<style scoped>

</style>
