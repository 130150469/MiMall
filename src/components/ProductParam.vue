<template>
  <div class="nav-bar" ref="navBar">
     <div :class="{'fixed':1,'fixed-box':isFixed}">
          <div class="container">
          <div class="pro-title">
              {{title}}
          </div>
          <div class="pro-param">
            <a href="javascript:;" >概述</a><span>|</span>
            <a href="javascript:;">参数</a><span>|</span>
            <a href="javascript:;">用户评价</a>
            <slot name="buy" ></slot>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    props:{
        title:{
            type:String,
            default:"",
        }
    },
    data(){
        return {
            isFixed:false
        }
    },
    mounted(){
      window.addEventListener("scroll",this.checkFixed)
    },
    computed:{
       
    },
    methods:{
       checkFixed(){
        let y = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop; 
        if(!this.$refs.navBar) return ;
        this.isFixed =  this.$refs.navBar.offsetTop < y;
       }
    },
    destroyed(){
        window.removeEventListener("scroll",this.checkFixed,false)
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/reset.scss';
    @import '../assets/scss/config.scss';
    @import '../assets/scss/mixin.scss';
    .nav-bar{
        height:71px;
        line-height: 71px;
        box-sizing: border-box;
        border-top: 1px solid $colorH;
        .fixed{
            .container{
                @include flex();
                .pro-title{
                    font-size: $fontH;
                    color:$colorB;
                    font-weight: bold;
                }
                .pro-param{
                    font-size: $fontJ;
                    span{
                        margin:0 10px;
                    }
                    a{
                        color:$colorC;
                        display: inline-block;
                        margin-right: 10px;
                    }
                    
                }
            }
        }
        .fixed-box{
            position: fixed;
            top: 0;
            left: 0;
            padding:0 calc((100% - 1226px) / 2);
            background-color: #fff;
        }
    }
</style>