// success story
var successStorySlider = new Swiper(".successStorySlider", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});


// Campaign slider
var campaignSlider = new Swiper(".campaignSlider", {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      640: {
      slidesPerView: 1,
      spaceBetween: 20,
      },
      767: {
      slidesPerView: 3,
      spaceBetween: 20,
      },
      1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      },
  }
});
