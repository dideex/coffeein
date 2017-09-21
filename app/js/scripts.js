/*$*$(document).ready(function(){
    $('#media .slick').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: 0,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
});*/
 
$(document).ready(function(){
    $('#franchisee .slick').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0,
        prevArrow: $('.slick-prev1'),
        nextArrow: $('.slick-next1')
    });
    $('#openings .openings-size .slick').slick({
        centerMode: true,
        slidesToShow: 4,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.slick-prev2'),
        nextArrow: $('.slick-next2')
    });
    $('#openings .openings-size-320 .slick').slick({
        centerMode: true,
        slidesToShow: 1,
				swipeToSlide: true,
    });
    $('#media .media-size .slick').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
    $('#media .media-size-320 .slick').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.openings-arrow-left3'),
        nextArrow: $('.openings-arrow-right3')
    });
    $('#mycoffeein .mycoffeein-size .slick').slick({
        centerMode: true,
        slidesToShow: 5,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.slick-prev3'),
        nextArrow: $('.slick-next3'),
				responsive: [{
												breakpoint: 1024,
												settings: {
													slidesToShow: 4
												}
											}]
    });
		$('.mycoffeein-size .mycoffeein-items').css('height', $('.mycoffeein-size .item').innerWidth() + 'px');
    $('#mycoffeein .mycoffeein-size-320 .slick').slick({
        centerMode: true,
        slidesToShow: 1,
				swipeToSlide: true,
    });
    $('#coffeein .slick').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.openings-arrow-left5'),
        nextArrow: $('.openings-arrow-right5')
    });
    $('#includes .slick').slick({
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0,
				swipeToSlide: true,
        prevArrow: $('.openings-arrow-left6'),
        nextArrow: $('.openings-arrow-right6')
    });
});
 
 
 
 
 
$(function() {
    function getResult(price, people) {
    //var result = $('.slider-price').slider('value') * $('.slider-people').slider('value') / 100;
    var result = price * people / 100;
    $('.result strong').text(result.toLocaleString('ru'));
  };
 
    $('.slider-price').slider({
    step: 1000,
    min: 10000,
    max: 100000,
    value: 50000,
		animate: 'fast',
    create: function() {
      var val = $(this).slider('value');
      $(this).find('.handle').text(val);
    },
    slide: function(event, ui) {
      $(this).find('.handle').text(ui.value);
      getResult(ui.value, $('.slider-people').slider('value'));
    }
  });
 $('.slider-price').draggable();
  $('.slider-people').slider({
    step: 1,
    min: 10,
    max: 500,
    value: 300,
		animate: 'fast',
    create: function() {
      var val = $(this).slider('value');
      $(this).find('.handle').text(val);
      getResult($('.slider-price').slider('value'), val);
    },
    slide: function(event, ui) {
      $(this).find('.handle').text(ui.value);
      getResult($('.slider-price').slider('value'), ui.value);
    }
  });
});
 

 
$(function(){
  $(".phone").mask("+7 (999) 999-9999");
});
 
 
 
$(window).on('mousemove', function(e) {
var w = $(window).width();
var h = $(window).height();
var offsetX = 0.5 - e.pageX / w;
var offsetY = 0.5 - e.pageY / h;
 
$(".beans").each(function(i, el) {
var offset = parseInt($(el).data('offset'));
var translate = "translate3d(" + Math.round(offsetX * offset) + "px, "+ Math.round(offsetY * (offset / 5)) +"px, 0px)";
 
$(el).css({
'-webkit-transform': translate,
'transform': translate,
'moz-transform': translate
});
});
});
 
 
 
var toggleMenu = function() {
  $('.burger-menu').toggleClass('active');
};
 
$('.burger').on('click', function () {
    toggleMenu();
});

$('.burger-menu a').on('click', () => {
	toggleMenu();
	$('.cmn-toggle-switch').removeClass('active');
});

$("body").on("click",'[href*="#"]',function(e){
			$("html,body").stop().animate({scrollTop:$(this.hash).offset().top},1e3),
			e.preventDefault()})
 
 
/*$(function () {
  $('button.show_popup1, button.show_popup2, button.show_popup3, button.show_popup4').click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;       
  }); 
  $('a.close').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
  });
});*/

function hide(el) {
	setTimeout(()=> el.fadeOut(500),5000);
}

// function checkPhone(el) {
// 	console.log($(el).val().length);
// 	if($(el).val().length === 17) {
// 		$('.accept-phone').fadeIn(500);
// 		hide($('.accept-phone'));
// 		$('.cross-phone').fadeOut(500);
// 		$('.in-phone').fadeOut(500);
// 	} else {
// 		$('.accept-phone').fadeOut(500);
// 		$('.cross-phone').fadeIn(500);
// 		$('.in-phone').fadeIn(500);
// 		hide($('.cross-phone'));
// 		hide($('.in-phone'));
// 	}
// };

