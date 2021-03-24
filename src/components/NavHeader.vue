<template>
  <div class="header">
      <div class="nav-topbar">
          <div class="container">
              <div class="topbar-menu">
                  <a href="javascript:;">小米商城</a>
                  <a href="javascript:;">MIUI</a>
                  <a href="javascript:;">云服务</a>
                  <a href="javascript:;">协议规则</a>
              </div>
              <div class="topbar-user">
                  <a href="javascript:;" v-if="username">{{username}}</a>
                  <a href="javascript:;" v-if="!username" @click="Login">登录</a>
                  <a href="javascript:;" v-if="username">我的订单</a>
                  <a href="javascript:;" v-if="!username">注册</a>
                  <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span> 购物车</a>
              </div>
          </div>
      </div>
      <div class="nav-header">
          <div class="container">
              <div class="header-logo">
                  <a href="/#/index"></a>
              </div>
              <div class="header-menu">
                  <div class="item-menu">
                      <span>小米手机</span>
                      <div class="children">
                          <ul>
                              <li class="product" v-for="(item,index) in phoneList" :key="item.id">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img :src="item.mainImage" alt="">
                                      </div>
                                      <div class="pro-name">{{item.name}}</div>
                                      <div class="pro-price">{{PhonePrice(index)}}</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="item-menu">
                      <span>RedMi</span>
                  </div>
                  <div class="item-menu">
                      <span>电视</span>
                      <div class="children">
                          <ul>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米壁画电视 65英寸</div>
                                      <div class="pro-price">6999元</div>
                                  </a>
                              </li>
                               <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米全面屏电视E55A</div>
                                      <div class="pro-price">1999元</div>
                                  </a>
                              </li>
                               <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                      </div>
                                      <div class="pro-name">小米电视4A 32英寸</div>
                                      <div class="pro-price">699元</div>
                                  </a>
                              </li>
                               <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米电视4A 55英寸</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                               <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米电视4A 65英寸</div>
                                      <div class="pro-price">2699元</div>
                                  </a>
                              </li>
                               <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                      </div>
                                      <div class="pro-name">查看全部</div>
                                      <div class="pro-price">查看全部</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="header-search">
                  <div class="wapper">
                      <input type="text" name="keyword">
                      <a href="javascript:;"></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"NavHeader",
    data(){
        return {
            username:"",
            phoneList:[],
        }
    },
    computed:{
        
    },
    mounted(){
        this.getProductList();
    },
    methods:{
        Login(){
            this.$router.push("/login");
        },
        getProductList(){
            this.axios.get("/products",{
                 params:{
                    categoryId:"100012",
                    //pageSize:6,
                 }
            }).then(res => {
                this.phoneList = res.list.slice(0,6) || [];
            })
        },
        PhonePrice(value){
            return "￥"+ this.phoneList[value].price.toFixed(2) + "元";
        },
        goToCart(){
            this.$router.push("/cart");
        }
    },
   

}
</script>

<style lang="scss">
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;
            line-height: 39px;
            background-color: #333333;
            color:#B0B0B0;
            .container{
                @include flex();
                a{
                    /* a标签颜色优先级大于class样式 */
                    display: inline-block;
                    color:#B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    margin-right: 0;
                    color: #FFF;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 110px;
                position: relative;
                @include flex();
                .header-logo{
                    width: 55px;
                    height: 55px;
                    display: inline-block;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content:'';
                            display: inline-block;
                            @include bgImg(55px,55px,"/imgs/mi-logo.png");
                            transition: margin .2s;
                        }
                         &:after{
                            content:'';
                            display: inline-block;
                            @include bgImg(55px,55px,"/imgs/mi-home.png");
                        };
                        &:hover::before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                };
                .header-menu{
                    flex: 1;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color:#333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 110px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        };
                        overflow: hidden;
                        &:hover{
                            color:$colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        };
                        .children{
                            opacity: 0;
                            position: absolute;
                            overflow: hidden;
                            height:0px;
                            top:110px;
                            left:0px;
                            width: 1226px;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
                            z-index: 10;
                            background-color: #fff;
                            transition: all .5s;
                            .product{
                                position: relative;
                                float:left;
                                width: 16.6%;
                                //height: 220px;
                                font-size: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    height: 111px;
                                    width:auto;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    height: 12px;
                                    line-height: 12px;
                                    font-weight: bold;
                                    margin-top: 12px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    height: 12px;
                                    line-height: 12px;
                                    color:$colorA;
                                };
                                &:before{
                                    content:'';
                                    position: absolute;
                                    top: 28px;
                                    right: 0px;
                                    height: 100px;
                                    width: 1px;
                                    background-color: $colorF;
                                }
                                &:last-child:before{
                                    display: none;
                                }
                            }
                        }
                    }                    
                };
                .header-search{
                    width: 319px;
                    .wapper{
                        height: 50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border:none;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            box-sizing: border-box;
                            height: 50px;
                            padding-left: 14px;
                            outline: none;
                           
                        }
                        a{
                            display: inline-block;
                            @include bgImg(18px,18px,"/imgs/icon-search.png");
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>