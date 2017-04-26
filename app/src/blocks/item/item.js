/* Карточка объекта */
$iDesc //Вставляем описание под мобильную кнопку
	.clone()
	.insertAfter($iBtn)
	.removeClass('item__i item__desc')
	.addClass(iView);

$iBtn.on('click', function(e) { // Показываем при клике на кнопку
	e.preventDefault();
	$('.' + iView).slideToggle(delay);
	$(this).toggleClass(iBtnAct);
});

$(window).on('resize', function() { // Открытое описание сворачивается при ресайзе на десктоп
	if (window.innerWidth >= point) {
		$('.' + iView).slideUp(0);
		$iBtn.removeClass(iBtnAct);
	}
});
/* ========== */
