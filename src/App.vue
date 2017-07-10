<template>
  <div id="app">
     <v-header :title="title"></v-header>
      <div class="main">
        <router-view></router-view>
      </div>
   <v-bottom :flag="flag"></v-bottom>
  </div>
</template>

<script>
import header from './components/header/header'
import bottom from './components/bottom/bottom'
/*
import {vueobj} from './comm.js'
console.log(vueobj);
vueobj.$on("shopdata",function(data){
     let badge = document.getElementById("badge");
     let count = badge.innerText -0;
     count+=data;
     badge.innerText = count;
});
*/


export default{
    data(){
      return{
        selected:'',
        title:'图书世界',
      	flag:true


      }
    },
    components:{
      'v-header':header,
      'v-bottom':bottom
    }
}
</script>

<style>

</style>
