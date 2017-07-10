<template>
   <mt-header fixed  :title="title" ref="header">
       <a slot="left" @click="goback" v-if="isshow">
          <mt-button icon="back">返回</mt-button>
       </a>
       <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
</template>

<script>
  export default{
      data(){
      	 return{
      	 	 isshow:false,
           title:"图书世界"
      	 }
      },
      created(){
         //表示当前header.vue组件创建完毕以后被触发   
         this.ishow = false
      },
      watch:{
      	//监控当前的路由对象$route 如果url中的路由规则发生了，那么就会触发这个方法
      	'$route':function(newval,oldval){
      		console.log(newval);
      		if(newval.path === '/home'){
             this.isshow = false
      		}else if(newval.path === '/user'){
             this.title="会员中心"
          }else if(newval.path === '/user/addres'){
             this.title="收货地址"
             this.isshow = true
          }else if(newval.path === '/user/userdd'){
             this.title="我的订单"
             this.isshow = true
          }else if(newval.path === '/user/userxx'){
             this.title="个人信息"
             this.isshow = true
          }else{
          	this.title="图书世界"
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
.mint-header{
	background:#ffa827;
}
.mint-header.is-fixed{
	z-index:9999;
}
.mint-header-title{
  font-size:14px;
}
</style>
