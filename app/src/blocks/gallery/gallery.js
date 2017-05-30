/* Слайдер карточки объекта */
$slider.slick({
	autoplay: false,
	dots: true,
	customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		return '<img class="gallery__thumb" src="' + thumb + '">';
	},

	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false
		}
	}]
});

if (window.innerWidth > point) {

	$('.gallery__img').imagezoomsl({
		magnifycursor: 'url(../img/loop.png) 12 12, auto',
		zoomrange: [1, 5],
		magnifiereffectanimate: 'fadeIn',
		innerzoom: true
	});
}
/* ========== */
