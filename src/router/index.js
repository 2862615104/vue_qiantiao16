import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/account/login/Login.vue'
//商品路由
import Shop from '../components/shop/Shop.vue'
import GoodsList from '../components/shop/goods/List.vue';
import GoodsDetail from '../components/shop/goods/Detail.vue';
import Shopcart from '../components/shop/shopcart/Shopcart.vue';
import OrderSite from '../components/shop/order/Site.vue';
import OrderPay from '../components/shop/order/Pay.vue';
import OrderComplete from '../components/shop/order/Complete.vue';

 
Vue.use(Router) 
let goods=[
  { name: 'goodsList', path: '/goods/list', component: GoodsList },
  { name: 'goodsDetail', path: '/goods/detail/:id', component: GoodsDetail},
]

let shopcart = [
    { name: 'shopcart', path: 'shopcart', component: Shopcart },
  ];
let order = [
 { name: 'orderSite', path: 'order/site/:ids', component: OrderSite }, // 需要知道哪些商品要下单
 { name: 'orderPay', path: 'order/pay/:id', component: OrderPay }, // 需要知道订单ID才能付款
 { name: 'orderComplete', path: 'order/complete', component: OrderComplete }
  ];
export default new Router({
  routes: [
    //账号
    { name: 'login', path: '/login', component: Login },
    //商城路由
    { name: 'shop', path: '/shop', component: Shop, children: [...goods, ...shopcart, ...order] }
    
  ] 
})
