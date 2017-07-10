<template>

  <div class="user_box">
      <div class="member">
			<div class="member-pic">
			  <img src="http://img3.imgtn.bdimg.com/it/u=3195984374,1081978747&fm=26&gp=0.jpg" />
			</div>
			<div class="member-infor">157****8547</div>

		<ul class="user_top">
		  <Li><span>1000</span><span>余额</span></Li>
		  <Li><span>1000</span><span>积分</span></Li>
		</ul>
	 </div>


		<ul class="member-nav">
			<li>
			<router-link  to='/user/userdd'>
			  <img src="/static/img/icon02.png" />
			  <span>我的订单</span>
			  <strong></strong>
			</router-link>
			</li>
			<li>
			<router-link  to='/user/addres'>
			   <img src="/static/img/icon02.png" />
			   <span>收货地址</span>
			   <strong></strong>
			</router-link>
			</li>
			<li>
			<router-link  to='/user/userxx'>
			   <img src="/static/img/icon07.png" />
			   <span>个人信息</span>
			   <strong></strong>
			</router-link>
			</li>
			
		</ul>

		<ul class="member-nav">
			<li><a href="tel:888888"><img src="/static/img/icon04.png" /><span>在线客服</span> <b>888888</b></a></li>
			<li><a href="#"><img src="/static/img/icon02.png" /><span>退出</span> <strong></strong></a></li>
		</ul>
  </div>

</template>

<script>
import {Indicator} from 'mint-ui';
export default{
	created(){
		//关闭正在加载中
         Indicator.close();
	}
}
</script>

<style scoped> 
/*scoped 作用通常是用在style上面，表示这个便签中的样式只在当前样式中生效*/
.user_box{
	background: #efefef
}
.member{ 
	background:url("/static/img/user_bg.png");
	text-align:center; 
	background-size: cover; 
	padding:10px 0;
	position:relative;
	height:150px;
}
.member-pic{
width:50px;
height:50px;
border-radius:50%;
background: #fff;
border:1px solid #ddd; 
margin:20px auto 10px auto
}
.member-infor{  color: #fff;}
.member-pic img{ width: 100%;border-radius:50%;}
.member-nav{ background: #fff;margin-top:20px; border-top:1px solid #ddd;}
.member-nav li{ border-bottom: 1px solid #ddd;line-height:30px;overflow: hidden;position:relative; padding:5px 10px;}
.member-nav li img{
	display:block;
	float: left;
	width:30px;
	vertical-align: middle;
}
.member-nav li a{ color: #333;}
.member-nav li strong{
	display:block;
	width:10px;
	height:10px;
	border-top:1px solid #999;
	border-right:1px solid #999;
	transform: rotate(45deg);
	position:absolute;
	top:15px;
	right:20px;
}
.member-nav li b{
	position:absolute;
	top:10px;
	right:10px;
}
.mt10{ margin-top: 10px;}
.member-nav i{ width: 20px; height: 20px; display: block; margin-left: 12px; float: left; margin-right: 15px; text-align: center;}
.member-nav span{ float: left; display: block;padding-left:5px;}

.user_top{
	height:50px;
	background:rgba(207, 126, 6,.3);
	position:absolute;
	bottom:0;
	left:0;
	width:100%;
}
.user_top li{
	padding-top:7px;
	float:left;
	width:50%;

}
.user_top li span{
	display:block;
	color:#fff;
}
.member-list{ background: #fff; margin:1rem 0; border-bottom: 1px solid #ddd; border-top: 1px solid #ddd;}
.member-list li{ border-bottom: 1px solid #ddd; padding: 1rem 0; margin: 0 1rem; overflow: hidden;}
.member-list li span{ color: #000; float: left; margin-left: 2%;}
.jianju{ height: 12px; background: #e8e8e8;}
.member-list li:last-child{ border: 0;}
.member-list li a { display: block; overflow: hidden; line-height: 31px;}
.member-list img {
    width: 30px;
    height: 31px;
    float: left;
}
.member-list .am-icon-angle-right{ float:right;}
</style>
