<template>
<div class="main">
   <div class="newdiv">
    <div  v-for="item in newData" >
     <dl class="dl" v-for="food in item.foods" @click="selectCon(food,$event)">
      <!-- <router-link v-bind='{to:"/xq/"+food.name}'>-->
         <dt><img src='/static/img/timg.jpg' /></dt>
         <dd>
           {{food.name}}
           <p>{{food.info}}</p>
         </dd>
       <!--</router-link>-->
     </dl>
    </div>
   </div>
    <v-xq ref="xqfn" :xqData="xqData"></v-xq> 
 </div>
</template>

<script>
import xq from '../xq/xq.vue';
console.log(xq);
const ERR_OK = 0;
  export default{
      data(){
      	 return {
      	 	 newData:[],
      	 	 xqData:''
      	 }
      },
      created(){
           this.newclick();
      },
      components:{
          "v-xq":xq
      },
      methods:{
        newclick(){
          this.$http.get('/api/goods').then(res=>{
              res = res.body;
            if(res.errno === ERR_OK){
                this.newData = res.goods;
             }
          },res=>{
             console.log("加载失败")
          })
        },
        selectCon(food){
        	this.xqData = food;
        	this.$refs.xqfn.show();
        }
      }
  }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.dl dd{
  float:left;
  width:77%;
  padding-left:3%;

  font-size:14px;
}
.dl dd p{
  font-size:12px;
}
.dl dt{
  width:20%;
  float:left;
}
.dl dt img{
  width:100%;
}
.dl{padding:10px 0;
border-bottom:1px solid #999;
overflow:hidden;}
</style>
