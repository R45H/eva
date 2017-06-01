/* Модалка обратной связи */
$contact.on('shown.bs.modal', function() { // Фокус при открытии
	$(this).find('input[type="text"]:first').focus();
});

$contact.on('hidden.bs.modal', function() { // При закрытии модалки очищаются инпуты
	$(this)
		.find('.input')
		.val('');
	$body.removeClass($boHid);
});

$contact.on('show.bs.modal', function() { // Фикс прыгающей шапки
	if (hasScroll('Height')) {
		$body.addClass($boHid);
	}
});
/* ========== */
