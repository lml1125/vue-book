<template>
<div class="main">
     <v-swiper :imglist="list"></v-swiper>
      


      <div class="mui-content">
         <ul class="home_con">
            <li>
             <router-link to='/newsfresh'>
                <span><i class="fa fa-address-book"></i></span>
                <div>新鲜事</div>
             </router-link>
            </li>
           <li>
              <router-link to='/photo'>
                <span><i class="fa fa-book"></i></span>
                <div>图书</div>
              </router-link>
            </li>
            <li>
              <router-link to='/goods'>
                <span><i class="fa fa-line-chart"></i></span>
                <div>电子</div>
              </router-link>
            </li>
            <li>
              <router-link to='/pic'>
                <span><i class="fa fa-file-image-o"></i></span>
                <div>活动</div>
              </router-link>
            </li>
            <li>
              <a href="#" @click="jfclick">
                <span><i class="fa fa-pie-chart"></i></span>
                <div>积分</div>
              </a>
            </li>
            <li>
              <router-link to='/sign'>
                <span><i class="fa fa-hand-pointer-o"></i></span>
                <div>签到</div>
              </router-link>
            </li>

         </ul>
      </div>

   <ul class="bottom" v-for="item in newdata">
     <li> 
       <img v-lazy="item.imageUrl"/> 
       <!--<p>{{item.title}}</p>-->
     </li>
   </ul>
 </div>
</template>

<script>
import swiper from '../swiper/swiper';
import {newfn} from '../../json/homenews.js';
import { Indicator ,MessageBox } from 'mint-ui';
let newdata = new newfn();
  export default{
      data(){
      	 return {
      	 	 list:[
      	 	    {img:'../static/img/74.jpg'},
      	 	    {img:'../static/img/75.jpg'},
      	 	    {img:'../static/img/77.jpg'}
            ],
            newdata:newdata
      	 }
      },
      components:{
         'v-swiper':swiper
      },
      created(){
      	//关闭正在加载中
         Indicator.close();
        //this.getlunbo();//当home.vue组件调用完成之后，在执行
        //this.getbottom();
      },
       methods: {
         getlunbo(){
            this.$http.jsonp('/getlunbo').then(res=>{
              this.list = res.body;
            },res=>{
              console.log('图片加载失败');
            })
         },
         getbottom(){
         	 this.$http.get('http://www.ctex.cn/article/quanzi/jhtj/rss.json').then(res=>{
         	 	console.log("111加载成功");
         	 	console.log(res);
         	 },res=>{
               console.log('11图片加载失败');
         	 })
         },
         jfclick(){
           MessageBox('提示', '暂未开放');
         }
       }


  
  }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.home{
	margin-top:1.6rem;
}
.bottom li{
 margin-bottom:8px;
 text-align:center;
 position:relative;
}
.bottom li img{
	width:100%;
	margin:0;
	padding:0;
}

.bottom li p{
	position:absolute;
	bottom:0px;
	left:0;
	width:100%;
	height:40px;
	background:rgba(0,0,0,.6);
	color:#fff;
	line-height:40px;
}
</style>
