/* Проверка на ввод только цифр у полей ввода типа number */
$num.on('input', function() { // Обработка вводимых данных
	var
		$this = $(this),
		val = +parseInt($this.val());

	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}

	if (+parseInt(this.value.charAt(0)) == 0) {
		this.value = this.value.slice(1);
	}

	if (!val) {
		$this.val('0');
	}
});

$nBtn.on('click', function() { // Обработка кнопок + и -
	var
		$this = $(this),
		$inp = $this.parent().find('.num__input'),
		val = +parseInt($inp.val());

	if ($this.hasClass('num__btn_pos')) {
		$inp.val(val + 1);
	} else {
		if (val != 0) {
			$inp.val(val - 1);
		}
	}
});
/* ========== */
