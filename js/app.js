window.addEventListener("DOMContentLoaded", () => {

	//ПРОВЕРКА НА МОБ. УСТ.

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		document.body.classList.add('mobile');
	} else {
		document.body.classList.add('pc');
	}

	window.addEventListener("load", () => {
		const body = document.body;

		//SLIDER-MAIN

		function slider() {
			function swiperMain() {
				const mainSwiper = document.querySelector('.swiper');

				const mainSlider = new Swiper(mainSwiper, {
					direction: 'vertical',

					mousewheel: {},

					speed: 1000,

					keyboard: {
						enabled: true,
						pageUpDown: true,
						onlyInViewport: true,
					},

					simulateTouch: false,
				});
			}

			function swiperProduct() {
				const swiper2 = document.querySelector('.swiper-2');

				const sliderProduct = new Swiper(swiper2, {
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},

					loop: true,

					autoplay: {
						delay: 1000,
						disableOnInteraction: true,
					},

					speed: 2000,

					keyboard: {
						enabled: true,
						pageUpDown: true,
						onlyInViewport: true,
					},

					nested: true,

					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						380: {
							slidesPerView: 2,

						},
						800: {
							slidesPerView: 3,

						}
					},

					spaceBetween: 30,
				});
			}
			swiperProduct();

			if (isMobile.any()) {
				document.body.classList.add('mobile');

				const swiper = document.querySelector('.swiper'),
					swiperWrapper = document.querySelector('.swiper-wrapper');

				swiper.style.overflow = 'auto';
				swiperWrapper.style.display = 'block';
			} else {
				document.body.classList.add('pc');
				swiperMain();
			}

		}
		slider();

		//HAMBURGER

		const navList = document.querySelector('.header__nav-list-hamb'),
			hamburgerWrap = document.querySelector('.navigation__hamburger'),
			back = document.querySelector('.back');

		function hamburger(active, hamburger, closeBack) {
			document.addEventListener('click', e => {
				const target = e.target;

				if (target.closest(hamburger)) {
					navList.classList.toggle(active);
					hamburgerWrap.classList.toggle(active);
					back.classList.toggle(active);
				} else if (target.closest(closeBack)) {
					navList.classList.remove(active);
					hamburgerWrap.classList.remove(active);
					back.classList.remove(active);
				}
			});
		}

		hamburger('active', '.navigation__hamburger', '.back');

		body.classList.add('loaded');
	});
});
