/* Боковое меню в шапке */
$sBtn.on('click', function() {
	if (window.innerWidth >= point) {
		$sInp.toggle(delay);
	} else {
		togSearch();
	}
});

$(window).on('resize', function() {
	if ($sMob.hasClass($sVis)) {

		if (window.innerWidth >= point) {
			hideSearch();
			$sInp.show();
		}
	}

	if ($sInp.is(':visible')) {

		if (window.innerWidth < point) {
			showSearch();
			$sInp.hide();
		}
	}
});
/* ========== */
