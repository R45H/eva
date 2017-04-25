/* Слайдер карточки объекта */
$(".slider").slick({
	autoplay: true,
	dots: true,
	customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		// return '<a><img src="'+thumb+'"></a>';
		return '<a><div class="dots-mobile" style="background-image: url('+thumb+'); height: 100%; background-position: 74px -7px;"></div></a>';
	},

	responsive: [{
		breakpoint: 768,
		settings: {
			dots: true,
			arrows: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
/* ========== */

