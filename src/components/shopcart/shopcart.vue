<template>
<div>
  <div class="shopcart">
     <div class="content" @click='toggleList'>
        <div class="content-left">
        	<div class="logo-wrapper">
        	   <div class="logo" :class="{blue:totalCount>0}"></div>
        	   <span class="num">{{totalCount}}</span>
        	</div>
        	<div class="price">{{totalPrice}}元</div>
        	<div class="desc">另需配送费{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="payclass" @click="paybtn">{{pay}}</div>
     </div>
     <div class="ball_container">
        <div v-for="ball in balls" v-show="ball.show" class="ball" transition="drop">
          <div class="inner"></div>
        </div>
     </div>
     <!--购物车-->
     <div class="shopcart-list" v-show="listShow" transition="fold">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-content" ref="listcontent">
           <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">
                   {{food.name}}
                </span>
                <div class="price">
                   <span>￥{{food.price * food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                   <v-cartcontrol  :food='food'></v-cartcontrol>
                </div>
              </li>
           </ul>
        </div>
     </div>
  </div>
  <div class="list-mask" v-show="listShow" transition='fade'>
  </div>

  <div class="pay_box">
    11111
  </div>
</div>
</template>

<script>
import BScorll from 'better-scroll';
import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';
  export default{
    props:{
    	selectFoods:{//选择商品的数组
    		type:Array,
    		default(){
               return [
               {
               	price:30,
               	count:1
               }
               ];
    		}
    	},
      
    	deliveryPrice:{
    		type:Number,
    		default:0
    	},
    	minPrice:{
    		type:Number,
    		default:0
    	}
    },
    data(){
         return {
            balls:[
               {show:false},
               {show:false},
               {show:false},
               {show:false},
               {show:false}
            ],
             fold:true
         }
        
      },
    computed:{
    	totalPrice(){
    		let total = 0;
    		this.selectFoods.forEach((food)=>{
                   total +=food.price * food.count
    		})
    		return total;
    	},
    	totalCount(){
	    	let count = 0;
	    	this.selectFoods.forEach((food)=>{
	           count +=food.count;
	    	})
	    	return count;
        },
        pay(){
        	if(this.totalPrice === 0){
               return `￥${this.minPrice}元起送`
        	}else if(this.minPrice > this.totalPrice){
               return `还差￥${this.minPrice - this.totalPrice}元起送`
        	}else{
        		return '结算'
        	}
        },
        payclass(){
        	 if(this.minPrice > this.totalPrice){
               return `hui`
        	}else{
        		return `blue`
        	}
        },
        listShow(){
           if(!this.totalCount){
               this.fold  = true;
               return false;
           }
           let show = !this.fold;
           if(show){
             this.$nextTick(()=>{
                if(!this.scroll){
                  this.scroll = new BScorll(this.$refs.listcontent,{
                    click:true
                  })
                }else{
                  this.scroll.refresh();
                }
             })
           }
           return show;

        }

    },
    methods:{
      drop(el){
        console.log(el);
      },
      toggleList(){
         if(!this.totalCount){
          return;
         }
         this.fold = !this.fold;
      },
      empty(){
        this.selectFoods.forEach((item)=>{
          item.count = 0;
        })
      },
      paybtn(){

      }
    },
    components:{
       'v-cartcontrol':cartcontrol
    }
    /*
    transitions:{
       drop:{
          beforeEnter(el){
             let count = this.balls.length;
             while(count--){
                let ball = this.balls[count];
                if(ball.show){
                   let rect = ball.el.getBoundingClientRect();
                   let x = rect.left - 32;
                   let y = -(window.innerHeight - rect.top - 22);
                   el.style.display="";
                   el.style.webkitTransform = `tranlate3d(0,${y}px,0)`;
                   el.style.transform = `tranlate3d(0,${y}px,0)`;
                   let inner = el.getElementsByClassName('inner-hook')[0];
                   inner.style.webkitTransform = `tranlate3d(${x}px,0,0)`;
                }
             }
          },
          enter(el){
            let rf = el.offestHeight;
            this.$nextTick(()=>{
                el.style.webkitTransform ='tranlate3d(0,0,0)';
                el.style.transform ='tranlate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                   inner.style.webkitTransform ='tranlate3d(0,0,0)';
            })
          },
          afterEnter(el){
            let ball = this.dropBalls.shift();
            if(ball){
              ball.show=false;
              el.style.display = "none"
            }
          }
       }
    }
    */

  }
</script>

<style>
.shopcart{
	position:fixed;
	left:0;
	bottom:0px;
  z-index:50;
	height:2rem;
	width:100%;
	background: #000
}
.content{
	display:flex;
	background:#141d27;
	font-size:0;
}
.content-left{
	flex:1;
}
.logo-wrapper{
	display:inline-block;
	position:relative;
	top:-.5rem;
	margin:0 .4rem;
	padding:.3rem;
	width:1.8rem;
	height:1.8rem;
	border-radius:50%;
	background:#141d27;

}
.num{
	position:absolute;
	top:0;right:0;
	width:1rem;
	height:1rem;
	background:red;
color:#fff;
text-align:center;
line-height: 1rem;
	 border-radius:30%;
}
.logo{
	width:100%;
	height:100%;
	background:#ddd;
	border-radius:50%;
}
.blue{
	background:#ffa827;
}
.content-left .price{
	display:inline-block;
	color:#fff;
	position:relative;
	left:.4rem; 
	top:-1.3rem;
	font-size:.5rem;

}
.desc{
	display:inline-block;
	position:relative;
	left:1.3rem; 
	top:-1.3rem;
	font-size:.5rem;
	color:#fff;
}

.content-right{
	flex:0 0 4rem;
	width:4rem;
	color:#d00;
	line-height:2rem;
	text-align:center;
	background:#999;
}

.ball_container{

}
.ball{
  position: fixed;
  left:1.2rem;
  bottom:1rem;
  z-index:200;
}
.drop-transition{
   transition:all 0.4s;
}
.inner{
  width:1rem;
  height:1rem;
  border-radius: 50%;
  background: red;
  transition: all .4s;
}
.shopcart-list{
  position:absolute;
  bottom:2rem;
  left:0;
  z-index:-1;
  width:100%;
}
.fold-transtion{
   transition:all 1s;
   transform:translate3d(0,-100%,0);
}
.fold-enter,.fold-leave{
  transform:translate3d(0,0,0);
}
.list-header{
  height:2rem;
  line-height:2rem;
  padding: 0 1rem;
  background:#f3f5f7;
  border-bottom:2px solid #000;

}
.title{
  float:left;
  font-size:.6rem;
  color:red;
}
.empty{
  float:right;
  font-size:.5rem;
  color:rgb(0,160,200);
}
.list-content{
  padding:0 .5rem;
  max-height:10rem;
  overflow:hidden;
  background:#fff;
}
.food{
  position:relative;
  padding:.5rem 0;
  box-sizing:border-box;
  border-bottom:1px solid #000;
}
.name {
  line-height:24px;
  font-size:14px;
  color:rgb(7,17,27);
  display:inline-block
}
.food .price{
  display:inline-block;
  line-height:24px;
  font-size:14px;
  font-weight:700;
  color:red;
}
.cartcontrol-wrapper{
  position:absolute;
  top:0;right:0;
}
.list-mask{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:40;
  background:rgba(7,17,27,0.6);
}
.fade-transition{
  opacity:1;
  background:rgba(7,17,27,0.6)
}
.fase-enter,.fade-leave{
  opacity:0;
  background:rgba(7,17,27,0)
}

</style>
