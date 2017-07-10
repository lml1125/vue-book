<template>
     <ul class="newfresh_box">
       <li v-for="item in listdata"> 
         <router-link v-bind='{to:"/newsinfo/"+item.infoId}'>
          <dl>
            <dt><img :src="item.imageUrl" /></dt>
            <dd> 
               <h6>{{item.title}}</h6>
               <p>{{item.time}}</p>
            </dd>
          </dl>
          </router-link>
       </li>
     </ul>
</template>

<script>
let ERR_OK = 0;
import { Indicator ,Loadmore} from 'mint-ui';
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
        },
    } 
}
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/

.newfresh_box li{

	padding:10px;
	border-bottom:1px solid #ddd;
}
.newfresh_box li dl{
	overflow:hidden;
}
.newfresh_box li dt{
	width:30%;
	float:left
}
.newfresh_box li dt img{
	width:100%;
	overflow:hidden;
}
.newfresh_box li dd{
	width:65%;float:right;
}
.newfresh_box li dd h6{
	font-size:16px;
	padding:5px 0;
}
.newfresh_box li dd p{
	text-align:right;
	line-height:22px;
}
</style>
