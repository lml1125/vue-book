// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
localstorage操作js文件
*/
const key = 'goods';
//根据key获取localstorage中的数据
export function getItem(){
	return JSON.parse(localStorage.getItem(key) || '[]');
}
//向loca存数据
//obj的格式{goods:1,count:1}
export function setItem(obj){
	var arr= JSON.parse(localStorage.getItem(key) || '[]');
	arr.push(obj);
    localStorage.setItem(key,JSON.stringify(arr))
}