/* ПЕРЕМЕННЫЕ */
var
	point = 768, // Брейкпоинт на мобильную версию
	$body = $('body'), // Боди
	$boHid = 'blocked', // Класс, блокирующий боди
	$header = $('.header'), // Шапка
	$hAhead = ('header_ahead'), // Класс шапки, дающий повышенный z-index
	$fog = $('.fog'), // Затемнение
	$aside = $('.aside'), // Боковое меню
	$asVis = 'aside_visible', // Класс, делающий боковое меню видимым
	$list = $('.aside__list'), // Внутренний контейнер бокового меню
	$toggle = $('.toggle'), // Гамбургер
	$sBtn = $('.header__right .s-menu__item_search .s-menu__link'), // Кнопка поиска
	$sInp = $sBtn.next(), // Поле ввода поиска
	$sMob = $('.search'), // Поиск в мобильной версии
	$sVis = 'search_visible', // Класс, делающий мобильный поиск видимым
	delay = 300; // Стандартная скорость анимации
/* ========== */

/* ФУНКЦИИ */

function togAside() { // Показать / скрыть боковое меню
	$aside.toggleClass($asVis);
	$body.toggleClass($boHid);
	$fog.fadeToggle(delay);
}

function hideAside() { // Скрыть боковое меню
	$aside.removeClass($asVis);
	$body.removeClass($boHid);
	$fog.fadeOut(delay);
}

function togSearch() { // Показать / скрыть поиск мобильной версии
	$sMob
		.toggleClass($sVis)
		.find('input')
		.focus();

	$body.toggleClass($boHid);
	$fog.fadeToggle(delay);

	if ($header.hasClass($hAhead)) {
		setTimeout(function() {
			$header.removeClass($hAhead);
		}, delay);
	} else {
		$header.addClass($hAhead);
	}
}

function showSearch() { // Показать поиск мобильной версии
	$sMob
		.addClass($sVis)
		.find('input')
		.focus();

	$body.addClass($boHid);
	$fog.fadeIn();
	$header.addClass($hAhead);
}

function hideSearch() { // Cкрыть поиск мобильной версии
	$sMob.removeClass($sVis);
	$body.removeClass($boHid);
	$fog.fadeOut(delay);

	setTimeout(function() {
		$header.removeClass($hAhead);
	}, delay);
}

/* ========== */
