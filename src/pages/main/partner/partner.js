const slider = new Swiper('.partner__slider', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.partner .swiper-button-next',
    prevEl: '.partner .swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 6
    }
  },
});
