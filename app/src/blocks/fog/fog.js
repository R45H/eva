/* Клик по затемнённому документу */
$fog.on('click', function() {

	// Боковое меню
	if ($aside.hasClass($asVis)) {
		hideAside();
	}

	// Строка поиска
	if ($sMob.hasClass($sVis)) {
		hideSearch();
	}
});
/* ========== */
