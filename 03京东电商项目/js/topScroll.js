//控制顶部搜索栏的显示与隐藏

window.onscroll = function(){
	console.log('页面滚动啦---');
	// 1.获取到滚动条滚动的距离
	var top =document.documentElement.scrollTop;
	console.log(top);
	// 2.获取到顶部的div class=nav
	var nav = document.getElementByClassName('nav')[0];
}