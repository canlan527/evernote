<template>
  <div id="login">
    <h1>{{msg}}</h1>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <h3 @click="showRegister">创建账户</h3>
            <transition name="slide">
              <div :class="{show: isShowRegister}" class="register">
                <input type="text" placeholder="用户名" v-model="register.username">
                <input type="password" placeholder="密码" @keyup.enter="onRegister" v-model="register.password">
                <p :class="{error:register.isError}"> {{register.notice}} </p>
                <div class="button" @click="onRegister">创建账号</div>
              </div>
            </transition>
            <h3 @click="showLogin">登录</h3>
            <transition name="slide">
              <div :class="{show: isShowLogin}" class="login">
                <input type="text" placeholder="用户名" v-model="login.username">
                <input type="password" placeholder="密码" @keyup.enter="onLogin" v-model="login.password">
                <p :class="{error:login.isError}"> {{login.notice}} </p>
                <div class="button" @click="onLogin">登录</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  import Bus from '@/helpers/bus'

  export default {
    name: 'Login',
    data() {
      return {
        msg: 'This is Login Page',
        isShowRegister: false,
        isShowLogin: true,
        login: {
          username: '',
          password: '',
          notice: '输入用户名和密码',
          isError: false
        },
        register: {
          username: '',
          password: '',
          notice: '创建账号后，请记住用户名和密码',
          isError: false
        }
      }
    },
    methods: {
      showRegister() {
        this.isShowRegister = true;
        this.isShowLogin = false;
      },
      showLogin() {
        this.isShowLogin = true;
        this.isShowRegister = false;
      },
      onRegister() {
        let vRu = this.validUsername(this.register.username);
        let vRp = this.validPassword(this.register.password)
        if(!vRu.isValid) {
          this.register.isError = true;
          this.register.notice = vRu.notice;
          return;
        }
        if(!vRp.isValid) {
          this.register.isError = true;
          this.register.notice = vRp.notice;
          return; 
        }
        
        Auth.register({username:this.register.username, password: this.register.password}).then(res => {
          this.register.isError = false;
          this.register.notice = '';
          Bus.$emit('userInfo', {username: this.login.username})
          this.$router.push({path: 'notebooks'})
        }).catch(err => {
          this.register.isError = true;
          this.register.notice = err.msg;
        })
      },
      onLogin() {
        let vRu = this.validUsername(this.login.username);
        let vRp = this.validPassword(this.login.password)
        if(!vRu.isValid){
          this.login.isError = true;
          this.login.notice = vRu.notice;
          return;
        }
        if(!vRp.isValid) {
          this.login.isError = true;
          this.login.notice = vRp.notice;
          return;
        }
        
        Auth.login({username:this.login.username, password: this.login.password}).then(res => {
          this.login.isError = false;
          this.login.notice = '';
          Bus.$emit('userInfo', {username: this.login.username})
          // 开始跳转
          this.$router.push({path: 'notebooks'})

        }).catch(err => {
          console.log('err' + err.msg)
          this.isError = true;
          this.login.notice = err.msg
        }) 
      },
      validUsername(username) {
        return {
          isValid: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(username),
          notice:'用户名3~15个字符，仅限于字母数字下划线中文'
        }
      },
      validPassword(password) {
        return {
          isValid: /^.{6,16}$/.test(password),
          notice: '密码长度为6~16个字符'
        }
      }

    }
  }
</script>

<style lang="less" scoped>
.modal-mask {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, .7);
   display: table;
   transition: opacity .3s ease;
   z-index: 100;
   .modal-wrapper {
     display: table-cell;
     vertical-align: middle;
    .modal-container {
      width: 800px;
      height: 500px;
      margin: 0 auto;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
      display: flex;
      .main {
        flex: 1;
        background: #36bc64 url(https://th.bing.com/th/id/R67627f38c37c203a16fe9c821e6136eb?rik=tMNs3RQhEuWG%2fw&riu=http%3a%2f%2felkstonebasements.com%2fwp-content%2fuploads%2f2015%2f11%2fFree-estimate.jpg&ehk=inddLFn%2bV7z3dpguxVk4tsPBEBKVfbLbBBbObGoKfs4%3d&risl=&pid=ImgRaw) center center no-repeat;
        background-size: contain;
      }
      .form {
        width: 270px;
        border-left: 1px solid #ccc;
        overflow: hidden;

        h3 {
          margin-top: -1px;
          padding: 10px 20px;
          font-weight: normal;
          font-size: 16px;
          border-top: 1px solid #eee;
          cursor: pointer;

          &:nth-of-type(2) {
            border-bottom: 1px solid #eee;
          }
        }
        .button {
          background-color: #2bb964;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-weight: bold;
          color: #fff;
          border-radius: 4px;
          margin-top: 18px;
          cursor: pointer;
        }
        .login,.register {
          padding: 0 20px;
          border-top: 1px solid #eee;
          height: 0;
          overflow: hidden;
          transition: height .4s;
          &.show {
            height: 193px;
          }

          input {
            display: block;
            width: 100%;
            height: 35px;
            padding: 0 6px;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 14px;
            margin-top: 10px;
          }
          input:focus {
            border: 3px solid #9dcaf8;
          }
          p {
            margin-top: 10px;
            font-size: 12px;
            color: #444;
          }
          .error {
            color: red;
          }
        }
        .login {
          border-top: 0;
        }
      }
    }
  }

}

</style>