function checkEmail(el) {
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(reg.test($(el).val())) {
		$('.accept-email').fadeIn(500);
		hide($('.accept-email'));
		$('.cross-email').fadeOut(500);
		$('.in-email').fadeOut(500);
	} else {
		$('.accept-email').fadeOut(500);
		$('.cross-email').fadeIn(500);
		$('.in-email').fadeIn(500);
		hide($('.cross-email'));
		hide($('.in-email'));
	}
};
 
function showModalWindow() {
		$('.incorrect').fadeOut(500);
		$('.cross').fadeOut(500);
    $('.popup5').fadeIn(500);
    $('body').append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    $('a.close').click(function (e) {
      e.preventDefault();
      $(this).parent().fadeOut(100);
      $('#overlay').remove('#overlay');
    });
}
 
 
function showErrWindow() {
		$('.incorrect').fadeIn(500);
		$('.cross').fadeIn(500);
		setTimeout(()=> $('.incorrect').fadeOut(500),3000);
		setTimeout(()=> $('.cross').fadeOut(500),3000);
//     $('.err_phone').fadeIn(500);
//     $('body').append("<div id='overlay'></div>");
//     $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
// 		setTimeout(()=> {
//         $('.err_phone').fadeOut(100);
//         $('#overlay').remove();
// 		}, 2000);
//     $('a.close').click(function (e) {
//         e.preventDefault();
//         $('.err_phone').fadeOut(100);
//         $('#overlay').remove();
//   });
}
 
 
$(function() {
  $('button.show_popup4, button.show_popup5').on('click', function() {
    var $this = $(this),
        $input = $this.parent().prev().find('input');
    if ($input.val().length != 17) {
      showErrWindow();
    } else {
      showModalWindow();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: {phone: $input.val()}
		});
    }
  });
});
 
 
 
 
$(function () {
  $('button.show_popup1, button.show_popup2, button.show_popup3, button.show_popup4-1').click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;       
  }); 
  $('a.close').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
  });
});
 

 
$(function () {
  $('button.show_popup6').click(function () {
		var $input = $(this).parent().prev().find('.phone');
		if($input.val().length === 17) {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: {phone: $input.val()}
		});
			$('.accept-phone').fadeIn(500);
			setTimeout(()=>$('.accept-phone').fadeOut(500), 3000)
			$('.cross').fadeOut(500);
		// $('#pop6').fadeIn(500);
		setTimeout(()=>{
			// $('#pop6').fadeOut(500);
			$('.popup').fadeOut(1000);
			$('#overlay').fadeOut(1000);
		}, 1500);

} else {
			$('.in-phone').fadeIn(500);
			$('.cross').fadeIn(500);
		setTimeout(()=>{

			$('.in-phone').fadeOut(500);
		}, 3300);
}
    $("body").append("<div id='overlay'></div>");
    return false;
  }
);

 $('button.show_popup7').click(function () {
		var $input = $(this).parent().prev().prev().find('.phone');
		if($input.val().length === 17) {
			$('.accept-phone').fadeIn(500);
			setTimeout(()=>$('.accept-phone').fadeOut(500), 3000)
			$('.cross-phone').fadeOut(500);
			var email = $(this).parent().prev().find('input');
				$.ajax({
				type: "POST",
				url: "mail.php",
				data: {phone: $input.val(), mail: $email}
				});
			$('#pop6').fadeIn(500);
			setTimeout(()=>{
			$('#pop6').fadeOut(500);
			$('.popup').fadeOut(1000);
			$('#overlay').fadeOut(1000);
			}, 1500);
} else {
			$('.in-phone').fadeIn(500);
			$('.cross-phone').fadeIn(500);
		// $('#pop7').fadeIn(500);
			setTimeout(()=>{
			$('.in-phone').fadeOut(500);
			}, 3000);	
}
    $("body").append("<div id='overlay'></div>");
    return false;
  }
);

 $('button.show_popup8').click(function () {
		var $input = $(this).parent().prev().prev().prev().find('.phone');
		if($input.val().length === 17) {
			$('.accept-phone').fadeIn(500);
			setTimeout(()=>$('.accept-phone').fadeOut(500), 3000)
			$('.cross-phone').fadeOut(500);
		var email = $(this).parent().prev().prev().find('input'),
				message = $(this).parent().prev().find('textarea');
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: {phone: $input.val(), email: email, message: message}
		});
		$('#pop6').fadeIn(500);
		setTimeout(()=>{
			$('#pop6').fadeOut(500);
			$('.popup').fadeOut(1000);
			$('#overlay').fadeOut(1000);
		}, 1500);
} else {
			$('.in-phone').fadeIn(500);
			$('.cross-phone').fadeIn(500);
		// $('#pop7').fadeIn(500);
		setTimeout(()=>{
			$('.in-phone').fadeOut(500);
			// $('#pop7').fadeOut(500);
		}, 2000);	
}
    $("body").append("<div id='overlay'></div>");
    return false;
  }
);
});
 
 
 
 
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();

























