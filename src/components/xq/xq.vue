<template>
<div class="xqdiv" v-show="showFlag">
  <!-- 
     <h5>{{xqData.name}}</h5>
     <p>{{xqData.info}}</p> -->
    <h1>提交评论</h1>
    <textarea class="textarea" v-model="val"></textarea>
    <mt-button type="primary" size="large" @click="btnfb">发表</mt-button>

    <h5>评论列表</h5>
    <ul class="commentlist">
      <li class="outwarp" v-for="item in pinglunData">
         <p class="commentitle">{{item.title}}</p>
        <div>
         <p class="user">{{item.user}}</p>
         <p class="time">{{item.time}}</p>
        </div>
      </li>
    </ul>
 </div>
</template>

<script>
import {Toast} from 'mint-ui';
let ERROR_OK = 0;
let pinglun = [
      {
        "title":"刘美丽",
        "user":"刘诶里",
        "time":null
      }
  ]
  export default{
  	/*props:{
        xqData:{
        	type:Object
        }
  	},*/
  	 data(){
  	 	return{
  	 		showFlag:false,
        pinglunData:[],
        val:''
  	 	}
  	 },
  	 created(){
         this.getpinglun();

     },
     computed:{
         
     },
     methods:{
     	getdata(){
           let name = this.$route.params.name;
           /*this.$http.get('/api/pinglun').then(res=>{
             res = res.body
              console.log(res.body);
            if(res.errno === ERROR_OK){
               this.pinglunData = res.pinglun;
             }

           },res=>{
             console.log("评论加载失败");
           })*/
     	},
     	show(){
     		this.showFlag = true;
     	},
      getpinglun(){
         this.$http.get('https://api.douban.com/v2/book/search?q=javascript').then(res=>{
             res = res.body
              console.log(res.body);
            if(res.errno === ERROR_OK){
               this.pinglunData = res.pinglun;
             }

           },res=>{
             console.log("评论加载失败");
           })
              
      },
      btnfb(){
        if(this.val === ''){
         return Toast('提交失败，内容更不能为空');
        }
        this.pinglunData.push({
           title:this.val,
           user:'匿名',
           time:+new Date
        })

        this.val = ''
        setTimeout(function(){

          Toast('提交成功');
        },1000)
      },
      setItem(){
        JSON.stringify(localStorage.setItem("setpl", this.pinglunData))
      },
      getItem(){
        console.log(setpl);
        localStorage.getItem(setpl)
      }
     }
  }
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.dl dd{
  font-size:20px;
}
.xqdiv{
	position:absolute;
	top:0;
	left:0;
	bottom:58px;
	z-index:30;
	width:100%;
	background:#fff;
}
h5{
  color:blue;
  padding:0 10px;
  font-size:14px;
}
.commentlist{
 
  padding:10px;
  border-bottom:1px solid #ddd;
}
.commentitle{
  padding:10px 0;
}
.commentlist div{
   overflow:hidden;
}
.user{float:left;color:blue;}
.time{float:right;color:blue;}
.textarea{
  width:90%;margin:0 auto;
  min-height:100px;
  border:1px solid #ddd;
}

</style>
