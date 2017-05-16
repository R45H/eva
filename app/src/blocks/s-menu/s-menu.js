/* Боковое меню в шапке */
$sBtn.on('click', function() {
	if (window.innerWidth >= point) {
		$sInp.toggle(delay, function() {
			$sInp.focus();
		});
	} else {
		togSearch();
	}
	return false;
});

$(window).on('resize', function() {
	if ($sMob.hasClass($sVis)) {

		if (window.innerWidth >= point) {
			hideSearch();
			$sInp
				.show()
				.focus();
		}
	}

	if ($sInp.is(':visible')) {

		if (window.innerWidth < point) {
			showSearch();
			$sInp.hide();
		}
	}
});

$(document).on('click', function(e) { // Скрытие десктопного меню при клике вне шапки
	if (!$(e.target).parents('.header').length) {
		$sInp.hide(delay);
	}
});
/* ========== */
