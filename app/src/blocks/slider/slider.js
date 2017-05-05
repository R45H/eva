/* Слайдер карточки объекта */
$slider.slick({
	autoplay: false,
	dots: true,
	customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		return '<div class="slider__thumb" style="background-image: url('+thumb+');"></div>';
	},

	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false
		}
	}]
});

$('.slider__img').imagezoomsl({
	magnifycursor: 'url(../img/loop.cur), auto',
	zoomrange: [1, 5],
	magnifiereffectanimate: 'fadeIn',
	innerzoom: true
});
/* ========== */
