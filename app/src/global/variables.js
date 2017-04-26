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
	delay = 300, // Стандартная скорость анимации
	$sign = $('#sign'), // Модалка входа
	$select = $('.select'), // Выпадающие списки
	$tabCol = $(".tab-color__item"), // Табы с цветами
	$tabSize = $(".tab-size__item"), // Табы с размерами
	$slider = $(".slider"); // Слайдер в карточке объекта
/* ========== */

/* ФУНКЦИИ */

function togAside() { // Показать / скрыть боковое меню
	$aside.toggleClass($asVis);
	$fog.fadeToggle(delay);

	if ($aside.hasClass($asVis)){
		if (hasScroll('Height')) {
			$body.addClass($boHid);
		}
	} else {
		$body.toggleClass($boHid);
	}
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

	$fog.fadeToggle(delay);

	if ($sMob.hasClass($sVis)){
		if (hasScroll('Height')) {
			$body.addClass($boHid);
		}
	} else {
		$body.toggleClass($boHid);
	}

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
	$fog.fadeIn();
	$header.addClass($hAhead);

	if (hasScroll('Height')) {
		$body.addClass($boHid);
	}
}

function hideSearch() { // Cкрыть поиск мобильной версии
	$sMob.removeClass($sVis);
	$body.removeClass($boHid);
	$fog.fadeOut(delay);

	setTimeout(function() {
		$header.removeClass($hAhead);
	}, delay);
}

function hasScroll(a) { // Проверка наличия скролла на странице
	var d = document,
		b = d.body,
		e = d.documentElement,
		c = "client" + a;
	a = "scroll" + a;
	return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
}

/* ========== */
