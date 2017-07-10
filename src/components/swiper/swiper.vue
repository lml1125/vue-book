<template>
<div class="swipe">
     <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item,index) in imglist"> 
          <img class="swipeimg" :src="item.img" />
        </mt-swipe-item>
      </mt-swipe>
 </div>
</template>

<script>
export default{
  props:['imglist']
}
</script>

<style scoped> 
.mint-swipe {
    overflow: hidden;
    position: relative;
    height:176px;
  }
  .mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
  .mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
  }
  .mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
  }

  .swipeimg{
    width:100%;
  }
</style>
