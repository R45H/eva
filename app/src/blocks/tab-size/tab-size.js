/* Табы размера */
$tabSize.on('click', function() {
	var
		$this = $(this),
		active = 'selected';

	if (!$this.hasClass(active)) {
		$tabSize.removeClass(active);
		$this.addClass(active);
	}
});
/* ========== */
