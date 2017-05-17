/* Табы размера */
$tabShorts.on('click', function() {
	var
		$this = $(this),
		active = 'selected';

	if (!$this.hasClass(active)) {
		$tabShorts.removeClass(active);
		$this.addClass(active);
	}
});
/* ========== */
