<template>
 <transition     v-on:before-enter='beforeEnter'
                 v-on:enter="enter"
                 v-on:after-enter="afterEnter">
 <div class="good_art" v-show="isshow" ref="goodart">
   <p class="back" @click="back">< 返回</p>
   <img :src="artdata.image" />
   <h6 class="art_title">{{artdata.name}}</h6>
   <b class="art_pricenew">{{artdata.price}}</b>
   <p class="art_price">价格:<del>{{artdata.oldPrice}}</del>  <span>月销量{{artdata.sellCount}}</span></p>
   <div style="padding:10px 0 30px 0">
     <v-cartcontrol :food='artdata'></v-cartcontrol>
   </div>
   <h5 class="sub_title">简介</h5>
   <p class="art_info">{{artdata.info}}</p>
   <p v-show="artdata.infoimage"><img width="100%" :src="artdata.infoimage" /></p>
<div class="ping_div">
   <h5 class="sub_title">评论</h5>
   <ul class="pinglun_box">
    <Li v-for="item in artdata.ratings"> 
      <div class="ping_user">
        <img :src="item.avatar" />
        <span>{{item.username}}</span>
        <time>{{item.rateTime | gettime}}</time>
      </div>
      <p>{{item.text}}</p>
    </Li>
   </ul>
  </div> 
 </div>
</transition>
</template>

<script>
import swiper from '../swiper/swiper';
import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';
 export default{
 	props:['artdata','artshow'],
 	data(){
 		return{
           isshow:false,
           xqshow:false,
           childdata:''
 		}
 	},
 	components:{
 		'v-cartcontrol':cartcontrol
 	},
 	methods:{
 		show(){
            this.isshow = true;
 		},
 		//返回按钮
 		back(){
 			//this.isshow = false
 			this.$refs.goodart.style.transform = 'translate3d(100%,0,0)';
	        this.$refs.goodart.style.transition = "all .5s";
	        setTimeout(()=>{
               this.isshow = false
	        },500)

 			//this.$emit('artshopdata',this.isshow)
 			//this.$refs.goodart.style.display="none"
 			
 		},
 		 beforeEnter(el){
	       el.style.transform = 'translate3d(100%,0,0)';
	       el.style.transition = "all .5s"
	     },
	     enter(el,done){
	       //想要有动画的过程，就必须保证页面是在刷新的
	       var  offset = el.offsetWidth;//设置这句话就能保证小球实时移动
	       //小球的动画进行到最后的状态
	        el.style.transform = 'translate3d(0,0,0)'
	        done();
	     },
	     //小球的动画结束状态 要将控制小球显示和隐藏的变量isshow复位
	     afterEnter(el){
	        this.xqshow = !this.xqshow
	     }
 	},
 	filters:{
 		gettime:function(value) {
        var date = new Date(value);
        var Y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var H = date.getHours();
        var i = date.getMinutes();
        var s = date.getSeconds();
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (i < 10) {
            i = '0' + i;
        }
        if (s < 10) {
            s = '0' + s;
        }
        var t = Y + '-' + m + '-' + d;
        return t;
      }
 	}
 }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.back{
	position:absolute;
	top:0;
	left:0;
	z-index:99990999;
	color:#fff;
}
.good_art{
	position:absolute;
	top:0;
	left:0;
	bottom:50px;
	background:#fff;
	width:100%;
	z-index:9999;
}
.art_title{
	font-size:16px;
	line-height:25px;
	padding: 0 10px;
}
.art_pricenew{
	padding:10px;
	color:#d00;
	font-size:14px;
}
.art_price{
	padding:0 10px;
}
.art_price span{
	float:right;
}

.sub_title{
	font-size:14px;
	padding:10px;
	margin:10px 0;
	background:#efefef;
}
.art_info{
	padding:0 10px;
	line-height:25px;
	text-indent:24px;
}
.pinglun_box li{
	border-bottom:1px solid #ddd;
	padding:10px;
	background:#fff;
}
.ping_user{
	display:flex;
	align-items: center;
	position:relative;
	padding-bottom:10px;
}
.ping_user img{
	flex:0 0 30px;
	display:inline-block;width:30px;height:30px;border-radius:50%;
}
.ping_user span{
	padding-left:10px;
	display:inline-block;
}
.ping_user time{
 position:absolute;
 top:2px;
 right:0;
}
.ping_div{
	background:#fff;
}
.fase{

}
</style>
