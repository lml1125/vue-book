<template>
<div class="main">
  <div class="pic_top">
   <ul >

     <li @click="getbook('tushu')" :class="cur=='tushu'?'cur':''">全部</li>
     <li @click="getbook('html')"  :class="cur=='html'?'cur':''">html</li>
     <li @click="getbook('css')"   :class="cur=='css'?'cur':''">css</li>
     <li @click="getbook('javascript')" :class="cur=='javascript'?'cur':''">javascript</li>
     <li @click="getbook('jquery')" :class="cur=='jquery'?'cur':''">jquery</li>
     <li @click="getbook('webpack')" :class="cur=='webpack'?'cur':''">webpack</li>
     <li @click="getbook('java')" :class="cur=='java'?'cur':''">java</li>
   </ul>
  </div> 
   <ul class="pic_box">
     <li v-for="item in bookData">
       <router-link v-bind='{to:"/photoart/"+item.id}'>
         <img v-lazy="item.images.large"/>
         <p>{{item.title}}</p>
       </router-link>
     </li>
   </ul>
 </div>
</template>

<script>

const ERR_OK = 0;
import { Indicator } from 'mint-ui';
  export default{
    data(){
       return{
         bookData:[],
         cur:'tushu'
       }
    },
      created(){
          this.getbook();
      },
      methods:{
        getbook(val){
        	console.log(val);
        	if(!val){
             this.cur ="tushu"
        	}else{
             this.cur = val
        	}
          this.bookData = "";
          //提示正在加载中
          Indicator.open('加载中...');
      
          let url = 'https://api.douban.com/v2/book/search?q='+val;
          this.$http.jsonp(url).then(res=>{
                res = res.body;
                /*this.bookData = res.books;*/
                console.log(res.books);
                this.bookData = res.books.filter((item)=>{
                	
                   return item.title.indexOf("Undefined")==-1
                })
                //关闭正在加载中
                Indicator.close();
          },res=>{
             console.log("加载失败")
          })

        }
      }
  }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.pic_top{
	position:fixed;
	top:40px;
	left:0;
	z-index:11;
	background:#fff;
}
.pic_box{
	position:absolute;
	top:80px;
	left:0;
	width:100%;
	z-index:10;
	margin-bottom:50px;
}
.pic_box li img{
  width:100%;
  height:300px;
}
.pic_box li{
  height:300px;
  margin:10px 0;
  position: relative;
}
.pic_box li p{
  position: absolute;
  bottom:0px;
  left:0;
line-height:20px;
padding:10px 5px;
width:100%;
color:#fff;
  background: rgba(0,0,0,.8);
}
.pic_top{
  max-width:375px;
  height:40px;
  line-height: 40px;
  border-bottom:1px solid #ddd;
  overflow-x: auto;
  overflow-y: hidden
}
.pic_top ul{
  width:600px;
}
.pic_top li {
  display:inline-block; 
  padding:0 10px;
  color:#666;
}
.pic_top li.cur{
 color:#ffa827;
}
/*图片正在加载中的*/
image[lazy-loading]{
  width:100%;
  height:300px;
  margin:auto;
}
</style>
