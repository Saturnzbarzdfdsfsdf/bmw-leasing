const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  // effect: "fade",
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: {
		delay: 3000,
		pauseOnMouseEnter: true,
	},
})

