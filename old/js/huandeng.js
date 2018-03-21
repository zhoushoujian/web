// JavaScript Document
    $("#pics img:nth-child(2)").css("display","none");
	 $("#pics img:nth-child(3)").css("display","none");
	  $("#pics img:nth-child(4)").css("display","none");
	   $("#pics img:nth-child(5)").css("display","none");
	      var i =1 ;
		 setInterval(function(){	 
			   switch(i){
	  case 1:
	  $("#pics img:nth-child(1)").css("display","none");
	  $("#pics img:nth-child(2)").fadeIn();
	  $('#intro').html('<a href="http://www.zhoushoujian.com/xiangce/xuexiao/sanjiang1.html" target="_blank">2.三江学院</a>');
	  $('#links').attr('href','http://www.zhoushoujian.com/xiangce/xuexiao/sanjiang1.html');
	  $('#pics ul li:nth(0)').attr('class','');
	  $('#pics ul li:nth(1)').attr('class','active');
	  break;
	  	  case 2:
	  $("#pics img:nth-child(2)").css("display","none");
	  $("#pics img:nth-child(3)").fadeIn();
	  $('#intro').html('<a href="http://www.zhoushoujian.com/xiangce/nanjingxiangce/qixiashan/index.html" target="_blank">3.南京栖霞山</a>');
	  $('#links').attr('href','http://www.zhoushoujian.com/xiangce/nanjingxiangce/qixiashan/index.html');
	  $('#pics ul li:nth(1)').removeAttr('class');
	  $('#pics ul li:nth(2)').attr('class','active');
	  break;
	  	  case 3:
	  $("#pics img:nth-child(3)").css("display","none");
	  $("#pics img:nth-child(4)").fadeIn();
	  $('#intro').html('<a href="http://www.zhoushoujian.com/xiangce/shengneixiangce/suzhou/index.html" target="_blank">4.苏州园林</a>');
	  $('#links').attr('href','http://www.zhoushoujian.com/xiangce/shengneixiangce/suzhou/index.html');
	  $('#pics ul li:nth(2)').removeAttr('class');
	  $('#pics ul li:nth(3)').attr('class','active');
	  break;
	  	  case 4:
	  $("#pics img:nth-child(4)").css("display","none");
	  $("#pics img:nth-child(5)").fadeIn();
	  $('#intro').html('<a href="http://www.zhoushoujian.com/xiangce/shengwaixiangce/qingdao/index.html" target="_blank">5.山东青岛</a>');
	  $('#links').attr('href','http://www.zhoushoujian.com/xiangce/shengwaixiangce/qingdao/index.html');
	  $('#pics ul li:nth(3)').removeAttr('class');
	  $('#pics ul li:nth(4)').attr('class','active');
	  break;
	  	  case 5:
	  $("#pics img:nth-child(5)").css("display","none");
	  $("#pics img:nth-child(1)").fadeIn();
	  $('#intro').html('<a href="http://www.zhoushoujian.com/xiangce/jiaxiang/index.html" target="_blank">1.家乡大伊山</a>');
	  $('#links').attr('href','http://www.zhoushoujian.com/xiangce/jiaxiang/index.html');
	  $('#pics ul li:nth(4)').removeAttr('class');
	  $('#pics ul li:nth(0)').attr('class','active');
	  break;
	  	  default:
	   i=0;
	  break;
	  }
			i++;
			 //3秒执行一次
		 },3000)