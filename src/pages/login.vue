<template>
  <div class="login">
      <div class="container">
          <a href="/#/index">
             <img src="/imgs/login-logo.png" alt="">
          </a>
      </div>
      <div class="wrapper">
         <div class="container">
            <div class="login-form">
                <h3>
                    <span class="checked">账号登录</span>
                    <span class="sep-line">|</span>
                    <span>扫码登录</span>
                </h3>
                <div class="input">
                    <input type="text" placeholder="请输入账号" v-model="username">
                </div>
                <div class="input">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="btn-box">
                    <a href="javscript:;" class="btn" @click="login">登录</a>
                </div>
                <div class="tips">
                    <div class="sms" @click="register">手机短信登录/注册</div>
                </div>
            </div>
         </div>
      </div>
      <div class="footer">
          <div class="footer-link">
              <a href="javascript:;">河畔一角主页</a>
              <a href="javascript:;">Vue全栈课程</a>
              <a href="javascript:;">React全家桶课程</a>
              <a href="javascript:;">微信支付专项课程</a>
              <a href="javascript:;">配套课程:Java通用型支付+电商平台双系统实战</a>

          </div>
          <p class="copyright">Copyright ©2020 mi.futurefe.com All Rights Reserved.</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            username:"",
            password:"",
            userId:"",
        }
    },
    methods:{
        login(){
            let { username , password } = this;
            this.axios.post('/user/login',{
                username,
                password,
            }).then(res => {
                this.$cookie.set("userId",res.id,{expires:"1M"}); 
                //to-do 保存用户名 保存用户信息
                this.$router.push("/index")
            }).catch(res =>{
                console.log(res);
            })
        },
        register(){
             this.axios.post('/user/register',{
                username:"wjc",
                password:"wjc",
                email:"130150469@qq.com"
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style scoped lang="scss">
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/base.scss';
    @import '../assets/scss/config.scss';
    @import '../assets/scss/button.scss';
    .login{
        .container{
            img{
                height: 113px;
                width: 231px;
            }
        }
        .wrapper{
            width: 100%;
            height: 583px;
            background: url('/imgs/login-bg.jpg') no-repeat 50%;
            .container{
                position: relative;
                height: 576px;
                .login-form{
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    width: 410px;
                    height: 510px;
                    background: $colorG;
                    position: absolute;
                    bottom:21px;
                    right: 0px;
                    h3{
                        line-height: 23px;
                        font-size: 24px;
                        margin:40px auto 49px;
                        text-align: center;
                        span{
                            display: inline-block;
                        }
                        .checked{
                            color:$colorA;
                        }
                        .sep-line{
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                      
                    }
                    .input{
                        box-sizing: border-box;
                        width: 100%;
                        height: 50px;
                        border:1px solid #ccc;
                        margin-bottom: 25px;
                        padding-left: 15px;
                        overflow: hidden;
                        input{
                            width: 100%;
                            height: 50px;
                            border: none;
                        }
                    }
                    .btn-box{
                        width: 100%;
                        margin-top: 40px;
                        .btn{
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            font-size: 20px;
                        }
                    }
                    .tips{
                        color: $colorA;
                        margin-top: 20px;
                        .sms{
                            cursor: pointer;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .footer{
            text-align: center;
            font-size: 16px;
            color:$colorC;
            margin-top: 40px;
            margin-bottom: 30px;
            .footer-link{
                margin-bottom: 15px;
                a{
                    color:$colorC;
                    display: inline-block;
                    margin-right: 15px;
                    border-right: 1px solid $colorC;
                    padding-right: 15px;
                }
            }
        }
    }
</style>