/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров

//Программы
if (document.querySelector('.programs__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var programSlider = null;
	var mediaQuerySize = 1310;

	function catalogSliderInit() {
		if (!programSlider) {
			programSlider = new Swiper('.programs__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				speed: 800,
				preloadImages: true,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.programs__arrow-prev',
					nextEl: '.programs__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 1.5,
					},
					767.98: {
						slidesPerView: 2,
					},
					991.98: {
						slidesPerView: 2.5,
					},
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (programSlider) {
			programSlider.destroy();
			programSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});
};

//Уровни обучения
if (document.querySelector('.learning-levels__sliders')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	const thumbsSwiper = new Swiper('.learning-levels__thumbs', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 12,
		autoHeight: false,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.learning-levels__arrow-prev',
			nextEl: '.learning-levels__arrow-next',
		},
	});
	const swiper = new Swiper('.learning-levels__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 2.3,
		spaceBetween: 20,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.learning-levels__arrow-prev',
			nextEl: '.learning-levels__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.5,
			},
			767.98: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 2.3,
			},
		},
	});
};

//Преподаватели
if (document.querySelector('.teachers__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.teachers__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 2.3,
		spaceBetween: 0,
		speed: 800,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.teachers__arrow-prev',
			nextEl: '.teachers__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.2,
			},
			767.98: {
				slidesPerView: 1.5,
			},
			991.98: {
				slidesPerView: 1.7,
			},
			1310: {
				slidesPerView: 2.3,
			},
		},
	});
};

