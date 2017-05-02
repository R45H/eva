/* Модалка размеров */
$prop.on('hidden.bs.modal', function() { // Фикс прыгающей шапки
	$body.removeClass($boHid);
});

$prop.on('show.bs.modal', function() { // Фикс прыгающей шапки
	if (hasScroll('Height')) {
		$body.addClass($boHid);
	}
});
/* ========== */
