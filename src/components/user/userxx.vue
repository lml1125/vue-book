<template>

  <div class="addres_box">
      <ul class="address-list">
	    	<li>
	    		<p>用户名 : {{listdata.name}}</p>
	    		<p>手机号 : {{listdata.iphone}}</p>
	    	    
	    	</li>
	    </ul>
  </div>

</template>

<script>
const addres = {
  	    	"name":"刘女士",
  	    	"iphone":"134******",
  	    }
  
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
</style>
