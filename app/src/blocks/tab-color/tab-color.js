/* Табы цвета */
$tabCol.on('click', function() {
	var
		$this = $(this),
		active = 'selected';

	if ($this.hasClass(active)) {
		$this.removeClass(active);
	} else {
		$tabCol.removeClass(active);
		$(this).addClass(active);
	}
});
/* ========== */
