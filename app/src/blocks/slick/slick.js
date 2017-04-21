$('.slider-for').slick({
	slidesToShow: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slick-element'

});

$('.slick-element').slick({
	slidesToShow: 2,
	asNavFor: '.slider-for',
	centerMode: true,
	focusOnSelect: true,
	arrows: false,
	variableWidth: true
});