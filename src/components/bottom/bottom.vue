<template>
   <div class="mint-tabbar is-fixed" v-show="isshow">
     <router-link to='/home' class="mint-tab-item">
       <div class="mint-tab-item-icon"><i class="fa fa-home"></i></div> 
       <div class="mint-tab-item-label">首页</div> 
     </router-link>
     <router-link to='/goods' class="mint-tab-item">
       <div class="mint-tab-item-icon"><i class="fa fa-gg"></i></div> 
       <div class="mint-tab-item-label">分类</div> 
     </router-link>
     <router-link to='/shop' class="mint-tab-item">
       <mt-badge size="small" id="badge">{{badenum}}</mt-badge>
       <div id="shopxx" style="display:none"></div>
       <div class="mint-tab-item-icon"><i class="fa fa-shopping-cart"></i></div> 
       <div class="mint-tab-item-label">购物车</div> 
    </router-link>
     <router-link to='/user' class="mint-tab-item">
      <div class="mint-tab-item-icon"><i class="fa fa-user"></i></div> 
      <div class="mint-tab-item-label">我的</div> 
     </router-link> 
   </div>
</template>

<script>
import {vueobj} from '../../comm.js'
import {getItem} from '../../localstorage.js'
console.log(getItem);
//var  html=[];


//var num =  localStorage.getItem("counts") || 0;
var html ={ob :[]};

 var num =  0;
vueobj.$on("shopdata",function(data,item){
		     let badge = document.getElementById("badge");
		     let shopxx = document.getElementById("shopxx");
		      let count = badge.innerText -0;
		     count+=data;
		     badge.innerText = count;
		    
		     
		     //shopxx.innerHTML = "";
		     html.ob.push(item);
             //let ob = Object.assign({},html)
             //console.log(JSON.stringify(ob));
		      //html.push(JSON.stringify(item));
		      localStorage.setItem("counts",count)
		      localStorage.setItem("bottomdata",JSON.stringify(html));
		      
		     //shopxx.innerHTML = ob
		     //console.log(html);
         //console.log(shopxx.innerHTML);
		});


  export default{
     // props:['title','flag'],
      data(){
      	 return{
      	 	 isshow:true,
      	 	 isbadge:'',
      	 	 badenum:num
      	 }
      },
      created(){
         //表示当前header.vue组件创建完毕以后被触发   
      },
      computed(){
      	alert(111);

      },
      watch:{
      	//监控当前的路由对象$route 如果url中的路由规则发生了，那么就会触发这个方法
      	'$route':function(newval,oldval){
      		//console.log(newval);
      		if(newval.path === ''){
                 this.isshow = false
      		}
          else{
      			this.isshow = true
      		}
      	}
      },
      methods:{
      	goback(){
      		this.$router.go(-1); // 返回上一页页面
      	}
      }


  }
</script>

<style>
.mint-tabbar.is-fixed{
  z-index:999999;
}
.mint-tabbar a {
  position:relative;
}
.is-size-small{
  position:absolute;
  top:0;right:20px;
 
}
.mint-badge.is-primary{
   background:#d00;
}
</style>
