/* Модалка входа */
$sign.on('shown.bs.modal', function() { // Фокус при открытии
	$(this).find('input[type="text"]:first').focus();
});

$sign.on('hidden.bs.modal', function() { // При закрытии модалки очищаются инпуты
	$(this)
		.find('input')
		.val('');
});
/* ========== */
