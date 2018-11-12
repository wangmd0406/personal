<template>
  <div>
    <div class="slide-con">
      <ul class="slide-img">
        <!--<li class="slide-img-li active">-->
          <!--<img src="../assets/images/slideTest.jpg" width="400px" height="400px" alt="">-->
        <!--</li>-->
        <li class="slide-img-li " v-for="(img,index) in imgListList" :key="index">
          <img :src="img" >
        </li>
        <!--<li class="slide-img-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="300px" height="300px" alt="">-->
        <!--</li>-->
        <!--<li class="slide-img-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="200px" height="200px" alt="">-->
        <!--</li>-->
        <!--<li class="slide-img-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="100px" height="100px" alt="">-->
        <!--</li>-->
      </ul>
      <ul class="slide-nav" @ready="navSlide">
        <!--<li class="slide-nav-li nav-active">-->
          <!--<img src="../assets/images/slideTest.jpg" width="90px" height="90px" alt="">-->
        <!--</li>-->
        <li class="slide-nav-li " v-for="(img,index) in imgListList" :key="index">
          <img :src="img" >
        </li>
        <!--<li class="slide-nav-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="90px" height="90px" alt="">-->
        <!--</li>-->
        <!--<li class="slide-nav-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="90px" height="90px" alt="">-->
        <!--</li>-->
        <!--<li class="slide-nav-li">-->
          <!--<img src="../assets/images/slideTest.jpg" width="90px" height="90px" alt="">-->
        <!--</li>-->
      </ul>
      <li class="prev"></li>
      <li class="next"></li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "abbSlide",
    data() {
      return {
        // active:''
      }
    },
    props:{
      imgListList:Array
    },
    methods: {
      readyA(){
        let img_li = document.querySelectorAll('.slide-img-li');
        let nav_li = document.querySelectorAll('.slide-nav-li');
        img_li[0].classList.add('active');
        nav_li[0].classList.add('active');
      },
      navSlide() {
        let img_li = document.querySelectorAll('.slide-img-li');
        let nav_li = document.querySelectorAll('.slide-nav-li');
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let status = 0;
        // img_li[2].classList.add('active');
        for (let i = 0, b = nav_li.length; i < b; i++) {

          nav_li[i].onmouseover = function () {
            status = i;
            clearOther();
            img_li[i].classList.add('active');
            nav_li[i].classList.add('nav-active');
          };
        }
        next.onclick = () => {

          if (status < img_li.length - 1) {
            clearOther();
            img_li[status + 1].classList.add('active');
            nav_li[status + 1].classList.add('nav-active');
            status++;
          }
          else {
            return;
          }
        };
        prev.onclick = () => {
          if (status > 0) {
            clearOther();
            img_li[status - 1].classList.add('active');
            nav_li[status - 1].classList.add('nav-active');
            status--;
          }
          else {
            return;
          }
        };
        let clearOther = () => {
          for (let i = 0; i < img_li.length; i++) {
            img_li[i].classList.remove('active');
            nav_li[i].classList.remove('nav-active');
          }
        };
      }
    },
    mounted() {

      this.readyA();
      this.navSlide();
    }
  }
</script>

<style scoped>
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  div, ul, li, img {
    box-sizing: border-box;
  }

  .slide-con {
    width: 400px;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .slide-img {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .slide-img-li {
    display: none;
  }

  .active {
    display: block;
  }

  .slide-img-li img {
    width: 400px;
    height: 400px;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
  }

  .slide-nav {
    width: 400px;
    height: 90px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .slide-nav-li {
    float: left;
    margin-right: 10px;
    cursor: pointer;
  }

  .slide-nav-li img {
    float: left;
    width: 89px;
    height: 89px;
    border: 1px solid #cbcbcb;
  }

  .nav-active img {
    border: 1px solid #52B621;
  }

  .slide-nav-li img:hover {
    border: 1px solid #52B621;
  }

  .prev, .next {
    width: 43px;
    height: 70px;
    position: absolute;
    top: 165px;
    z-index: 8;
    cursor: pointer;
    transition: all .5s;
  }

  .prev {

    left: 0;
    background: url("../assets/images/首页_slices/left-arr.png") center center no-repeat;
  }

  .next {
    background: url("../assets/images/首页_slices/right-arr.png") center center no-repeat;
    right: 0;

  }

  .prev:hover{
    background: url("../assets/images/首页_slices/left-arr.png") center center no-repeat rgba(0, 0, 0, .3);
  }
  .next:hover{
    background: url("../assets/images/首页_slices/right-arr.png") center center no-repeat rgba(0, 0, 0, .3);
  }
</style>
