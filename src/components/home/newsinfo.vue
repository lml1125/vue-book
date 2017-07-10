<template>
<div class="newsinfo">
     <h5 class="newsinfo_title">尚斯博库中国文化周暨中国图书展在莫斯科开幕</h5>
     <p class="newsinfo_time">时间：2017-07-05</p>
     <div class="newsart">
       <p>经济日报莫斯科7月3日电 记者唐昊 赖毅报道：尚斯博库中国文化周暨中国主题图书展3日在莫斯科市中心的尚斯博库书店隆重开幕，俄罗斯联邦新闻出版与大众传媒署代表、中俄文化专家和读者代表50多人参加了开幕式。</p>

       <p>开幕式上，浙江出版联合集团与俄罗斯尚斯国际出版（集团）公司、莫斯科国立师范大学签署了共同建设汉、俄语翻译人才培训基地和联合编写出版汉、俄语教材的合作备忘录。</p>

       <P>当天，492种俄文版中国主题图书以及近万种中文版中国主题图书和中国文化类图书同时展出。</P>

        <P>浙江出版联合集团副总裁朱勇良说，融合与发展是鲜明的时代主题，尚斯博库书店凝聚了中俄两国出版人的共同愿望，已经成为莫斯科中俄文化交流的一个重要平台。借助图书这个桥梁，中俄出版文化领域将开展深入合作与交流。</P>

        <P>中国文化周期间，尚斯博库书店还将举办多场内容丰富的中俄文化交流活动以及新书的首发和推广活动。</P>
     </div>
 </div>
</template>

<script>
let ERR_OK = 0;
import { Indicator } from 'mint-ui';
export default{
	data(){
		return{
			listdata : [],
			flag:false
		}
	},
	
	created(){
		this.getData();
	},
    methods:{
        getData(){
        	//提示正在加载中
          Indicator.open('加载中...');

        	this.$http.get('/api/newsfresh').then((res)=>{
              console.log("新鲜事加载成功");
              this.listdata = res.body.newsfresh
              //关闭正在加载中
                Indicator.close();
             
        	},(res)=>{
              console.log("新鲜事加载失败");
        	})
        }
    } 
}
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/

.newsinfo_title{
	font-size:16px; text-align:center;
	line-height:30px;
	padding:0 10px;
}
.newsinfo_time{
	border-bottom:1px solid #ddd;
	padding:10px 0;
	text-align:center;
}
.newsart{
	padding:0 10px;
}

.newsart p{
  line-height:25px;
  padding:10px 0;
  text-indent: 24px;
}
</style>
