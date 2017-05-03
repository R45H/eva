/* Табы цвета */
$tabCol.on('click', function() {
	var
		$this = $(this),
		active = 'selected';

	if (!$this.hasClass(active)) {
		$tabCol.removeClass(active);
		$this.addClass(active);
	}
});
/* ========== */
