<template>
<div>
   <div class="good_main" ref="goodmain">
      <div class="goodleft" ref="goodleft" :style="{height:heightbox+'px'}">
         <ul>
           <li v-for="(item,index) in GoodsData"
             :class="{'cur':currentIndex===index}"
            @click="selectmenu(index,$event)">
           	  {{item.name}}
           </li>
         </ul>
      </div>

      <div class="goodright" ref="goodright" :style="{height:heightbox+'px'}">
         <ul>
           <li v-for="item in GoodsData" class="food-list foo-list-hook" >
           	  <p class="itemtitle">{{item.name}}</p>
           	  <ul>
           	    <li class="goodfoods" v-for="foods in item.foods"  @click="clickfn(foods)">
           	    	<dl>
           	    	  <dt><img :src="foods.icon" /></dt>
           	    	  <dd>
           	    	  	 <h6 class="goodtitle">{{foods.name}}</h6>
           	    	  	 <p class="goodprice">￥{{foods.price}}</p>

                       <!--<v-cartcontrol  :food='foods'></v-cartcontrol>-->
           	    	  </dd>
           	    	</dl>
           	    </li>
           	  </ul>
           </li>
         </ul>
      </div>
   </div>

   <!--购物车-->
    <!--<v-shopcart ref:shopcart :selectFoods='selectFoods' :delivery-price='20' :min-price='10'></v-shopcart>-->
   <!--购物车-->
      <v-goodsart ref="goodsart" :artdata="artdata"></v-goodsart>

 </div>

</template>

<script>
import BScorll from 'better-scroll';
import shopcart from '../shopcart/shopcart';
import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';
import goodsart from './goodsart';
import { Lazyload ,Indicator} from 'mint-ui';

const ERR_OK = 0;

  export default{
  	data(){
       return{
       	GoodsData:[],
       	listheight:[],
       	scrollY:0,
       	artshow:false,
       	artdata:[]
       }
  	},
  	components:{
  		'v-shopcart':shopcart,
        'v-cartcontrol':cartcontrol,
        'v-goodsart':goodsart
  	},
  	watch(){

  	},
  	computed:{
  		/*
  		this.$on("artshopdata",function(data){
             console.log(data);
  		})
  		*/
  		//获取总价格

  	},
    created(){
    	//关闭正在加载中
         Indicator.close();
       this.classMap =['decrease','discount','special','invoice','guarantee']
       this.$http.get('/api/goods').then((res)=>{
         res = res.body;
          if(res.errno === ERR_OK){
            this.GoodsData = res.goods;

            this.$nextTick(()=>{
                this.initScroll();
                this.conheight();
             })
          }
       })

       

    },
    computed:{
     
      heightbox(){
    		let height = window.innerHeight - 90;
    		return height;
    	},
      //判断左边点击的索引和返回的索引一样
      currentIndex(){
          for(let i=0;i<this.listheight.length;i++){
              let height1 = this.listheight[i];
              let height2 = this.listheight[i+1];
              if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
              	//console.log(10,i);
                 return i;
              }
          } 
          return 0;   
       },
      change(val){
      	 this.artshow = val
      },
      selectFoods(){
         let foods =[];
        this.GoodsData.forEach((item)=>{
        
           item.foods.forEach((food)=>{
               if(food.count){
                  foods.push(food)
               }
           })
        })
        return foods;
      }
    },
    methods:{
     //点击左侧菜单
     selectmenu(index,event){

     	if(!event._constructed){
           return;
     	}
     	let fooList = this.$refs.goodright.getElementsByClassName("food-list");
     	let el = fooList[index];
     	this.rightscroll.scrollToElement(el,300);//根据点击左侧索引来实现联动的效果
     },
     //点击右侧信息进入详细页面
      clickfn(item){
        // this.artshow = true,
         this.artdata = item;
         this.$refs.goodsart.show();//获得详细页的show方法
      },	
      selectFood(food,event){
          this.selectedFood = food;
          this.$refs.foodgw.show(); //获得food中的show方法
      },
     initScroll(){
        this.meuscroll = new BScorll(this.$refs.goodleft, {
        	click:true
        })
        this.rightscroll = new BScorll(this.$refs.goodright, {
          probeType:3 ,//实时滚动的位置
          click:true
        })
        this.rightscroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(Math.round(pos.y)) //实时拿到滚动的值
        })
      },
      conheight(){
        let fooList = this.$refs.goodright.getElementsByClassName("food-list");
        let height=0;
        this.listheight.push(height);
        for(let i=0;i<fooList.length;i++){
            let item = fooList[i];
            height +=item.clientHeight;
            this.listheight.push(height);
        }
      },
    }
  }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
ul li{list-style:none;}
.good_main{
	display:flex;
	position:absolute;
	top:40px;
	left:0;
	width:100%;
	overflow:hidden;
}
.goodleft{
	flex:0 0 30%;
	width:30%;
	height:520px;
	background:#e8e8e8;
}
.goodleft li{
	padding:10px 10px 10px 30px;
	font-size:.5rem;
	border-bottom:1px solid #d4d4d4;
}
.goodleft li.cur{
	background:#fff;
	color:#ffa827;
}
.goodright{
	flex:1;
	width:70%;
	height:450px;
	float:left;
}
.itemtitle{
	font-size:16px;
	padding:5px;
	background: #efefef
}
.goodfoods{
	overflow:hidden;
	padding:10px;
	border-bottom:1px solid #ddd;
}
.goodfoods dt{
	width:30%;
	float:left;
}
.goodfoods dt img{
	width:100%;
}
.goodfoods dd{
	width:60%;
	float:right;
}
.goodtitle{
	font-size:16px;
}
.goodprice{
	color:#d50841;
	padding:5px 0;
}

</style>
