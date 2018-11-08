<template>
  <div>
    <Header login="1" status="你好，服务商"></Header>
    <div class="con red">
      <section class="login_main">
        <div class="box">
          <label class="lbl01" for="text"><img><input placeholder="请输入您绑定的手机号" type="text" name="text" id="text"></label>
          <button>确认</button>
          <span>手机不在身边？
            <router-link to="pwdemail">
              <a href="javascript:;">邮箱找回</a>
            </router-link></span>
        </div>
      </section>
    </div>
    <Footer login="1"></Footer>
    <Aside></Aside>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import Aside from '../components/aside';


  export default {
    name: "ForgetPwd",
    components: {
      Header,
      Footer,
      Aside
    }
  }
</script>

<style scoped>
  .red {
    box-sizing: border-box;
    border: 1px solid red;
  }

  .con {
    width: auto;
    height: 660px;
    background-color: rgba(0, 255, 255, 0.51);
    position: relative;
  }

  /*登录框*/
  .login_main {
    width: 352px;
    height: 219px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.8;
    border: 1px red solid;
    position: absolute;
    top: 178px;
    left: 852px;
  }

  .login_main .box label {
    display: block;
    width: 300px;
    height: 42px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(210, 210, 210, 1);
    margin: 42px 26px 0;
  }

  .login_main .box label img {
    width: 22px;
    height: 25px;
    padding: 0px 11px 0px 14px;
    margin: 8px 11px 9px 0;
    border-right: 2px solid rgba(210, 210, 210, 1);
    float: left;
  }

  .login_main .box label input {
    height: 40px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 40px;
    outline: none;
    border: 0;
  }

  .login_main .box button {
    width: 300px;
    height: 42px;
    background: rgba(82, 182, 33, 1);
    border-radius: 10px;
    margin: 36px 26px 0;
    cursor: pointer;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 43px;
  }

  .login_main .box span {
    width: 154px;
    height: 15px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 43px;
    margin-left: 172px;
  }

  .login_main .box span a {
    color: rgba(82, 182, 33, 1);
  }
</style>
