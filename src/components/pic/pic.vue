
<template>
<div class="main">
    <div class="pic_box">
    <!--搜索start-->
     <div  class="search">
		        <input type="search"
		         placeholder="搜索"
		          class="input_search"
		          style="padding:7px;width:95%;border:none;border-radius:4px;"
		         @keyup.13="getdata"> 
      </div>
    <!--搜索end-->
       <ul class="pic_ul">
         <li v-for="(item, index) in picdata">
	       <img class="preview-img" v-lazy="item.src"  @click="$preview.open(index, picdata)">
	     </li>
	   </ul>
	   
    </div>
 </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { Search } from 'mint-ui';
let data = [
     {
		"src":"http://img1.imgtn.bdimg.com/it/u=2598665673,2667842996&fm=26&gp=0.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://xj.people.com.cn/NMediaFile/2014/0422/LOCAL201404220025000333948761174.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://www.ntsjjgyy.com/Article/UploadFiles/201204/2012040920545010.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://s2.sinaimg.cn/mw690/c1f7e8fdtdcf49d565ca1&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://s13.sinaimg.cn/middle/6b9fdf63hcad049ba7dfc&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://img.zzedu.net.cn/images/include/zt2011/dywhjs/tp_l/2011/12/14/33E232278745B4BA4B464499E8236A34.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://s8.sinaimg.cn/mw690/003VRM2Jty6F8OzaWWz37&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://s10.sinaimg.cn/mw690/003eeZgJzy6RvZ8GzTXe9&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://s11.sinaimg.cn/mw690/003ccinJzy6HhfXBibg6a&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://s15.sinaimg.cn/mw690/aeeb4dc5td10b943efa2e&690",
		'w':600,
        'h':400
	}
]



export default{
	data(){
		return{
			picdata:data,
			imglist:[],
			value:''
		}
	},
	created(){
		this.getpic();
	},
   methods:{
   	   getdata(val){
           this.picdata = [
     {
		"src":"http://www.axhu.cn/upload/2014/11/219333532.JPG",
		'w':600,
        'h':400
	},
	{
		"src":"http://s13.sinaimg.cn/middle/6abd33f6gbf9541de97fc&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://atth.jzb.com/forum/201304/02/100722ac0sb0sbzz5bawzq.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://s16.sinaimg.cn/mw690/003eeZgJzy6RvZ7M1zN3f&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://s6.sinaimg.cn/mw690/002wPovHty6EjTQp7QV45&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://photocdn.sohu.com/20130527/Img377184946.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://s4.sinaimg.cn/mw690/001ASO8Ngy6TmPV2JQn83&690",
		'w':600,
        'h':400
	},
	{
		"src":"http://www.etjbooks.com.cn/uploads/20130428163027211.jpg",
		'w':600,
        'h':400
	},
	{
		"src":"http://qnzz.youth.cn/wdqcwdt/cszz/201504/W020150422680066502956.jpg",
		'w':600,
        'h':400
	}
]
   	   },
        getpic(){
          //提示正在加载中
          Indicator.open('加载中...');

          let url = 'https://api.douban.com/v2/book/search?q=风景';
          this.$http.jsonp(url).then(res=>{
          	console.log("图片加载成功");
            let list = res.body.books;
            list.forEach((item)=>{
               this.imglist.push({
                'src':item.images.large,
                'w':600,
                'h':400
               });
            })
           console.log(this.imglist);
          //关闭正在加载中
           Indicator.close();
          },res=>{
             console.log("图片加载失败")
          })

        }
      }
}
</script>

<style scoped> 
input,select,option,textarea{outline: none;}
.pic_ul{
	padding-top:50px;
	padding-bottom:0px;
}
.pic_ul li{
	padding:10px 0 0 0;
	text-align:center;
}
.pic_ul li img{
	width:100%;
}
.search{
	height:32px;
	position:fixed;
	top:40px;
	left:0;
	width:100%;
}
.search{
	background:#d9d9d9;
	padding:8px 10px;
}
.pswp{
	top:40px;
}
</style>
