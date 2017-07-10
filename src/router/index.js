import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import home from '@/components/home/home'
import news from '@/components/news/news'
import xq from '@/components/xq/xq'
import photo from '@/components/photo/photo'
import photoart from '@/components/photo/photoart'
import sign from '@/components/sign/sign'
import newsfresh from '@/components/home/newsfresh' //新鲜事
import pic from '@/components/pic/pic' //新鲜事
import shop from '@/components/shopcart/shop'
import user from '@/components/user/user'
import newsinfo from '@/components/home/newsinfo'
import addres from '@/components/user/addres'
import userxx from '@/components/user/userxx'
import userdd from '@/components/user/userdd'
Vue.use(Router)
export default new Router({
  linkActiveClass:'is-selected',
  routes: [
    {path: '/',name: 'home',component: home},
    {path: '/home',name: 'home',component: home},
    {path: '/goods',name: 'goods',component: goods},
    {path: '/ratings',name: 'ratings',component: ratings},
    {path: '/seller',name: 'seller',component: seller},
    {path: '/news',name: 'news',component: news},
    {path: '/xq/:name',name: 'xq',component: xq},
    {path: '/photo',name: 'photo',component: photo},
    {path: '/photoart/:id',name: 'photoart',component: photoart},
    {path: '/sign',name: 'sign',component: sign},//签到
    {path: '/pic',name: 'pic',component: pic},//新鲜事
    {path: '/newsfresh',name: 'newsfresh',component: newsfresh},//新鲜事
    {path: '/shop',name: 'shop',component: shop},//购物车
    {path: '/user',name: 'user',component: user},//我的
    {path: '/user/addres',name: 'addres',component: addres},//我的地址
    {path: '/user/userxx',name: 'userxx',component: userxx},//我的个人信息
    {path: '/user/userdd',name: 'userdd',component: userdd},//我的订单
    {path: '/newsinfo/:infoid',name: 'newsinfo',component: newsinfo}//购物车
    
  ]
})
