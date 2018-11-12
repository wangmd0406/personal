<template>
  <div>
    <Header login="1" :nick-name="nickName"></Header>
    <div class="con-main">
      <div class="con red">
        <section class="login_main">
          <div class="box">
            <label class="lbl01" for="username"><img/>
              <input placeholder="请输入您的用户名" type="text" name="username" id="username" v-model="loginName"
                     maxlength="20"></label>
            <label class="lbl02" for="password"><img/>
              <input placeholder="请输入您的用户密码" type="password" name="password" id="password" v-model="loginPwd"
                     maxlength="20"></label>
            <button v-on:click="login">登录</button>
            <span>
            <router-link to="forgetpwd">
              <a href="javascript:;">忘记密码</a>
            </router-link></span>
          </div>
        </section>
      </div>
    </div>
    <Footer login=1></Footer>
    <Aside></Aside>
  </div>
</template>

<script>
  import Header from '../components/header';
  import Footer from '../components/footer';
  import Aside from '../components/aside';


  export default {
    name: "logForm",
    data() {
      return {
        loginName: '',
        loginPwd: '',
        nickName: '你好，服务商'
      }
    },
    components: {
      Header,
      Footer,
      Aside
    },
    methods: {
      login() {
        if (this.loginName.trim() === '' || this.loginPwd.trim() === '') {
          alert('请输入用户名或密码！');
        }
        else {
          this.$axios.post('http://lcx.zzcplus.com/api/user/login', {
            'loginName': this.loginName,
            'loginPwd': this.loginPwd
          })
            .then((response) => {
              if (response.data.retInfo === '成功') {
                this.nickName = response.data.data.nickName;
                alert('成功' + response.data.data.loginName + '！！！');
                let userStr = response.data.data.nickName + '_' + response.data.data.accessToken;
                document.cookie = "userId=" + userStr;
                sessionStorage.setItem('hasLogin',userStr);
                this.$router.push({path:'/'});
              }
              else {
                alert(response.data.retInfo);
              }
            })
            .catch((error) => {
              console.log(new Error('登录出错:') + error);
            });
        }
      },
      test() {

      }

    },
    mounted() {
    }
  }
</script>

<style scoped>
  /*.red {*/
    /*box-sizing: border-box;*/
    /*border: 1px solid red;*/
  /*}*/

  .con-main {
    max-width: 1440px;
    margin: 0 auto;
    height: auto;
  }

  .con {
    width: auto;
    min-width: 1350px;
    height: 660px;
    background-color: #f5f5f5;
    background-image: url("../assets/images/首页_slices/pc-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    margin: 0 auto;
  }

  /*登录框*/

  .login_main {
    width: 352px;
    height: 280px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.8;
    position: absolute;
    top: 178px;
    right: 236px;
  }

  .login_main .box label {
    display: block;
    width: 300px;
    height: 42px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(210, 210, 210, 1);
  }

  .login_main .box label.lbl01 {
    margin: 42px 26px 0;
  }

  .login_main .box label.lbl02 {
    margin: 20px 26px 0;
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
    margin: 31px 26px 0;
    cursor: pointer;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 43px;
  }

  .login_main .box span {
    width: 56px;
    height: 14px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(77, 77, 77, 1);
    line-height: 43px;
    margin-left: 266px;
  }

  .login_main .box span a {
    color: rgba(77, 77, 77, 1);
    text-decoration: none;
  }

</style>
