// JavaScript Document
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function () {
	$('.num').eq(0).find('p').stop().animate({ 'top': '50%' }, 500)
}, 500);

$(function () {
	$('.num_box').mousewheel(function (event, delta) {
		var aaaa = $('.ddw2').val();
		if (aaaa == 1) {
			return;
		}
		qpgd(delta);
	});
});
function qpgd(a) {
	var z = $('.ddw').val();
	b = parseInt(z);
	c = $('.num').length;
	if (a < 0) {
		if (-b == c - 1) {
			return;
		}
		b -= 1;
		$('.ddw2').val(1);
	} else if (a > 0) {
		if (-b == 0) {
			return;
		}
		b += 1;
		$('.ddw2').val(1);
	}
	if (-b == 0) {
		$('.num').eq(1).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(0).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 1) {
		$('.num').eq(0).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(2).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(1).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 2) {
		$('.num').eq(1).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(3).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(2).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 3) {
		$('.num').eq(2).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(4).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(3).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 4) {
		$('.num').eq(3).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(5).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(4).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 5) {
		$('.num').eq(4).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(6).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(5).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 6) {
		$('.num').eq(5).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(7).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(6).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 7) {
		$('.num').eq(6).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(8).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(7).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 8) {
		$('.num').eq(7).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(9).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(8).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 9) {
		$('.num').eq(8).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(10).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(9).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 10) {
		$('.num').eq(9).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(11).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(10).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 11) {
		$('.num').eq(10).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(12).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(11).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 12) {
		$('.num').eq(11).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(13).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(12).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 13) {
		$('.num').eq(12).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(14).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(13).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 14) {
		$('.num').eq(13).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(15).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(14).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 15) {
		$('.num').eq(14).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(16).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(15).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 16) {
		$('.num').eq(15).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(17).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(16).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 17) {
		$('.num').eq(16).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(18).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(17).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 18) {
		$('.num').eq(17).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(19).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(18).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 19) {
		$('.num').eq(18).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(20).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(19).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 20) {
		$('.num').eq(19).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(21).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(20).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 21) {
		$('.num').eq(20).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(22).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(21).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 22) {
		$('.num').eq(21).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(23).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(22).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (-b == 23) {
		$('.num').eq(22).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(24).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(23).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}

	$('.ddw').val(b);
	$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
	var single_hh = $(window).height();
	click_hh = -single_hh * b;
	$('.num_box').animate({ 'bottom': click_hh }, 1000);
	setTimeout(function () {
		$('.ddw2').val(0);
	}, 1400);
}
$('.fixed_r li').eq(0).addClass('on');
$('.fixed_r li').click(function () {
	var b = $(this).index();
	$(this).addClass('on').siblings('li').removeClass('on');
	$('.ddw').val(-b);

	/*---------------------*/
	if (b == 0) {
		$('.num').eq(1).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(0).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (b == 1) {
		$('.num').eq(0).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(2).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(1).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (b == 2) {
		$('.num').eq(1).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(3).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(2).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (b == 3) {
		$('.num').eq(2).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(4).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(3).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 4) {
		$('.num').eq(3).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(5).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(4).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 5) {
		$('.num').eq(4).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(5).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 6) {
		$('.num').eq(5).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(7).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(6).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 7) {
		$('.num').eq(6).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(8).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(7).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 8) {
		$('.num').eq(7).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(9).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(8).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 9) {
		$('.num').eq(8).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(10).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(9).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 10) {
		$('.num').eq(9).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(11).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(10).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 11) {
		$('.num').eq(10).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(12).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(11).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 12) {
		$('.num').eq(11).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(13).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(12).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (b == 13) {
		$('.num').eq(12).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(14).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(13).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	} else if (b == 14) {
		$('.num').eq(13).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(15).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(14).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 15) {
		$('.num').eq(14).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(16).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(15).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 16) {
		$('.num').eq(15).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(17).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(16).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 17) {
		$('.num').eq(16).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(18).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(17).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 18) {
		$('.num').eq(17).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(19).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(18).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 19) {
		$('.num').eq(18).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(20).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(19).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 20) {
		$('.num').eq(19).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(21).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(20).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 21) {
		$('.num').eq(20).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(22).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(21).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 22) {
		$('.num').eq(21).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(23).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(22).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}
	else if (b == 23) {
		$('.num').eq(22).find('p').animate({ 'top': '0' }, 500);
		$('.num').eq(24).find('p').animate({ 'top': '0' }, 500);
		setTimeout(function () {
			$('.num').eq(23).find('p').animate({ 'top': '50%' }, 500);
		}, 1600);
	}

	/*---------------------*/

	var single_hh = $(window).height();
	click_hh = single_hh * b;
	$('.num_box').animate({ 'bottom': click_hh }, 1000);
})
//背景图片全屏显示
function quanp() {
	var single_hh = $(window).height();
	var single_ww = $(window).width();
	$('.num').height(single_hh);
	$('.num').width(single_ww);
}
quanp();
//窗口大小改变时自动刷新
$(window).resize(function () {
	if (typeof indexSlides != 'undefined' && indexSlides.reformat)
		indexSlides.reformat();
	quanp();
});