<template>
 <div class="ratingselect">
   <div class="rating-type">
     <span class="block positive" :class="{'active':selectType ===2}">{{desc.all}}<span class="count">47</span></span>
     <span class="block positive" :class="{'active':selectType ===0}">{{desc.positive}}<span class="count">40</span></span>
     <span class="block megative" :class="{'active':selectType ===1}">{{desc.negative}}<span class="count">7</span></span>
   </div>

   <div class="switch">
     <span class=""><input type="checkbox" /></span>
     <span class="text">只看有内容的评价</span>
     <span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span><span class="text">只看有内容的评价</span>
   </div>
 </div>
</template>

<script>
 const POSITIVE = 0;
 const NEGATIVE = 1;
 const ALL = 2;
  export default{
       props:{
       	ratings:{
       		 type:Array,
           default() {
            return [];
           }
       	},
        selectType:{
            type:Number,
            default:ALL
        },
        onlyContent:{
          type:Boolean,
          default:false
        },
        desc:{
          type:Object,
          default() {
            return {
              all:'全部',
              positive:'满意',
              negative:'不满意'
            }
          }
        }
       }
  }
</script>
<style>
.rating-type{
  padding:18px 0;
  margin:0 18px;
  font-size:0;
  border-bottom:1px solid #000;
}
.block{
  display:inline-block;
  padding:8px 12px;
  margin-right:8px;
  border-radius:1px;
  font-size:12px;
  color:rgb(77,85,93);
}
.count{
  font-size:8px;
  line-height:16px;
  margin-left:2px;
}
.positive{
  background: rgba(0,160,220,0.2)
}
.megative{
   background: rgba(77,85,93,0.2)
}
.active{
  background: rgba(0,160,220,1);
  color:#fff;
}
</style>
