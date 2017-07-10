<template>
  <div v-show="showFlag" class="fooddiv" transition="move" ref="fooddiv">
     <div class="food-content">
        <div class="image-header">
           <img :src="food.image" />
            <div class="back" @click="hide">
              <i class="icon-arrow_lift"><</i>
            </div>
        </div>

        <div class="food-con">
          <h1 class="food-title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}分</span>
            <span class="rating">好评{{food.sellCount}}</span>
          </div>
        </div>

        <div class="food-price">
          <span class="now">￥{{food.price}}</span>
          <span class="old">￥{{food.oldPrice}}</span>
        </div>
       
     </div>
    
    <div class="cartcontrol-wrapper">
      <v-cartcontrol :food='food'></v-cartcontrol>
    </div>
    <div class="buy" v-show="!food.count || food.count===0" @click="addFirst">
      加入购物车
    </div>

    <div class="rating">
        <h1 class="rating">商品评价</h1>
        <v-ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></v-ratingselect>
    </div>


  </div>  
</template>

<script>
import BScorll from 'better-scroll';
import vue from 'vue';
import cartcontrol from '../../components/cartcontrol/cartcontrol.vue'
import ratingselect from '../../components/ratingselect/ratingselect.vue'
const POSITIVE = 0;
 const NEGATIVE = 1;
 const ALL = 2;
  export default{
       props:{
       	food:{
       		 type:Object
       	}
       },
       data(){
       	return{
       		showFlag:false,
       		selectType:ALL,
       		onlyContent:true,
       		desc:{
       			all:'全部',
                positive:'推荐',
                negative:'吐槽'
       		}
       	}
       },
	    components:{
	       'v-cartcontrol':cartcontrol,
	       'v-ratingselect':ratingselect
	    },
       methods:{
       	show(){
       		this.showFlag = true;
       		this.selectType = ALL;
       		this.onlyContent = true;

       		this.$nextTick(()=>{
       			if(!this.scroll){
                   this.scroll = new BScorll(this.$refs.fooddiv,{
                   	click:true
                   })
       			}else{
       				this.scroll.refresh()
       			}
       		})
       	},
       	hide(){
       		this.showFlag= false;
       	},
       	addFirst(event){
             vue.set(this.food,'count',1)
       	}
       }
  }
</script>

<style>
.fooddiv{
	position:fixed;
	top:0;
	left:0;
	bottom:2rem;
	z-index:30;
	width:100%;
	background:#fff;
}
.move-transition{
	transition:all 0.2s linear;
	transform:translate3d(0,0,0);
}
.move-enter,.move-leave{
	transform:translate3d(100%,0,0);
}
.image-header{
	position:relative;
	width:100%;
	height:0;
	padding-top:100%;

}
.image-header img{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
.back{
	position:absolute;
	top:10px;
	left:0;
}
.icon-arrow_lift{
	display:block;
	padding:10px;
	font-size:20px;
	color:#fff;
}
.food-con{
	padding:18px;
}
.food-title{
	line-height:14px;
	margin-bottom:8px;
	font-size:14px;
	font-weight:700;
	color:rgb(7,17,27);
}
.detail{
	margin-bottom:18px;
	line-height:10px;
	font-size:0;
}
.sell-count,.rating{
	font-size:10px;
	color:rgb(147,153,139);
}
.sell-count{
	margin-right:10px;
}
.food-price{
	padding:0 18px;
	font-weight:700;
	line-height:24px;
}
.now{
	margin-right:8px;
	font-size:14px;
	color:rgb(240,20,20);
}
.old{
	text-decoration:line-through;
	font-size:10px;
	color:rgb(147,153,159);
}
.cartcontrol-wrapper{
  position:absolute;
  right:12px;
  bottom:12px;
}
.buy{
   position:absolute;
   right:18px;
   z-index:10;
   height:24px;
   line-height:24px;
   padding:0 12px;
   box-sizing:border-box;
   border-radius:12px;
   font-size:10px;
   color:#fff;
   background:rgb(0,160,220);
}
.rating{
	padding:0 18px;
}
.rating h1{
	font-size:18px;
	padding:10px 0;
	color:#000;
}
</style>
