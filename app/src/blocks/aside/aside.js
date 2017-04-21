/* Боковое меню */
$(function() {
	var
		$aside = $('.aside'), // Боковое меню
		$list = $('.aside__list'), // Внутренний контейнер
		$toggle = $('.toggle'), // Гамбургер
		$fog = $('.aside__fog'), // Затемнение
		$point = 768; // Брейкпоинт на мобильную версию

	/* Клик по гамбургеру в шапке */
	$toggle.on('click', function() {
		if (window.innerWidth >= $point) return;
		togAside();
	});
	/* ========== */

	/* Клик вне гамбургера */
		$fog.on('click', function() {
			hideAside();
		});
	/* ========== */

	/* Инициализация кастомного скролла */
	$list.perfectScrollbar();
	/* ========== */

	/* Ресайз */
	$(window).on('resize', function() {
		$list.perfectScrollbar('update');

		if (window.innerWidth >= $point) {
			hideAside();
		}
	});
	/* ========== */

	/* Отключение скролла страницы пока курсор на меню */
	$aside.on('mousewheel', function(e) {
		e.preventDefault();
	});
	/* ========== */

	/* ФУНКЦИИ */

	// Показать / скрыть меню
	function togAside() {
		$aside.toggleClass('aside_visible');
		$toggle.toggleClass('toggle_active');
		$('body').toggleClass('blocked');
		$fog.fadeToggle(delay);
	}

	// Скрыть меню
	function hideAside() {
		$toggle.removeClass('toggle_active');
		$aside.removeClass('aside_visible');
		$('body').removeClass('blocked');
		$fog.fadeOut(delay);
	}

	/* ========== */
});
/* ========== */
