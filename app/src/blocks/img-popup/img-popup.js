/* Галерея для изображений */
$('.img-popup').magnificPopup({
	type: 'image',
	delegate: '.shooting__i',
	gallery: {
		enabled: true
	},
	removalDelay: 150,
	fixedContentPos: false,
	mainClass: 'img-popup__fade'
});
/* ========== */
