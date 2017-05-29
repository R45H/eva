/* Обработка сертификата */
$cSum.focus();

$cSum.on('input', function() {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}
});
/* ========== */
