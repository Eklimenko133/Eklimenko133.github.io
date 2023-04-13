$(document).ready(function () {
	$('.blog__slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="prev"><img src="img/icon/left.svg"></button>',
		nextArrow: '<button type="button" class="next"><img src="img/icon/right.svg"></button>',
	});
});

$(document).ready(function () {
	$('.footer__item-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});


