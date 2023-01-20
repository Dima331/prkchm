/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
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
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.provocation__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.provocation__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.provocation__pagination',
				// clickable: true,
				type: "fraction",
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.provocation__prev',
				nextEl: '.provocation__next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.portfolio__slider_one')) {

		new Swiper('.portfolio__slider_one', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 8,
			loop: true,
			loopedSlides: "3",

			pagination: {
				el: '.portfolio__pagination_one',
				type: "fraction",
			},

			navigation: {
				prevEl: '.portfolio__prev_one',
				nextEl: '.portfolio__next_one',
			},
			breakpoints: {
				830: {
					spaceBetween: 25,
				},
			},
		});
	}
	if (document.querySelector('.portfolio__slider_two')) {

		new Swiper('.portfolio__slider_two', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 8,
			loop: true,
			loopedSlides: "3",

			pagination: {
				el: '.portfolio__pagination_two',
				type: "fraction",
			},

			navigation: {
				prevEl: '.portfolio__prev_two',
				nextEl: '.portfolio__next_two',
			},
			breakpoints: {
				830: {
					spaceBetween: 25,
				},
			},
		});
	}
	if (document.querySelector('.portfolio__slider_three')) {

		new Swiper('.portfolio__slider_three', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 8,
			loop: true,
			loopedSlides: "3",

			pagination: {
				el: '.portfolio__pagination_three',
				type: "fraction",
			},

			navigation: {
				prevEl: '.portfolio__prev_three',
				nextEl: '.portfolio__next_three',
			},
			breakpoints: {
				830: {
					spaceBetween: 25,
				},
			},
		});
	}
	if (document.querySelector('.portfolio__slider_four')) {

		new Swiper('.portfolio__slider_four', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 8,
			loop: true,
			loopedSlides: "3",

			pagination: {
				el: '.portfolio__pagination_four',
				type: "fraction",
			},

			navigation: {
				prevEl: '.portfolio__prev_four',
				nextEl: '.portfolio__next_four',
			},
			breakpoints: {
				830: {
					spaceBetween: 25,
				},
			},
		});
	}
	if (document.querySelector('.portfolio__slider_five')) {

		new Swiper('.portfolio__slider_five', {

			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 8,
			loop: true,
			loopedSlides: "3",

			pagination: {
				el: '.portfolio__pagination_five',
				type: "fraction",
			},

			navigation: {
				prevEl: '.portfolio__prev_five',
				nextEl: '.portfolio__next_five',
			},
			breakpoints: {
				830: {
					spaceBetween: 25,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});