/* Табы размера */
$tabSize.on('click', function() {
	var
		$this = $(this),
		active = 'selected';

	if ($this.hasClass(active)) {
		$this.removeClass(active);
	} else {
		$tabSize.removeClass(active);
		$this.addClass(active);
	}
});
/* ========== */
