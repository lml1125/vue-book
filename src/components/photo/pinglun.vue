<template>
<div class="pinglun">
   <h6 class="pinglun_title">发表评论</h6>
   <div class="text">
     <textarea v-model="val"></textarea>
    
   </div>
   <div class="btn_box"><mt-button type="primary" class="ping_btn" @click="fabiao_btn">发表评论</mt-button></div>
   <h6 class="pinglun_title">评论列表</h6>
   <ul class="pinglun_con">
     <li v-for="item in listdata" v-show="listdata.length"> 
        <b>{{item.title}}</b>
        <p> 
          用户:{{item.user}}
          <span>{{item.time | gettime}}</span>
        </p>
     </li>
   </ul>
</div>
</template>

<script>
import { Indicator } from 'mint-ui';
/*var store={
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value))
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}
var list = store.fetch("getdata");*/
export default{
    data(){
       return{
         artData:{},
         imglist:[],
         listdata:[],
         val:''
       }
    },
    watch:{
		/*arr:{
			handler:function(){
				store.save('getdata',this.listdata);
			},
			deep:true
		}*/
      
	},
    created(){
      this.getart();
      this.getimg();
    },
  
  filters:{
    gettime:function(value) {
        var date = new Date(value);
        var Y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var H = date.getHours();
        var i = date.getMinutes();
        var s = date.getSeconds();
        if (m < 10) {
            m = '0' + m;
        }
        if (d < 10) {
            d = '0' + d;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (i < 10) {
            i = '0' + i;
        }
        if (s < 10) {
            s = '0' + s;
        }
        var t = Y + '-' + m + '-' + d + ' '+H +':'+i+':'+s;
        return t;
      }
  },
    methods:{
      getart(){
         //提示正在加载中
        //  Indicator.open('加载中...');
          const url = 'https://api.douban.com/v2/book/'+this.$route.params.id;
          this.$http.jsonp(url).then((res)=>{
            this.artData = res.body;
             //关闭正在加载中
              //  Indicator.close();
               console.log(11111);
               this.imglist.push({
                 'src':res.body.images.small,
                 'w':600,
                 'h':400
               },{
                'src':res.body.images.large,
                'w':600,
                'h':400
               },{
                'src':res.body.medium.small,
                'w':600,
                'h':400
               });
               console.log(this.imglist);
          },(res)=>{
             console.log("内容加载失败");
          })
      },
      getimg(){
         
      },
      fabiao_btn(){
      	 if(this.val==''){
            alert("内容不能为空")
      	 }
          this.listdata.push({
          	  title:this.val,
          	  time:new Date(),
          	  user:'刘******'
          })
          this.val=''
      }
      
    }
} 
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.pinglun{
	padding:0 10px;
}
.pinglun_title{
	color:#000;
	padding:10px 0;
}
.text textarea{
	width:100%;
	height:100px;
}
.ping_btn{
	text-align:center;
}
.pinglun_con li{
	padding:10px 10px;
	border-bottom:1px solid #ddd
}
.pinglun_con li:nth-child(odd){
	background:#efefef;
}
.pinglun_con li p{
	padding-top:10px;
}
.pinglun_con li p span{float:right;}
.pinglun_title{
	font-size:16px;
}
.btn_box{
	display:block;
	text-align:right;
}
</style>
