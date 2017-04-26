/* Боковое меню */

/* Клик по гамбургеру в шапке */
$toggle.on('click', function() {
	if (window.innerWidth >= point) return;

	if ($sMob.hasClass($sVis)) {
		hideSearch();
	}
	togAside();
});
/* ========== */

/* Инициализация кастомного скролла */
$list.perfectScrollbar();
/* ========== */

/* Ресайз */
$(window).on('resize', function() {
	$list.perfectScrollbar('update');

	if (window.innerWidth >= point) {
		hideAside();
	}
});
/* ========== */

/* ========== */
