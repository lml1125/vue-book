<template>
<div>
  <div class="zw" v-show="!listdata.length"> 
     暂无购物商品，请去首页购买
  </div>
   <div class="shop_box" v-show="listdata.length">
       <ul class="shop_ul">
         <li v-for="(item,index) in listdata"> 
           <div class="shop_left">
             <mt-switch v-model="item.ischeck"></mt-switch>
             
           </div>
           <div class="shop_img">
           
             <img width="79" height="79" :src="item.image" />
           </div>
           <div class="shop_right">
           		
               <h2 class="shop_title">{{item.ischeck}}{{item.name}}</h2>
               <p class="shop_price">{{item.price}}<del>{{item.oldPrice}}</del> <span>x{{item.count}}</span></p>
               <!--<v-cartcontrol :food="listdata"></v-cartcontrol>-->
           </div>
         </li>
       </ul>
   </div>

   <div class="jiesuan_box" v-show="listdata.length">
    合计：{{totalPrice}}
    <p class="jisuan_btn" @click="js">结算</p>
   </div>
   <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible"
    cancelText=""
    >
</mt-actionsheet>
</div>
</template>

<script>
import BScorll from 'better-scroll';
import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';
import { Actionsheet ,MessageBox,Indicator} from 'mint-ui';
  export default{
     data(){
       return{
         value:false,
         listdata:[],
         sheetVisible:false,
         actions:[]
         
       }
     },
     components:{
      'v-cartcontrol':cartcontrol
    },
    created(){
    	this.getcount();
    	
    },
    computed:{
    	//获取总价格
    	totalPrice(){

    		let total = 0;
    		this.listdata.forEach((food)=>{
    			if(food.ischeck){
    				console.log(true);
              total +=food.price * food.count
    			}    
    		})
    		return total;
    	}
    },
    methods:{

       //获取到数量选中组件中的数值
       getcount(count){
       	console.log(111);
       	console.log(JSON.parse(localStorage.getItem("bottomdata")));
       	this.listdata = JSON.parse(localStorage.getItem("bottomdata")).ob || [];
       	
       	console.log(this.listdata);
       	   //关闭正在加载中
           Indicator.close();
           let badge = document.getElementById("badge");
          // badge.innerText = localStorage.getItem("counts")
          // let shopxx = document.getElementById("shopxx");
           //console.log(shopxx.innerHTML);
           //this.listdata.push(JSON.parse(localStorage.getItem("bottomdata")))

       },
       js(){
       	
       	if(this.totalPrice){
         this.actions = [];
       	 this.sheetVisible =true
       	 var _this = this
       	 this.actions.push({
       	 	name:"你需要支付"+this.totalPrice+"元 确认",
       	 	method:function(){
       	 		MessageBox('提示', '结算完成');
       	 		setTimeout(()=>{
       	 		//	localStorage.setItem("bottomdata","")
       	 			
       	 		
       	 			_this.listdata = _this.listdata.filter((item)=>{
			       		 return !item.ischeck
			       	})
       	 			
       	 			localStorage.setItem("bottomdata",{ob:_this.listdata})
       	 			localStorage.setItem("counts",0)
       	 			//localStorage.setItem("userdata",{ob:checktrue})
       	 		},2000)
               
       	 	}
       	 });
       	}else{
       		MessageBox('提示', '选择你要结算的商品');
       	}


       }

    }

  }
</script>

<style>
.shop_ul li{
  padding:10px 0;
  border-bottom:1px solid #ddd;
  overflow:hidden;
}
.shop_left{
  float:left;
}
.shop_img{
  width:79px;
  height:79px;
  margin: 0 10px;
  float:left;
}
.shop_right{
  float:left;
  width:55%;
}
.shop_title{
  font-size:16px;
  color:#ffa827;
}
.shop_price{
	color:#d00;
}
.shop_price span{
	float:right;
	color:#000;
}
.jiesuan_box{
	height:40px;
	border-top:1px solid #ddd;
	line-height:40px;
	position:fixed;
	bottom:60px;
	left:0;
	width:100%;
	box-sizing: border-box;
	background:#fff;
	padding:0 10px;
}
.jisuan_btn{
	display:inline-block;
	width:80px;
	height:40px;
	color:#fff;
	background:linear-gradient(to left top, red, red);
	text-align:center;
	float:right;
}
.zw{
	text-align:center;
	color:#999;
	justify-content: center;
	padding-top:50%;
	font-size:16px;
}
.mint-actionsheet{
	bottom:60px
}
</style>
