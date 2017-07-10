<template>
<div class="main">
   <h2 class="art_title">{{artData.title}}</h2>
   <div class="art_date">
    作者：{{artData.author}}
    价格：{{artData.price}}
   </div>

   <div class="art_img">
   <img class="preview-img" v-for="(item, index) in imglist" :src="artData.image" height="100" @click="$preview.open(index, list)">
   </div>

   <div class="art_con">
    {{artData.summary}}
   </div>
   <v-pinglun></v-pinglun>
 </div>

</template>

<script>
import { Indicator } from 'mint-ui';
import pinglun from './pinglun.vue'
export default{
    data(){
       return{
         artData:{},
         imglist:[]
       }
    },
    components:{
       'v-pinglun':pinglun
    },
    created(){
      this.getart();
      this.getimg();
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
         
      }
      
    }
} 
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.art_title{
  font-size:16px;
  text-align: center;
  line-height: 20px;
  color:blue;
}
.art_date{
  text-align: center;
  padding:10px 0;
  border-bottom:1px solid #ddd;
}
.art_img{
  padding:10px;
}
.art_con{
  padding:10px;
  line-height: 20px
}
</style>
