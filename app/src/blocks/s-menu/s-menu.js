/* Боковое меню в шапке */
var
	$sBtn = $('.s-menu__item_search'), // Кнопка поиска
	$sInp = $('.s-menu__search'), // Поле ввода поиска
	delay = 300; // Скорость анимации

$sBtn.on('click', function() {
	$sInp.toggle(delay);
});
/* ========== */
