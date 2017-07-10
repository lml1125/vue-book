<template>
  <div class="cartcontrol">
     <div>
       <div class="cart-decrease"  @click="jianCart">-</div>
       <div class="cart-count" >{{food.count || 1}}</div>
       <div class="cart-add" @click="addCart">+</div>
     </div>
     <!--动画小球-->
     <!---
     <transition v-on:before-enter='beforeEnter'
                 v-on:enter="enter"
                 v-on:after-enter="afterEnter">
       <div class="ball" v-show="isshow"></div>
     </transition>
     -->
     <mt-button type="danger" size="small" @click="toshopdata">加入购物车</mt-button>
  </div>
</template>

<script>
import Vue from 'vue'
import {vueobj} from '../../comm.js'
import {setItem} from '../../localstorage.js'
  export default{
    props:['food'],
	  data(){
	    return{
	      isshow:false //小球显示隐藏
	    }
	  },
  methods:{
     addCart(ev){
     console.log(this.food);
      /* if(!ev._constructed){
          return;
       }*/
        console.log("click");
       if(!this.food.count){
         // this.food.count=1;
         Vue.set(this.food,'count',1)
         console.log(Vue.set);
       }else{
        this.food.count++;
       }
       //this.vuex('cart.add',ev.target)
     },
     jianCart(ev){
      alert(111);
      console.log("click");
       /*if(!ev._constructed){
          return;
       }*/
       if(this.food.count){
         this.food.count--;
       }
     },
     //实现购物的数据通知
     toshopdata(){
        //发送通知
        let counts = this.food.count || 1
         vueobj.$emit('shopdata',counts,this.food)

        //将商品的数据存储起来
         setItem({count:this.food.count}),

        //出现动画效果 
        this.isshow = !this.isshow;
     },
     //定义小球
     //小球的动画开始动态
     //通常我们使用的是translate3d来开始硬件加速，提高动画的流畅度
     beforeEnter(el){
       el.style.transform = 'translate3d(0,0,0)'
     },
     //小球的动画进行到最后的状态
     enter(el,done){
       //想要有动画的过程，就必须保证页面是在刷新的
       var  offset = el.offsetWidth;//设置这句话就能保证小球实时移动
       //小球的动画进行到最后的状态
        el.style.transform = 'translate3d(80px,280px,0)'
        done();
     },
     //小球的动画结束状态 要将控制小球显示和隐藏的变量isshow复位
     afterEnter(el){
        this.isshow = !this.isshow
     }

  }
}
</script>

<style>
/*小球*/
.ball{
  width:20px;
  height:20px;
  border-radius:50%;
  background:red;
  position:relative;
  top:0;
  left:30px;
  transition:all 1s cubic-bezier(.08,.74,.98,.25);
}
.drop-enter-active,.drop-leave-active{
    transition: 1s;
    transform:translate(20px,390px,0);
}
.drop-enter,.drop-leave-active{
   opacity:0;

}


.cartcontrol{
  width:100%;
  
}
div.cart-add,div.cart-decrease{
  padding:0;
  width:1rem;
  height:1rem;
  border:1px solid #000;
  border-radius:50%;
  float:left;
  text-align:center;
  line-height:1rem;
  color:#d00;
  font-size:14px;
}
div.cart-count{
  width:1rem;
  height:1rem;
   float:left;
    text-align:center;
  line-height:1rem;
}

</style>
