import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const Home = () => import("pages/Home")
const Index = () => import("pages/index")
const Product = () => import("pages/product")
const Detail = () => import('pages/detail.vue')
const Login =  () => import('pages/login.vue')
const Cart = () => import('pages/cart.vue')
const Order =  () => import('pages/order.vue')
const OrderList = () => import('pages/orderList.vue')
const OrderConfirm = () => import('pages/orderConfirm.vue')
const OrderPay = () => import('pages/orderPay.vue')
const AliPay =  () => import('pages/alipay.vue')
const routes = [
    {
      path:'/',
      name:'home',
      redirect:'/index',
      component:Home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        }, {
          path: '/product/:id',
          name: 'product',
          component: Product
        }, {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component:Order ,
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: OrderList,
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component:AliPay
        }
      ]
    }
  ]

const router = new Router({
    routes:routes
})

export default router