/* Гамбургер */
var
	$tog = $('.toggle'), // Гамбургер
	togAc = 'toggle_active'; // Класс активного гамбургера

$tog.on('click', function() {
	$(this).toggleClass(togAc);
});
/* ========== */
