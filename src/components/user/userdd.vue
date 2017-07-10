<template>
<div class="addres_box">
	<P v-show="!listdata.length" style="text-align:center">暂无订单</P> 
     <ul class="shop_ul" v-show="listdata.length">
         <li v-for="item in listdata"> 
           <div class="shop_img">
             <img width="79" height="79" :src="item.image" />
           </div>
           <div class="shop_right">
               <h2 class="shop_title">{{item.name}}</h2>
               <p class="shop_price">{{item.price}}<del>{{item.oldPrice}}</del> <span>x{{item.count}}</span></p>
             <p class="heji">共{{item.count}}本商品 合计{{totalPrice}}
              <span class="delbtn" @click="delbtn(item)">删除订单</span>
             </p>
           </div>
         </li>
       </ul>
</div>
</template>

<script>
const addres = [
  	    	{
  	    	"name":"红星照耀中国（青少版）",
  	    	"price":26,
  	    	"oldPrice":200,
  	    	"description":"咸粥",
  	    	"sellCount":229,
  	    	"rating":100,
  	    	"ischeck":false,"info":"自1937年初版以来，畅销至今，而董乐山译本已经是今天了解中国工农红军的经典读本。本书真实记录了斯诺自1936年6月至10月在中国西北革命根据地进行实地采访的所见所闻","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"挺好看的","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"很喜欢这本书","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://img13.360buyimg.com/n3/jfs/t6451/285/144113467/137126/e8e4b95e/593a460aNe3be65ad.jpg","image":"http://img10.360buyimg.com/n1/jfs/t6529/12/1597200321/317650/aa428072/59546fa8Nf119214d.jpg","infoimage":"http://img30.360buyimg.com/vc/jfs/t6127/40/3382880871/362252/4f7465fd/59521e81Na3d1c3f4.jpg","count":4
  	    	}
  	    ]

/* var store={
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value))
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}*/
/*var zz = store.fetch("getdata");*/
export default{
	data(){
      return{
      	 listdata:addres,
      	 update:'',
      	 isshow:false
      }
	},
	computed:{
    	//获取总价格
    	totalPrice(){
    		let total = 0;
    		this.listdata.forEach((food)=>{
                    total +=food.price * food.count
    		})
    		return total;
    	}
    },
    methods:{
    	delbtn(item){
           return this.listdata = this.listdata.filter((val)=>{
             return item.name !=val.name
           })
    	}
    }
	/*watch:{
		listdata:{
			handler:function(){
				store.save('getdata',this.listdata);
			},
			deep:true
		}
	}*/
}
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.addres_box{
	padding-top:5px;
}

.address-list{ margin: 20px 3%; color: #666; padding-bottom: 20px;}
.address-list li{ border-radius: 5px; border:1px solid #ddd; padding: 10px 0px; margin-bottom: 20px;}
.address-list .curr{ border: 1px solid #cc6916;}
.address-list li p{ padding: 2px 20px;}
.order-add1{ font-size:14px; color: #bbb;}
.address-list hr{ margin: 10px 0;}
.address-cz{ overflow: hidden; padding:0 20px; color: #bbb;}
.address-cz a{ color: #bbb;}
.address-cz label{ float: left; margin: 0;}
.address-cz a{ float: left; width: 30%; text-align: right; font-size: 14px;}
.mark{
	width:100%;
	height:100%;
	background: rgba(0,0,0,.5);
	position:absolute;
	top:0;
	left:0;
	z-index:9999999;

}
.mark ul{
   background: #fff;
   border-radius:10px;
   width:80%;
   padding:0 10px;
   box-sizing:border-box;
   position:absolute;
   top:20%;
   left:calc(50% - 40%);
}
.mark ul input{
	border:1px solid #ddd;
	line-height: 30px
}
.mark ul li p{
	padding:10px 0;
}
.textarea textarea{
	width:100%;min-height:80px;
	margin:0 auto;
}
.btn{
	width:100%;
	margin-bottom:10px;
}
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
  width:65%;
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
.delbtn{
	float:right;
	width:100px;height:30px;
	border:1px solid #ddd;
	text-align:center;
	line-height:30px;
	border-radius:15px
}
.heji{
	line-height:30px;
	padding-top:20px;
}
</style>
