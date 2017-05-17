/* Слайдер */
$simpSlider.slick({
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button class="slider__prev"></button>',
	nextArrow: '<button class="slider__next"></button>',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
				autoplaySpeed: 10000
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay: true,
				autoplaySpeed: 10000
			}
		}
	]
});
/* ========== */
