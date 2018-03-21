;(function () {

	// Full height
	var fullHeight = function() {
			$('.js-full-height').css('height', $(window).height());
			$(window).resize(function(){
			$('.js-full-height').css('height', $(window).height());
			});
	};


    //移动端动态添加下拉列表的最后两项
    if($(document).width() < (768)){
    	$('.fh5co-nav-style .fh5co-link-wrap ul li').removeClass("hidden");
    	$('.navbar-default').css('position','fixed').css('background','rgba(0,0,0,.8)');
    }

    
	// Scroll Next，首屏继续往下浏览特效
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();
			$('html, body').animate(
			{scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top},
			1000,
			'easeInOutExpo');
			return false;
		});
	};

//toTop
function toTop() {      
var obtn = document.getElementById('toTop');  //获取id名为toTop的元素
var clientHeight = document.documentElement.clientHeight;//获取页面可视区的高度
var timer = null;    //定义一个空变量
window.onscroll = function(){         //滚动条滚动时触发
var osTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (osTop >= clientHeight){        //当距离顶部高度大于可视区时
   obtn.style.display = 'block';      //按钮显示
  }else{
   obtn.style.display = 'none';        //否则按钮隐藏+
  }
};
};

	// Document on load.
	$(function(){
		fullHeight();
		ScrollNext();
		toTop();
	});
}());